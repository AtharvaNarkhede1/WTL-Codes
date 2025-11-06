<?php

$conn = new mysqli("127.0.0.1:3307", "root", "", "mysql");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "DB connection failed"]);
    exit;
}
?>