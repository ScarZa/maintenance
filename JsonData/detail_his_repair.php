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
$repairT_id = isset($_GET['data'])?$_GET['data']:'';
$sql = "SELECT rh.dev_date,SUBSTR(rh.dev_stime,1,5)dev_stime ,SUBSTR(rh.dev_etime,1,5)dev_etime,rh.dev_detail
,CONCAT(e.firstname,' ',e.lastname)fullname
FROM rept_history rh
INNER JOIN emppersonal e on e.empno = rh.developer
WHERE rh.repairT_id = :repairT_id
ORDER BY rh.dev_date asc";
$execute = array(':repairT_id' => $repairT_id);
$conn_DB->imp_sql($sql);
$dep=$conn_DB->select($execute);
print json_encode($dep);
$conn_DB->close_PDO();
?>