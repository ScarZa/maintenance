<?php 
session_save_path("../session/");
session_start(); 
unset($_SESSION['m_id']);
unset($_SESSION['m_fullname']);
unset($_SESSION['m_dep']);
unset($_SESSION['m_process']);
unset($_SESSION['m_status']);
session_destroy();
echo 'Logout เรียบร้อยครับ !!!';
?>