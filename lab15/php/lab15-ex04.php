<?php  
include 'includes/paintings.inc.php';
                   
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
<main class="sm:flex flex-wrap justify-center items-center text-center gap-8">

<?php
foreach ($data as $key => $value) {
?>

<div class="flex max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="w-1/3 bg-cover bg-paint-<?= $key?> "></div>
    <div class="w-2/3 p-4">
        <h1 class="text-gray-900 font-bold text-xl text-left"> <?= $value[1]?> </h1>
        <p class="mt-2 text-gray-600 text-sm text-left"><?= $value[2]?></p>
            <a class="no-underline text-yellow-700 hover:text-yellow-500 text-xs font-bold uppercase inline-block mt-2 px-3 py-2 bg-gray-800 rounded" 
                
            href="addToFavorites.php?id=<?= $key ?>">
                Add to Favorites
            </a>		  
    </div>
</div>

<?php
}
?>



</main>
   
</body>
</html>