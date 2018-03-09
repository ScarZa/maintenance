<?php
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once '../template/plugins/function_date.php';
include_once '../template/plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();
$data = isset($_GET['data'])?$_GET['data']:'';
//if(empty($data)){
//    $code='';
//} else {
//    $code="WHERE pp.group_id=".$data;
//}
$sql="SELECT dm.module_id,dp.pg_name,dm.module_name FROM dev_module dm
INNER JOIN dev_program dp on dp.pg_id=dm.pg_id
WHERE dm.pg_id=".$data; 
    $conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['module_id'] = $num_risk[$i]['module_id'];
    $series['pg_name'] = $num_risk[$i]['pg_name'];
    $series['module_name']= $num_risk[$i]['module_name'];
        
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();