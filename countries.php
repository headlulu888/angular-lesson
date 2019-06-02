<?php

require 'db.php';

$res = mysqli_query($db, "SELECT country.Code, country.Name, country.Population, city.Name as Capital FROM country LEFT JOIN city ON country.Capital = city.ID ORDER BY country.Code ASC");
$countries = mysqli_fetch_all($res, MYSQLI_ASSOC);

exit(json_encode($countries, JSON_NUMERIC_CHECK));