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
//$rslt=array();
$result=array();
$data = isset($_GET['data'])?$_GET['data']:$_POST['data'];
$sql="SELECT ss_UserID,ss_Name,ss_user_name,ss_Status,ss_process FROM ss_member WHERE ss_UserID= :ss_UserID";
$conn_DB->imp_sql($sql);
$execute=array(':ss_UserID' => $data);
$result=$conn_DB->select_a($execute);
print json_encode($result);
$conn_DB->close_PDO();
?>