<?php
function notify_message($message,$token){
    define('LINE_API',"https://notify-api.line.me/api/notify");
 $queryData = array('message' => $message);
 $queryData = http_build_query($queryData,'','&');
 $headerOptions = array( 
         'http'=>array(
            'method'=>'POST',
            'header'=> "Content-Type: application/x-www-form-urlencoded\r\n"
                      ."Authorization: Bearer ".$token."\r\n"
                      ."Content-Length: ".strlen($queryData)."\r\n",
            'content' => $queryData
         ),
 );
 $context = stream_context_create($headerOptions);
 $result = file_get_contents(LINE_API,FALSE,$context);
 $res = json_decode($result);
 return $res;
} 

function send_notify_message($message_data,$access_token){
   $headers = array('Method: POST', 'Content-type: multipart/form-data', 'Authorization: Bearer '.$access_token );

   $ch = curl_init();
   curl_setopt($ch, CURLOPT_URL, 'https://notify-api.line.me/api/notify');
   curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
   curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
   curl_setopt($ch, CURLOPT_POSTFIELDS, $message_data);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   $result = curl_exec($ch);
   // Check Error
   if(curl_error($ch))
   {
      $return_array = array( 'status' => '000: send fail', 'message' => curl_error($ch) );
   }
   else
   {
      $return_array = json_decode($result, true);
   }
   curl_close($ch);
return $return_array;
}
?>