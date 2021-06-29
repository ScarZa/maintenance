<?php     
function uploadResize($filename = null,$img=null, $upload_dir = null, $name = null ){     
  if(!empty($img)){
    $temporary = explode(".", $_FILES["$filename"]["name"]);
    $ext = end($temporary);
    if($ext == "png" || $ext == "PNG" || $ext == "jpg" || $ext == "JPG" || $ext=="jpeg" || $ext =="JPEG"){
    if($ext == "png" || $ext == "PNG"){
        $img = str_replace('data:image/png;base64,', '', $img);
    }elseif($ext == "jpg" || $ext == "JPG" || $ext=="jpeg" || $ext =="JPEG"){
        $img = str_replace('data:image/jpeg;base64,', '', $img);
      } 
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $newname = $name.".".$ext;
    $dir = $upload_dir."/";
    $file = $dir .$newname;
    $success = file_put_contents($file, $data);
   
    return $newname;
}else{
      
  echo "กรุณาเลือกชิดไฟล์ jpg ,png ด้วยครับ";
  return FALSE;
} 
} else {
  
  echo "ไม่มีการเลือกรูปภาพ_";
  return FALSE;
}         
  //return $newname;   
} 
?>    