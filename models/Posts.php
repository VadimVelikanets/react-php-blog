<?php
class Posts
{
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

    public function createCategories($connect, $data)
    {
        $categoryName = $data['category_name'];
        mysqli_query($connect, "INSERT INTO `category` (`id`, `category_name`) VALUES (NULL, '$categoryName');");
        $res = [
            "status" => 'caterogy create',
            "id" => mysqli_insert_id($connect)
        ];
        http_response_code(201);
        echo json_encode($res);
    }
}

$PostObject = new Posts();
