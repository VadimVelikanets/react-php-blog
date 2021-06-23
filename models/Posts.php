<?php
//function getPosts($connect)
//{
//    $posts = mysqli_query($connect, "SELECT * FROM `posts`");
//    $postsList = [];
//    while ($post = mysqli_fetch_assoc($posts)) {
//        $postsList[] = $post;
//    }
//
//
//    echo json_encode($postsList);
//}
//
//function getPostItem($connect, $id)
//{
//    $post = mysqli_query($connect, "SELECT * FROM `posts` WHERE `id` = '$id'");
//    if (!$post) {
//        $res = [
//            "status" => '404 Error! Post not found'
//        ];
//        echo json_encode($res);
//    } else {
//        $post = mysqli_fetch_assoc($post);
//        echo json_encode($post);
//    }
//
//}
//
//function getCategories($connect)
//{
//    $categories = mysqli_query($connect, "SELECT * FROM `category`");
//    $categoryList = [];
//    while ($category = mysqli_fetch_assoc($categories)) {
//        $categoryList[] = $category;
//    }
//
//
//    echo json_encode($categoryList);
//}


class Posts {
    public function getPosts($connect)
    {
        $posts = mysqli_query($connect, "SELECT * FROM `posts`");
        $postsList = [];
        while ($post = mysqli_fetch_assoc($posts)) {
            $postsList[] = $post;
        }


        echo json_encode($postsList);
    }

    public function getPostItem($connect, $id)
    {
        $post = mysqli_query($connect, "SELECT * FROM `posts` WHERE `id` = '$id'");
        if (!$post) {
            $res = [
                "status" => '404 Error! Post not found'
            ];
            echo json_encode($res);
        } else {
            $post = mysqli_fetch_assoc($post);
            echo json_encode($post);
        }

    }

    public function getCategories($connect)
    {
        $categories = mysqli_query($connect, "SELECT * FROM `category`");
        $categoryList = [];
        while ($category = mysqli_fetch_assoc($categories)) {
            $categoryList[] = $category;
        }


        echo json_encode($categoryList);
    }
}

$PostObject = new Posts();

//$testObject->newTest();