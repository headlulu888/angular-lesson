<?php

require_once 'db.php';

$res = mysqli_query($db, 'select * from books');
$books = mysqli_fetch_all($res, MYSQLI_ASSOC);
exit(json_encode($books));
// $answer = [
//     'key1' => 'value 1',
//     'key2' => 'value 2'
// ];

// $answer = json_encode($answer);
// echo $answer;