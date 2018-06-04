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
$series = array();
$result=array();
$data = isset($_GET['data'])?$_GET['data']:$_POST['data']; 

$sql="SELECT dp.pg_name,dm.module_name,dh.dev_date,SUBSTR(dh.dev_stime,1,5)dev_stime,SUBSTR(dh.dev_etime,1,5)dev_etime
,SUBSTR(TIMEDIFF(dh.dev_etime,dh.dev_stime),1,5) total_time
,dh.dev_detail,CONCAT(e.firstname,' ',e.lastname)as fullname
FROM dev_history dh
INNER JOIN dev_module dm on dm.module_id=dh.module_id
INNER JOIN dev_program dp on dp.pg_id=dm.pg_id
INNER JOIN emppersonal e on e.empno=dh.developer
WHERE dh.dev_id= :dev_id";
$conn_DB->imp_sql($sql);
$execute=array(':dev_id' => $data);
$result=$conn_DB->select_a($execute);    
    $series['pg_name'] = $result['pg_name'];
    $series['module_name'] = $result['module_name'];
    $series['dev_detail'] = $result['dev_detail'];
    $series['dev_date'] = DateThai2($result['dev_date']);
    $series['dev_stime'] = $result['dev_stime'];
    $series['dev_etime'] = $result['dev_etime'];
    $series['total_time'] = $result['total_time'];
    $series['fullname']= $result['fullname'];
        
print json_encode($series);
$conn_DB->close_PDO();
?>