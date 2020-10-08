function AddNOPD (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>เพิ่มความต้องการ</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> เพิ่มความต้องการ</li>"+
                                    "</ol>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มข้อมูลความต้องการ </h4></div>"+
                                    "<div class='box-body' id='add_user'><div class='col-md-12'>"+
                                    "<div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> รายการความต้องการ </h4></div><div class='box-body'><form action='' name='frmaddnopd' id='frmaddnopd' method='post'>"+
                                    "<div class='col-md-12' id='SC_content'></div></form></div></div></div>"+
                                    "<div class='col-md-12'><div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> สรุปอความต้องการ(ไม่ใช่ครุภัณฑ์/ขอข้อมูล) </h4></div><div class='box-body'><div id='SYMP_content'></div></div></div></div></div>"+
                                    "</div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                            
                                    var column1 = ["id.","หมวดความต้องการ","รายการความต้องการ","แก้ไข","ลบ"];
              var CTb = new createTableAjax();
              CTb.GetNewTableAjax('SYMP_content','JsonData/DT_NOPD.php','JsonData/tempSendData.php',column1
              ,'AddNOPD','m_no_pd','no_pdid','content/add_NOPD.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb');                    
                                

            var idsymp = id;
            if(idsymp == null){
                 $("#SC_content").append($("<div class='form-group'>หมวดความต้องการ : <select name='no_pdtype' class='form-control select2' id='no_pdtype' required></select></div>")
                                        ,$("<div class='form-group'>รายการความต้องการ : <INPUT TYPE='text' NAME='no_pdname' id='no_pdname' class='form-control' placeholder='ระบุรายการความต้องการ' required></div>"));
                                     var option="<option value=''> เลือกหมวด </option>";
                                              option += "$('<option value='1'> แจ้งซ่อมคอมฯ(ไม่ใช่ครุภัณฑ์) </option>'),$('<option value='2'> ขอข้อมูล/รายงาน/Dev. </option>'),$('<option value='3'> แจ้งซ่อมงานช่าง(ไม่ใช่ครุภัณฑ์) </option>')";
                                        $("select#no_pdtype").empty().append(option);
                                        
            $("div#SC_content").append("<input type='hidden' id='method' name='method' value='add_nopd'>");                
            $("div#SC_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='SCsubmit'>บันทึก</button></div>");
            $("button#SCsubmit").click(function (e) { 
                                    if($("#no_pdtype").val()==''){
                                            alert("กรุณาเลือกหมวดสรุปอาการเสียด้วยครับ!!!");
                                            $("#no_pdtype").focus();
                                            e.preventDefault();
                                        }else if($("#no_pdname").val()==''){
                                            alert("กรุณาระบุรายการสรุปอาการเสียด้วยครับ!!!");
                                            $("#no_pdname").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcnopd.php",
                                           data: $("#frmaddnopd").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_NOPD.html');
					   }
					 });e.preventDefault();
                                     }
        });

            }else{ 
                $.getJSON('JsonData/detail_NOPD.php',{data: idsymp.data}, function (data) { 
        
                $("#SC_content").append($("<div class='form-group'>หมวดความต้องการ : <select name='no_pdtype' class='form-control select2' id='no_pdtype' required></select></div>")
                                        ,$("<div class='form-group'>รายการความต้องการ : <INPUT TYPE='text' NAME='no_pdname' id='no_pdname' class='form-control' placeholder='ระบุรายการความต้องการ' required></div>"));
                                     var option="<option value=''> เลือกหมวด </option>";
                                              option += "$('<option value='1'> แจ้งซ่อมคอมฯ(ไม่ใช่ครุภัณฑ์) </option>'),$('<option value='2'> ขอข้อมูล/รายงาน/Dev. </option>')";
                                        $("select#no_pdtype").empty().append(option);
                                        if(data.no_pdtype=='1'){
                                                $("option[value^=1]").attr("selected","selected");
                                            }else if(data.no_pdtype=='2'){
                                                $("option[value^=2]").attr("selected","selected");
                                            }
                                $("#no_pdname").val(data.no_pdname);
                                
            $("div#SC_content").append($("<input type='hidden' id='method' name='method' value='edit_nopd'>")
                                        ,$("<input type='hidden' id='no_pdid' name='no_pdid' value='"+data.no_pdid+"'>"));                
            $("div#SC_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='SCsubmit'>แก้ไข</button></div>");
            $("button#SCsubmit").click(function (e) { 
                                    if($("#no_pdtype").val()==''){
                                            alert("กรุณาเลือกหมวดสรุปอาการเสียด้วยครับ!!!");
                                            $("#no_pdtype").focus();
                                            e.preventDefault();
                                        }else if($("#no_pdname").val()==''){
                                            alert("กรุณาระบุรายการสรุปอาการเสียด้วยครับ!!!");
                                            $("#no_pdname").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcnopd.php",
                                           data: $("#frmaddnopd").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_NOPD.html');
					   }
					 });e.preventDefault();
                                     }
        });
                });
            }
        }
