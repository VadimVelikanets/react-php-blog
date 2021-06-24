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
}

$UserObject = new User();
