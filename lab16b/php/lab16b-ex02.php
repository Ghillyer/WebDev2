<?php 
include 'art-config.inc.php'; 
$msg = "Demonstrates how to use form authentication"; 
try { 
   if ( isset($_POST['email']) && isset($_POST['pass']) ) { 
      // 1. First see if this email is in the database 
      $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS); 
      $pdo->setAttribute(PDO::ATTR_ERRMODE, 
      PDO::ERRMODE_EXCEPTION); 
      // run the query 
      $sql = "select * from customerlogon where UserName=?"; 
      $statement = $pdo->prepare($sql); 
      $statement->bindValue(1, $_POST["email"] ); 
      $statement->execute(); 
      // retrieve the data and close connection 
      $data = $statement->fetch(PDO::FETCH_ASSOC); 
      $pdo = null; 
      // if $data is empty then supplied email was not found 
      if ( isset($data['Pass']) ) { 
      // 2. Does this password match the digest saved in the 
      // Password field in database for this username? 
      if ( password_verify($_POST['pass'], $data['Pass']) ) { 
      // 3. We have a match, log-in user. 
      // For now, simply redirect 
      header("Location: login-success.php"); 
      exit(); 
      } else { 
      $msg = "Password incorrect"; 
      } 
      } else { 
      $msg = "Email not found"; 
      } 
      }
} catch (Exception $e) { die( $e->getMessage() ); } 
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
         <form method="post" action="lab16b-ex02.php">
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