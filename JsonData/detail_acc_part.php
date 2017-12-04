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
$repair_id = isset($_GET['data'])?$_GET['data']:'';
$sql = "SELECT accp.accp_name,acc.acc_detail,acc.acc_price FROM m_accessories acc
INNER JOIN m_acc_part accp on accp.accp_id=acc.acc_part
WHERE acc.repair_id= :repair_id";
$execute = array(':repair_id' => $repair_id);
$conn_DB->imp_sql($sql);
$dep=$conn_DB->select($execute);
print json_encode($dep);
$conn_DB->close_PDO();
?>