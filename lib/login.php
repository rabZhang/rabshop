<?php
    // 1. 连接数据库
    include('./conn.php');

    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];

    // echo "$username  $password  $email  $phone";

    // 3. 验证数据  判断用户名是否存在
    $sql = "select `user_email`,`user_pass` from user where user_email='$email' and user_pass='$password'";
    $result = $mysqli->query($sql); //执行查询语句

    if($result->num_rows){
        // 数据库中有数据
        echo '{"msg":"登录成功","flag":true}';
        $mysqli->close();
        die;
    }else{
    	echo '{"msg":"账号或密码错误","flag":false}';
        $mysqli->close();
        die;
    }

?>