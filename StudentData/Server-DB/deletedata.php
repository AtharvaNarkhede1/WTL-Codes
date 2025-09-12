<?php
header("Content-Type: application/json");

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

$name = $data['name'];

$server = "localhost";
$username = "root";
$password = "";
$database = "studentdb";
$connection = new mysqli($server, $username, $password, $database);

if ($connection) {
    $statement = $connection->prepare("DELETE FROM studenttb WHERE name = ?");
    if ($statement) {
        $statement->bind_param("s", $name);
        if ($statement->execute()) {
            if ($statement->affected_rows > 0) {
                echo " Record Deleted Successfully :: Deleted Name : " . $name;
            } else {
                echo "No Record Found With Name : " . $name;
            }
        } else {
            echo "Data Deletion Failed :: Error At Execution!!";
        }
    } else {
        echo "Data Deletion Failed :: Error At Statement Preparation!!";
    }
} else {
    echo "Data Deletion Failed :: Connection is Not Defined!!";
}
?>