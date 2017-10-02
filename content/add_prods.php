<script type="text/javascript">
    $(function () {
        var cate_no ="";
        var cate = "";
        $("#DP_content").append($("<div class='form-group'>หมวดครุภัณฑ์ : <select name='pdgroup' class='form-control select2' id='pdgroup' required></select>")
                        ,$("<div class='form-group'>ประเภทครุภัณฑ์ : <select name='pdcate' class='form-control select2' id='pdcate' required></select>")
                        ,$("<div class='form-group'>เลขครุภัณฑ์ : <INPUT TYPE='text' NAME='head_no' id='head_no' style='width: 100px'> <b id='cate_no'></b> <INPUT TYPE='text' NAME='num' id='num' style='width: 50px'></div>")
                        ,$("<div class='form-group'>ยี่ห้อ : <INPUT TYPE='text' NAME='brand' id='brand'></div>")
                        ,$("<div class='form-group'>หมายเลขเครื่อง : <INPUT TYPE='text' NAME='serial' id='serial'></div>")
                        ,$("<div class='form-group'>สถานะการใช้งาน : <select name='pd_status' class='form-control select2' id='pd_status' required></select>"));
                $("select#pdgroup").append($("<option value=''> เลือกหมวดครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/group_Data.php', function (GD) {
                                    for (var key in GD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#pdgroup").append($("<option value='"+GD[key].group_id+"'> "+GD[key].group_name+" </option>"));
                                    }$(".select2").select2();
                                });    
                $("select#pdcate").append($("<option value=''> เลือกประเภทครุภัณฑ์ </option>"));
                                $("select#pdgroup").change(function () {
                                    
                                $.getJSON('JsonData/cate_Data.php',{data: $("#pdgroup").val()}, function (CD) {
                                    for (var key in CD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#pdcate").append($("<option value='"+CD[key].category_id+"_"+CD[key].category_no+"'> "+CD[key].category_name+" </option>"));
                                        }
                                        $(".select2").select2();
                                    
                                }); 
                            });
                                     $("select#pdcate").change(function () {
                                        cate_no = $("#pdcate").val();
                                        cate = cate_no.split('_');
                                    $("#cate_no").text(cate[1]);
                                     });
                
                $("select#pd_status").append($("<option value=''> เลือกสถานะครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/pdstatus_Data.php', function (SD) {
                                    for (var key in SD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#pd_status").append($("<option value='"+SD[key].pd_status_id+"'> "+SD[key].pd_status+" </option>"));
                                        }
                                        $(".select2").select2();
                            });
    });
</script> 
<h2 style="color: blue">เพิ่มครุภัณฑ์</h2>
<ol class="breadcrumb">
    <li><a href="index.php"><i class="fa fa-home"></i> หน้าหลัก</a></li>
    <li class="active"><i class="fa fa-envelope"></i> เพิ่มครุภัณฑ์</li>
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
