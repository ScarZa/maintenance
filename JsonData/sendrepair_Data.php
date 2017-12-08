<?php session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');
function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once ('../template/plugins/funcDateThai.php');
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$rslt=array();
$result=array();
$repair_id = isset($_GET['data'])?$_GET['data']:$_POST['data'];
$sql="SELECT s.send_id,s.repair_id,pp.pd_id,pp.pd_number,s.send_date,s.repair_detail,c.comp_name 
FROM m_sendrep s
INNER JOIN m_repair_pd rp on rp.repair_id=s.repair_id
INNER JOIN pd_product pp on pp.pd_id = rp.pd_id
INNER JOIN se_company c on c.comp_id=s.comp_id
WHERE s.repair_id=:repair_id";
$execute = array(':repair_id' => $repair_id);
$conn_DB->imp_sql($sql);
$result=$conn_DB->select_a($execute);
$data= array();
$data['send_id'] = $result['send_id'];
$data['repair_id'] = $result['repair_id'];
$data['pd_id'] = $result['pd_id'];
$data['pd_number'] = $result['pd_number'];
$data['send_date'] = DateThai1($result['send_date']);
$data['repair_detail'] = $result['repair_detail'];
$data['comp_name'] = $result['comp_name'];
print json_encode($data);
$conn_DB->close_PDO();
?>