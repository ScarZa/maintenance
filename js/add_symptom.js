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
                            $("h2").prepend("<img src='images/icon_set2/dolly.ico' width='40'> ");
                            
                                    var column1 = ["id.","หมวดสรุปอาการเสีย","รายการสรุปอาการเสีย","แก้ไข","ลบ"];
              var CTb = new createTableAjax();
              CTb.GetNewTableAjax('SYMP_content','JsonData/DT_Symptom.php','JsonData/tempSendData.php',column1
              ,'AddSymptom','m_symmptom_category','symmptom_cid','content/add_symptom.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb');                    
                                

            var iduser = id;
            if(iduser == null){
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
                $.getJSON('JsonData/detail_user.php',{data: iduser.data}, function (data) {
        $("#DUS_content").append($("<div class='form-group'>ผู้ใช้งาน : <select name='ss_Name' class='form-control select2' id='ss_Name' required></select></div>")
                        ,$("<div class='form-group'>ระดับการใช้งาน : <select name='ss_Status' class='form-control select2' id='ss_Status' required></select></div>")
                        ,$("<div class='form-group'>ชื่อผู้ใช้ : <INPUT TYPE='text' NAME='ss_user_name' id='ss_user_name' class='form-control' placeholder='ระบุชื่อผู้ใช้' required></div>")
                        ,$("<div class='form-group'>รหัสผ่าน : <INPUT TYPE='password' NAME='password' id='password' class='form-control' placeholder='ระบุรหัสผ่าน'></div>")
                        ,$("<div class='form-group'>ยืนยันรหัสผ่าน : <INPUT TYPE='password' NAME='con_password' id='con_password' class='form-control' placeholder='ยืนยันรหัสผ่าน'></div>")
                        ,$("<b style='color: red'>*หากไม่เปลี่ยนรหัสผ่านไม่ต้องแก้ไข</b><br><br>"));
                                $.getJSON('JsonData/emp_Data.php', function (GD) {
                                     var option="<option value=''> เลือกผู้ใช้งาน </option>";
                                    for (var key in GD) {
                                        if(GD[key].empno==data.ss_Name){var select='selected';}else{var select='';}
                                              option += "$('<option value='"+GD[key].empno+"' "+select+"> "+GD[key].fullname+" </option>'),";
                                        }
                                        $("select#ss_Name").empty().append(option);
                                        $(".select2").select2();
                                }); 
                $("select#ss_Status").append($("<option value=''> เลือกระดับการใช้งาน </option>")
                                            ,$("<option value='ADMIN'> ผู้ดูแลระบบสูงสุด </option>")
                                            ,$("<option value='MUSER'> ผู้ดูแลระบบซ่อม </option>"));
                                            if(data.ss_Status=='ADMIN'){
                                                $("option[value^=ADMIN]").attr("selected","selected");
                                            }else if(data.ss_Status=='MUSER'){
                                                $("option[value^=MUSER]").attr("selected","selected");
                                            }
                 $("input#ss_user_name").attr("value",data.ss_user_name);                   
            $("div#DUS_content").append("<input type='hidden' id='method' name='method' value='edit_user'>");       
            $("div#DUS_content").append("<input type='hidden' id='ss_UserID' name='ss_UserID' value='"+data.ss_UserID+"'>");   
            $("div#DUS_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button></div>");
            $("button#USsubmit").click(function (e) {
                                    if($("#ss_Name").val()==''){
                                            alert("กรุณาเลือกผู้ใช้ด้วยครับ!!!");
                                            $("#ss_Name").focus();
                                            e.preventDefault();
                                        }else if($("#ss_Status").val()==''){
                                            alert("กรุณาเลือกระดับการใช้งานด้วยครับ!!!");
                                            $("#ss_Status").focus();
                                            e.preventDefault();
                                        }else if($("#ss_user_name").val()==''){
                                            alert("กรุณาระบุชื่อผู้ใช้ด้วยครับ!!!");
                                            $("#ss_user_name").focus();
                                            e.preventDefault();
                                        }else if($("#password").val() != $("#con_password").val()){
                                            alert("รหัสผ่านไม่ตรงกันครับ กรุณายืนยันอีกครับ");
                                            $("#con_password").attr("value","").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcuser.php",
                                           data: $("#frmadduser").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_user.html');
					   }
					 });e.preventDefault();
                                     }
        });
                });
            }
        }
