    <?php
    // api/conexion.php
    $servername = "localhost";
    $username = "root";
    $password = "2008";
    $dbname = "portafolio_csp";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // if ($conn->connect_error) {
    //     die("Conexión fallida: " . $conn->connect_error);
    // }
    if ($conn->connect_error) {
        echo json_encode([
            'success' => false,
            'message' => 'Error en la conexión a la base de datos'
        ]);
        exit;
    }

    ?>
