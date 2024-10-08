<?php  
// add code for accessing cookie on the server side
if ( isset($_COOKIE["tracker"]) ) { 
  $msg = "Cookie value is = " . $_COOKIE["tracker"]; 
 } else { 
  $msg = "Cookie not set yet"; 
 } 
                   
?>
<!DOCTYPE html>
<html lang=en>
<head>
    <title>Lab 15</title>
    <meta charset=utf-8>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" rel="stylesheet">
    <script>
      document.addEventListener("DOMContentLoaded", function() {
      // add code for accessing cookie on client-side, 
      // i.e., a cookie sent from the server 
      const div = document.querySelector("#cookieHolder"); 
      
      if (! document.cookie) { 
        div.textContent = "No cookies set yet"; 
      } else { 
        const cValue = document.cookie 
          .split('; ') 
          .find(row => row.startsWith('tracker=')) 
          .split('=')[1]; 
        div.textContent = "Value of cookie is = " + cValue; 
      } 
      }); 
    </script>
</head>
<body >  
<header class="p-3">
  <h2 class="is-size-2 has-background-light">Another Page</h2>
</header>
<main class="p-3">
	<div class="content"><?= $msg ?></div>
</main>    
</body>
</html>