<?php
    require('db.inc');

    

    $sql = "select * from kakao"; // 예) select * from TableName;, select(조회)
	$result = mysqli_query($connect,$sql)or die (mysqli_error($connect));


?>