<?php
include "db.php";

$sql = "SELECT * FROM `to-do` ORDER BY ID DESC";
$result = mysqli_query($conn, $sql);

$tasks = [];
while ($row = mysqli_fetch_assoc($result)) {
    $tasks[] = ["id" => $row["ID"], "task" => $row["Task"], "date" => $row["Date"]];
}

echo json_encode($tasks);
?>
