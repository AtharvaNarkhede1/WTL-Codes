<?php
header("Content-Type: application/json");

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

$old_name = $data['old_name'];
$new_name = $data['new_name'];
$new_marks = $data['new_marks'];

$server = "localhost";
$username = "root";
$password = "";
$database = "studentdb";
$connection = new mysqli($server, $username, $password, $database);

if ($connection) {
    $statement = $connection->prepare("UPDATE studenttb SET name = ?, marks = ? WHERE name = ?");
    if ($statement) {
        $statement->bind_param("sis", $new_name, $new_marks, $old_name);
        if ($statement->execute()) {
            if ($statement->affected_rows > 0) {
                echo "Record Updated Successfully :: Old Name : " . $old_name . " => New Name : " . $new_name . ", Marks : " . $new_marks;
            } else {
                echo "No Record Found With Name : " . $old_name;
            }
        } else {
            echo "Data Update Failed :: Error At Execution!!";
        }
    } else {
        echo "Data Update Failed :: Error At Statement Preparation!!";
    }
} else {
    echo "Data Update Failed :: Connection is Not Defined!!";
}
?>