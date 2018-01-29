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
if ($method == 'add_store') {
    $comp_name = $_POST['comp_name'];
    $comp_vax = $_POST['comp_vax'];
    $comp_address = $_POST['comp_address'];
    $comp_tell = $_POST['comp_tell'];
    $comp_mobile = $_POST['comp_mobile'];
    $comp_fax = $_POST['comp_fax'];
    
    $data = array($comp_name,$comp_vax,$comp_address,$comp_tell,$comp_mobile,$comp_fax);
    $table = "se_company";
    $add_store = $connDB->insert($table, $data);
    $connDB->close_PDO();
    if ($add_store == false) {
        echo "Insert not complete " .$add_store->errorInfo();
    } else {
        echo "บันทึกร้านเรียบร้อยครับ!!!!";
    }
}elseif ($method == 'edit_store') {
    $comp_id = $_POST['comp_id'];
    $comp_name = $_POST['comp_name'];
    $comp_vax = $_POST['comp_vax'];
    $comp_address = $_POST['comp_address'];
    $comp_tell = $_POST['comp_tell'];
    $comp_mobile = $_POST['comp_mobile'];
    $comp_fax = $_POST['comp_fax'];
    
    $table = "se_company";
    $where = "comp_id=:comp_id";
    $execute=array(':comp_id' => $comp_id);
    $data = array($comp_name,$comp_vax,$comp_address,$comp_tell,$comp_mobile,$comp_fax);
    $field=array("comp_name","comp_vax","comp_address","comp_tell","comp_mobile","comp_fax");
    $edit_comp=$connDB->update($table, $data, $where, $field, $execute);    
    if ($edit_comp == false) {
        echo "Update not complete " .$edit_comp->errorInfo();
    } else {
        echo "แก้ไขร้านเรียบร้อยครับ!!!!";
    }
}
$connDB->close_PDO();