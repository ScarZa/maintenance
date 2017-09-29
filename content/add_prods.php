<script type="text/javascript">
    $(function () {
        $("#DP_content").append($("<div class='form-group'>หมวดครุภัณฑ์ : <select name='pdgroup' class='form-control select2' id='pdgroup' required></select>")
                        ,$("<div class='form-group'>ประเภทครุภัณฑ์ : <select name='pdcate' class='form-control select2' id='pdcate' required></select>")
                        ,$("<div class='form-group'>รหัสครุภัณฑ์ : <INPUT TYPE='text' NAME='pd_id' id='pd_id'></div>")
                        ,$("<div class='form-group'>เลขครุภัณฑ์ : <INPUT TYPE='text' NAME='num' id='num'></div>")
                        ,$("<div class='form-group'>เลขครุภัณฑ์ : <INPUT TYPE='text' NAME='num' id='num'></div>"));
                $("select#pdgroup").append($("<option value=''> เลือกหมวดครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/group_data.php', function (LR) {
                                    for (var key in LR) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#combobox2").append($("<option value='"+LR[key].group_id+"' "/*+select+*/"> "+LR[key].group_name+" </option>"));
                                    }$(".select2").select2();
                                });            
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
