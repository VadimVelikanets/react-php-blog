<?php

header('Content-type: json/application');
header("Access-Control-Request-Method: GET, POST");
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Headers: accept, origin, content-type');

require 'connect.php';
require 'models/Posts.php';
require 'models/User.php';


$type = $_SERVER['PHP_SELF'];
$params = explode('/', $type);
$postId = $params[2] ?? "";

$method = $_SERVER['REQUEST_METHOD'];
//die(var_dump($_SERVER));

if ($method === 'GET') {
    if ($type === '/posts') {
        $PostObject->getPosts($connect);
    } elseif (isset($postId) && $postId != '') {
        $PostObject->getPostItem($connect, $postId);
    }
    elseif ($type === '/categories') {
        $PostObject->getCategories($connect);
    }else {
        http_response_code(404);
    }

} elseif ($method === 'POST') {
    if ($type === '/categories') {
        $PostObject->createCategories($connect, $_POST);
    } elseif ($type === '/register') {
        $UserObject->registerUser($connect, $_POST);
    } elseif ($type === '/login') {
        $UserObject->loginUser($connect, $_POST);
    }
}
