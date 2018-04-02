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
$sql="SELECT CONCAT(e.firstname,' ',e.lastname) fullname,e.empno FROM emppersonal e
INNER JOIN work_history wh ON wh.empno=e.empno
inner join ss_member m on m.ss_Name=e.empno
WHERE (m.ss_process=0 or m.ss_process=6) and (wh.dateEnd_w='0000-00-00' or ISNULL(wh.dateEnd_w)) group by e.empno ORDER BY e.empno DESC";
$conn_DB->imp_sql($sql);
$result=$conn_DB->select();
print json_encode($result);
$conn_DB->close_PDO();
?>