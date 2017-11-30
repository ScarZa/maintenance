function RecRepair (content,id=null) {
$.getJSON('JsonData/repair_Data.php',{data: id.data},function (data) {
        $(content).empty().append("<h2 style='color: blue'>บันทึกงานซ่อมคอมพิวเตอร์(ครุภัณฑ์คอมพิวเตอร์)</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.php'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> บันทึกงานซ่อมคอมพิวเตอร์</li>"+
                                    "</ol><form name='frmresult' id='frmresult'>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> บันทึกงานซ่อมครุภัณฑ์คอมพิวเตอร์ </h4></div>"+
                                    "<div class='box-body'><div class='col-md-12' id='add_repair'>"+
                                    "ผู้แจ้งซ่อม : "+data.inform+"  &nbsp;&nbsp;งาน : "+data.depName+"<br>"
                            +"เลขครุภัณฑ์ : "+data.pd_number+"  &nbsp;&nbsp;หมายเหตุ : "+data.note+"<br>"
                            +"อาการ : "+data.symptom+" <br>วันที่แจ้ง : "+data.repair_date+"  &nbsp;&nbsp;<b style='color: red;'>"+data.vital+"</b>  &nbsp;&nbsp;วันที่รับใบแจ้ง : "+data.receive_date+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> รายละเอียดการซ่อม </h4></div><div class='box-body'><div id='Rr_content'></div></div></div></div>"+
                                    "</div></div></div></form>");
                               
        $('div#Rr_content').append($("<div class='form-group'><label for='datepicker1' class='control-label'>วันที่เริ่มซ่อม </label><input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required>")
                                    ,$("<div class='form-group'><label for='datepicker1' class='control-label'>วันที่ซ่อมเสร็จ </label><input type='text' name='datepicker2' id='datepicker2' class='form-control' readonly required>")
                                    ,$("<div class='form-group'><input type='radio' value='1' name='result' id='result1' required> : ซ่อมได้  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' value='0' name='result' id='result0' required> : ซ่อมไม่ได้</div>")
                                    ,$("<div class='form-group' id='do_repair'></div>")
                                    ,$("<div class='form-group' id='dont_repair'></div>")
                                    ,$("<div class='form-group' id='cause_sel'></div>")
                                    ,$("<div class='form-group'><label for='repair_detail' class='control-label'>รายละเอียดการซ่อม</label><textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='อธิบายรายละเอียดการซ่อม' name='repair_detail' id='repair_detail' required></textarea></div>")
                                    ,$("<div class='form-group' id='rece_pd_sel'></div>")
                                    ,$("<input type='hidden' class='form-control' id='repair_id' name='repair_id'>")
                                    ,$("<input type='hidden' class='form-control' id='method' name='method'>"));
                    
                        $('div#do_repair').append($("<div class='form-group'><label for='datepicker1' class='control-label'>วันที่เริ่มซ่อม1 </label><input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required>"));
                        $('div#dont_repair').append($("<div class='form-group'><label for='datepicker1' class='control-label'>วันที่เริ่มซ่อม2 </label><input type='text' name='datepicker' id='datepicker1' class='form-control' readonly required>"));
    
           $("#do_repair").hide(0);
           $("#dont_repair").hide(0);
       $("#result1").click(function (){
                    $("#do_repair").show("fast"); 
                    $("#dont_repair").hide(0);
       }); 
       $("#result0").click(function (){
                   $("#dont_repair").show("fast"); 
                    $("#do_repair").hide(0);      
       });
    
                    $('#cause_sel').empty().append("<label for='cause' class='control-label'>สรุปอาการเสีย</label><select name='cause' id='cause' class='form-control'></select>");
                    $('#rece_pd_sel').empty().append("<label for='repairer' class='control-label'>ผู้รับการซ่อม</label><select name='rece_pd' id='rece_pd' class='form-control select2'></select>");
                                $("select#cause").addClass("select2");
                    $("select#cause").append($("<option value=''> เลือกสรุปอาการเสีย </option>"));
                    $.getJSON('JsonData/symmptom_category.php', function (GD) {
                                    for (var key in GD) {
                                        //if(GD[key].pd_id==data.pd_id){var select='selected';}else{var select='';}
                                              $("select#cause").append($("<option value='"+GD[key].symmptom_cid+"'> "+GD[key].symmptom_name+"</option>"));
                                    }
                                });
                    $("select#rece_pd").append($("<option value=''> เลือกผู้รับการซ่อม </option>"));
                    $.getJSON('JsonData/emp_Data.php', function (GD) {
                                    for (var key in GD) {
                                        //if(GD[key].pd_id==data.pd_id){var select='selected';}else{var select='';}
                                              $("select#rece_pd").append($("<option value='"+GD[key].empno+"'> "+GD[key].fullname+"</option>"));
                                    }
                                });
                                $(".select2").select2();
                                var DP = new DatepickerThai();
                                DP.GetDatepicker('#datepicker1');
                                DP.GetDatepicker('#datepicker2');
                
                                $("div#add_repair").append("<button type='submit' class='btn btn-primary' id='submresult'>บันทึกใบแจ้งซ่อม</button>");
                                $("button#submresult").click(function(e) {
                                        e.preventDefault();
                                        modal.modal('hide');
        				$.ajax({
					   type: "POST",
					   url: "process/prcrepair.php",
                                           data: $("#frmresult").serialize(),
					   success: function(result) {
                                               alert(result);
                                                $("#index_content").empty().load('content/list_repair_order.html');
                                                 return false;
					   }
					 });
        });

        });
        }
