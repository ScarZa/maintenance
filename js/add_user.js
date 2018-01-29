function AddUser (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>เพิ่มผู้ใช้งานระบบ</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> เพิ่มผู้ใช้งานระบบ</li>"+
                                    "</ol><form action='' name='frmadduser' id='frmadduser' method='post'>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มข้อมูลผู้ใช้งานระบบ </h4></div>"+
                                    "<div class='box-body' id='add_user'><div class='col-md-12'><div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> ข้อมูลผู้ใช้งานระบบ </h4></div><div class='box-body'><div id='DU_content'></div>"+
                                    "<div class='col-md-12' id='DUS_content'></div></div></div></div></form>"+
                                    "<div class='col-md-12'><div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> ผู้ใช้งานระบบ </h4></div><div class='box-body'><div id='DSP_content'></div></div></div></div></div>"+
                                    "</div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                            
                                    var column1 = ["id.","ชื่อ-นามสกุล","งาน","ระดับการใช้งาน","ชื่อผู้ใช้","แก้ไข","ลบ"];
              var CTb = new createTableAjax();
              CTb.GetNewTableAjax('DSP_content','JsonData/DT_US.php','JsonData/tempSendData.php',column1
              ,'AddUser','ss_member','ss_UserID','content/add_user.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb');                    
                                

            var iduser = id;
            if(iduser == null){
        $("#DUS_content").append($("<div class='form-group'>ผู้ใช้งาน : <select name='ss_Name' class='form-control select2' id='ss_Name' required></select></div>")
                        ,$("<div class='form-group'>ระดับการใช้งาน : <select name='ss_Status' class='form-control select2' id='ss_Status' required></select></div>")
                        ,$("<div class='form-group'>ชื่อผู้ใช้ : <INPUT TYPE='text' NAME='ss_user_name' id='ss_user_name' class='form-control' placeholder='ระบุชื่อผู้ใช้' required></div>")
                        ,$("<div class='form-group'>รหัสผ่าน : <INPUT TYPE='password' NAME='password' id='password' class='form-control' placeholder='ระบุรหัสผ่าน' required></div>")
                        ,$("<div class='form-group'>ยืนยันรหัสผ่าน : <INPUT TYPE='password' NAME='con_password' id='con_password' class='form-control' placeholder='ยืนยันรหัสผ่าน' required></div>"));
                                $.getJSON('JsonData/emp_Data.php', function (GD) {
                                     var option="<option value=''> เลือกผู้ใช้งาน </option>";
                                    for (var key in GD) {
                                              option += "$('<option value='"+GD[key].empno+"'> "+GD[key].fullname+" </option>'),";
                                        }
                                        $("select#ss_Name").empty().append(option);
                                        $(".select2").select2();
                                }); 
                $("select#ss_Status").append($("<option value=''> เลือกระดับการใช้งาน </option>")
                                            ,$("<option value='ADMIN'> ผู้ดูแลระบบสูงสุด </option>")
                                            ,$("<option value='MUSER'> ผู้ดูแลระบบซ่อม </option>"));
                                    
            $("div#DUS_content").append("<input type='hidden' id='method' name='method' value='add_user'>");                
            $("div#DUS_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button></div>");
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
                                        }else if($("#password").val()==''){
                                            alert("กรุณาระบุรหัสผ่านด้วยครับ!!!");
                                            $("#password").focus();
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
