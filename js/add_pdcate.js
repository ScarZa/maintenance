function AddPDCate (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>เพิ่มประเภทครุภัณฑ์ </h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> เพิ่มประเภทครุภัณฑ์ </li>"+
                                    "</ol><form action='' name='frmaddpdcate' id='frmaddpdcate' method='post'>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มข้อมูลประเภทครุภัณฑ์  </h4></div>"+
                                    "<div class='box-body' id='add_user'><div class='col-md-12'><div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> ข้อมูลประเภทครุภัณฑ์  </h4></div><div class='box-body'><div id='DU_content'></div>"+
                                    "<div class='col-md-12' id='DUS_content'></div></div></div></div></form>"+
                                    "<div class='col-md-12'><div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> ประเภทครุภัณฑ์  </h4></div><div class='box-body'><div id='DSP_content'></div></div></div></div></div>"+
                                    "</div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                            
                                    var column1 = ["id.","หมวดครุภัณฑ์","ชื่อประเภทครุภัณฑ์","เลขกลุ่ม","เลขประเภท","เลขชนิด","แก้ไข","ลบ"];
              var CTb = new createTableAjax();
              CTb.GetNewTableAjax('DSP_content','JsonData/DT_PDCate.php','JsonData/tempSendData.php',column1
              ,'AddPDCate','pd_category','category_id','content/add_pdcate.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb');                    
                                
              $("#DUS_content").append($("<div class='form-group'>หมวดครุภัณฑ์ :  : <select name='group_id' class='form-control select2' id='group_id' required></select></div>")
              ,$("<div class='form-group'>ชื่อประเภทครุภัณฑ์ : <INPUT TYPE='text' NAME='category_name' id='category_name' class='form-control' placeholder='ระบุชื่อประเภทครุภัณฑ์' required></div>")
              ,$("<div class='form-group'>เลขกลุ่ม : <INPUT TYPE='text' NAME='gp_id' id='gp_id' class='form-control' placeholder='ระบุเลขกลุ่ม' required></div>")
              ,$("<div class='form-group'>เลขประเภท : <INPUT TYPE='text' NAME='cate_type' id='cate_type' class='form-control' placeholder='ระบุเลขประเภท' required></div>")
              ,$("<div class='form-group'>เลขชนิด : <INPUT TYPE='text' NAME='cate_kind' id='cate_kind' class='form-control' placeholder='ระบุเลขชนิด' required></div>"));
            var iduser = id;
            if(iduser == null){                      
                        $("select#group_id").append($("<option value=''> เลือกหมวดครุภัณฑ์ </option>"));
                        $.getJSON('JsonData/group_Data.php', function (GD) {
                            for (var key in GD) {
                                //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                      $("select#group_id").append($("<option value='"+GD[key].group_id+"'> "+GD[key].group_name+" </option>"));
                            }$(".select2").select2();
                        });
                                    
            $("div#DUS_content").append("<input type='hidden' id='method' name='method' value='add_pdcate'>");                
            $("div#DUS_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button></div>");
            $("button#USsubmit").click(function (e) { 
                                    if($("#group_id").val()==''){
                                            alert("กรุณาเลือกหมวดครุภัณฑ์ครับ!!!");
                                            $("#group_id").focus();
                                            e.preventDefault();
                                        }else if($("#category_name").val()==''){
                                            alert("กรุณาระบุชื่อประเภทครุภัณฑ์ด้วยครับ!!!");
                                            $("#category_name").focus();
                                            e.preventDefault();
                                        }else if($("#gp_id").val()==''){
                                            alert("กรุณาระบุเลขกลุ่มด้วยครับ!!!");
                                            $("#gp_id").focus();
                                            e.preventDefault();
                                        }else if($("#cate_type").val()==''){
                                            alert("กรุณาระบุเลขประเภทด้วยครับ!!!");
                                            $("#cate_type").focus();
                                            e.preventDefault();
                                        }else if($("#cate_kind").val()==''){
                                            alert("กรุณาระบุเลขชนิดด้วยครับ!!!");
                                            $("#cate_kind").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcpdcate.php",
                                           data: $("#frmaddpdcate").serialize(),
					   success: function(result) {
						alert(result);
                        AddPDCate('#index_content');
					   }
					 });e.preventDefault();
                                     }
        });
            }else{ 
                $.getJSON('JsonData/detail_pdcate.php',{data: iduser.data}, function (data) {
                                $.getJSON('JsonData/group_Data.php', function (GD) {
                                     var option="<option value=''> เลือกหมวดครุภัณฑ์ </option>";
                                    for (var key in GD) {
                                        if(GD[key].group_id==data.group_id){var select='selected';}else{var select='';}
                                              option += "$('<option value='"+GD[key].group_id+"' "+select+"> "+GD[key].group_name+" </option>'),";
                                        }
                                        $("select#group_id").empty().append(option);
                                        $(".select2").select2();
                                }); 
                 $("input#category_name").attr("value",data.category_name);
                 $("input#gp_id").attr("value",data.gp_id);
                 $("input#cate_type").attr("value",data.cate_type);
                 $("input#cate_kind").attr("value",data.cate_kind);                   
            $("div#DUS_content").append("<input type='hidden' id='method' name='method' value='edit_pdcate'>");       
            $("div#DUS_content").append("<input type='hidden' id='category_id' name='category_id' value='"+data.category_id+"'>");   
            $("div#DUS_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button></div>");
            $("button#USsubmit").click(function (e) {
                if($("#group_id").val()==''){
                    alert("กรุณาเลือกหมวดครุภัณฑ์ครับ!!!");
                    $("#group_id").focus();
                    e.preventDefault();
                }else if($("#category_name").val()==''){
                    alert("กรุณาระบุชื่อประเภทครุภัณฑ์ด้วยครับ!!!");
                    $("#category_name").focus();
                    e.preventDefault();
                }else if($("#gp_id").val()==''){
                    alert("กรุณาระบุเลขกลุ่มด้วยครับ!!!");
                    $("#gp_id").focus();
                    e.preventDefault();
                }else if($("#cate_type").val()==''){
                    alert("กรุณาระบุเลขประเภทด้วยครับ!!!");
                    $("#cate_type").focus();
                    e.preventDefault();
                }else if($("#cate_kind").val()==''){
                    alert("กรุณาระบุเลขชนิดด้วยครับ!!!");
                    $("#cate_kind").focus();
                    e.preventDefault();
                }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcpdcate.php",
                                           data: $("#frmaddpdcate").serialize(),
					   success: function(result) {
						alert(result);
                        AddPDCate('#index_content');
					   }
					 });e.preventDefault();
                                     }
        });
                });
            }
        }
