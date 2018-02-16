<?php session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');
function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once ('../template/plugins/funcDateThai.php');
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
//$rslt=array();
$result=array();
$data = isset($_GET['data'])?$_GET['data']:$_POST['data'];
$sql="SELECT pd.pd_number,pg.group_name,pc.category_name,pd.name,pd.brand,pd.serial,ps.pd_status
,sc.comp_name,ROUND(pd.price)as price,tm.name as money,sm.mon_name,pd.yearbuy,pd.ct_number,pd.regis_date,pd.date_stinsur
,pd.nbmoth_insur,d.depName,pp.lnstalldate,pp.movingdate,pp.note,pd.photo_pd
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=pp.rp_person) rp_person
FROM pd_product pd
LEFT OUTER JOIN pd_place pp on pp.pd_id=pd.pd_id
LEFT OUTER JOIN pd_category pc on pc.category_id=pd.category_id
LEFT OUTER JOIN pd_group pg on pg.group_id=pc.group_id
LEFT OUTER JOIN se_company sc on sc.comp_id=pd.com_id
LEFT OUTER JOIN trainingmoney tm on tm.id=pd.montype_id
LEFT OUTER JOIN se_money_type sm on sm.mon_id=pd.mon_id
LEFT OUTER JOIN department d on d.depId=pp.depId
LEFT OUTER JOIN pd_status ps on ps.pd_status_id=pd.status
WHERE pd.pd_id=:pd_id";
$conn_DB->imp_sql($sql);
$execute=array(':pd_id' => $data);
$result=$conn_DB->select_a($execute);
$data= array();
$data['pd_number'] = $result['pd_number'];
$data['group_name'] = $result['group_name'];
$data['category_name'] = $result['category_name'];
$data['name'] = $result['name'];
$data['brand'] = $result['brand'];
$data['serial'] = $result['serial'];
$data['pd_status'] = $result['pd_status'];
$data['comp_name'] = $result['comp_name'];
$data['price'] = $result['price'];
$data['money'] = $result['money'];
$data['mon_name'] = $result['mon_name'];
$data['yearbuy'] = $result['yearbuy'];
$data['ct_number'] = $result['ct_number'];
$data['regis_date'] = $result['regis_date']!='0000-00-00 00:00:00'?DateThai1($result['regis_date']):' - ';
$data['date_stinsur'] = $result['date_stinsur']!='0000-00-00 00:00:00'?DateThai1($result['date_stinsur']):' - ';
$data['nbmoth_insur'] = $result['nbmoth_insur'];
$data['depName'] = $result['depName'];
$data['lnstalldate'] = $result['lnstalldate']!='0000-00-00 00:00:00'?DateThai1($result['lnstalldate']):' - ';
$data['movingdate'] = $result['movingdate']!='0000-00-00 00:00:00'?DateThai1($result['movingdate']):' - ';
$data['note'] = $result['note'];
$data['photo_pd'] = $result['photo_pd'];
$data['rp_person'] = $result['rp_person'];
print json_encode($data);
$conn_DB->close_PDO();
?>