<?php
    $id = $_POST['id'];
    $password=$_POST['password'];
    if($id == 'iubns' && $password == '12345678'){
        echo "로그인 성공";
    }else if($id=='nrbns'&& $password == '153759qw'){
        echo "로그인 성공";
    }else{
        echo "로그인 실패 다시 시도해 주세요.";
    }
    
?>

