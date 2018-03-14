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
if ($method == 'add_hisdev') {
    $module_id= $_POST['module_id'];
    $dev_detail = $_POST['dev_detail'];
    $dev_date =insert_date($_POST['datepicker1']);
    $take_hours = isset($_POST['H-begin']) ? $_POST['H-begin'] : '';
    $take_minutes = isset($_POST['M-begin']) ? $_POST['M-begin'] : '';
    $dev_stime = $take_hours . ":" . $take_minutes;
    $take_houre = isset($_POST['H-end']) ? $_POST['H-end'] : '';
    $take_minutee = isset($_POST['M-end']) ? $_POST['M-end'] : '';
    $dev_etime = $take_houre . ":" . $take_minutee;
    $developer=$_SESSION['m_id'];
    $repair_id = isset($_POST['repair_id'])?$_POST['repair_id']:'';
    
    $data = array($module_id, $dev_detail, $dev_date, $developer, $dev_stime, $dev_etime, $repair_id);
    $table = "dev_history";
    $add_hisdev = $connDB->insert($table, $data);
    
        
    $connDB->close_PDO();
    if ($add_hisdev == false) {
        echo "Insert not complete " .$add_hisdev->errorInfo();
    } else {
        echo "บันทึกการพัฒนาสำเร็จ!!!!";
    }
}elseif ($method == 'add_prog') {
    $pg_name= $_POST['pg_name'];
    $dev_begin =insert_date($_POST['datepicker1']);
    
    $data = array($pg_name, $dev_begin);
    $table = "dev_program";
    $add_prog = $connDB->insert($table, $data);
    
        
    $connDB->close_PDO();
    if ($add_prog == false) {
        echo "Insert not complete " .$add_prog->errorInfo();
    } else {
        echo "บันทึกโปรแกรมสำเร็จ!!!!";
    }
}elseif ($method == 'add_module') {
    $pg_id= $_POST['selpg_id'];
    $module_name= $_POST['module_name'];
    
    $data = array($pg_id, $module_name);
    $table = "dev_module";
    $add_module = $connDB->insert($table, $data);
    
        
    $connDB->close_PDO();
    if ($add_module == false) {
        echo "Insert not complete " .$add_module->errorInfo();
    } else {
        echo "บันทึกโมดูลสำเร็จ!!!!";
    }
}elseif ($method == 'edit_prog') {
    $pg_id= $_POST['pg_id'];
    $pg_name= $_POST['pg_name'];
    $dev_begin =insert_date($_POST['datepicker1']);
    
    $data = array($pg_name, $dev_begin);
    $table = "dev_program";
    $field=array("pg_name","dev_begin");
    $where="pg_id=:pg_id";
    $execute=array(':pg_id' => $pg_id);
    $edit_prog=$connDB->update($table, $data, $where, $field, $execute);
    $connDB->close_PDO();
    if ($edit_prog == false) {
        echo "Update not complete " .$edit_prog->errorInfo();
    } else {
        echo "แก้ไขโปรแกรมสำเร็จครับ!!!!";
    }
}elseif ($method == 'edit_module') {
    $module_id = $_POST['module_id'];
    $pg_id= $_POST['selpg_id'];
    $module_name= $_POST['module_name'];
    
    $data = array($pg_id, $module_name);
    $table = "dev_module";
    $field=array("pg_id","module_name");
    $where="module_id=:module_id";
    $execute=array(':module_id' => $module_id);
    $edit_module=$connDB->update($table, $data, $where, $field, $execute);
    $connDB->close_PDO();
    if ($edit_module == false) {
        echo "Update not complete " .$edit_module->errorInfo();
    } else {
        echo "แก้ไขโมดูลสำเร็จครับ!!!!";
    }
}
$connDB->close_PDO();