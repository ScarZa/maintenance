<?php

session_save_path("../session/");
session_start();

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();

function insert_date($take_date_conv) {
    $take_date = explode("-", $take_date_conv);
    $take_date_year = @$take_date[2] - 543;
    $take_date = "$take_date_year-" . @$take_date[1] . "-" . @$take_date[0] . "";
    return $take_date;
}
$pd_id = $_POST['pd_id'];
//if (isset($_FILES["file"]["type"])) {
//    $validextensions = array("jpeg", "jpg", "png");
//    $temporary = explode(".", $_FILES["file"]["name"]);
//    $file_extension = end($temporary);
//    if ((($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/jpeg")
//            ) //&& ($_FILES["file"]["size"] < 100000)//Approx. 100kb files can be uploaded.
//            && in_array($file_extension, $validextensions)) {
//        $newname = "PDimage".$pd_id.".".$file_extension;
//        $dir = "../PD_imgs/";
//        $target = $dir.$newname;
//        if ($_FILES["file"]["error"] > 0) {
//            echo "Return Code: " . $_FILES["file"]["error"] . "<br/><br/>";
//        } else {
////            if (file_exists($target)) {
////                echo $newname . " : มีไฟล์นี้อยู่แล้ว";
////            } else {
//                $sourcePath = $_FILES['file']['tmp_name']; // Storing source path of the file in a variable
//                move_uploaded_file($sourcePath, $target); // Moving Uploaded file
//                $height = 480;
//                $size = getimagesize($target);
//                $width = round($height*$size[0]/$size[1]);
//                if($size[2] == 1){
//                    $img_ori = imagecreatefromgif($target);
//                }elseif ($size[2] == 2) {
//                    $img_ori = imagecreatefromjpeg($target);
//                }elseif ($size[2] == 3) {
//                    $img_ori = imagecreatefrompng($target);
//                }
//                $photoX = imagesx($img_ori);
//                $photoY = imagesy($img_ori);
//                $img_new = imagecreatetruecolor($width, $height);
//                
//                imagecopyresampled($img_new, $img_ori, 0, 0, 0, 0, $width+1, $height+1, $photoX, $photoY);
//                if($size[2] == 1){
//                imagegif($img_new,$target);
//                }elseif ($size[2] == 2) {
//                imagejpeg($img_new,$target);
//                }elseif ($size[2] == 3) {
//                imagepng($img_new,$target);
//                }
//                imagedestroy($img_ori);
//                imagedestroy($img_new);
    //////////////// add photo in DB   
if (isset($_FILES["file"]["type"])) {
    $del_photo="select photo_pd from pd_product where pd_id=:pd_id";
                $connDB->imp_sql($del_photo);
                $execute=array(':pd_id' => $pd_id);
                $result=$connDB->select_a($execute);
                if(!empty($result['photo_pd'])){
                $location="../PD_imgs/".$result['photo_pd'];
                include '../function/delet_file.php';
                fulldelete($location);}
}
    $newname = new upload_resizeimage("file", "../PD_imgs", "PDimage".$pd_id);
    $img = $newname->upload();
    //print_r($newname);
    if($img != FALSE){
    $table = "pd_product";
    $where = "pd_id=:pd_id";
    $execute=array(':pd_id' => $pd_id);
    $data = array($img);
    $field=array("photo_pd");
    $edit_pdphoto=$connDB->update($table, $data, $where, $field, $execute);  
    
    if ($edit_pdphoto == false) {
        echo "Update not complete " .$edit_pdphoto->errorInfo();
    } else {
                echo "อัพโหลดภาพสำเร็จ!!\n";
                echo "File Name: " . $img ;
    }
    }
    /////////////////
                
                //echo "Temp file: " . $_FILES["file"]["tmp_name"];
            //}
//        }
//    } else {
////echo "<span id='invalid'>***Invalid file Size or Type***<span>";
//        echo "***ไม่ใช่ไฟล์ชนิดรูปภาพ***";
//    }
//}
$connDB->close_PDO();
