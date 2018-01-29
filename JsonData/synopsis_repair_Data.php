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
$sql="SELECT re.repair_id,re.repair_date,pp.pd_id
,if(re.pd_id!=0,pp.pd_number,if(re.no_pdid!=0,npd.no_pdname,if(re.request_data!=0,npd.no_pdname,''))) as pd_number
,ppl.note,re.symptom,depName
,re.accessories,re.send_repair,syg.symp_name,syc.symmptom_name,re.repair_detail,re.result_recdate
,CASE re.vital
WHEN '0' THEN 'ไม่เร่งด่วน'
WHEN '1' THEN 'เร่งด่วน'
ELSE NULL END as vital
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer) inform
,re.receive_date
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.receiver) receiver
,re.strepair_date,re.enrepair_dare
,DATEDIFF(re.enrepair_dare,re.strepair_date) total_day
,TIMEDIFF(re.enrepair_time,re.strepair_time) total_time
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.repairer) repairer
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.rece_pd) rece_pd
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.result_recorder) result_recorder
FROM m_repair_pd re
LEFT OUTER JOIN pd_product pp on pp.pd_id=re.pd_id
LEFT OUTER JOIN pd_place ppl on ppl.pd_id=pp.pd_id
LEFT OUTER JOIN m_no_pd npd on npd.no_pdid=re.no_pdid or npd.no_pdid=re.request_data
LEFT OUTER JOIN m_symmptom_category syc on syc.symmptom_cid=re.cause
LEFT OUTER JOIN m_symptom_group syg on syg.symp_gid=syc.symmptom_gid
LEFT OUTER JOIN department d on d.depId=re.depid
WHERE repair_id=:repair_id";
$execute = array(':repair_id' => $repair_id);
$conn_DB->imp_sql($sql);
$result=$conn_DB->select_a($execute);
$data= array();
$data['repair_id'] = $result['repair_id'];
$data['repair_date'] = DateThai1($result['repair_date']);
$data['pd_id'] = $result['pd_id'];
$data['pd_number'] = $result['pd_number'];
$data['note'] = $result['note'];
$data['symptom'] = $result['symptom'];
$data['depName'] = $result['depName'];
$data['vital'] = $result['vital'];
$data['accessories'] = $result['accessories'];
$data['send_repair'] = $result['send_repair'];
$data['symp_name'] = $result['symp_name'];
$data['symmptom_name'] = $result['symmptom_name'];
$data['repair_detail'] = $result['repair_detail'];
$data['inform'] = $result['inform'];
$data['receiver'] = $result['receiver'];
$data['repairer'] = $result['repairer'];
$data['rece_pd'] = $result['rece_pd'];
$data['result_recorder'] = $result['result_recorder'];
$data['total_day'] = $result['total_day'];
$data['total_time'] = substr($result['total_time'], 0,5);
$data['receive_date'] = isset($result['receive_date'])?DateThai1($result['receive_date']):'';
$data['result_recdate'] = isset($result['result_recdate'])?DateThai1($result['result_recdate']):'';
$data['strepair_date'] = isset($result['strepair_date'])?DateThai1($result['strepair_date']):'';
$data['enrepair_dare'] = isset($result['enrepair_dare'])?DateThai1($result['enrepair_dare']):'';
print json_encode($data);
$conn_DB->close_PDO();
?>