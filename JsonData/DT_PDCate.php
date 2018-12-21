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
$sql="SELECT pc.category_id,pg.group_name,pc.category_name,pc.gp_id,pc.cate_type,pc.cate_kind 
FROM pd_category pc
INNER JOIN pd_group pg on pg.group_id=pc.group_id
ORDER BY pc.gp_id ASC"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['ID'] = $num_risk[$i]['category_id'];
    $series['group_name'] = $num_risk[$i]['group_name'];
    $series['category_name']= $num_risk[$i]['category_name'];
    $series['gp_id']= $num_risk[$i]['gp_id'];
    $series['cate_type']= $num_risk[$i]['cate_type'];
    $series['cate_kind']= $num_risk[$i]['cate_kind'];
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();