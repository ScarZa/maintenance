<?php  
function __autoload($class_name) {
    include_once '../class/'.$class_name.'.php';
}
header("Content-type:application/json; charset=UTF-8");            
header("Cache-Control: no-store, no-cache, must-revalidate");           
header("Cache-Control: post-check=0, pre-check=0", false);      
$dbh=new dbPDO_mng();
$read="../connection/conn_DB.txt";
$dbh->para_read($read);
$dbh->conn_PDO();
 // เชื่อมต่อกับฐานข้อมูล      
if($_GET['gData']){  
    $event_array=array();  
    //$i_event=0; 
    $code_color=array("0"=>"#416cbb","1"=>"#d92727","2"=>"#1e6c06","3"=>"purple","4"=>"#00a6ba","5"=>"orange","6"=>"#4e5252");
//    $q="SELECT * FROM tbl_event WHERE date(event_start)>='".$_GET['start']."'  ";    
//    $q.=" AND date(event_end)<='".$_GET['end']."' and process='0' ORDER by event_id";    
   $q="SELECT re.repair_id
,if(re.pd_id!=0,pp.pd_number,if(re.no_pdid!=0,npd.no_pdname,if(re.request_data!=0,npd.no_pdname,''))) as pd_number
,re.strepair_date,re.strepair_time,re.enrepair_dare,re.enrepair_time,re.result_recorder
FROM m_repair_pd re
LEFT OUTER JOIN pd_product pp on pp.pd_id=re.pd_id
LEFT OUTER JOIN m_no_pd npd on npd.no_pdid=re.no_pdid or npd.no_pdid=re.request_data
WHERE date(re.strepair_date)>='".$_GET['start']."'    
AND date(re.enrepair_dare)<='".$_GET['end']."' and end_process=1 ORDER by re.repair_id";
    $dbh->imp_sql($q);
    $qr=$dbh->select();
    
    $sql_leave= "SELECT sm.ss_Name FROM  ss_member sm 
WHERE sm.ss_Status='MUSER' or (sm.ss_Status='ADMIN' and sm.ss_process=0) 
GROUP BY sm.ss_Name ORDER BY sm.ss_Name ASC";
    //$sql_leave="SELECT COUNT(idla) as count_leave FROM typevacation";
    $dbh->imp_sql($sql_leave);
    $result=$dbh->select();
    $sql= "SELECT url FROM hospital";
    //$sql_leave="SELECT COUNT(idla) as count_leave FROM typevacation";
    $dbh->imp_sql($sql);
    $URL=$dbh->select_a();
    $color='';
    for($I=0;$I< count($qr);$I++){
        for($i=0;$i<count($result);$i++){ 
        if ($qr[$I]['result_recorder'] == $result[$i]['ss_Name']) {  
            $color = "$code_color[$i]";  
            }}
        
        $event_array[$I]['id']=$qr[$I]['repair_id'];  
        $event_array[$I]['title']=$qr[$I]['pd_number'];  
        $event_array[$I]['start']=$qr[$I]['strepair_date'].' '.$qr[$I]['strepair_time'];  
        $event_array[$I]['end']=$qr[$I]['enrepair_dare'].' '.$qr[$I]['enrepair_time'];    
        $event_array[$I]['url']=$URL['url'].'maintenance/content/hisDiv.php?id='.$qr[$I]['repair_id']; 
        $event_array[$I]['color']=$color;
        $event_array[$I]['allDay']=false;  
        //$i_event++;  
    }    
}  
//print_r($event_array);
$json= json_encode($event_array);    
if(isset($_GET['callback']) && $_GET['callback']!=""){    
echo $_GET['callback']."(".$json.");";        
}else{    
echo $json;    
}   
?>  
<?php  /* 
header("Content-type:application/json; charset=UTF-8");            
header("Cache-Control: no-store, no-cache, must-revalidate");           
header("Cache-Control: post-check=0, pre-check=0", false);      
include '../connection/connect_i.php'; // เรียกใช้งานไฟล์เชื่อมต่อกับฐานข้อมูล 
if($_GET['gData']){    
    $q="SELECT * FROM tbl_event WHERE date(event_start)>='".$_GET['start']."'  ";    
    $q.=" AND date(event_end)<='".$_GET['end']."' ORDER by event_id";    
    $result = $db->query($q);  
    while($rs=$result->fetch_object()){  
        if ($rs->typela == '1') {  
            $color = 'orange';  
        } else if ($rs->typela == '2') {  
            $color = 'violet';  
        } else if ($rs->typela == '3') {  
            $color = 'green';  
        }else if ($rs->typela == '4') {  
            $color = 'red';  
        } else if ($rs->typela == '5') {  
            $color = 'yellow';  
        }else if ($rs->typela == '7') {  
            $color = 'brown';  
        } 
        $json_data[]=array(    
            "id"=>$rs->event_id,  
            "title"=>$rs->event_title,  
            "start"=>$rs->event_start,  
            "end"=>$rs->event_end,  
            "url"=>$rs->event_url,
            "color" => $color,
            "allDay"=>($rs->event_allDay==true)?true:false   
              
        );  
    }    
}  
$json= json_encode($json_data);    
if(isset($_GET['callback']) && $_GET['callback']!=""){    
echo $_GET['callback']."(".$json.");";        
}else{    
echo $json;    
}    */ 
?>    
