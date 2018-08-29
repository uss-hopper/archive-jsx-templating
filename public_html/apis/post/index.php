<?php
require_once (dirname(__DIR__, 3) . "/php/interfaces/autoload.php");
require_once (dirname(__DIR__, 3) . "/php/lib/xsrf.php");
require_once ("/etc/apache2/capstone-mysql/encrypted-config.php");
use Edu\Cnm\Ng4Demo\Post;
/**
 * API for Post class
 *
 * GET, PUT, POST, DELETE requests are supported.
 *
 * @author Rochelle Lewis <rlewis37@cnm.edu>
 **/
//check the session status. If it is not active, start the session.
if(session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
/**
 * Prepare an empty reply.
 *
 * Here we create a new stdClass named $reply. A stdClass is basically an empty bucket that we can use to store things in.
 *
 * We will use this object named $reply to store the results of the call to our API. The status 200 line adds a state variable to $reply called status and initializes it with the integer 200 (success code). The proceeding line adds a state variable to $reply called data. This is where the result of the API call will be stored. We will also update $reply->message as we proceed through the API.
 **/
$reply = new stdClass();
$reply->status = 200;
$reply->data = null;
try {
	//grab the database connection
	$pdo = connectToEncryptedMySQL("/etc/apache2/capstone-mysql/ng4demo.ini");
	//determine which HTTP method, store the result in $method
	$method = array_key_exists("HTTP_X_HTTP_METHOD", $_SERVER) ? $_SERVER["HTTP_X_HTTP_METHOD"] : $_SERVER["REQUEST_METHOD"];
	//sanitize and store input
	$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
	$postContent = filter_input(INPUT_GET, "postContent", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
	$postSunriseDate = filter_input(INPUT_GET, "postSunriseDate", FILTER_VALIDATE_INT);
	$postSunsetDate = filter_input(INPUT_GET, "postSunsetDate", FILTER_VALIDATE_INT);
	$postTitle = filter_input(INPUT_GET, "postTitle", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
	//if sunrise and sunset are available for date range search, format them
	/*if(empty($postSunriseDate) === false && empty($postSunsetDate) === false) {
		$postSunriseDate = \DateTime::createFromFormat("U", $postSunriseDate / 1000);
		$postSunsetDate = \DateTime::createFromFormat("U", $postSunsetDate / 1000);
	}*/
	//begin if blocks for the allowed HTTP requests
	if($method === "GET") {
		setXsrfCookie();
		if(empty($id) === false) {
			$post = Post::getPostByPostId($pdo, $id);
			if($post !== null) {
				$reply->data = $post;
			}
		} elseif(empty($postContent) === false) {
			$posts = Post::getPostsByPostContent($pdo, $postContent)->toArray();
			if($posts !== null) {
				$reply->data = $posts;
			}
		} elseif(empty($postSunriseDate) === false && empty($postSunsetDate) === false) {
			$posts = Post::getPostsByPostDateRange($pdo, $postSunriseDate, $postSunsetDate)->toArray();
			if($posts !== null) {
				$reply->data = $posts;
			}
		} elseif(empty($postTitle) === false) {
			$posts = Post::getPostsByPostTitle($pdo, $postTitle)->toArray();
			if($posts !== null) {
				$reply->data = $posts;
			}
		} else {
			$posts = Post::getAllPosts($pdo)->toArray();
			if($posts !== null) {
				$reply->data = $posts;
			}
		}
	} elseif($method === "POST") {
		//check xsrf token
		verifyXsrf();
		//grab request content, decode json into a php object
		$requestContent = file_get_contents("php://input");
		$requestObject = json_decode($requestContent);
		//make sure there is post content (required field)
		if(empty($requestObject->postContent) === true) {
			throw (new \InvalidArgumentException("No post content.", 405));
		}
		//make sure there is a post title (required field)
		if(empty($requestObject->postTitle) === true) {
			throw (new \InvalidArgumentException("No post title.", 405));
		}
		//create a new post and insert into mysql
		$post = new Post(null, $requestObject->postContent, null, $requestObject->postTitle);
		$post->insert($pdo);
		//update reply
		$reply->message = "Post created!";
	} else {
		throw (new \InvalidArgumentException("Invalid HTTP request!", 405));
	}
} catch(Exception $exception) {
	$reply->status = $exception->getCode();
	$reply->message = $exception->getMessage();
	$reply->trace = $exception->getTraceAsString();
} catch(TypeError $typeError) {
	$reply->status = $typeError->getCode();
	$reply->message = $typeError->getMessage();
}
//sets up the response header.
header("Content-type: application/json");
if($reply->data === null) {
	unset($reply->data);
}
//finally - JSON encode the $reply object and echo it back to the front end.
echo json_encode($reply);