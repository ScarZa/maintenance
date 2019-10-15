<?php
session_save_path("../session/");
session_start(); 
// if (empty($_SESSION['rm_status'])) {
//     echo "<meta http-equiv='refresh' content='0;url=../index.html'/>";
//     exit();
// }
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../template/plugins/function_date.php';

$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();

$countnum = array();
$symmptom_g = isset($_GET['data2'])?$_GET['data2']:''; 
if (empty($_GET['data'])) {
                    if($date >= $bdate and $date <= $edate){
                             $y= $Yy;
                             $Y= date("Y");
                            }else{
                            $y = date("Y");
                            $Y = date("Y") - 1;
                            }
                        } else {
                            $y = $_GET['data'] - 543;
                            $Y = $y - 1;
                        }
                        $date_start = "$Y-10-01";
                        $date_end = "$y-09-30";
            $sql = "SELECT COUNT(mrp.repair_id)as repair,msc.symmptom_name
            FROM m_repair_pd mrp
            INNER JOIN m_symmptom_category msc on msc.symmptom_cid=mrp.cause
            WHERE msc.symmptom_gid=".$symmptom_g." and mrp.repair_date BETWEEN '".$date_start."' and '".$date_end."'
            GROUP BY msc.symmptom_cid ORDER BY repair desc";
            $conn_DB->imp_sql($sql);
            $rs = $conn_DB->select();
    $series['name'] = 'การซ่อม'; 
    $series['colorByPoint'] = 'true'; 
for($i=0;$i<count($rs);$i++){
    $countnum[0] = $rs[$i]['symmptom_name'];
    $countnum[1] = (int)$rs[$i]['repair'];
    
    $series['data'][$i] = $countnum;
     }            
    array_push($rslt, $series);
print json_encode($rslt);
$conn_DB->close_PDO();