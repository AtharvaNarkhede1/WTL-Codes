<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);
$id = $data["id"];

$sql = "DELETE FROM `to-do` WHERE ID=$id";
if (mysqli_query($conn, $sql)) {
    echo json_encode("Task deleted successfully!");
} 
?>
