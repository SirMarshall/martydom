<?php
//If we get a get request, we will return the articles
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $servername = "localhost";
    $username = "marttsno_admin";
    $password = "bitchdriplet";
    $dbname = "marttsno_martyrdom";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Write the query
    $sql = "SELECT * FROM articles";

    // Execute the query
    $result = $conn->query($sql);

    $conn->close();

    //Encode the results to json and return them
    echo json_encode($result->fetch_all(MYSQLI_ASSOC));
}
