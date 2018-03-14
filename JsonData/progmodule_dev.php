<?php
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
$data = isset($_GET['data'])?$_GET['data']:''; 
if(!empty($data)){
    $code = "inner join dev_module dm on dm.pg_id=dp.pg_id where module_id = $data";
} else {
    $code = "";
}
$sql = "SELECT * FROM dev_program dp $code";

    $conn_DB->imp_sql($sql);
    $dep = $conn_DB->select();
    print json_encode($dep);
$conn_DB->close_PDO();
?>