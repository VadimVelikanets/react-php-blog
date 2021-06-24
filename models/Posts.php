<?php
class Posts
{
    public function getPosts($connect)
    {
        $posts = mysqli_query($connect, "SELECT user.firstname, user.lastname, file.image, file.thumb, category.category_name, posts.*
                    FROM user
                    JOIN posts
                    ON user.id = posts.user_id
                    JOIN file
                    ON file.id = posts.file_id
                    JOIN category
                    ON category.id = posts.category_id");
        $postsList = [];
        while ($post = mysqli_fetch_assoc($posts)) {
            $postsList[] = $post;
        }


        echo json_encode($postsList);
    }

    public function getPostItem($connect, $id)
    {
        $post = mysqli_query($connect, "SELECT user.firstname, user.lastname, file.image, file.thumb, category.category_name, posts.*
            FROM user
            JOIN posts
            ON user.id = posts.user_id
            JOIN file
            ON file.id = posts.file_id
            JOIN category
            ON category.id = posts.category_id WHERE posts.id = $id");
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

    public function getCategoriesById($connect, $id)
    {
        $categories = mysqli_query($connect, "SELECT user.firstname, user.lastname, file.image, file.thumb, category.category_name, posts.*
                    FROM user
                    JOIN posts
                    ON user.id = posts.user_id
                    JOIN file
                    ON file.id = posts.file_id
                    JOIN category
                    ON category.id = posts.category_id
                    WHERE category.id = $id");
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

    public function deletePostItem($connect, $id)
    {
        if (mysqli_query($connect, "DELETE  FROM `posts` WHERE `id` = '$id'")) {
            $res = [
                "status" => 'post deleted'
            ];
            http_response_code(201);
            echo json_encode($res);
        } else {
            $res = [
                "status" => '404! post not found'
            ];
            echo json_encode($res);
        }

    }

    public function addPost($connect, $data){
        $header = $data['header'];
        $content = $data['header'];
        $category_id = $data['category_id'];
        $user_id = $data['user_id'];


            mysqli_query($connect, "INSERT INTO `posts` (`header`, `header`, `category_id`, `email`, `password`, `login_attempts`, `permission_id`, `file_id`)VALUES	(NULL, '$firstName', '$lastname', '$email', '$hash', 0, 1, NULL);");
            $res = [
                "status" => 'user create',
                "id" => mysqli_insert_id($connect)
            ];
            http_response_code(201);
            echo json_encode($res);
    }
}

$PostObject = new Posts();
