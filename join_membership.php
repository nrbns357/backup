<?php
    require('db.inc');

    $id = $_POST ['id'];
    $password1 = $_POST ['password1'];
    $password2 = $_POST ['password2'];

    $sql = "select * from user"; // 예) select * from TableName;, select(조회)
	$result = mysqli_query($connect,$sql)or die (mysqli_error($connect));

    $sql="insert into user (id, password1, password2) 
                    values ('".$id."','".$password1."','".$password2."')";
                    //insert(입력)
    mysqli_query($connect,$sql)or die (mysqli_error($connect));
    
while($row = mysqli_fetch_array($result))
{
    if( $row['id'] == $id){
        echo "<script>alert('이미있는 아이디 입니다. 다시 만들어주십시요.'); window.history.back()</script>";
        return;
    } 
    
}
if($password1 == $row = mysqli_fetch_array($result))
    {
        echo "<script>alert('비밀번호가 공백입니다. 다시 정해주십시요.'); window.history.back()</script>"; 
        return;
        break;
    }
    else if($password1 != $password2)
    {
        echo "<script>alert('비밀번호가 서로 다릅니다. 다시 정해주십시요.'); window.history.back()</script>";
        return;
    }
    else{
        echo "<script>location.href='./naver_login.html'</script>";
        return;
    }
    
   
?>