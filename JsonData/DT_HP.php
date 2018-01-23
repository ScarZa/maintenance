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
$sql="SELECT re.repair_id,re.strepair_date,re.enrepair_dare,DATEDIFF(re.enrepair_dare,re.strepair_date) day
,SUBSTR(TIMEDIFF(re.enrepair_time,re.strepair_time),1,5) time
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer) inform
,sc.symmptom_name
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.repairer) repairer
FROM m_repair_pd re
INNER JOIN m_symmptom_category sc on sc.symmptom_cid=re.cause
WHERE re.pd_id=:pd_id"; 
$execute = array(':pd_id' => $data);
    $conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select($execute);
    for($i=0;$i<count($num_risk);$i++){
    $series['repair_id']= $num_risk[$i]['repair_id'];
    $series['strepair_date'] = DateThai1($num_risk[$i]['strepair_date']);
    $series['enrepair_dare'] = DateThai1($num_risk[$i]['enrepair_dare']);
    $series['time']= $num_risk[$i]['day'].' วัน '.$num_risk[$i]['time'].' ชม.';
    $series['inform']= $num_risk[$i]['inform'];
    $series['symmptom_name']= $num_risk[$i]['symmptom_name'];
    $series['repairer']= $num_risk[$i]['repairer'];
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();