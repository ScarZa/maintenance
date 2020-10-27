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
$sql="SELECT re.repairT_id,re.repair_date,pp.pd_id,re.place,re.request_data,re.dg_img
,if(re.pd_id!=0,pp.pd_number,if(re.no_pdid!=0,npd.no_pdname,if(re.request_data!=0,npd.no_pdname,''))) as pd_number,ppl.note,re.symptom
,d.depName
,CASE re.vital
WHEN '0' THEN 'ไม่เร่งด่วน'
WHEN '1' THEN 'เร่งด่วน'
ELSE NULL END as vital,re.receive_date
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer) inform,pc.place_name
FROM m_repair_pdt re
LEFT OUTER JOIN pd_product pp on pp.pd_id=re.pd_id
LEFT OUTER JOIN m_no_pd npd on npd.no_pdid=re.no_pdid or npd.no_pdid=re.request_data
LEFT OUTER JOIN pd_place ppl on ppl.pd_id=pp.pd_id
LEFT OUTER JOIN department d on d.depId=re.depid
LEFT OUTER JOIN m_place pc on pc.place_id = re.place_id
WHERE repairT_id=:repairT_id";
$execute = array(':repairT_id' => $repairT_id);
$conn_DB->imp_sql($sql);
$result=$conn_DB->select_a($execute);
$data= array();
$data['repairT_id'] = $result['repairT_id'];
$data['repair_date'] = DateThai1($result['repair_date']);
$data['pd_id'] = $result['pd_id'];
$data['request_data'] = $result['request_data'];
$data['pd_number'] = $result['pd_number'];
$data['place_name'] = isset($result['place_name'])?$result['place_name']:'';
$data['place'] = isset($result['place'])?$result['place']:'';
$data['note'] = isset($result['note'])?$result['note']:'';
$data['symptom'] = $result['symptom'];
$data['dg_img'] = $result['dg_img'];
$data['depName'] = $result['depName'];
$data['vital'] = $result['vital'];
$data['inform'] = $result['inform'];
$data['receive_date'] = isset($result['receive_date'])?DateThai1($result['receive_date']):'';
print json_encode($data);
$conn_DB->close_PDO();
?>