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
if ($method == 'add_user') {
    $ss_user_name = filter_input(INPUT_POST, 'ss_user_name',FILTER_SANITIZE_STRING);
    $ss_Username = md5(trim($ss_user_name));
    $ss_Password = md5(trim(filter_input(INPUT_POST, 'password',FILTER_SANITIZE_ENCODED)));
    $ss_Name = $_POST['ss_Name'];
    $ss_Status = $_POST['ss_Status'];
    if($ss_Status=='ADMIN'){
        $ss_process = 0;
    }elseif ($ss_Status=='MUSER') {
        $ss_process=6;
    }
    
    $data = array($ss_Username, $ss_Password, $ss_user_name, $ss_Name,$ss_Status, $ss_process);
    $table = "ss_member";
    $add_user = $connDB->insert($table, $data);
    $connDB->close_PDO();
    if ($add_user == false) {
        echo "Insert not complete " .$add_user->errorInfo();
    } else {
        echo "Insert complete!!!!";
    }
}elseif ($method == 'edit_user') {
    $ss_UserID = $_POST['ss_UserID'];
    $ss_user_name = filter_input(INPUT_POST, 'ss_user_name',FILTER_SANITIZE_STRING);
    $ss_Username = md5(trim($ss_user_name));
    $ss_Password = $_POST['password']!=''?md5(trim(filter_input(INPUT_POST, 'password',FILTER_SANITIZE_ENCODED))):'';
    $ss_Name = $_POST['ss_Name'];
    $ss_Status = $_POST['ss_Status'];
    if($ss_Status=='ADMIN'){
        $ss_process = 0;
    }elseif ($ss_Status=='MUSER') {
        $ss_process=6;
    }
    $table = "ss_member";
    $where="ss_UserID=:ss_UserID";
    $execute=array(':ss_UserID' => $ss_UserID);
    
    if(empty($ss_Password)){
    $data = array($ss_Username, $ss_user_name, $ss_Name,$ss_Status, $ss_process);
    $field=array("ss_Username","ss_user_name","ss_Name", "ss_Status", "ss_process");
    $edit_user=$connDB->update($table, $data, $where, $field, $execute);    
    }else{
    $data = array($ss_Username, $ss_Password, $ss_user_name, $ss_Name,$ss_Status, $ss_process);
    $edit_user=$connDB->update($table, $data, $where, null, $execute);
    }
    if ($edit_user == false) {
        echo "Update not complete " .$edit_user->errorInfo();
    } else {
        echo "Update complete!!!!";
    }
}
$connDB->close_PDO();