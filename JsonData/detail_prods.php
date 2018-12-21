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
$sql="SELECT * FROM pd_product pd INNER JOIN pd_place pp on pp.pd_id=pd.pd_id WHERE pd.pd_id= :pd_id";
$conn_DB->imp_sql($sql);
$execute=array(':pd_id' => $data);
$result=$conn_DB->select_a($execute);
if(isset($_GET['data2'])){
    $result['count'] = $_GET['data2'];    
}
print json_encode($result);
$conn_DB->close_PDO();
?>