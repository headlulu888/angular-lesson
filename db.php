<?php

$db = mysqli_connect('localhost', 'root', 'root', 'world') or die('Connection error!');
mysqli_set_charset($db, 'utf8') or die('Not add charset utf8');