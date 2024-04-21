<?php
include 'art-config.inc.php';
include 'lab16b-db-classes.inc.php';

session_start();
$msg = "Demonstrates how to use form authentication";
if ( isLoginDataPresent() ) {
   try {
      // 1. first see if this email is in the database
      $connection = DatabaseHelper::createConnection($connectionDetails);      
      $gate = new CustomerLogonDB($connection);
      $data = $gate->getByUserName($_POST["email"]);
      $connection = null;

     
      if ( isset($data['Pass']) ) {
         // add your code here 
         $extendedPassword = $_POST['pass'] . $data['Salt']; 
         $calculatedDigest = hash("sha256", $extendedPassword ); 
         $digestInDatabase = $data['Password_sha256']; 
         // if these match then password is correct so can log in user 
         if ( $calculatedDigest == $digestInDatabase ) { 
            // 3. we have a match, log-in user 
            $_SESSION['user'] = $data['CustomerID']; 
            header("Location: login-success.php"); 
            exit(); 
         } else { 
         $msg = "Password incorrect"; 
         }




         
      } else {
         $msg = "Email not found";
      }      
   } catch (Exception $e) { die( $e->getMessage() ); }
}


function isLoginDataPresent() {
   if ( isset($_POST['email']) && isset($_POST['pass']) ) 
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
         <h2>Login</h2>
         <p><?= $msg ?></p>         
         <form method="post" action="lab16b-ex05.php">
            <label for="email">Email</label>
            <input type="email" name="email" >
            <label for="pass">Password</label>
            <input type="password" name="pass" >                            
            <input type="submit" value="Login" />            
         </form>
      </div>
   </section>
</body>
</html>