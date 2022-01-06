<?php
// Start the session
session_start();
?>

<!DOCTYPE html>
<html>

<head>
    <title>Chapter 11 Sessions </title>
</head>

<body>
    <h1> PHP Session allow you to track people </h1>

    <?php

    $_SESSION["favcolor"] = "green";
    $_SESSION["favanimal"] = "seal";
    echo "Session variables are set";


    ?>

</body>


</html>