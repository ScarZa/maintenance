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
$sql="SELECT re.repair_id,re.repair_date,pp.pd_number,ppl.note,re.symptom
,depName
,CASE re.vital
WHEN '0' THEN 'ไม่เร่งด่วน'
WHEN '1' THEN 'เร่งด่วน'
ELSE NULL END as vital
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer) inform
FROM m_repair_pd re
INNER JOIN pd_product pp on pp.pd_id=re.pd_id
INNER JOIN pd_place ppl on ppl.pd_id=pp.pd_id
INNER JOIN department d on d.depId=ppl.depId
WHERE re.repair_status=0"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['repair_id'] = $num_risk[$i]['repair_id'];
    $series['repair_date'] = isset($num_risk[$i]['repair_date'])?DateThai1($num_risk[$i]['repair_date']):'';
    $series['pd_number']= $num_risk[$i]['pd_number'];
    $series['note'] = $num_risk[$i]['note'];
    $series['symptom']= $num_risk[$i]['symptom'];
    $series['depName']= $num_risk[$i]['depName'];
    $series['vital']= $num_risk[$i]['vital'];
    $series['inform'] = $num_risk[$i]['inform'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();