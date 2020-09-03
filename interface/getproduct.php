<?php
    include('./conn.php');

    // sql语句
    $sql = "select * from produce";
    
    // 执行sql语句
    $res = $mysqli->query($sql);

    // 执行完sql语句就可以关闭
    $mysqli->close();
    
    // 从结果集里拿到每一条数据
    $arr = array();
    
    // 遍历数据（从结果里面拿一条数据）
    while($row = $res->fetch_assoc()){

        // 拿一条存入数组
        array_push($arr,$row);

    }
    // 将二维数组转成json字符串
    $json = json_encode($arr);

    // 输出json
    echo $json;
?>