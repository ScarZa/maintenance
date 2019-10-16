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
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
if (empty($data)) {
    if($date >= $bdate and $date <= $edate){
             $y= $Yy;
             $Y= date("Y");
            }else{
            $y = date("Y");
            $Y = date("Y") - 1;
            }
        } else {
            $y = $data - 543;
            $Y = $y - 1;
        }
        $date_start = "$Y-10-01";
        $date_end = "$y-09-30";
$sql="SELECT re.repair_id,re.repair_date
,if(re.pd_id!=0,pp.pd_number,if(re.no_pdid!=0,npd.no_pdname,if(re.request_data!=0,npd.no_pdname,''))) as pd_number
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer) informer
,CASE re.result+re.end_process
WHEN 1 THEN 'ซ่อมไม่ได้'
WHEN 2 THEN 'ซ่อมสำเร็จ'
ELSE 'อยู่ระหว่างดำเนินการ' END as status
,re.receive_date
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.repairer) repairer
FROM m_repair_pd re
INNER JOIN m_symmptom_category msc on msc.symmptom_cid=re.cause
LEFT OUTER JOIN pd_product pp on pp.pd_id=re.pd_id
LEFT OUTER JOIN m_no_pd npd on npd.no_pdid=re.no_pdid or npd.no_pdid=re.request_data
LEFT OUTER JOIN pd_place ppl on ppl.pd_id=pp.pd_id
LEFT OUTER JOIN department d on d.depId=ppl.depId
WHERE msc.symmptom_cid=".$data2." and re.repair_date BETWEEN '".$date_start."' and '".$date_end."'
ORDER BY repair_id DESC;"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['repair_id'] = $num_risk[$i]['repair_id'];
    $series['repair_date'] = isset($num_risk[$i]['repair_date'])?DateThai1($num_risk[$i]['repair_date']):'';
    $series['pd_number']= $num_risk[$i]['pd_number'];
    $series['informer'] = isset($num_risk[$i]['informer'])?$num_risk[$i]['informer']:'';
    $series['receive_date'] = isset($num_risk[$i]['receive_date'])?DateThai1($num_risk[$i]['receive_date']):'';
    $series['repairer'] = isset($num_risk[$i]['repairer'])?$num_risk[$i]['repairer']:'';
    $series['status']= $num_risk[$i]['status'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();