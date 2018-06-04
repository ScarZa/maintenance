<?php
include_once '../header2.php';
$dev_id= filter_input(INPUT_GET, 'id');
//$dev_id = 183;
?>
<script src="../js/detail_dev.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () { 
        detailDevDiv ('#his_content', id=<?=$dev_id?>);
    });
</script>
<body>
    <div id="his_content"></div>
    <div class='col-md-12' align="center"><a href="fullcalendar2.php" class="btn btn-danger">กลับ</a></div>
</body>
</html>
