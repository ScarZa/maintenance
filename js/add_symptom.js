function AddSymptom (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>เพิ่มสรุปอาการเสีย</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> เพิ่มสรุปอาการเสีย</li>"+
                                    "</ol>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มข้อมูลสรุปอาการเสีย </h4></div>"+
                                    "<div class='box-body' id='add_user'><div class='col-md-12'><div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> หมวดสรุปอาการเสีย </h4></div><div class='box-body'><form action='' name='frmaddsg' id='frmaddsg' method='post'>"+
                                    "<div class='col-md-12' id='SG_content'></div></form></div></div></div>"+
                                    "<div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> รายการสรุปอาการเสีย </h4></div><div class='box-body'><form action='' name='frmaddsc' id='frmaddsc' method='post'>"+
                                    "<div class='col-md-12' id='SC_content'></div></form></div></div></div>"+
                                    "<div class='col-md-12'><div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> สรุปอาการเสีย </h4></div><div class='box-body'><div id='SYMP_content'></div></div></div></div></div>"+
                                    "</div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                            
                                    var column1 = ["id.","หมวดสรุปอาการเสีย","รายการสรุปอาการเสีย","แก้ไข","ลบ"];
              var CTb = new createTableAjax();
              CTb.GetNewTableAjax('SYMP_content','JsonData/DT_Symptom.php','JsonData/tempSendData.php',column1
              ,'AddSymptom','m_symmptom_category','symmptom_cid','content/add_symptom.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb');                    
                                

            var idsymp = id;
            if(idsymp == null){
        $("#SG_content").append($("<div class='form-group'>หมวดสรุปอาการเสีย : <INPUT TYPE='text' NAME='symp_name' id='symp_name' class='form-control' placeholder='ระบุหมวดสรุปอาการเสีย' required></div>"));
                                    
            $("div#SG_content").append("<input type='hidden' id='method' name='method' value='add_sympG'>");                
            $("div#SG_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='SGsubmit'>บันทึก</button></div>");
            $("button#SGsubmit").click(function (e) { 
                                    if($("#symp_name").val()==''){
                                            alert("กรุณาระบุหมวดสรุปอาการเสียด้วยครับ!!!");
                                            $("#symp_name").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcsymptom.php",
                                           data: $("#frmaddsg").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_symptom.html');
					   }
					 });e.preventDefault();
                                     }
        });
        
                $("#SC_content").append($("<div class='form-group'>หมวดสรุปอาการเสีย : <select name='symmptom_gid' class='form-control select2' id='symmptom_gid' required></select></div>")
                                        ,$("<div class='form-group'>รายการสรุปอาการเสีย : <INPUT TYPE='text' NAME='symmptom_name' id='symmptom_name' class='form-control' placeholder='ระบุรายการสรุปอาการเสีย' required></div>"));
                                $.getJSON('JsonData/symmptom_group.php', function (GD) {
                                     var option="<option value=''> เลือกหมวด </option>";
                                    for (var key in GD) {
                                              option += "$('<option value='"+GD[key].symp_gid+"'> "+GD[key].symp_name+" </option>'),";
                                        }
                                        $("select#symmptom_gid").empty().append(option);
                                        $(".select2").select2();
                                }); 
            $("div#SC_content").append("<input type='hidden' id='method' name='method' value='add_sympC'>");                
            $("div#SC_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='SCsubmit'>บันทึก</button></div>");
            $("button#SCsubmit").click(function (e) { 
                                    if($("#symmptom_gid").val()==''){
                                            alert("กรุณาเลือกหมวดสรุปอาการเสียด้วยครับ!!!");
                                            $("#symmptom_gid").focus();
                                            e.preventDefault();
                                        }else if($("#symmptom_name").val()==''){
                                            alert("กรุณาระบุรายการสรุปอาการเสียด้วยครับ!!!");
                                            $("#symmptom_name").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcsymptom.php",
                                           data: $("#frmaddsc").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_symptom.html');
					   }
					 });e.preventDefault();
                                     }
        });

            }else{ 
                $.getJSON('JsonData/symmptom_category.php',{data: idsymp.data}, function (data) { 
        $("#SG_content").append($("<div class='form-group'>หมวดสรุปอาการเสีย : <INPUT TYPE='text' NAME='symp_name' id='symp_name' class='form-control' placeholder='ระบุหมวดสรุปอาการเสีย' required></div>"));
             
                    $("#symp_name").val(data[0].symp_name);
            $("div#SG_content").append($("<input type='hidden' id='method' name='method' value='edit_sympG'>")
                                        ,$("<input type='hidden' id='symp_gid' name='symp_gid' value='"+data[0].symp_gid+"'>"));                
            $("div#SG_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='SGsubmit'>แก้ไข</button></div>");
            $("button#SGsubmit").click(function (e) { 
                                    if($("#symp_name").val()==''){
                                            alert("กรุณาระบุหมวดสรุปอาการเสียด้วยครับ!!!");
                                            $("#symp_name").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcsymptom.php",
                                           data: $("#frmaddsg").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_symptom.html');
					   }
					 });e.preventDefault();
                                     }
        });
        
                $("#SC_content").append($("<div class='form-group'>หมวดสรุปอาการเสีย : <select name='symmptom_gid' class='form-control select2' id='symmptom_gid' required></select></div>")
                                        ,$("<div class='form-group'>รายการสรุปอาการเสีย : <INPUT TYPE='text' NAME='symmptom_name' id='symmptom_name' class='form-control' placeholder='ระบุรายการสรุปอาการเสีย' required></div>"));
                                $.getJSON('JsonData/symmptom_group.php', function (GD) {
                                     var option="<option value=''> เลือกหมวด </option>";
                                    for (var key in GD) {
                                        if(GD[key].symp_gid==data[0].symmptom_gid){var select='selected';}else{var select='';}
                                              option += "$('<option value='"+GD[key].symp_gid+"' "+select+"> "+GD[key].symp_name+" </option>'),";
                                        }
                                        $("select#symmptom_gid").empty().append(option);
                                        $(".select2").select2();
                                }); 
                                $("#symmptom_name").val(data[0].symmptom_name);
                                
            $("div#SC_content").append($("<input type='hidden' id='method' name='method' value='edit_sympC'>")
                                        ,$("<input type='hidden' id='symmptom_cid' name='symmptom_cid' value='"+data[0].symmptom_cid+"'>"));                
            $("div#SC_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='SCsubmit'>แก้ไข</button></div>");
            $("button#SCsubmit").click(function (e) { 
                                    if($("#symmptom_gid").val()==''){
                                            alert("กรุณาเลือกหมวดสรุปอาการเสียด้วยครับ!!!");
                                            $("#symmptom_gid").focus();
                                            e.preventDefault();
                                        }else if($("#symmptom_name").val()==''){
                                            alert("กรุณาระบุรายการสรุปอาการเสียด้วยครับ!!!");
                                            $("#symmptom_name").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcsymptom.php",
                                           data: $("#frmaddsc").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_symptom.html');
					   }
					 });e.preventDefault();
                                     }
        });
                });
            }
        }
