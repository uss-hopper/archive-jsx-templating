<?php
require_once("/var/www/secrets/Secrets.php");

$config = [];

$api = new stdClass();
$api->randomKey = "1234567890";
$api->anotherRandomKey = "abcdefghijklmnopqrstuvwxyz";


$config["api"] = json_encode($api);

$hideSecrets = new \Secrets("/var/www/secrets/ng-templating.ini");
$hideSecrets->setSecrets($config);