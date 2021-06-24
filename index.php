<?php



header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    return 0;
}

require 'connect.php';
require 'models/Posts.php';
require 'models/User.php';


$type = $_SERVER['PHP_SELF'];
$params = explode('/', $type);

$postId = $params[2] ?? "";

$method = $_SERVER['REQUEST_METHOD'];
//die(var_dump($params[1]));

if ($method === 'GET') {
    if ($type === '/posts') {
        $PostObject->getPosts($connect);
    } elseif ($params[1] === 'posts' && isset($postId) && $postId != '') {
        $PostObject->getPostItem($connect, $postId);
    }
    elseif ($type === '/categories') {
        $PostObject->getCategories($connect);
    }
    elseif ($params[1] === 'categories' &&  $postId != '' ) {
        $PostObject->getCategoriesById($connect, $postId);
    }
    elseif ($params[1] === 'users' &&  $postId != '' ) {
        $UserObject->getUsersById($connect, $postId);
    }
    else {
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
    elseif ($type === '/posts') {
        $PostObject->addPost($connect, $_POST);
    }
} elseif($method === 'DELETE') {
    if ($type === '/posts') {

    }
    elseif (isset($postId) && $postId != '') {
        $PostObject->deletePostItem($connect, $postId);
    }
}
