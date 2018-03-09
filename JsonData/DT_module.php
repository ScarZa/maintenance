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
$sql="SELECT dh.dev_id,dh.dev_date,SUBSTR(dh.dev_stime,1,5)stime,SUBSTR(dh.dev_etime,1,5)etime,CONCAT(e.firstname,' ',e.lastname) as fullname
FROM dev_history dh
INNER JOIN emppersonal e on e.empno=dh.developer
WHERE dh.module_id=".$data; 
    $conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['dev_id'] = $num_risk[$i]['dev_id'];
    $series['dev_date'] = DateThai2($num_risk[$i]['dev_date']);
    $series['stime'] = $num_risk[$i]['stime'];
    $series['etime'] = $num_risk[$i]['etime'];
    $series['fullname']= $num_risk[$i]['fullname'];
        
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();