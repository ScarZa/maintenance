<?php session_save_path("../session/");
session_start();

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new TablePDO();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
<title>ระบบแจ้งซ่อม</title>
<LINK REL="SHORTCUT ICON" HREF="../images/logo.png">
<!-- Bootstrap core CSS -->
<link href="../template/plugins/css/bootstrap.css" rel="stylesheet">
<!--<link href="option/css2/templatemo_style.css" rel="stylesheet">-->
<!-- Add custom CSS here -->
<link href="../template/plugins/css/sb-admin.css" rel="stylesheet">
<link rel="stylesheet" href="../template/plugins/font-awesome/css/font-awesome.min.css">
<!-- Page Specific CSS -->
<link rel="stylesheet" href="../template/plugins/css/morris-0.4.3.min.css">
<link rel="stylesheet" href="../template/plugins/css/stylelist.css">
<!--<script src="../template/plugins/jQuery/jQuery-2.1.4.min.js"></script>
<script src="../template/plugins/DataTables/jquery.dataTables.min.js"></script>
<script src="../template/plugins/DataTables/dataTables.bootstrap.min.js"></script>-->
<style type="text/css">
body {
	margin-top: 50px;
}
</style>
</head>
<?php
include_once ('../template/plugins/funcDateThai.php');
include '../template/plugins/function_date.php';
    $id=$_GET['id'];
    $sql_hos=  "SELECT CONCAT(p.pname,e.firstname,' ',e.lastname) as fullname,h.name as name 
FROM hospital h
INNER JOIN emppersonal e on e.empno=h.manager
INNER JOIN pcode p on p.pcode=e.pcode";
    $connDB->imp_sql($sql_hos);
    $hospital=$connDB->select_a();
    
    $sql_send=  "SELECT CONCAT(e.firstname,' ',e.lastname)fullname,re.repair_id,sc.comp_name,p.posname,d.depName,pd.name,pd.pd_number,re.symptom,re.repair_date
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer)informer
,(SELECT p.posname FROM m_repair_pd re
INNER JOIN emppersonal e on e.empno=re.informer
INNER JOIN work_history wh ON wh.empno=e.empno 
INNER JOIN posid p on p.posId=wh.posid
WHERE (wh.dateEnd_w='0000-00-00' or ISNULL(wh.dateEnd_w)) and re.repair_id=$id)posi_inform
,CASE re.vital
WHEN '0' THEN 'ไม่เร่งด่วน'
WHEN '1' THEN 'เร่งด่วน'
ELSE NULL END as vital
FROM m_sendrep ms
INNER JOIN m_repair_pd re on re.repair_id=ms.repair_id
INNER JOIN pd_product pd on pd.pd_id=re.pd_id
INNER JOIN department d on d.depId=re.depid
INNER JOIN se_company sc on sc.comp_id=ms.comp_id
INNER JOIN emppersonal e on e.empno=re.repairer
INNER JOIN work_history wh ON wh.empno=e.empno
INNER JOIN posid p on p.posId=wh.posid
WHERE (wh.dateEnd_w='0000-00-00' or ISNULL(wh.dateEnd_w)) and re.repair_id=$id";
    $connDB->imp_sql($sql_send);
    $sendre=$connDB->select_a();
    
 ?>
<!--<script src="../js/createTable.js" type="text/javascript"></script>
<script language="Javascript" type="text/javascript">
    var column = ["รายการ","อาการเสีย","หมายเลขครุภัณฑ์","จำนวน","สถานที่ติดตั้งครุภัณฑ์"];
    var CTB = new createTable(column);
        CTB.GetTableAjax("../JsonData/send_Data.php?<?=$id?>","contentTB");
</script>-->
<body>
    <?php
