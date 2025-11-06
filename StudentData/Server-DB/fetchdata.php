<?php
header("Content-Type: application/json");

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

$name = isset($data['name']) ? $data['name'] : null;

$server = "localhost";
$username = "root";
$password = "";
$database = "studentdb";
$connection = new mysqli($server, $username, $password, $database);

if ($connection->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $connection->connect_error]);
    exit;
}

if ($name) {
    $statement = $connection->prepare("SELECT name, marks FROM studenttb WHERE name = ?");
    if ($statement) {
        $statement->bind_param("s", $name);
        $statement->execute();
        $result = $statement->get_result();

        if ($result->num_rows > 0) {
            $record = $result->fetch_assoc();
            echo json_encode(["status" => "success", "record" => $record]);
        } else {
            echo json_encode(["status" => "error", "message" => "No record found with name = $name"]);
        }
        $statement->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Error at statement preparation"]);
    }
} else {
    $result = $connection->query("SELECT name, marks FROM studenttb");
    $records = [];
    while ($row = $result->fetch_assoc()) {
        $records[] = $row;
    }
    echo json_encode(["status" => "success", "records" => $records]);
}

$connection->close();
?>