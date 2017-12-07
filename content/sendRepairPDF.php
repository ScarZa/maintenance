<?php @session_start(); ?>
<?php include 'connection/connect_i.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
<title>ระบบข้อมูลบุคคลากรโรงพยาบาล</title>
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
include_once ('option/funcDateThai.php');
include 'option/function_date.php';
$method=$_GET['method'];
    $empno=$_GET['empno'];
    $id=$_GET['id'];
    $sql_hos=  mysqli_query($db,"SELECT CONCAT(p.pname,e.firstname,' ',e.lastname) as fullname,h.name as name 
FROM hospital h
INNER JOIN emppersonal e on e.empno=h.manager
INNER JOIN pcode p on p.pcode=e.pcode");
    $hospital=mysqli_fetch_assoc($sql_hos);
    if($method=='exp_sign'){
        $code1="f.*";
        $code2="from fingerprint f inner join emppersonal e1 on f.empno=e1.empno";
        $code3="where f.empno='$empno' and f.finger_id='$id'";
        $date= isset($exponent['forget_date'])?$exponent['forget_date']:'';
        $reason= isset($exponent['reason_forget'])?$exponent['reason_forget']:'';
    }elseif ($method=='exp_late') {
        $code1="l.*";
        $code2="from late l inner join emppersonal e1 on l.empno=e1.empno";
        $code3="where l.empno='$empno' and l.late_id='$id'";
        $date= isset($exponent['late_date'])?$exponent['late_date']:'';
        $reason= isset($exponent['reason_late'])?$exponent['reason_late']:'';
    }
    $sql=  mysqli_query($db,"select $code1,concat(p1.pname,e1.firstname,' ',e1.lastname) as fullname,d1.depName as dep,d2.dep_name as depname,p2.posname as posi 
            $code2
            inner join pcode p1 on e1.pcode=p1.pcode
            INNER JOIN work_history wh ON wh.empno=e1.empno
            inner join department d1 on wh.depid=d1.depId
            inner join department_group d2 on d2.main_dep=d1.main_dep
            inner join posid p2 on wh.posid=p2.posId
            $code3  and (wh.dateEnd_w='0000-00-00' or ISNULL(wh.dateEnd_w))");
    $exponent=  mysqli_fetch_assoc($sql);
    if($method=='exp_sign'){
        $date=$exponent['forget_date'];
        $reason=$exponent['reason_forget'];
    }elseif ($method=='exp_late') {
        $date=$exponent['late_date'];
        $reason=$exponent['reason_late'];
    }
    
?>
<body>
    <?php
require_once('option/library/mpdf60/mpdf.php'); //ที่อยู่ของไฟล์ mpdf.php ในเครื่องเรานะครับ
ob_start(); // ทำการเก็บค่า html นะครับ*/
?>
<div class="col-lg-12">
    <table border="0" width="100%">
        <tr>
            <td width="30%" valign="bottom"><img src="images/garuda02.png" width="60"></td>
            <td width="40%" valign="bottom" align="center"><h1>บันทึกข้อความ</h1></td>
            <td width="30%" valign="top" align="right">
                <table width="100%" border="1" cellspacing="" cellpadding="" frame="below" class="divider">
                        <tr>
                            <td valign="top">
                        <center><b>ฝ่ายทรัพยากรบุคคล</b></center><br>
                            &nbsp;เลขรับ ...........................<br><br>
                            &nbsp;วันที่ ..............................<br><br>
                            &nbsp;เวลา ..............................</td>
                        </tr>
                    </table>
            </td>
        </tr>
    </table>
</div><br>
<div class="col-lg-12">
    <b>ส่วนราชการ</b> &nbsp;&nbsp;&nbsp;<?=$hospital['name']?> &nbsp;&nbsp;&nbsp;ฝ่ายทรัพยากรบุคคล โทร.๐-๔๒๘๐-๘๑๔๔ <br>
    <b>ที่</b> &nbsp;&nbsp;&nbsp;สธ ๐๘๑๘.๑.๒/<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;&nbsp;&nbsp;&nbsp;
    วันที่ <?= DateThai2(date("Y-m-d"))?><br>
    <b>เรื่อง</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชี้แจงไม่ลงเวลามา - กลับปฏิบัติราชการ 
</div>
<div class="col-lg-12" align="let">
    <b>เรียน</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผู้อำนวยการ<?=$hospital['name']?><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ด้วยข้าพเจ้า <?=$exponent['fullname']?> ตำแหน่ง <?=$exponent['posi']?> 
            ปฏิบัติหน้าที่ฝ่าย <?=$exponent['depname']?> งาน <?=$exponent['dep']?> ได้มาปฏิบัติราชการในวันที่ <?= DateThai2($date)?> แต่ไม่ได้ลงเวลามา - กลับปฏิบัติราชการ
            เนื่องจาก <?=$reason?><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            จึงเรียนมาเพื่อโปรดทราบและพิจารณา
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
$pdf->Output("MyPDF/explanation$empno.pdf");
echo "<meta http-equiv='refresh' content='0;url=MyPDF/explanation$empno.pdf' />";
?>
</body>
</html>