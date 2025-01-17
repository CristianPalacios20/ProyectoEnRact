<?php 
// api/registro.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "2008";
$dbname = "prueba";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode([
        'success' => false,
        'message' => 'Conexión fallida: ' . $conn->connect_error
    ]));
}

//obtener los datos del cuerpo de la solicitud
$data = json_decode(file_get_contents("php://input"), true);
$registroNombre = $data['nombre'];
$registroCorreo = $data['correo'];
$registroContrasena = $data['contrasena'];

//encriptar la contraseña
$hashedPassword = password_hash($registroContrasena, PASSWORD_DEFAULT);

$stmCheck = $conn->prepare("SELECT * FROM usuarios WHERE correo = ?");
$stmCheck -> bind_param("s", $registroCorreo);
$stmCheck -> execute();

$resultCheck = $stmCheck->get_result();

if($resultCheck->num_rows > 0){
    echo json_encode([
        'success' => false,
        'message' => '¡El correo ya está registrado!'
    ]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)");
$stmt -> bind_param("sss", $registroNombre, $registroCorreo, $hashedPassword);

if($stmt->execute()){
    echo json_encode([
        'success' => true,
        'message' => 'Usuario registrado correctamente'
    ]);
}else{
    echo json_encode([
        'success' => false,
        'message' => 'Error al registrar el usuario: '. $stmt->error
    ]);
}

$stmt->close();
$conn->close();

?>