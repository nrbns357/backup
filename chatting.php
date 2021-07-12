<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/css/main.3c1f9995.chunk.css">
    <link rel="stylesheet" href="./chatting.css">

    <title>카톡채팅방</title>
    <style>
        .bottom {
            position: fixed;
            bottom: 10px;
            margin: 0px auto;
        }
    </style>
    <?php
    require('db.inc');

    $chat = $POST['chat'];
    $sql = "insert into kakao (conversation) 
                    values ('" . $chat . "')";
    mysqli_query($connect, $sql) or die(mysqli_error($connect));

    $sql = "select * from kakao"; // 예) select * from TableName;, select(조회)
    $result = mysqli_query($connect, $sql) or die(mysqli_error($connect));


    ?>
</head>

<body>
    <div id="ex">
        <a href="./naver_login.html" id="exit">네이버 로그인 창으로 돌아가기</a>
    </div>
    <div id="di" style=" margin : 0px auto">
        <?php
        while ($row = mysqli_fetch_array($result)) {
            echo "<div style='border: solid black 1px; margin-top:5px; width:200px; height: 10px;'>" . $row['conversation'] . "</div>";
        }
        ?>
    </div>
    <div id="div" class="bottom">
        <form action="./chatting.php" method="POST" id="form">
            <input type="text" id="chat" name="chat">
        </form>
    </div>
    <div>

    </div>

</body>

</html>