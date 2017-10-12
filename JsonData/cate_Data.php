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
$group_id = isset($_GET['data'])?$_GET['data']:'';
$sql="select category_id,category_name from pd_category where group_id= :group_id order by category_name";
$execute = array(':group_id' => $group_id);
$conn_DB->imp_sql($sql);
$result=$conn_DB->select($execute);
print json_encode($result);
$conn_DB->close_PDO();
?>