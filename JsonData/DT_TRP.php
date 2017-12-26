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
//$rslt = array();
$series = array();
$sql="SELECT COUNT(re.repair_id) total_repair
,(SELECT COUNT(re.repair_id) FROM m_repair_pd re WHERE re.repair_status=0) req_repair
,(SELECT COUNT(re.repair_id) FROM m_repair_pd re WHERE re.repair_status=1) list_repair
,(SELECT COUNT(re.repair_id) FROM m_repair_pd re WHERE re.repair_status=3 and re.send_repair=1 and re.end_process=0) send_repair
,(SELECT COUNT(re.repair_id) FROM m_repair_pd re WHERE re.result=1 and re.end_process=1) succ_repair
,(SELECT COUNT(re.repair_id) FROM m_repair_pd re WHERE re.repair_status=3 and re.result=0 and re.end_process=1) not_repair
FROM m_repair_pd re
"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['total_repair'] = $num_risk[$i]['total_repair'];
    $series['req_repair'] = $num_risk[$i]['req_repair'];
    $series['list_repair'] = $num_risk[$i]['list_repair'];
    $series['send_repair']= $num_risk[$i]['send_repair'];
    $series['succ_repair'] = $num_risk[$i]['succ_repair'];
    $series['not_repair']= $num_risk[$i]['not_repair'];
    //array_push($rslt, $series);    
    }
print json_encode($series);
$conn_DB->close_PDO();