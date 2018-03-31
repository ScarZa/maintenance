<?php 
session_save_path("../session/");
session_start(); 
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
$empno=$_SESSION['m_id'];
//$empno=30;
if($db != FALSE){
//$db=$conn_DB->getDb();
//===ชื่อกลุ่ม
                    $sql = "select concat(p1.pname,e1.firstname,' ',e1.lastname) as fullname,d1.depName as dep,p2.posname as posi,e1.empno as empno,wh.depId
                                                        from emppersonal e1 
                                                        inner join pcode p1 on e1.pcode=p1.pcode
                                                        INNER JOIN work_history wh ON wh.empno=e1.empno
                                                        inner join department d1 on wh.depId=d1.depId
                                                        inner join posid p2 on wh.posid=p2.posId
                                                        where e1.empno='$empno' and (wh.dateEnd_w='0000-00-00' or ISNULL(wh.dateEnd_w))";
                    $conn_DB->imp_sql($sql);
                    $result=$conn_DB->select_a();
}                               
$data= array();
$data['fullname'] = $result['fullname'];
$data['depId'] = $result['depId'];
$data['dep'] = $result['dep'];
$data['posi'] = $result['posi'];
$data['empno'] = $result['empno'];
$data['status']=$_SESSION['m_status'];
$data['m_process']=$_SESSION['m_process'];
print json_encode($data);
$conn_DB->close_PDO();
?>