<?php
define('DBHOST', 'localhost');
define('DBNAME', 'lab16b'); // Changed from 'art' to 'lab16b'
define('DBUSER', 'root');
define('DBPASS', ''); // Assuming you have no password
define('DBCONNSTRING',"mysql:host=" . DBHOST . ";dbname=" . DBNAME . ";charset=utf8mb4;");

$connectionDetails = Array(
    'dsn' => DBCONNSTRING,
    'username' => DBUSER,
    'password' => DBPASS
);
?>
