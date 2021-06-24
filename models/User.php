<?php
class User
{
    public function registerUser($connect, $data){

        $firstName = $data['firstname'];
        $lastname= $data['lastname'];
        $email = $data['email'];
        $password = $data['password'];
        $hash = password_hash($password, PASSWORD_DEFAULT);

        $checkEmail = mysqli_query($connect,"SELECT *  FROM `user` WHERE `email`='$email'");
       // die(var_dump(mysqli_num_rows($checkEmail) ) );
        if(mysqli_num_rows($checkEmail) > 0) {

            $res = [
                "status" => 'Email already register'
            ];
            http_response_code(500);
            echo json_encode($res);
        } else {
            mysqli_query($connect, "INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `login_attempts`, `permission_id`, `file_id`)VALUES	(NULL, '$firstName', '$lastname', '$email', '$hash', 0, 1, NULL);");
            $res = [
                "status" => 'user create',
                "id" => mysqli_insert_id($connect)
            ];
            http_response_code(201);
            echo json_encode($res);
        }


    }


    public function loginUser($connect, $data){

        $email = $data['email'];
        $password = $data['password'];
        $hash = password_hash($password, PASSWORD_DEFAULT);

        $user = mysqli_query($connect,"SELECT *  FROM `user` WHERE `email`='$email'");
        // die(var_dump(mysqli_num_rows($checkEmail) ) );
        if(mysqli_num_rows($user) > 0) {

            $user = mysqli_fetch_assoc($user);
            $dbHash = $user['password'];
           // die(var_dump($hash));

            if(password_verify($password, $dbHash)) {
                $res = [
                    'auth'
                ];
                http_response_code(301);
                echo json_encode($user);


            } else {
                $res = [
                    "status" => 'wrong password'
                ];
                http_response_code(500);

            }

        } else {
            $res = [
                "status" => 'Email or password wrong'
            ];
            http_response_code(500);
            echo json_encode($res);
        }


    }
    public function getUsers($connect)
    {
        $posts = mysqli_query($connect, "SELECT * FROM user");
        $postsList = [];
        while ($post = mysqli_fetch_assoc($posts)) {
            $postsList[] = $post;
        }


        echo json_encode($postsList);
    }
    public function getUsersById($connect, $id)
    {
        $user = mysqli_query($connect, "SELECT * FROM `user` WHERE `id` = '$id'");
        if (!$user) {
            $res = [
                "status" => '404 Error! Post not found'
            ];
            echo json_encode($res);
        } else {
            $user = mysqli_fetch_assoc($user);
            echo json_encode($user);
        }

    }
    public function updateUser($connect, $data){
        $firstName = $data['firstname'];
        $lastname= $data['lastname'];
        $email = $data['email'];
        $password = $data['password'];
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $id = $data['userId'];
        //die(var_dump($data));
        $sql = "UPDATE `user` SET `firstname` = '$firstName', `lastname` = '$lastname', `email` = '$email', `password` = '$hash' WHERE `id` = '$id'";
        $user = mysqli_query($connect, $sql);
        $user = mysqli_fetch_assoc($user);

        $res = [
            "status" => 'user create',
            "id" => mysqli_insert_id($connect)
        ];
        http_response_code(201);
        $updatedUser = mysqli_query($connect,"SELECT *  FROM `user` WHERE `email`='$email'");
        $updatedUser = mysqli_fetch_assoc($updatedUser);
        echo json_encode($updatedUser);


    }

    public function getUserPermissions($connect)
    {
        $posts = mysqli_query($connect, "SELECT * FROM user");
        $postsList = [];
        while ($post = mysqli_fetch_assoc($posts)) {
            $postsList[] = $post;
        }


        echo json_encode($postsList);
    }
}

$UserObject = new User();
