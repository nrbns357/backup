<?php
	error_reporting(E_ALL);
	ini_set("display_errors", 1);

	$connect = mysqli_connect("localhost","nrbns","153759qw") or die ("데이터베이스 연결에 실패하였습니다!");  

	mysqli_select_db($connect, "nrbns") or die("mysqli_select_db Error!!! 사용 Database 이름을 확인하세요.");
	mysqli_query($connect,"set NAMES utf8"); 
?> 