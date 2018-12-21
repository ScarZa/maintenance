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
if ($method == 'add_pdcate') {
    $category_name = $_POST['category_name'];
    $group_id = $_POST['group_id'];
    $gp_id = $_POST['gp_id'];
    $cate_type = $_POST['cate_type'];
    $cate_kind = $_POST['cate_kind'];
    
    $data = array($category_name, $group_id, $gp_id, $cate_type,$cate_kind);
    $table = "pd_category";
    $add_pdcate = $connDB->insert($table, $data);
    $connDB->close_PDO();
    if ($add_pdcate == false) {
        echo "Insert not complete " .$add_pdcate->errorInfo();
    } else {
        echo "บันทึกประเภทครุภัณฑ์สำเร็จครับ!!!!";
    }
}elseif ($method == 'edit_pdcate') {
    $category_id = $_POST['category_id'];
    $category_name = $_POST['category_name'];
    $group_id = $_POST['group_id'];
    $gp_id = $_POST['gp_id'];
    $cate_type = $_POST['cate_type'];
    $cate_kind = $_POST['cate_kind'];
    $table = "pd_category";
    $where="category_id=:category_id";
    $execute=array(':category_id' => $category_id);
    $data = array($category_name, $group_id, $gp_id, $cate_type,$cate_kind);
    $edit_pdcate=$connDB->update($table, $data, $where, null, $execute);
     if ($edit_pdcate == false) {
        echo "Update not complete " .$edit_pdcate->errorInfo();
    } else {
        echo "แก้ไขประเภทครุภัณฑ์สำเร็จครับ!!!!";
    }
}
$connDB->close_PDO();