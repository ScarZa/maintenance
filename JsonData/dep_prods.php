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
//$rslt=array();
$result=array();
//if($_SESSION['m_status']=='ADMIN'){
//    $empno = isset($_GET['data'])?$_GET['data']:$_POST['data']; 
//    $sql="SELECT wh.depid
//FROM work_history wh 
//inner join department d1 on wh.depid=d1.depId
//WHERE wh.empno= :empno and (wh.dateEnd_w='0000-00-00' or ISNULL(wh.dateEnd_w))";
//$conn_DB->imp_sql($sql);
//$execute=array(':empno' => $empno);
//$result=$conn_DB->select_a($execute);
//$data = $result['depid'];
//}else{
   $data = isset($_GET['data'])?$_GET['data']:$_POST['data']; 
//}

$sql="SELECT pp.pd_id,pp.pd_number,pp.name,pp2.note
FROM pd_product pp
INNER JOIN pd_place pp2 on pp2.pd_id=pp.pd_id
INNER JOIN department d on d.depId=pp2.depId
INNER JOIN pd_status ps on ps.pd_status_id=pp.status
WHERE pp.group_id=10  AND pp.status=1 AND d.depId = :depId";
$conn_DB->imp_sql($sql);
$execute=array(':depId' => $data);
$result=$conn_DB->select($execute);    
print json_encode($result);
$conn_DB->close_PDO();
?>