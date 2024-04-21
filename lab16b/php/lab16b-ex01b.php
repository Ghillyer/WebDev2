<?php  
/* add your PHP code here */

echo "<h1>This is another page ... it still has authenticate header</h1>";
echo "<p>Hello {$_SERVER['PHP_AUTH_USER']}.</p>";
echo "<p>You entered {$_SERVER['PHP_AUTH_PW']} as your password.</p>";



?>