require_once('../template/plugins/library/mpdf60/mpdf.php'); //ที่อยู่ของไฟล์ mpdf.php ในเครื่องเรานะครับ
ob_start(); // ทำการเก็บค่า html นะครับ*/
?>
    <div class="col-lg-12"><h3 valign="bottom" align="center">ใบแจ้งซ่อม<br><?=$hospital['name']?></h3></div>
            <div align="right">เลขรับ <?=$sendre['repair_id']?><br>วันที่ <?= DateThai2(date("Y-m-d"))?></div>
            <div class="col-lg-12">
                 <br>
                <table width='100%' border='1' cellspacing='' cellpadding='' frame='below' class='divider'> 
                    <tr>
                        <td height="35" width='20%'>&nbsp;&nbsp;หน่วยงาน</td>
                        <td height="35" width='80%'>&nbsp;&nbsp;<?=$sendre['depName']?></td>
                    </tr>
                    <tr>
                        <td height="35" width='20%'>&nbsp;&nbsp;ต้องการแจ้งซ่อม</td>
                        <td height="35" width='80%'>&nbsp;&nbsp;<?=$sendre['name']?></td>
                    </tr>
                    <tr>
                        <td height="35">&nbsp;&nbsp;หมายเลขครุภัณฑ์</td>
                        <td height="35">&nbsp;&nbsp;<?=$sendre['pd_number']?></td>
                    </tr>
                    <tr>
                        <td height="35">&nbsp;&nbsp;อาการเสีย</td>
                        <td height="35">&nbsp;&nbsp;<?=$sendre['symptom']?></td>
                    </tr>
                    <tr>
                        <td height="35">&nbsp;&nbsp;ความต้องการ</td>
                        <td height="35">&nbsp;&nbsp;<?=$sendre['vital']?></td>
                    </tr>
                    <tr>
                        <td height="35">&nbsp;&nbsp;วันที่แจ้ง</td>
                        <td height="35">&nbsp;&nbsp;<?= DateThai2($sendre['repair_date'])?></td>
                    </tr>
                </table>
            </div><br><br><br>
            <table border="0" width="100%">
                                         <tr>
                                             <td width='50%' align="center">&nbsp;</td>
                                             <td width='50%' align="center">
                                     ลงชื่อ........................................ผู้แจ้งซ่อม<br><br>
                                     ( <?=$sendre['informer']?> )<br><br>
                                     ตำแหน่ง <?=$sendre['posi_inform']?> <br><br></td>
                                         </tr>
                                     </table>
<?php
$html = ob_get_contents();
ob_clean();

ob_start(); // ทำการเก็บค่า html นะครับ*/
?>
<div class="col-lg-12"><h3 valign="bottom" align="center">ใบส่งซ่อม</h3></div>
<div class="col-lg-12">
    <b>ฝ่ายพัสดุ</b> &nbsp;&nbsp;&nbsp;<?=$hospital['name']?><br>
    <b>ใบส่งซ่อมเลขที่</b> .............../...............
    วันที่ <?= DateThai2(date("Y-m-d"))?><br>
    <b>เรื่อง</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ขออนุมัติซ่อม...................................................................................................
</div><hr>
<div class="col-lg-12" align="left">
    <b>เรียน</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผู้อำนวยการ<?=$hospital['name']?><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ด้วยฝ่ายมีความประสงค์ขอซ่อม มีรายการดังนี้<br>
<!--    <div class="col-lg-12" id="contentTB">ใช้สร้างตาราง</div>-->
    <div class="col-lg-12"><?php
        $sql="SELECT se.acc_part, se.repair_detail,pd.pd_number,COUNT(se.send_id)amount,d.depName
FROM m_repair_pd re
INNER JOIN m_sendrep se on se.repair_id=re.repair_id
INNER JOIN pd_product pd on pd.pd_id=re.pd_id
INNER JOIN pd_place pp on pp.pd_id=pd.pd_id
INNER JOIN department d on d.depId=pp.depId
WHERE re.repair_id=$id";
                    $connDB->imp_sql($sql);
        $connDB->select();
