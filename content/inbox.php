<?php
session_save_path("../session/");
session_start();

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
 if (!empty($_SESSION['m_id'])) { ?>                  
<!--<li class="dropdown messages-menu" id="inbox1">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-envelope-o"></i>
            <span class="label label-warning">
                <?php
                include_once '../template/plugins/funcDateThai.php';
                $user_dep = $_SESSION['m_dep'];
                $sql = "select count(re.repair_id) AS inbox FROM m_repair_pd re
                WHERE re.repair_status=0";
                $execute = array(':user_dep' => $user_dep);
                $conn_DB->imp_sql($sql);
                $result = $conn_DB->select_a($execute);
                echo $inbox = $result['inbox'];
                ?>
            </span>
        </a>
        <ul class="dropdown-menu">
            <li class="header">คุณมีรายการรอทบทวน <?= $inbox ?> รายการ</li>

            <li>
                 inner menu: contains the actual data 
                <ul class="menu">
                    <?php
                    $sql = "SELECT re.repair_id,re.repair_date,pp.pd_number,ppl.note,re.symptom,depName,re.vital
,(SELECT CONCAT(e.firstname,' ',e.lastname) FROM emppersonal e WHERE e.empno=re.informer) inform
FROM m_repair_pd re
INNER JOIN pd_product pp on pp.pd_id=re.pd_id
INNER JOIN pd_place ppl on ppl.pd_id=pp.pd_id
INNER JOIN department d on d.depId=ppl.depId
WHERE re.repair_status=0";
                    $execute = array(':user_dep' => $user_dep);
                    $conn_DB->imp_sql($sql);
                    $result2 = $conn_DB->select($execute);
                    for ($i = 0; $i < count($result2); $i++) {
                        if ($result2[$i]['vital'] == '0') {
                            $icon = "fa fa-bed";
                        } elseif ($result2[$i]['vital'] == '1') {
                            $icon = 'fa fa-medkit';
                        }
                        
                        if ($result2[$i]['level_risk'] == 'A') {
                            $color = 'success';
                        } elseif ($result2[$i]['level_risk'] == 'D' or $result2[$i]['level_risk'] == 'E' or $result2[$i]['level_risk'] == 'F') {
                            $color = 'yellow';
                        }
                        ?> 
                        <li> start message 
                            <a href="#"><?php if (!empty($result2[$i]['take_file1'])) { ?>
                                    <div class="pull-left">
                                        <img src="myfile/<?= $result2[$i]['take_file1'] ?>" class="img-circle" alt="User Image">
                                    </div><?php } ?>
                                <h4>
                                    <i class="<?= $icon ?> text-<?= $color ?>"></i> <?= $result2[$i]['sub_name'] ?>:
                                </h4>
                                <p><?= $result2[$i]['detail'] ?>...</p>
                                <small><i class="fa fa-clock-o"> <?= DateThai1($result2[$i]['take_rec_date']) ?></i></small>
                            </a>
                        </li> end message <?php } ?>
                </ul>
            </li>
            <li class="footer"><a href="#">ดูทั้งหมด</a></li>
        </ul>
    </li>-->
    <?php if ($_SESSION['m_status'] == 'ADMIN') { ?>
        <li class="dropdown notifications-menu" id="mySpan"></li>
    <?php }
} if (empty($_SESSION['m_id'])) { ?>
    <li class="dropdown messages-menu">

        <a href="#" onClick="return popup('login_page.html', popup, 430, 380);" title="เข้าสู่ระบบบริหารความเสี่ยง">
            <img src="images/key-y.ico" width="18"> เข้าสู่ระบบ
        </a>

    </li>
<?php
} else {

    $user_id = $_SESSION['m_id'];
    if (!empty($user_id)) {

        $sql = "select CASE sm.ss_Status WHEN 'ADMIN' THEN 'ผู้ดูแลระบบ' "
                . "WHEN 'USER' THEN 'ผู้ใช้งานทั่วไป' "
                . "WHEN 'MUSER' THEN 'ผู้ดูแลระบบซ่อม' END AS m_status,e.photo "
                . "from ss_member sm inner join emppersonal e on e.empno=sm.ss_Name WHERE sm.ss_Name=:user_id";
        $execute = array(':user_id' => $user_id);
        $conn_DB->imp_sql($sql);
        $result = $conn_DB->select_a($execute);

        $empno_photo = $result['photo'];
        if (empty($empno_photo)) {
            $photo = 'person.png';
            $fold = "images/";
        } else {
            $photo = $empno_photo;
            $fold = "../../hrd1.9/photo/";
        }
    }
    ?>
    <!-- User Account: style can be found in dropdown.less -->
    <li class="dropdown user user-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <img src="<?= $fold . $photo ?>" class="user-image" alt="User Image">
            <span class="hidden-xs"><?= $_SESSION['m_fullname'] ?></span>
        </a>
        <ul class="dropdown-menu">
            <!-- User image -->
            <li class="user-header">
                <img src="<?= $fold . $photo ?>" class="img-circle" alt="User Image">
                <p>
    <?= $_SESSION['m_fullname'] ?>
                    <small><?= $result['m_status'] ?></small>
                </p>
            </li>
            <!-- Menu Footer-->
            <li class="user-footer">
                <div class="pull-left">
                    <a href="index.php?page=content/add_user&id=<?= $conn_DB->sslEnc($user_id) ?>" class="btn btn-default btn-flat">ข้อมูลส่วนตัว</a>
                </div>
                <div class="pull-right">
                    <a href="#" onclick="sendget('process/logout.php', 'index_content')" class="btn btn-default btn-flat">ออกจากระบบ</a>
                </div>
            </li>
        </ul>
    </li>
    
    <!----------------------------------- Modal Receive By Alert ------------------------->
    <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">New message</h4>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="control-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="control-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
    <script language="Javascript" type="text/javascript">
        $('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
    </script>
    
    <?php if ($_SESSION['m_status'] == 'ADMIN') { ?>
        <!-- Control Sidebar Toggle Button 
        <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
        </li>-->
    <?php }
} ?>
