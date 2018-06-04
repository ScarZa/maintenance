<?php 
session_save_path("../session/");
session_start(); 
 //require_once '../class/dbPDO_mng.php';
function __autoload($class_name) {
    include_once '../class/'.$class_name.'.php';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ระบบข้อมูลบุคคลากรโรงพยาบาล</title>
<LINK REL="SHORTCUT ICON" HREF="../images/logo.png">
    <link rel="stylesheet" href="../template/plugins/fullcalendar/js/fullcalendar-2.1.1/fullcalendar.min.css">
    <script type="text/javascript">
            $(function() {
                $('#calendar').fullCalendar({
                    header: {
                        left: 'month,agendaWeek,agendaDay',
                        center: 'title',
                        right: 'prev,next today'
                    },
                    editable: true,
                    theme: true,
                    events: "../JsonData/data_events2.php?gData=1",
                    loading: function(bool) {
                        if (bool)
                            $('#loading').show();
                        else
                            $('#loading').hide();
                    },
                    eventLimit:true,  
                    lang:'th'// put your options and callbacks here  
                });

            });
        </script>
    <style type="text/css">
    html,body{
        maring:0;padding:0;
        font-family:tahoma, "Microsoft Sans Serif", sans-serif, Verdana;   
        font-size:12px;
    }
	#calendar{
		max-width: 700px;
		margin: 0 auto;
        font-size:13px;
	}        
    </style>
</head>
<body>
<center><h2>ปฏิทินการพัฒนาโปรแกรม/รายงาน/ข้อมูล (งานคอมพิวเตอร์)</h2></center>
<div style="margin:auto;width:800px;">
 <div id='calendar'></div>
 </div>
<br>
<div align="center">
<?php
$dbh=new dbPDO_mng();
$read="../connection/conn_DB.txt";
$dbh->para_read($read);
$dbh->conn_PDO();
$leave= "SELECT CONCAT(e.firstname,' ',e.lastname)fullname FROM emppersonal e
INNER JOIN ss_member sm on e.empno=sm.ss_Name
WHERE sm.ss_Status='MUSER' or (sm.ss_Status='ADMIN' and sm.ss_process=0) 
GROUP BY sm.ss_Name ORDER BY sm.ss_Name ASC";
$dbh->imp_sql($leave);
$result=$dbh->select();
$code_color=array("1"=>"#416cbb","2"=>"#d92727","3"=>"#1e6c06","4"=>"purple","5"=>"#00a6ba","6"=>"orange","7"=>"#4e5252");
$i=1;
for($I=0;$I<count($result);$I++){  ?>
    &nbsp;<a class="btn-sm" style="background-color:<?= $code_color[$i]?>; color: white"> <?= $result[$I]['fullname']?> </a>&nbsp;
<?php $i++; }?>
</div>
    
<script src="../template/plugins/fullcalendar/js/fullcalendar-2.1.1/lib/jquery.min.js"></script>    
<script type="text/javascript" src="../template/plugins/fullcalendar/js/fullcalendar-2.1.1/lib/moment.min.js"></script>
<script type="text/javascript" src="../template/plugins/fullcalendar/js/fullcalendar-2.1.1/fullcalendar.min.js"></script>
<script type="text/javascript" src="../template/plugins/fullcalendar/js/fullcalendar-2.1.1/lang/th.js"></script>
<script type="text/javascript" src="../js/script2.js"></script>            
</body>
</html>