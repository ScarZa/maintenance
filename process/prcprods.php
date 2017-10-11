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

$method = isset($_POST['data0']) ? $_POST['data0'] : $_GET['method'];
if ($method == 'add_prods') {
    $pdgroup = $_POST['pdgroup'];
    $pdcate = $_POST['pdcate'];
    $pd_number = $_POST['pd_number'];
    $number = explode("-", $pd_number);
    $lnumber = explode("/", $number[3]);
    $name = $_POST['name'];
    $brand = $_POST['brand'];
    $serial = $_POST['serial'];
    $pd_status = $_POST['pd_status'];
    $com_id = $_POST['com_id'];
    $price = $_POST['price'];
    $montype_id = $_POST['montype_id'];
    $mon_id = $_POST['mon_id'];
    $yearbuy = $_POST['yearbuy'];
    $regis_date = insert_date($_POST['regis_date']);
    $date_stinsur = insert_date($_POST['date_stinsur']);
    $ct_number = $_POST['ct_number'];
    $nbmoth_insur = $_POST['nbmoth_insur'];
    $dep_id = $_POST['dep_id'];
    $lnstalldate = insert_date($_POST['lnstalldate']);
    $movingdate = insert_date($_POST['movingdate']);
    $rp_person = $_POST['rp_person'];
    $note = $_POST['note'];
    
    $data = array($pd_number, $number[0], $lnumber[1], $pd_status,$name, $brand,'', $com_id, $price, $montype_id
        , $yearbuy, $mon_id, $ct_number, $pdgroup, $pdcate, $date_stinsur, $regis_date, $nbmoth_insur, $serial);
    $table = "pd_product";
    $add_prods = $connDB->insert($table, $data);
    $data2 = array($add_prods,$dep_id,$lnstalldate,$movingdate,$rp_person,$note);
    $table2 = 'pd_place';
    $add_place = $connDB->insert($table2, $data2);
    if ($add_place == false) {
        echo "Move not complete " .$add_place->errorInfo();
    } else {
        echo "Insert complete!!!!";
    }
}//-------------end process insert update delete
?>	<?php $connDB->close_PDO(); ?>
	






