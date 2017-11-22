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
    //$informer = $_SESSION[''];
    $informer = 30;
    //$repair_date =insert_date($_POST['repair_date']);
    $repair_date = date('Y-m-d H:i:s');
    $record_date = date('Y-m-d H:i:s');
    $pd_id = $_POST['pd_id'];
    $vital = $_POST['vital'];
    $repair_status = 0;
    $symptom = $_POST['symptom'];
    
    $data = array($informer, $repair_date, $record_date, $pd_id,$vital, $repair_status,$symptom);
    $table = "m_repair_pd";
    $add_repair = $connDB->insert($table, $data);
    $connDB->close_PDO();
    if ($add_repair == false) {
        echo "Insert not complete " .$add_repair->errorInfo();
    } else {
        echo "Insert complete!!!!";
    }
}elseif ($method == 'edit_repair') {
    $repair_id= $_POST['repair_id'];
    $repair_date =insert_date($_POST['datepicker1']);
    $record_date = date('Y-m-d H:i:s');
    $pd_id = $_POST['pd_id'];
    $vital = $_POST['vital'];
    $symptom = $_POST['symptom'];
    
    $data = array($repair_date, $record_date, $pd_id,$vital, $symptom);
    $field=array("repair_date","record_date","pd_id","vital","symptom");
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
}