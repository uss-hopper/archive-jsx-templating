<?php
require_once("/var/www/Secrets.php");

$config = [];

$api = new stdClass();
$api->randomKey = "1234567890";
$api->anotherRandomKey = "abcdefghijklmnopqrstuvwxyz";


$config["api"] = json_encode($api);

$hideSecrets = new \Secrets("/var/www/secrets/projectname.ini");
$hideSecrets->setSecrets($config);