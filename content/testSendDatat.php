<?php
$data = isset($_POST['data'])?$_POST['data']:'';
$rslt = array();
$series = array();
$series['data'] = 123;
array_push($rslt, $series);
print json_encode($series);

