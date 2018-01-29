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

$method = isset($_POST['method']) ? $_POST['method'] : $_GET['method'];
if ($method == 'edit_notify') {
    $notify_id = $_POST['notify_id'];
    $notify_tokenkey = $_POST['notify_tokenkey'];
    
    $table = "notify";
    $where = "notify_id=:notify_id";
    $execute=array(':notify_id' => $notify_id);
    $data = array($notify_tokenkey);
    $field=array("notify_tokenkey");
    $edit_acc=$connDB->update($table, $data, $where, $field, $execute);    
    if ($edit_acc == false) {
        echo "Update not complete " .$edit_acc->errorInfo();
    } else {
        echo "แก้ไข Token key เรียบร้อยครับ!!!!";
    }
}
$connDB->close_PDO();