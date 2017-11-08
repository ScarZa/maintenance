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
$sql="SELECT pp.pd_id,pp.pd_number,pp.name,d.depName,pp2.lnstalldate,pp2.movingdate,pp2.note,ps.pd_status
FROM pd_product pp
INNER JOIN pd_place pp2 on pp2.pd_id=pp.pd_id
INNER JOIN department d on d.depId=pp2.depId
INNER JOIN pd_status ps on ps.pd_status_id=pp.status"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['pd_id'] = $num_risk[$i]['pd_id'];
    $series['pd_number'] = $num_risk[$i]['pd_number'];
    $series['name']= $num_risk[$i]['name'];
    $series['depName']= $num_risk[$i]['depName'];
    $series['lnstalldate']= isset($num_risk[$i]['lnstalldate'])?DateThai1($num_risk[$i]['lnstalldate']):'';
    $series['movingdate']= isset($num_risk[$i]['movingdate'])?DateThai1($num_risk[$i]['movingdate']):'';
    //$series['detail_id'] = $conn_DB->sslEnc($num_risk[$i]['takerisk_id']);
    $series['note'] = $num_risk[$i]['note'];
    $series['pd_status'] = $num_risk[$i]['pd_status'];
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();