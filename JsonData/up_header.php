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
//$db=$conn_DB->getDb();
//===ชื่อกลุ่ม
                    $sql = "select * from  hospital order by hospital limit 1";
                    $conn_DB->imp_sql($sql);
                    $resultComm=$conn_DB->select_a();
                    $pic = "";
                    $fol = "";
                    if (!empty($resultComm['logo'])) {
                                    $pic = $resultComm['logo'];
                                    $fol = "logo";
                                } else {
                                    $pic = 'agency.ico';
                                    $fol = "images";
                                }

$data['logo'] = $fol.'/'.$pic;
$data['hos_name'] = $resultComm['name'];
$data['hos_name2'] = $resultComm['name2'];
$data['m_id'] = isset($_SESSION['m_id'])?(int) $_SESSION['m_id']:'';
$data['m_fullname'] = isset($_SESSION['m_fullname'])?$_SESSION['m_fullname']:'';
$data['m_dep'] = isset($_SESSION['m_dep'])?(int) $_SESSION['m_dep']:'';
$data['m_process'] = isset($_SESSION['m_process'])?(int) $_SESSION['m_process']:'';
$data['m_status'] = isset($_SESSION['m_status'])?$_SESSION['m_status']:''; 
print json_encode($data);                       
}else {
    $data['check']=  md5(trim('check'));
    $data['conn']='Connect_DB_false';
   print json_encode($data);
                                }
$conn_DB->close_PDO();
?>