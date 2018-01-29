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
if ($method == 'add_acc') {
    $accp_name = $_POST['accp_name'];
    
    $data = array($accp_name);
    $table = "m_acc_part";
    $add_acc = $connDB->insert($table, $data);
    $connDB->close_PDO();
    if ($add_acc == false) {
        echo "Insert not complete " .$add_acc->errorInfo();
    } else {
        echo "บันทึกอุปกรณ์เรียบร้อยครับ!!!!";
    }
}elseif ($method == 'edit_acc') {
    $accp_id = $_POST['accp_id'];
    $accp_name = $_POST['accp_name'];
    
    $table = "m_acc_part";
    $where = "accp_id=:accp_id";
    $execute=array(':accp_id' => $accp_id);
    $data = array($accp_name);
    $field=array("accp_name");
    $edit_acc=$connDB->update($table, $data, $where, $field, $execute);    
    if ($edit_acc == false) {
        echo "Update not complete " .$edit_acc->errorInfo();
    } else {
        echo "แก้ไขอุปกรณ์เรียบร้อยครับ!!!!";
    }
}
$connDB->close_PDO();