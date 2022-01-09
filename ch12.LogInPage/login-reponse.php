<?php 
//START SESSION, ALWAYS
session_start();

//if statement

$name = $_POST["userName"];

if (trim($name) == "Louisa") {

    $_SESSION["isLoggedIn"] = true;
    header('Location: protectedPage.php');
} else {
    header("Location: login.php?badUserCredentials=true");
}
