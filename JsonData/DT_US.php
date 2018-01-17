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
$sql="SELECT  ssm.ss_UserID as ID ,CONCAT(e1.firstname,' ',e1.lastname) AS fullname,d2.depName AS dep,
ssm.ss_Status AS status, ssm.ss_user_name
FROM ss_member ssm
INNER JOIN emppersonal e1 ON ssm.ss_Name=e1.empno
INNER JOIN department d2 ON d2.depId=e1.depid
where ssm.ss_process='0' or ssm.ss_process='6'
order by ID"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['ID'] = $num_risk[$i]['ID'];
    $series['fullname'] = $num_risk[$i]['fullname'];
    $series['dep']= $num_risk[$i]['dep'];
    $series['status']= $num_risk[$i]['status'];
    $series['ss_user_name']= $num_risk[$i]['ss_user_name'];
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();