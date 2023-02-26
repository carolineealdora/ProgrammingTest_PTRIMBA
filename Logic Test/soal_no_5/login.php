<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ptrimba_test_login";

// define koneksi
$koneksi = new mysqli($servername, $username, $password, $dbname);

// cek koneksi
if ($koneksi->connect_error) {
  die("Connection failed: " . $koneksi->connect_error);
}

if (isset($_POST['login'])) {
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $uname = mysqli_real_escape_string($koneksi, $user);
    $pwd = mysqli_real_escape_string($koneksi, $pass);
   
    //cek username dan password
    $sql="select `id` from `user` where `username`='$uname' and `password`='$pwd'";
    $query = mysqli_query($koneksi, $sql);
    $jumlah = mysqli_num_rows($query);

    // cek existing user
    if ($jumlah > 0) {
        $response = array('success' => true);
        echo json_encode($response);
    } else {
        $response = array('success' => false);
        echo json_encode($response);
    }
}
?>