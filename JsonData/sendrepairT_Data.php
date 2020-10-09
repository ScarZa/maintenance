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
$repairT_id = isset($_GET['data'])?$_GET['data']:$_POST['data'];
$sql="SELECT s.send_id,s.repairT_id,pp.pd_id
,if(rp.pd_id!=0,pp.pd_number,if(rp.no_pdid!=0,npd.no_pdname,if(rp.request_data!=0,npd.no_pdname,''))) as pd_number
,s.send_date,s.repair_detail,c.comp_name 
FROM m_sendrept s
INNER JOIN m_repair_pdt rp on rp.repairT_id=s.repairT_id
LEFT OUTER JOIN pd_product pp on pp.pd_id = rp.pd_id
LEFT OUTER JOIN m_no_pd npd on npd.no_pdid=rp.no_pdid or npd.no_pdid=rp.request_data
INNER JOIN se_company c on c.comp_id=s.comp_id
WHERE s.repairT_id=:repairT_id";
$execute = array(':repairT_id' => $repairT_id);
$conn_DB->imp_sql($sql);
$result=$conn_DB->select_a($execute);
$data= array();
$data['send_id'] = $result['send_id'];
$data['repairT_id'] = $result['repairT_id'];
$data['pd_id'] = $result['pd_id'];
$data['pd_number'] = $result['pd_number'];
$data['send_date'] = DateThai1($result['send_date']);
$data['repair_detail'] = $result['repair_detail'];
$data['comp_name'] = $result['comp_name'];
print json_encode($data);
$conn_DB->close_PDO();
?>