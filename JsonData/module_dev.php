<?php session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');
function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once ('../template/plugins/funcDateThai.php');
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$rslt=array();
$result=array();
$pg_id = isset($_GET['data'])?$_GET['data']:'';
$sql="select module_id,module_name from dev_module where pg_id= :pg_id";
$execute = array(':pg_id' => $pg_id);
$conn_DB->imp_sql($sql);
$result=$conn_DB->select($execute);
print json_encode($result);
$conn_DB->close_PDO();
?>