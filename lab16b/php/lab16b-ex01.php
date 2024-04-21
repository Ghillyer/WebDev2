<?php  
if ( !isset($_SERVER['PHP_AUTH_USER']) ) { 
    header('WWW-Authenticate: Basic realm="Members Only"'); 
    header('HTTP/1.0 401 Unauthorized'); 
    exit; 
   } else { 
    echo "<h1>Hello {$_SERVER['PHP_AUTH_USER']}</h1>"; 
    echo "<p>Your password was {$_SERVER['PHP_AUTH_PW']}</p>"; 
    echo "<a href='lab16b-ex01b.php'>Test another page</a>"; 
   }
?>