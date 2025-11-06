<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);
$task = $data["task"];
$date = $data["date"];

$sql = "INSERT INTO `to-do` (Task, Date) VALUES ('$task', '$date')";
if (mysqli_query($conn, $sql)) {
    echo json_encode(["message" => "Task added successfully!"]);
} else {
    echo json_encode(["message" => "Error: " . mysqli_error($conn)]);
}
?>
