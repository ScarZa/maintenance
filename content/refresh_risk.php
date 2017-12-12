<?php 
function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
include_once '../template/plugins/funcDateThai.php';
$sql = "select count(re.repair_id) AS alertRepair FROM m_repair_pd re
                WHERE re.repair_status=0";
$conn_DB->imp_sql($sql);
$result = $conn_DB->select_a();
?>
                <a href="JavaScript:doCallAjax('countrisk');" class="dropdown-toggle" data-toggle="dropdown">
                    <i style="color: yellow;" class="fa fa-bell-o"></i>
                  <span class="label label-danger"><?=$result['alertRepair']?></span>
                </a>
                <ul class="dropdown-menu">
                    <li class="header" style="color: red;"><b>คุณมี <?=$result['alertRepair']?> รายการแจ้งย้าย</b></li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu"><?php  $sql2 = "SELECT re.repair_id,re.repair_date,pp.pd_number,ppl.note,LEFT(re.symptom,35) as symptom,depName,re.vital
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer) inform
FROM m_repair_pd re
INNER JOIN pd_product pp on pp.pd_id=re.pd_id
INNER JOIN pd_place ppl on ppl.pd_id=pp.pd_id
INNER JOIN department d on d.depId=ppl.depId
WHERE re.repair_status=0";
                                $conn_DB->imp_sql($sql2);
                                $result2 = $conn_DB->select();
                                for($i=0;$i<count($result2);$i++){ 
                                    if($result2[$i]['vital']=='0'){
                                       $icon = "fa fa-bed"; 
                                       $color='success';
                                    }elseif($result2[$i]['vital']=='1'){
                                       $icon = 'fa fa-medkit'; 
                                       $color='red';
                                    }
?>
                      <li>
                          <a href="#">
                              <?php //if (!empty($result2[$i]['take_file1'])) { ?>
                                    <!--<div class="pull-left">
                                        <img src="myfile/<?//= $result2[$i]['take_file1'] ?>" class="img-circle" alt="User Image">
                                    </div>--><?php //} ?>
                                <h4>
                                    <i class="<?= $icon ?> text-<?= $color ?>"></i> <?= $result2[$i]['pd_number'] ?>:
                                </h4>
                                    <p><?= $result2[$i]['depName']."(".$result2[$i]['note'].")" ?></p>
                                    <p><?= $result2[$i]['symptom'] ?>...</p>
                                <small><i class="fa fa-clock-o"> <?= DateThai1($result2[$i]['repair_date']) ?></i></small>
                            </a>
                      </li>
                                <?php } ?>
                   </ul>
                  </li>
                  <li class="footer"><a href="#" onclick="loadPage('#index_content','content/check_risk.html')">ดูทั้งหมด</a></li>
                </ul>
<?php $conn_DB->close_PDO(); ?>