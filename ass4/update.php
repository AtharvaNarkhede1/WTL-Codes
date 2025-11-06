<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);
$id = $data["id"];
$task = $data["task"];
$date = $data["date"];

$sql = "UPDATE `to-do` SET Task='$task', Date='$date' WHERE ID=$id";
if (mysqli_query($conn, $sql)) {
    echo json_encode(["message" => "Task updated successfully!"]);
} else {
    echo json_encode(["message" => "Error: " . mysqli_error($conn)]);
}
?>
