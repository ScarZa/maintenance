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
$sql="SELECT msc.symmptom_cid, COUNT(mrp.repair_id)as repair,msc.symmptom_name
FROM m_repair_pd mrp
INNER JOIN m_symmptom_category msc on msc.symmptom_cid=mrp.cause
WHERE msc.symmptom_gid=".$data2." and mrp.repair_date BETWEEN '".$date_start."' and '".$date_end."'
GROUP BY msc.symmptom_cid ORDER BY repair desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    for($i=0;$i<count($num_risk);$i++){
    $series['id'] = $num_risk[$i]['symmptom_cid'];
    $series['symmptom_name']= $num_risk[$i]['symmptom_name'];
    $series['repair']= $num_risk[$i]['repair'];
    //$series['detail_id'] = $conn_DB->sslEnc($num_risk[$i]['takerisk_id']);
    //$series['detail_id'] = $num_risk[$i]['takerisk_id'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();