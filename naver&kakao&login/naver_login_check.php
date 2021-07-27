<?php
require('db.inc');

$id = $_POST['id'];
$password = $_POST['password'];


$sql = "select * from user"; // 예) select * from TableName;
$result = mysqli_query($connect, $sql) or die(mysqli_error($connect));


$succes = false;
while ($row = mysqli_fetch_array($result)) {
    if ($id == $row['id'] && $password == $row['password1']) {
        $succes = $row;
    }
}

if ($succes) {
    echo  "<script>location.href='./naver.html'</script>";
    return;
} else {
    echo "<script>alert('로그인 실패!'); window.history.back()</script>";
    return;
}
?>