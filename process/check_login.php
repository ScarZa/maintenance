<?php
session_save_path("../session/");
session_start(); 
 //require_once '../class/dbPDO_mng.php';
function __autoload($class_name) {
    include_once '../class/'.$class_name.'.php';
}

$user_account = md5(trim(filter_input(INPUT_POST, 'user_account',FILTER_SANITIZE_STRING)));
$user_pwd = md5(trim(filter_input(INPUT_POST, 'user_pwd',FILTER_SANITIZE_ENCODED)));
// using PDO

$dbh=new dbPDO_mng();
$read="../connection/conn_DB.txt";
$dbh->para_read($read);
$dbh->conn_PDO();
//$dbh->getDb();
$sql = "select CONCAT(e1.firstname,' ',e1.lastname) as fullname, ss.ss_Name as id, ss.ss_Status as status, ss.ss_process as process, wh.depid as dep,ss.ss_UserID
from ss_member ss 
INNER JOIN emppersonal e1 on e1.empno=ss.ss_Name
INNER JOIN work_history wh ON wh.empno=e1.empno
inner join department d1 on wh.depid=d1.depId
where ss.ss_Username= :user_account && ss.ss_Password= :user_pwd and (ss.ss_process=0 or ss.ss_process=6) and (wh.dateEnd_w='0000-00-00' or ISNULL(wh.dateEnd_w))";
$execute=array(':user_account' => $user_account, ':user_pwd' => $user_pwd);
$dbh->imp_sql($sql);
$result=$dbh->select_a($execute);
if (!$result) {
 $sql2 = "select CONCAT(e1.firstname,' ',e1.lastname) as fullname, e1.empno as id, wh.depid as dep ,'USER' as status, '6' as process,'0' as ss_UserID
from emppersonal e1
INNER JOIN work_history wh ON wh.empno=e1.empno
inner join department d1 on wh.depid=d1.depId
inner join member m on m.Name=e1.empno
where m.Username= :user_account && m.Password= :user_pwd and (wh.dateEnd_w='0000-00-00' or ISNULL(wh.dateEnd_w))";
$execute2=array(':user_account' => $user_account, ':user_pwd' => $user_pwd);
$dbh->imp_sql($sql2);
$result=$dbh->select_a($execute2);   
}
if ($result) {
    $_SESSION['m_fullname'] = $result['fullname'];
    $_SESSION['m_id'] = $result['id'];
    $_SESSION['UserID'] = $result['ss_UserID'];
    $_SESSION['m_dep'] = $result['dep'];;
    $_SESSION['m_process'] = $result['process'];
    $_SESSION['m_status'] = $result['status'];
    
    //echo "Login สำเร็จครับ!";
}else{
	echo "ชื่อหรือรหัสผ่านผิด กรุณาตรวจสอบอีกครั้ง!";
        exit();
}

?>
