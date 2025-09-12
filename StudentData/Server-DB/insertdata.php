<!-- insert data file -->

<?php
header("Content-Type: application/json");

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);
$name = $data['name'];
$marks = $data['marks'];

$server = "localhost";
$username = "root";
$password = "";
$database = "studentdb";
$connection = new mysqli($server, $username, $password, $database);

if ($connection) {
    $statement = $connection->prepare("INSERT INTO studenttb (name , marks) values (?,?)");
    if ($statement) {
        $statement->bind_param("si", $name, $marks);
        if ($statement->execute()) {
            echo "Data Inserted {\n\tname : " . $name . ",\n\tmarks : " . $marks . "\n}";
        } else {
            echo "insertion failed not executed";
        }
    }else{
         echo "insertion failed";
    }
} else {
    echo "insertion failed connectn error";
}
?>