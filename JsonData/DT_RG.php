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
$sql="SELECT msp.symp_gid, COUNT(mrp.repair_id)as repair,msp.symp_name
FROM m_repair_pd mrp
INNER JOIN m_symmptom_category msc on msc.symmptom_cid=mrp.cause
INNER JOIN m_symptom_group msp on msp.symp_gid=msc.symmptom_gid
WHERE mrp.repair_date BETWEEN '".$date_start."' and '".$date_end."'
GROUP BY msp.symp_gid;"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['id'] = $num_risk[$i]['symp_gid'];
    $series['symp_name']= $num_risk[$i]['symp_name'];
    $series['repair']= $num_risk[$i]['repair'];
    //$series['detail_id'] = $conn_DB->sslEnc($num_risk[$i]['takerisk_id']);
    //$series['detail_id'] = $num_risk[$i]['takerisk_id'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();