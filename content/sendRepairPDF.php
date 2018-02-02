<?php session_save_path("../session/");
session_start();

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();print_r($connDB)?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
<title>ระบบแจ้งซ่อม</title>
<LINK REL="SHORTCUT ICON" HREF="images/logo.png">
<!-- Bootstrap core CSS -->
<link href="option/css/bootstrap.css" rel="stylesheet">
<!--<link href="option/css2/templatemo_style.css" rel="stylesheet">-->
<!-- Add custom CSS here -->
<link href="option/css/sb-admin.css" rel="stylesheet">
<link rel="stylesheet" href="option/font-awesome/css/font-awesome.min.css">
<!-- Page Specific CSS -->
<link rel="stylesheet" href="option/css/morris-0.4.3.min.css">
<link rel="stylesheet" href="option/css/stylelist.css">
<script src="option/js/excellentexport.js"></script>
<style type="text/css">
body {
	margin-top: 50px;
}
</style>
</head>
<?php
include_once ('../template/plugins/funcDateThai.php');
include '../template/plugins/function_date.php';
$method=$_GET['method'];
    $empno=$_GET['empno'];
    $id=$_GET['id'];
    $sql_hos=  "SELECT CONCAT(p.pname,e.firstname,' ',e.lastname) as fullname,h.name as name 
FROM hospital h
INNER JOIN emppersonal e on e.empno=h.manager
INNER JOIN pcode p on p.pcode=e.pcode";
    $connDB->imp_sql($sql_hos);
    $hospital=$connDB->select_a();
 ?>
<body>
    <?php
require_once('../template/plugins/library/mpdf60/mpdf.php'); //ที่อยู่ของไฟล์ mpdf.php ในเครื่องเรานะครับ
ob_start(); // ทำการเก็บค่า html นะครับ*/
?>
<div class="col-lg-12"><h3 valign="bottom" align="center">ใบส่งซ่อม/จัดทำพัสดุ</h3></div><br>
<div class="col-lg-12">
    <b>ฝ่ายพัสดุ</b> &nbsp;&nbsp;&nbsp;<?=$hospital['name']?><br>
    <b>ใบส่งซ่อมเลขที่</b> .............../...............
    วันที่ <?= DateThai2(date("Y-m-d"))?><br>
    <b>เรื่อง</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ขออนุมัติซ่อม...................................................................................................
</div><hr>
<div class="col-lg-12" align="let">
    <b>เรียน</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผู้อำนวยการ<?=$hospital['name']?><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ด้วยฝ่ายมีความประสงค์ขอซ่อม / จัดทำ( ) พัสดุ อาคารสิ่งก่อสร้างดังนี้<br>
    <div class="col-lg-12" id="contentTB">ใช้สร้างตาราง</div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            จึงเรียนมาเพื่อโปรดพิจารณา อนุมัติและดำเนินการต่อไปด้วย
</div><br>
                                 <div class="row">
                                 <div class="col-lg-12">
                                     <table border="0" width="100%">
                                         <tr>
                                             <td width='30%'>&nbsp;</td>
                                             <td width='70%' align="center">
                                     ........................................<br><br>
                                     ( <?=$exponent['fullname']?> )<br><br><br>
                                     ........................................<br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                (.................................................) พยาน<br><br><br>
                                             </td>
                                         </tr>
                                         <tr>
                                             <td colspan="2" align="">
                                        ความเห็นของหัวหน้าฝ่าย / งาน<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;)
                                        &nbsp;เหตุผลสมควร จึงไม่ถือว่ามาสายหรือขาดราชการ<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;)
                                        &nbsp;เหตุผลไม่สมควร<br>
                                        </td>
                                        </tr>
                                        <tr>
                                            <td width='30%'>&nbsp;</td>
                                             <td width='70%' align="center"><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ลงชื่อ.............................................หัวหน้าฝ่าย/งาน<br><br>
                                     (.................................................)<br><br>
                                         ........../............/............
                                             </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" align=""><br>
                                                    ความเห็นของผู้อำนวยการ<?=$hospital['name']?><p>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;)
                                        &nbsp;เหตุผลสมควร จึงไม่ถือว่ามาสายหรือขาดราชการ<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;)
                                        &nbsp;เหตุผลไม่สมควร<br>
                                        </td>
                                        </tr>
                                        <tr>
                                            <td width='30%'>&nbsp;</td>
                                             <td width='70%' align="center"><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ลงชื่อ.............................................ผู้อำนวยการฯ<br><br>
                                     (.................................................)<br><br>
                                         ........../............/............
                                             </td>
                                        </tr>
                                     </table>
                                 </div>
                                 </div>
<div align="right">F-AD-020</div>
<?php 
$time_re=  date('Y_m_d');
$reg_date=$work['reg_date'];
$html = ob_get_contents();
ob_clean();
$pdf = new mPDF('tha2','A4','11','');
$pdf->autoScriptToLang = true;
$pdf->autoLangToFont = true;
$pdf->SetDisplayMode('fullpage');

$pdf->WriteHTML($html, 2);
$pdf->Output("../MyPDF/explanation$empno.pdf");
echo "<meta http-equiv='refresh' content='0;url=../MyPDF/explanation$empno.pdf' />";
?>
</body>
</html>