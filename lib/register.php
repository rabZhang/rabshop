<?php 
	include('./conn.php');

	$email = $_REQUEST['email'];

	$password = $_REQUEST['password'];


    if($email==null||$password==null){
         echo '<script>alert("数据提交不能为空");</script>';
         echo '<script>window.history.back();</script>';
         return false;
    }

	$sql = "select * from user where user_email='$email'";

	$result = $mysqli->query($sql);

	if($result->num_rows>0){
        // 数据库中有数据
       echo '{"msg":"邮箱已被注册","flag":false}';
        $mysqli->close();
        die;
    }

    $insertSql = "insert into user(user_email,user_pass) values('$email','$password')";

    // 当使用query函数执行插入操作的时候  返回的是插入的行数
    $res = $mysqli->query($insertSql);

    if($res){
        echo '{"msg":"注册成功","flag":true}';
    }

    $mysqli->close();
    // echo $insertSql;