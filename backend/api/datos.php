<?php
// api/datos.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "2008";
$dbname = "prueba";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);
$nombre = $data['nombre'];
$contrasena = $data['contrasena'];

$stmt = $conn->prepare("SELECT * FROM usuarios WHERE nombre = ? AND contrasena = ?");
$stmt->bind_param("ss", $nombre, $contrasena);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    $username = $resultado->fetch_assoc();
    echo json_encode([ 
        'success' => true,
        'message' => 'Inicio de sesión correcto',
        'username' => $username
    ]);
}else{
    echo json_encode([
        'success' => false,
        'message' => '¡Usuario y/o contraseña incorrectos!'
    ]);
}

$stmt->close();
$conn->close();
?>
