<?php
// api/conexion.php
$servername = getenv('DB_HOST');  // Dirección IP o nombre de host de la base de datos
$username = getenv('DB_USERNAME');  // Usuario de la base de datos
$password = getenv('DB_PASS');  // Contraseña del usuario de la base de datos
$dbname = getenv('DB_NAME');  // Nombre de la base de datos

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

