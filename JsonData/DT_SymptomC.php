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
$sql="SELECT sc.symmptom_cid,sg.symp_name,sc.symmptom_name
FROM m_symmptom_category sc
LEFT OUTER JOIN m_symptom_group sg on sg.symp_gid=sc.symmptom_gid
ORDER BY sg.symp_gid"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['ID'] = $num_risk[$i]['symmptom_cid'];
    $series['symp_name'] = $num_risk[$i]['symp_name'];
    $series['symmptom_name']= $num_risk[$i]['symmptom_name'];
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();