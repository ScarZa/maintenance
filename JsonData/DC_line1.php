<?php

header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../template/plugins/function_date.php';
if (empty($_GET['data'])) {
    if($date >= $bdate and $date <= $edate){
                            $y= $Yy;
                            $Y= date("Y");
                            $year = $Yy;
                            $years = $year + 543;
                           }else{
                           $y = date("Y");
                           $Y = date("Y") - 1;
                           $year = date('Y');
                           $years = $year + 543;
                           }
                       } else {
                           $YeaR=$_GET['data'];
                           $y = $_GET['data'] - 543;
                           $Y = $y - 1;
                           $year = $_GET['data'] - 543;
                           $years = $year + 543;
                       }
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$num_category = "select count(symp_gid) as count_cate from m_symptom_group";
$conn_DB->imp_sql($num_category);
$count_cate = $conn_DB->select_a();
$count_categ = $count_cate['count_cate'];
$rslt = array();
$series = array();

$I = 10;
for ($c = 1; $c <= $count_categ; $c++) {
    $sql_name = "SELECT symp_name as name
FROM m_symptom_group
WHERE symp_gid='$c'";
    $conn_DB->imp_sql($sql_name);
    $cat_name = $conn_DB->select_a();
$countnum = array();
$cc=0;
    for ($i = -2; $i <= 9; $i++) {
        if($I>12){ $I=10;}
        if ($i <= 0) {
            $month_start = "$Y-$I-01";
            $month_end = "$Y-$I-31";
        } elseif ($i >= 1 and $i <= 9) {
            $month_start = "$year-0$i-01";
            $month_end = "$year-0$i-31";
        } else {
            $month_start = "$year-$i-01";
            $month_end = "$year-$i-31";
        }
           $sql = "select count(re.repair_id) as number_repair
from m_repair_pd re  
LEFT OUTER JOIN m_symmptom_category sc on sc.symmptom_cid=re.cause
LEFT OUTER JOIN m_symptom_group sg on sg.symp_gid=sc.symmptom_gid
where  sg.symp_gid='$c' and re.repair_date between '$month_start' and '$month_end' 
order by number_repair DESC";
            $conn_DB->imp_sql($sql);
            $rs = $conn_DB->select_a();
            $countnum[$cc]= (int) $rs['number_repair'];
        $I++;$cc++;
    }
    $series['name'] = $cat_name['name'];
    $series['data'] = $countnum;
    
array_push($rslt, $series);
}
print json_encode($rslt);
$conn_DB->close_PDO();