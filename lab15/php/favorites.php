<?php 
include 'includes/paintings.inc.php';
// ensure sessions works on this page
session_start(); 
// if no favorites in session, initialize it to empty array
if ( !isset($_SESSION["Favorites"]) ) { 
 $_SESSION["Favorites"] = []; 
} 
// retrieve favorites array for this user session
$favorites = $_SESSION["Favorites"]; 
 
?>
<!DOCTYPE html>
<html lang=en>
<head>
    <title>Lab 15</title>
    <meta charset=utf-8>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link href="css/tailwind.css" rel="stylesheet">
	 <link href="css/lab15-ex04.css" rel="stylesheet">
	 <style>

	 </style>
</head>
<body >  

<main class="container px-5 py-24 mx-auto">

   <div class="flex flex-col text-center w-full mb-20">
      <a class="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1" href="lab15-ex04.php">Return to list</a>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Favorites</h1>
    </div>
    <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
    <ul class="flex flex-col divide divide-y">
      <?php 
      foreach ($favorites as $fav) { 
         // retrieve the painting for this id
         $painting = $data[$fav]; 
      ?> 
         <li class="flex flex-row">
            <div class="select-none cursor-pointer flex flex-1 itemscenter p-4">
               <div class="flex flex-col w-10 h-10 justify-center itemscenter mr-4">
                  <a href="#" class="block relative">
                  <img src="images/<?= $painting[0] ?>.jpg" 
                  class="mx-auto object-cover rounded-full h-10 w-10 "/>
                  </a>
               </div>
               <div class="flex-1 pl-1 mr-16">
                  <div class="font-medium dark:text-white">
                  <?= $painting[1] ?> 
               </div>
               </div>
            </div>
         </li>
      <?php 
      } 
      ?> 
      </ul>

   </div>

   <a class="no-underline text-yellow-700 hover:text-yellow-500 text-xs font-bold uppercase inline-block mt-4 px-3 py-2 bg-gray-800 rounded" 
      href="emptyFavorites.php">
				Empty Favorites
   </a>

</main>
   
</body>
</html>