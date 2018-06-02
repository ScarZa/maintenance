<?php
include_once '../header2.php';
$repair_id= filter_input(INPUT_GET, 'id');
//$repair_id = 183;
?>
<script src="../js/genHisRepair.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        HisDiv ('#his_content', id=<?=$repair_id?>);
    });
</script>
<body>
    <div id="his_content"></div>
    <div class='col-md-12' align="center"><a href="fullcalendar1.php" class="btn btn-danger">กลับ</a></div>
</body>
</html>
