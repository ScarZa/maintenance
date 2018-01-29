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
if ($method == 'add_sympG') {
    $symp_name = $_POST['symp_name'];
    
    $data = array($symp_name);
    $table = "m_symptom_group";
    $add_symptomG = $connDB->insert($table, $data);
    $connDB->close_PDO();
    if ($add_symptomG == false) {
        echo "Insert not complete " .$add_symptomG->errorInfo();
    } else {
        echo "บันทึกหมวดอาการเสียเรียบร้อยครับ!!!!";
    }
}elseif ($method == 'add_sympC') {
    $symmptom_gid = $_POST['symmptom_gid'];
    $symmptom_name = $_POST['symmptom_name'];
    
    $data = array($symmptom_gid,$symmptom_name);
    $table = "m_symmptom_category";
    $add_symptomC = $connDB->insert($table, $data);
    $connDB->close_PDO();
    if ($add_symptomC == false) {
        echo "Insert not complete " .$add_symptomC->errorInfo();
    } else {
        echo "บันทึกรายการอาการเสียเรียบร้อยครับ!!!!";
    }
}elseif ($method == 'edit_sympG') {
    $symp_name = $_POST['symp_name'];
    $symp_gid = $_POST['symp_gid'];
    
    $table = "m_symptom_group";
    $where = "symp_gid=:symp_gid";
    $execute=array(':symp_gid' => $symp_gid);
    $data = array($symp_name);
    $field=array("symp_name");
    $edit_sympG=$connDB->update($table, $data, $where, $field, $execute);    
    if ($edit_sympG == false) {
        echo "Update not complete " .$edit_sympG->errorInfo();
    } else {
        echo "แก้ไขหมวดอาการเสียเรียบร้อยครับ!!!!";
    }
}elseif ($method == 'edit_sympC') {
    $symmptom_cid = $_POST['symmptom_cid'];
    $symmptom_gid = $_POST['symmptom_gid'];
    $symmptom_name = $_POST['symmptom_name'];
    
    $table = "m_symmptom_category";
    $where = "symmptom_cid=:symmptom_cid";
    $execute=array(':symmptom_cid' => $symmptom_cid);
    $data = array($symmptom_gid,$symmptom_name);
    $field=array("symmptom_gid","symmptom_name");
    $edit_sympC=$connDB->update($table, $data, $where, $field, $execute);    
    if ($edit_sympC == false) {
        echo "Update not complete " .$edit_sympC->errorInfo();
    } else {
        echo "แก้ไขรายการอาการเสียเรียบร้อยครับ!!!!";
    }
}
$connDB->close_PDO();