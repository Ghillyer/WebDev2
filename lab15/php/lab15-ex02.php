<?php
/* if form has been submitted, save user's input in a cookie */ 
if ( isset($_POST["tracker"]) ) { 
	$expiryTime = time()+60*60*24;
 	setCookie("tracker", $_POST["tracker"], $expiryTime); 
} 
?>
<!DOCTYPE html>
<html lang=en>
<head>
    <title>Lab 15</title>
    <meta charset=utf-8>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" rel="stylesheet">
</head>
<body >  
<header class="p-3">
  <h2 class="is-size-2 has-background-light">Cookie Tester</h2>
</header>
<main class="p-3">
   <article class="columns">
      <section class="column is-one-third">

			<form action="lab15-ex02.php" method="post">
				<div class="field has-addons">
				<div class="control">
					<input class="input " type="text" placeholder="Enter cookie value" name="tracker">
				</div>
				<div class="control">
					<button type="submit" class="button is-primary">Make Cookie</button>
				</div>
				</div>
			</form>

      </section>
      
		<section class="column">
			<div class="content">
				<?php
					if (isset($_POST["tracker"])) { 
						echo "<em>Cookie set.</em><br>"; 
						echo "<a href='anotherpage.php'>"; 
						echo "Visit this page to see it</a>"; 
					} else { 
						echo "Cookie not set yet"; 
					}
               
				?>		
			</div>
		</section>  
   </article>

    
</main>    
</body>
</html>