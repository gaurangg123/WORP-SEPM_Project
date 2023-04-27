<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

$conn = mysqli_connect($servername, $username, $password, $dbname);



if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$username = $_POST['username'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$password = $_POST['password'];
$birthdate = $_POST['dob'];
$phone = $_POST['phone'];
$email = $_POST['email'];
// Prepare statement
$stmt = mysqli_prepare($conn, "INSERT INTO users (username, firstname, lastname, password, birthdate, phone_no, email) VALUES (?, ?, ?, ?, ?, ?, ?)");


mysqli_stmt_bind_param($stmt, "sssssds", $username, $firstname, $lastname, $password, $birthdate, $phone, $email);

// Set parameters

// Execute statement
mysqli_stmt_execute($stmt);


echo "Registration successful.";

mysqli_close($conn);
?>