$column=array("รายการ","อาการเสีย","หมายเลขครุภัณฑ์","จำนวน","สถานที่ติดตั้งครุภัณฑ์");
$connDB->imp_columm($column);  
$connDB->createPDO_TB();
?>
</div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            จึงเรียนมาเพื่อโปรดพิจารณา อนุมัติและดำเนินการต่อไปด้วย
</div><br>
                                 <div class="row">
                                 <div class="col-lg-12">
                                     <table border="0" width="100%">
                                         <tr>
                                             <td width='50%' align="center">
                                                 ลงชื่อ........................................ผู้อนุมัติ<br><br>
                                     ( ........................................ )<br><br>
                                     ตำแหน่ง........................................<br><br></td>
                                             <td width='50%' align="center">
                                     ลงชื่อ........................................ผู้ส่งซ่อม<br><br>
                                     ( <?=$sendre['fullname']?> )<br><br>
                                     ตำแหน่ง <?=$sendre['posname']?> <br><br></td>
                                         </tr>
                                     </table>
                                 </div>
                                 </div><hr>
    <div class="col-lg-12" style="text-align: center"><b>บันทึกการซ่อม</b></div> 
    <table width='100%' border='1' cellspacing='' cellpadding='' frame='below' class='divider'> 
        <tr>
            <td width='50%' style="text-align: center">ส่วนการรับ</td>
            <td width='50%' style="text-align: center">รายละเอียดการซ่อม</td>
        </tr>
        <tr>
            <td width='50%' valign="top"><br>&nbsp; ส่ง <?=$sendre['comp_name']?><br><br>&nbsp; วันที่ส่ง...............................<br><br>&nbsp; คาดว่าจะแล้วเสร็จ/ได้รับพัสดุภายใน ............. วัน</td>
            <td width='50%' valign="top"><br>&nbsp; วันที่แล้วเสร็จ...............................<br><br>&nbsp; รายละเอียดการซ่อม ................................................<br><br>
            &nbsp; .............................................................................<br><br>&nbsp; ค่าซ่อม ...................................................บาท</td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                                                 <br><br>ลงชื่อ........................................<br><br>
                                     ( ........................................ )<br><br>
                                     ตำแหน่ง........................................<br><br></td>
        </tr>
    </table><hr>
    <div class="col-lg-12" style="text-align: center"><b>บันทึกหน่วยซ่อมบำรุง</b></div>
    <div class="col-lg-12">
                                     <table border="0" width="100%">
                                         <tr>
                                             <td width='50%' align="center">
                                                 ( &nbsp; ) ซ่อม / จัดทำแล้วสามารถใช้งานได้<br><br>( &nbsp; ) ................................................ <br><br>
                                                 ลงชื่อ........................................ผู้อนุมัติ<br><br>
                                     ( ........................................ )<br><br>
                                     ตำแหน่ง........................................<br><br></td>
                                             <td width='50%' align="center">
                                                 ( &nbsp; ) ได้รับมอบรายการซ่อมเรียบร้อยแล้ว<br><br>( &nbsp; ) ................................................... <br><br>
                                     ลงชื่อ........................................ผู้ส่งซ่อม<br><br>
                                     ( ........................................ )<br><br>
                                     ตำแหน่ง........................................<br><br></td>
                                         </tr>
                                     </table>
                                 </div>
    
<div align="right"></div>
<?php 
$html2 = ob_get_contents();
ob_clean();

$pdf = new mPDF('tha2','A4','11','');
$pdf->autoScriptToLang = true;
$pdf->autoLangToFont = true;
$pdf->SetDisplayMode('fullpage');

$pdf->WriteHTML($html, 2);
$pdf->AddPage();
$pdf->WriteHTML($html2,2);
$pdf->Output("../MyPDF/SendRepair.pdf");
echo "<meta http-equiv='refresh' content='0;url=../MyPDF/SendRepair.pdf' />";
?>
<script src="../template/plugins/jquery-ui-1.11.4.custom/jquery-ui-1.11.4.custom.js"></script>
</body>
</html>