<?php 
session_save_path("../session/");
session_start(); 
//require_once 'class/TablePDO.php';
function __autoload($class_name) {
    include '../class/'.$class_name.'.php';
}
//include 'class/TablePDO.php';
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$db=$conn_DB->conn_PDO();
$data= array();
if($db != FALSE){
                    $sql = "SELECT re.repair_id,re.repair_date
,if(re.pd_id!=0,pp.pd_number,if(re.no_pdid!=0,npd.no_pdname,if(re.request_data!=0,npd.no_pdname,''))) as pd_number
,ppl.note,LEFT(re.symptom,35) as symptom,depName,re.vital
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer) inform
FROM m_repair_pd re
LEFT OUTER JOIN pd_product pp on pp.pd_id=re.pd_id
LEFT OUTER JOIN m_no_pd npd on npd.no_pdid=re.no_pdid or npd.no_pdid=re.request_data
LEFT OUTER JOIN pd_place ppl on ppl.pd_id=pp.pd_id
LEFT OUTER JOIN department d on d.depId=re.depid
WHERE re.repair_status=0";
                    $conn_DB->imp_sql($sql);
                    $data = $conn_DB->select();
    print json_encode($data);
}
$conn_DB->close_PDO();
?>