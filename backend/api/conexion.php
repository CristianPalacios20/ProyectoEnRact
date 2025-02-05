<?php
// api/conexion.php
// $servername = getenv('DB_HOST'); 
// $username = getenv('DB_USERNAME'); 
// $password = getenv('DB_PASS'); 
// $dbname = getenv('DB_NAME'); 

$servername = '34.55.220.177';
$username =  'root';
$password = '2008'; 
$dbname = 'portafolio_csp';

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode([
        'success' => false,
        'message' => 'Error en la conexión a MySQL en Google Cloud'
    ]);
} else {
    echo 'Conexión exitosa a MySQL en Google Cloud';
}

?>

