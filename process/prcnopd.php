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
if ($method == 'add_nopd') {
    $no_pdtype = $_POST['no_pdtype'];
    $no_pdname = $_POST['no_pdname'];
    
    $data = array($no_pdtype,$no_pdname);
    $table = "m_no_pd";
    $add_nopd = $connDB->insert($table, $data);
    $connDB->close_PDO();
    if ($add_nopd == false) {
        echo "Insert not complete " .$add_nopd->errorInfo();
    } else {
        echo "บันทึกรายการความต้องการเรียบร้อยครับ!!!!";
    }
}elseif ($method == 'edit_nopd') {
    $no_pdid = $_POST['no_pdid'];
    $no_pdtype = $_POST['no_pdtype'];
    $no_pdname = $_POST['no_pdname'];
    
    $table = "m_no_pd";
    $where = "no_pdid=:no_pdid";
    $execute=array(':no_pdid' => $no_pdid);
    $data = array($no_pdtype,$no_pdname);
    $field=array("no_pdtype","no_pdname");
    $edit_nopd=$connDB->update($table, $data, $where, $field, $execute);    
    if ($edit_nopd == false) {
        echo "Update not complete " .$edit_nopd->errorInfo();
    } else {
        echo "แก้ไขรายการความต้องการเรียบร้อยครับ!!!!";
    }
}
$connDB->close_PDO();