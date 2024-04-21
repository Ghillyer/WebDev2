<?php
include 'art-config.inc.php';
include 'lab16b-db-classes.inc.php';

$msg = "Demonstrates how to generate and store a digest";
if ( isLoginDataPresent() ) {
 if ( $_POST['pass1'] != $_POST['pass2'] ) 
 $msg = "Passwords must match"; 
 else { 
 try {
 // 1. first see if this email is in the database
 $connection = DatabaseHelper::
 createConnection($connectionDetails); 
 $gate = new CustomerLogonDB($connection);
 $data = $gate->getByUserName($_POST["email"]);
 $connection = null;
 
 // if $data is empty then supplied email was not found 
 if ( isset($data['Pass']) ) {
 
 // calculate the bcrypt digest using cost = 12 
 $digestBcrypt = password_hash($_POST['pass1'], 
 PASSWORD_BCRYPT, ['cost' => 12]); 
 // also let's show how you would do the same with 
 // salt + SHA256 approach 
 $extendedPassword = $_POST['pass1'] . $data['Salt']; 
 $digestSHA256 = hash("sha256", $extendedPassword ); 
 
 // save the updated passwords then redirect 
 $gate->updatePassword($data['CustomerID'], 
 $digestBcrypt, $digestSHA256); 
 header("Location: password-changed.php"); 
 exit(); 
 } else {
 $msg = "Email not found";
 } 
 } catch (Exception $e) { die( $e->getMessage() ); } 
 } 
}



function isLoginDataPresent() {
   if ( isset($_POST['email']) && isset($_POST['pass1']) && isset($_POST['pass2']) ) 
      return true;
   else
      return false;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Chapter 16b</title>
<link rel="stylesheet" href="css/variables-palette-19.css" />   
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/lab16b-ex02.css" />
</head>
<body>
   <section class="container">
      <div class="formData">
         <h2>Change Password</h2>
         <p><?= $msg ?></p>         
         <form method="post" action="lab16b-ex06.php">
            <label for="email">Email</label>
            <input type="email" name="email" >
            <label for="pass1">Password</label>
            <input type="password" name="pass1" >     
            <label for="pass2">Repeat Password</label>
            <input type="password" name="pass2" >                                     
            <input type="submit" value="Change Password" />            
         </form>
      </div>
   </section>
</body>
</html>