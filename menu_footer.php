<?php 
session_save_path("./session/");
session_start(); 
function __autoload($class_name) {
    include 'class/'.$class_name.'.php';
}
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db=$conn_DB->Read_Text();
$dbconfig["hostname"]= trim($conn_db[0]) ;
$db=$conn_DB->conn_PDO();
?>
<ul class="nav nav-tabs nav-justified control-sidebar-tabs">
          <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-rocket"></i></a></li>
          <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <!-- Home tab content -->
         <div class="tab-pane" id="control-sidebar-home-tab">
            <h3 class="control-sidebar-heading">Develop</h3>
            <ul class="control-sidebar-menu">
              <li>
                <a href="#" onclick="loadPage('#index_content','content/list_dev.html');">
                  <i class="menu-icon fa fa-coffee bg-red"></i>
                  <div class="menu-info">
                    <h4 class="control-sidebar-subheading">Program</h4>
                    <p>การพัฒนาโปรแกรม/ทำรายงาน</p>
                  </div>
                </a>
              </li>
<!--              <li>
                <a href="index.php?page=content/add_person">
                  <i class="menu-icon fa fa-user bg-yellow"></i>
                  <div class="menu-info">
                    <h4 class="control-sidebar-subheading">Manage</h4>
                    <p>จัดการสมาชิก</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript::;">
                  <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>
                  <div class="menu-info">
                    <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>
                    <p>nora@example.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript::;">
                  <i class="menu-icon fa fa-file-code-o bg-green"></i>
                  <div class="menu-info">
                    <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>
                    <p>Execution time 5 seconds</p>
                  </div>
                </a>
              </li>-->
            </ul> 

          </div> <!-/.tab-pane ->
          <!-- Stats tab content -->
          <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div><!-- /.tab-pane -->
          <!-- Settings tab content -->
          <div class="tab-pane" id="control-sidebar-settings-tab">
            <form method="post">
              <h3 class="control-sidebar-heading">General Settings</h3>
              <?php $check = md5(trim('check'));?>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onClick="return popup('content/set_conn_db.php?method=<?= $check ?>&host=main', popup, 400, 600);">
                        <img src="images/icon_set2/gear.ico" width="25">&nbsp;&nbsp; Connect Database Main </a>
                </label>
              </div><!-- /.form-group -->
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onclick="loadPage('#index_content','content/add_user.html');">
                        <img src="images/icon_set2/gear.ico" width="25">&nbsp;&nbsp; ตั้งค่าผู้ใช้งาน </a>
                </label>
              </div><!-- /.form-group -->
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onclick="loadPage('#index_content','content/add_acc.html');">
                        <img src="images/icon_set2/gear.ico" width="25">&nbsp;&nbsp; ตั้งค่าอุปกรณ์ </a>
                </label>
              </div>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onclick="loadPage('#index_content','content/add_symptom.html');">
                        <img src="images/icon_set2/gear.ico" width="25">&nbsp;&nbsp; ตั้งค่าสรุปอาการเสีย </a>
                </label>
              </div>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onclick="loadPage('#index_content','content/add_store.html');">
                        <img src="images/icon_set2/gear.ico" width="25">&nbsp;&nbsp; ตั้งค่าร้านค้า </a>
                </label>
              </div>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onclick="loadPage('#index_content','content/add_NOPD.html');">
                        <img src="images/icon_set2/gear.ico" width="25">&nbsp;&nbsp; ตั้งค่าความต้องการ<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ไม่ใช่ครุภัณฑ์/ขอข้อมูล) </a>
                </label>
              </div>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onclick="loadAjax('#index_content','JsonData/tempSendData.php','4','AddNotify');">
                        <img src="images/icon_set2/gear.ico" width="25">&nbsp;&nbsp; ตั้งค่า NOTIFY </a>
                </label>
              </div>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <!--<a href="index.php?page=content/add_hos">
                        <img src="images/icon_set2/dolly.ico" width="25">&nbsp;&nbsp; ครุภัณฑ์ </a>-->
                    <a href='#'><img src='images/icon_set2/dolly.ico' width='25'> ครุภัณฑ์ </a><p>
                    <a href='#' onclick="loadPage('#index_content','content/add_prods.html');">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src='images/icon_set2/dolly.ico' width='20'> <span>เพิ่มครุภัณฑ์</span></a></p>
                    <a href='#' onclick="loadPage('#index_content','content/list_prods.html');">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src='images/icon_set2/dolly.ico' width='20'> <span>รายการครุภัณฑ์</span></a>
                </label>
              </div>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onclick="confirm('กรุณายืนยันการสำรองข้อมูลอีกครั้ง !!!');loadPage('#index_content','content/backup.php');">
                        <img src="images/backup-restore.ico" width="25">&nbsp;&nbsp; backup </a>
                </label>
              </div>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onClick="window.open('content/openDB.php','','width=400,height=350'); return false;" title="ข้อมูลสำรอง">
                        <img src="images/database.ico" width="25">&nbsp;&nbsp; ข้อมูลสำรอง</a>
                </label>
              </div>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" onClick="loadPage('#index_content','content/about.html')" title="ผู้พัฒนา">
                    <img src="images/Paper Mario.ico" width="25">&nbsp;&nbsp; ผู้พัฒนา</a>
                </label>
              </div>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                    <a href="#" title="hostname main config">DB Main : <?= $dbconfig["hostname"]?></a><br>
                    <a href="#" title="session id">SESSION ID : <?php echo session_id();?></a>
                </label>
              </div>
               </form>
          </div><!-- /.tab-pane -->
        </div>
       
    