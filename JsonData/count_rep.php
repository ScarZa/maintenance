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
                    $sql = "select count(re.repair_id) AS alertRepair FROM m_repair_pd re
                WHERE re.repair_status=0";
                    $conn_DB->imp_sql($sql);
                    $resultrep=$conn_DB->select_a();

$data['alertRepair'] = $resultrep['alertRepair'];
   
    print json_encode($data);
}
$conn_DB->close_PDO();
?>