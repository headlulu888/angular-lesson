<?php

require_once 'db.php';

$data = json_decode(file_get_contents("php://input"));

$code = mysqli_real_escape_string($db, $data->Code);

$res = mysqli_query($db, "SELECT * FROM city WHERE CountryCode = '$code' ORDER BY Name");
$cities = mysqli_fetch_all($res, MYSQLI_ASSOC);
exit(json_encode($cities, JSON_NUMERIC_CHECK));