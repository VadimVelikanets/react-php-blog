<?php

header('Content-type: json/application');
header("Access-Control-Request-Method: GET, POST");
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Headers: accept, origin, content-type');

require 'connect.php';
require 'models/Posts.php';


$type = $_SERVER['REQUEST_URI'];
$params = explode('/', $type);
$postId = $params[2] ?? "";

if ($type === '/posts') {
    $PostObject->getPosts($connect);
} elseif (isset($postId) && $postId != '') {
    $PostObject->getPostItem($connect, $postId);
}


if ($type === '/categories') {
    $PostObject->getCategories($connect);
}