<?php

session_save_path("../session/");
session_start();

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();

function insert_date($take_date_conv) {
    $take_date = explode("-", $take_date_conv);
    $take_date_year = @$take_date[2] - 543;
    $take_date = "$take_date_year-" . @$take_date[1] . "-" . @$take_date[0] . "";
    return $take_date;
}

$method = isset($_POST['method']) ? $_POST['method'] : $_GET['method'];
if ($method == 'add_repair') {
    $informer = $_POST['informer'];
    $depid = $_POST['depid'];
    $repair_date = isset($_POST['repair_date'])?insert_date($_POST['repair_date']):date('Y-m-d H:i:s');
    $record_date = date('Y-m-d H:i:s');
    $pd_id = isset($_POST['pd_id'])?$_POST['pd_id']:'';
    $no_pdid = isset($_POST['no_pdid'])?$_POST['no_pdid']:'';
    $request_data = isset($_POST['request_data'])?$_POST['request_data']:'';
    $vital = $_POST['vital'];
    $repair_status = 0;
    $symptom = $_POST['symptom'];
    
    $sql="SELECT * FROM m_repair_pd WHERE pd_id=:pd_id and pd_id !='' AND end_process = 0"; 
$connDB->imp_sql($sql);
$execute = array(':pd_id' => $pd_id);
$chkRepair = $connDB->select($execute);
if(count($chkRepair)==0){    
    $data = array($informer, $depid, $repair_date, $record_date, $pd_id, $no_pdid, $request_data,$vital, $repair_status,$symptom);
    $table = "m_repair_pd";
    $add_repair = $connDB->insert($table, $data);
    
    $sql="SELECT re.repair_date
,if(re.pd_id!=0,pp.pd_number,if(re.no_pdid!=0,npd.no_pdname,if(re.request_data!=0,npd.no_pdname,''))) as pd_number
,IFNULL(ppl.note,'-') note,re.symptom,d.depName
,CASE re.vital
WHEN '0' THEN 'ไม่เร่งด่วน'
WHEN '1' THEN 'เร่งด่วน'
ELSE NULL END as vital
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer) inform
FROM m_repair_pd re
LEFT OUTER JOIN pd_product pp on pp.pd_id=re.pd_id
LEFT OUTER JOIN m_no_pd npd on npd.no_pdid=re.no_pdid or npd.no_pdid=re.request_data
LEFT OUTER JOIN pd_place ppl on ppl.pd_id=pp.pd_id
LEFT OUTER JOIN department d on d.depId=re.depid
WHERE re.repair_id= :repair_id"; 
$connDB->imp_sql($sql);
$execute = array(':repair_id' => $add_repair);
$LineText = $connDB->select_a($execute);
        //////////////////// Line Notify //////////////////////////////
if(!empty($_SESSION['m_tokenkey'])){  
include_once '../function/LineNotify.php';  
include_once '../template/plugins/funcDateThai.php';
$token = $_SESSION['m_tokenkey'];
$text = "แจ้งซ่อม : ".DateThai1($LineText['repair_date'])." เวลา ".substr($LineText['repair_date'], 11,5)." น.\n".$LineText['pd_number']." ".$LineText['symptom']." ".$LineText['depName']." ".$LineText['inform']." ".$LineText['vital'];
 
$res = notify_message($text,$token);
}
//print_r($res);

/////////////////////
        
    $connDB->close_PDO();
    if ($add_repair == false) {
        echo "Insert not complete " .$add_repair->errorInfo();
    } else {
        echo "Insert complete!!!!";
    }
}else{
    echo "ครุภัณฑ์คอมพิวเตอร์ชิ้นนี้อยู่ระหว่างการซ่อมครับ";
}
}elseif ($method == 'edit_repair') {
    $repair_id= $_POST['repair_id'];
    $repair_date =insert_date($_POST['datepicker1']);
    $record_date = date('Y-m-d H:i:s');
    $pd_id = isset($_POST['pd_id'])?$_POST['pd_id']:'';
    $no_pdid = isset($_POST['no_pdid'])?$_POST['no_pdid']:'';
    $request_data = isset($_POST['request_data'])?$_POST['request_data']:'';
    $vital = $_POST['vital'];
    $symptom = $_POST['symptom'];
    
    $data = array($repair_date, $record_date, $pd_id, $no_pdid, $request_data,$vital, $symptom);
    $field=array("repair_date","record_date","pd_id", "no_pdid", "request_data","vital","symptom");
    $table = "m_repair_pd";
    $where="repair_id=:repair_id";
    $execute=array(':repair_id' => $repair_id);
    $edit_repair=$connDB->update($table, $data, $where, $field, $execute);
    $connDB->close_PDO();
    if ($edit_repair == false) {
        echo "Update not complete " .$edit_repair->errorInfo();
    } else {
        echo "Update complete!!!!";
    }
}elseif ($method == 'receive_repair') {
    $repair_id= $_POST['repair_id'];
    $receiver=$_SESSION['m_id'];
    $repairer = $_POST['repairer'];
    $length = $_POST['length'];
    $receive_date =insert_date($_POST['datepicker1']);
    $repair_status = 1;
    
    $data = array($repairer, $length, $receiver, $receive_date, $repair_status);
    $field=array("repairer","length","receiver","receive_date","repair_status");
    $table = "m_repair_pd";
    $where="repair_id=:repair_id";
    $execute=array(':repair_id' => $repair_id);
    $receive_repair=$connDB->update($table, $data, $where, $field, $execute);
    $connDB->close_PDO();
    if ($receive_repair == false) {
        echo "Update not complete " .$receive_repair->errorInfo();
    } else {
        echo "Update complete!!!!";
    }
}elseif ($method == 'record_repair') {
    $repair_id= $_POST['repair_id'];
    $result = $_POST['result'];
    $accessories = $_POST['accessories'];
    $strepair_date =insert_date($_POST['datepicker1']);
    $take_hours = isset($_POST['H-begin']) ? $_POST['H-begin'] : '';
    $take_minutes = isset($_POST['M-begin']) ? $_POST['M-begin'] : '';
    $strepair_time = $take_hours . ":" . $take_minutes;
    $enrepair_dare =insert_date($_POST['datepicker2']);
    $take_houre = isset($_POST['H-end']) ? $_POST['H-end'] : '';
    $take_minutee = isset($_POST['M-end']) ? $_POST['M-end'] : '';
    $enrepair_time = $take_houre . ":" . $take_minutee;
    $rece_pd = $_POST['rece_pd'];
    $rece_pd_date = $enrepair_dare;
    $cause = $_POST['cause'];
    $repair_detail = $_POST['repair_detail'];
    $result_recorder=$_SESSION['m_id'];
    $result_recdate = date("Y-m-d H:i:s");
    if($result==1){
    $end_process = 1;
    $repair_status = 2;
        if($accessories==0){
            $send_repair = 0;
        }elseif ($accessories==1) {
            $send_repair = $_POST['send_repair'];        
        }
    }elseif($result==0){
    $repair_status = 3;
    $send_repair = $_POST['send_repair'];
        if ($send_repair==0){
            $end_process = 1;
            $pd_id = $_POST['pd_id'];   
            $data0 = array(3);
            $field0=array("status");
            $table0 = "pd_product";
            $where0="pd_id=:pd_id";
            $execute0=array(':pd_id' => $pd_id);
            $connDB->update($table0, $data0, $where0, $field0, $execute0); 
        }else{ $end_process = 0; }  
    }
    
    $data = array($result, $accessories, $strepair_date,$strepair_time, $enrepair_dare,$enrepair_time, $rece_pd, $rece_pd_date, $cause, $repair_detail,$result_recorder,$result_recdate,$repair_status,$send_repair,$end_process);
    $field=array("result","accessories","strepair_date","strepair_time","enrepair_dare","enrepair_time","rece_pd","rece_pd_date","cause","repair_detail","result_recorder","result_recdate","repair_status","send_repair","end_process");
    $table = "m_repair_pd";
    $where="repair_id=:repair_id";
    $execute=array(':repair_id' => $repair_id);
    $record_repair=$connDB->update($table, $data, $where, $field, $execute);
    $connDB->close_PDO();
    if ($record_repair == false) {
        echo "Update not complete " .$record_repair->errorInfo();
    } else {
        echo "Update complete!!!!";
    }
}elseif ($method == 'receiveRe_repair') {
    ////////////////// Receive Repair /////////////////
    $send_id = $_POST['send_id'];
    $send_price = $_POST['send_price'];
    $resend_date = insert_date($_POST['datepicker1']);
    $resend_status = 1;
    ////////////////// Record Repair //////////////////
    $repair_id= $_POST['repair_id'];
    $result_recorder=$_SESSION['m_id'];
    $result = $_POST['result'];
    $enrepair_dare = $resend_date;
    $rece_pd = $_POST['rece_pd'];
    $rece_pd_date = $enrepair_dare;
    $cause = $_POST['cause'];
    $repair_detail = $_POST['repair_detail'];
    $result_recdate = date("Y-m-d H:i:s");
    
    if ($result==0){
            $pd_id = $_POST['pd_id'];   
            $data0 = array(3);
            $field0=array("status");
            $table0 = "pd_product";
            $where0="pd_id=:pd_id";
            $execute0=array(':pd_id' => $pd_id);
            $connDB->update($table0, $data0, $where0, $field0, $execute0); 
        }
    
    $data = array($send_price, $resend_date, $resend_status);
    $field=array("send_price","resend_date","resend_status");
    $table = "m_sendrep";
    $where="send_id=:send_id";
    $execute=array(':send_id' => $send_id);
    $send_repair=$connDB->update($table, $data, $where, $field, $execute);
        
    $data2 = array($result, $enrepair_dare, $rece_pd, $rece_pd_date, $cause, $repair_detail, $result_recorder, $result_recdate, 1);
    $field2=array("result", "enrepair_dare","rece_pd","rece_pd_date","cause","repair_detail","result_recorder","result_recdate","end_process");
    $table2 = "m_repair_pd";
    $where2="repair_id=:repair_id";
    $execute2=array(':repair_id' => $repair_id);
    $receive_repair=$connDB->update($table2, $data2, $where2, $field2, $execute2);
    $connDB->close_PDO();
    if (($receive_repair == false) or ($send_repair == false)) {
        echo "Update not complete " .$receive_repair->errorInfo()." & ".$send_repair->errorInfo();
    } else {
        echo "Update complete!!!!";
    }
}
$connDB->close_PDO();