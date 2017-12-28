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
$sql="SELECT s.*,sc.comp_name
FROM m_sendrep s
INNER JOIN se_company sc on sc.comp_id=s.comp_id
WHERE s.repair_id=:repair_id";
$execute = array(':repair_id' => $repair_id);
$conn_DB->imp_sql($sql);
$result=$conn_DB->select_a($execute);
$data= array();
$data['repair_id'] = $result['repair_id'];
$data['comp_name'] = $result['comp_name'];
$data['repair_detail'] = $result['repair_detail'];
$data['send_price'] = $result['send_price'];
$data['send_date'] = isset($result['send_date'])?DateThai1($result['send_date']):'';
$data['resend_date'] = isset($result['resend_date'])?DateThai1($result['resend_date']):'';
print json_encode($data);
$conn_DB->close_PDO();
?>