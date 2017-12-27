function AddRepair (content,id=null) {
$.getJSON('JsonData/head_repair.php',function (data) {
        $(content).empty().append("<h2 style='color: blue'>แจ้งซ่อมงานคอมพิวเตอร์(ครุภัณฑ์คอมพิวเตอร์)</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.php'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> แจ้งซ่อมงานคอมพิวเตอร์</li>"+
                                    "</ol><form action='' name='frmaddrepair' id='frmaddrepair' method='post'>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> แจ้งซ่อมครุภัณฑ์คอมพิวเตอร์ </h4></div>"+
                                    "<div class='box-body'><div class='col-md-12' id='add_repair'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> รายละเอียดอาการเสีย </h4></div><div class='box-body'><div id='Dr_content'></div></div></div></div>"+
                                    "</div></div></div></form>");
                               
    var idrepair = id;
    var fullname = data.fullname;
    var posi = data.posi;
    var dep = data.dep;
            if(idrepair == null){
        $("#Dr_content").append($("<div class='form-group' id='inform'></div>")
                        ,$("<div class='form-group'>เครื่องที่เสีย : <select name='pd_id' class='form-control select2' id='pd_id' required></select></div>")
                        ,$("<div class='form-group'>อาการเสีย : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุอาการเสีย' name='symptom' id='symptom' required></textarea></div>")
                        ,$("<div class='form-group'><input type='radio' value='1' name='vital' id='vital' required> : เร่งด่วน  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' value='0' name='vital' id='vital' required> : ไม่เร่งด่วน</div>"));
                
                if(data.status=='ADMIN'){
                    $("#inform").append("ผู้แจ้ง : <select name='informer' class='form-control select2' id='informer' required></select>");
                    $("select#informer").append($("<option value=''> เลือกผู้แจ้ง </option>"));
                                $.getJSON('JsonData/emp_Data.php', function (GD) {
                                    for (var key in GD) {
                                              $("select#informer").append($("<option value='"+GD[key].empno+"'> "+GD[key].fullname+"</option>"));
                                    }$(".select2").select2();
                                });
                }else{
                    $("#inform").append("ชื่อ : <b>"+fullname+"</b>&nbsp;&nbsp; ตำแหน่ง : <b>"+posi+"</b>&nbsp;&nbsp; งาน : <b>"+dep+"</b><p>");
                }
                    $("select#pd_id").append($("<option value=''> เลือกครุภัณฑ์ </option>"));
                    if(data.status=='ADMIN'){
                                $.getJSON('JsonData/dep_prods.php', function (GD) {
                                    for (var key in GD) {
                                              $("select#pd_id").append($("<option value='"+GD[key].pd_id+"'> "+GD[key].pd_number+" : "+GD[key].name+" ("+GD[key].note+") </option>"));
                                    }$(".select2").select2();
                                });
                                }else{
                                 $.getJSON('JsonData/dep_prods.php',{data: data.depId}, function (GD) {  
                                     for (var key in GD) {
                                              $("select#pd_id").append($("<option value='"+GD[key].pd_id+"'> "+GD[key].pd_number+" : "+GD[key].name+" ("+GD[key].note+") </option>"));
                                    }$(".select2").select2();
                                });
                                 
                                }
                                        
     
            $("div#add_repair").append("<input type='hidden' id='method' name='method' value='add_repair'>"); 
            if(data.status=='USER'){
            $("div#add_repair").append("<input type='hidden' id='informer' name='informer' value='"+data.empno+"'>");
            }
            $("div#add_repair").append("<button type='submit' class='btn btn-primary' id='ARsubmit'>บันทึกใบแจ้งซ่อม</button>");
            $("button#ARsubmit").click(function(e) {
                                        e.preventDefault();
        				$.ajax({
					   type: "POST",
					   url: "process/prcrepair.php",
                                           data: $("#frmaddrepair").serialize(),
					   success: function(result) {
						alert(result);
                                                $.getJSON('JsonData/DT_TRP.php',function (data) {
                                                    if(data.req_repair !=0){
                                                        $("#listRepair").append($("<small class='label pull-right bg-red'>"+data.req_repair+"</small>"));
                                                    }  
                                                $("#index_content").empty().load('content/add_repair.html');
					   });
                                       }
					 });
        });
            }else{ 
                $.getJSON('JsonData/detail_repair.php',{data: idrepair.data}, function (data) {
                $("#Dr_content").append($("<div class='form-group' id='inform'></div>")
                        ,$("<div class='form-group'>วันที่แจ้งซ่อม : <input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required>")
                        ,$("<div class='form-group'>เครื่องที่เสีย : <select name='pd_id' class='form-control select2' id='pd_id' required></select></div>")
                        ,$("<div class='form-group'>อาการเสีย : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุอาการเสีย' name='symptom' id='symptom' required></textarea></div>")
                        ,$("<div class='form-group'><input type='radio' value='1' name='vital' id='vital1' required> : เร่งด่วน  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' value='0' name='vital' id='vital0' required> : ไม่เร่งด่วน</div>"));
                    $("#inform").append("ชื่อ : <b>"+fullname+"</b>&nbsp;&nbsp; ตำแหน่ง : <b>"+posi+"</b>&nbsp;&nbsp; งาน : <b>"+dep+"</b><p>");    
                    $("select#pd_id").append($("<option value=''> เลือกครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/dep_prods.php',{data: data.depId}, function (GD) {
                                    for (var key in GD) {
                                        if(GD[key].pd_id==data.pd_id){var select='selected';}else{var select='';}
                                              $("select#pd_id").append($("<option value='"+GD[key].pd_id+"' "+select+"> "+GD[key].pd_number+" : "+GD[key].name+" ("+GD[key].note+") </option>"));
                                    }$(".select2").select2();
                                });   
                               
                                        var repair_date = data.repair_date;
                                        var rep_date = repair_date.split(' ');
                                    console.log(rep_date[0]);
                                var DP = new DatepickerThai();
                                DP.GetDatepicker('#datepicker1');
                                $("#datepicker1").datepicker("setDate",new Date(rep_date[0]));
                                $("#symptom").val(data.symptom);
                                if(data.vital == 0){
                                $("#vital0").attr('checked','checked');
                                }else if(data.vital == 1){
                                $("#vital1").attr('checked','checked');    
                                }
            $("div#add_repair").append($("<input type='hidden' id='method' name='method' value='edit_repair'>")
                                        ,$("<input type='hidden' id='repair_id' name='repair_id' value='"+data.repair_id+"'>"));                
            $("div#add_repair").append("<button type='submit' class='btn btn-warning' id='ARsubmit'>แก้ไขใบแจ้งซ่อม</button>");
            $("button#ARsubmit").click(function(e) {
                                        e.preventDefault();
        				$.ajax({
					   type: "POST",
					   url: "process/prcrepair.php",
                                           data: $("#frmaddrepair").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/list_repair_order.html');
					   }
					 });
        });
                
                });               
            }
        });
        }
