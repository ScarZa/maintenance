<script type="text/javascript">
    $(function () {
       $("#DP_content").append("<div class='form-group' id='pd_id'>รหัสครุภัณฑ์ : <INPUT TYPE='text' NAME='pd_id' id='pd_id'></div>");
//            $("#pd_id").append($("")
//                    ,$(""));
    });
</script> 
<h2 style="color: blue">รายละเอียด/ดำเนินการความเสี่ยง</h2>
<ol class="breadcrumb">
    <li><a href="index.php"><i class="fa fa-home"></i> หน้าหลัก</a></li>
    <li id="bc"></li>
    <li class="active"><i class="fa fa-envelope"></i> รายละเอียด/ดำเนินการความเสี่ยง</li>
</ol>
<div class="row">
    <div class="col-md-12">
        <!-- ค้นหา -->

        <div class="box box-primary box-solid">
            <div class="box-header with-border">
                <h4 class="box-title"> เพิ่มข้อมูลครุภัณฑ์ </h4>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class=" col-md-6">
                 <div class="box box-primary box-solid">
                    <div class="box-header with-border">
                        <h4 class="box-title"> ข้อมูลครุภัณฑ์ </h4>
                    </div><!-- /.box-header -->
                        <div class="box-body">
                            <div id="DP_content"></div>
                 </div>
                    </div>
                </div>
                <div class=" col-md-6">
                <div class="box box-primary box-solid">
                    <div class="box-header with-border">
                        <h4 class="box-title"> ข้อมูลการซื้อครุภัณฑ์ </h4>
                    </div><!-- /.box-header -->
                        <div class="box-body">
                            <div id="DSP_content"></div>
                 </div>
                </div>
                </div>
                <div class=" col-md-6">
                 <div class="box box-primary box-solid">
                    <div class="box-header with-border">
                        <h4 class="box-title"> ข้อมูลการรับประกันครุภัณฑ์ </h4>
                    </div><!-- /.box-header -->
                        <div class="box-body">
                            <div id="DWP_content"></div>
                 </div>
                    </div>
                </div>
                <div class=" col-md-6">
                <div class="box box-primary box-solid">
                    <div class="box-header with-border">
                        <h4 class="box-title"> ข้อมูลสถานที่ครุภัณฑ์ </h4>
                    </div><!-- /.box-header -->
                        <div class="box-body">
                            <div id="DPP_content"></div>
                 </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12" id="DR_content"></div>
</div>
