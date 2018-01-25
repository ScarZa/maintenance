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
$sql="SELECT no_pdid
,CASE no_pdtype
WHEN '1' THEN 'แจ้งซ่อมคอมฯ(ไม่ใช่ครุภัณฑ์)'
WHEN '2' THEN 'ขอข้อมูล/รายงาน/Dev.'
ELSE NULL END as no_pdtype
,no_pdname
FROM m_no_pd"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['ID'] = $num_risk[$i]['no_pdid'];
    $series['no_pdtype'] = $num_risk[$i]['no_pdtype'];
    $series['no_pdname']= $num_risk[$i]['no_pdname'];
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();