<?php
include 'art-config.inc.php';
include 'lab16b-db-classes.inc.php';

session_start(); 
// if user id not in session then redirect back to login screen 
if ( ! isset($_SESSION['user']) ) { 
 header('Location: lab16b-ex03.php'); 
 exit(); 
}

?>
<h1>Login succeeded! UserID = <?= $_SESSION['user'] ?></h1>