function AddStore (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>เพิ่มร้านซ่อม</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> เพิ่มร้านซ่อม</li>"+
                                    "</ol>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มข้อมูลร้านซ่อม </h4></div>"+
                                    "<div class='box-body' id='add_user'><div class='col-md-12'>"+
                                    "<div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> รายการร้านซ่อม </h4></div><div class='box-body'><form action='' name='frmaddstore' id='frmaddstore' method='post'>"+
                                    "<div class='col-md-12' id='SC_content'></div></form></div></div></div>"+
                                    "<div class='col-md-12'><div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> สรุปรายการร้านซ่อม </h4></div><div class='box-body'><div id='SYMP_content'></div></div></div></div></div>"+
                                    "</div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                            
                                    var column1 = ["id.","ชื่อร้าน","หมายเลขโทรศัพท์","หมายเลขโทรศัพท์มือถือ","หมายเลขโทรสาร","รายละเอียด","แก้ไข","ลบ"];
              var CTb = new createTableAjax();
              CTb.GetNewTableAjax('SYMP_content','JsonData/detail_store.php','JsonData/tempSendData.php',column1
              ,'AddStore','se_company','comp_id','content/add_store.html',true,false,null,true,'StoreModal',false,null,null,null,null,null,'dbtb');                    
                                

            var idsymp = id;
            if(idsymp == null){
                 $("#SC_content").append($("<div class='form-group'>ชื่อร้าน : <INPUT TYPE='text' NAME='comp_name' id='comp_name' class='form-control' placeholder='ระบุชื่อร้าน' required></div>")
                                        ,$("<div class='form-group'>เลขที่เสียภาษี : <INPUT TYPE='text' NAME='comp_vax' id='comp_vax' class='form-control' placeholder='ระบุเลขที่เสียภาษี'></div>")
                                        ,$("<div class='form-group'>ที่อยู่ร้าน : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุที่อยู่ร้าน' name='comp_address' id='comp_address'></textarea></div>")
                                        ,$("<div class='form-group'>หมายเลขโทรศัพท์ : <INPUT TYPE='text' NAME='comp_tell' id='comp_tell' class='form-control' placeholder='ระบุหมายเลขโทรศัพท์'></div>")
                                        ,$("<div class='form-group'>หมายเลขโทรศัพท์มือถือ : <INPUT TYPE='text' NAME='comp_mobile' id='comp_mobile' class='form-control' placeholder='ระบุหมายเลขโทรศัพท์มือถือ'></div>")
                                        ,$("<div class='form-group'>หมายเลขโทรสาร : <INPUT TYPE='text' NAME='comp_fax' id='comp_fax' class='form-control' placeholder='ระบุหมายเลขโทรสาร'></div>"));
                                        
            $("div#SC_content").append("<input type='hidden' id='method' name='method' value='add_store'>");                
            $("div#SC_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='SCsubmit'>บันทึก</button></div>");
            $("button#SCsubmit").click(function (e) { 
                                    if($("#comp_name").val()==''){
                                            alert("กรุณาระบุชื่อร้านด้วยครับ!!!");
                                            $("#comp_name").focus();
                                            e.preventDefault();
                                        }else if($("#comp_address").val()==''){
                                            alert("กรุณาระบุที่อยู่ร้านด้วยครับ!!!");
                                            $("#comp_address").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcstore.php",
                                           data: $("#frmaddstore").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_store.html');
					   }
					 });e.preventDefault();
                                     }
        });

            }else{ 
                $.getJSON('JsonData/comp_Data.php',{data: idsymp.data}, function (data) { 
        
                $("#SC_content").append($("<div class='form-group'>ชื่อร้าน : <INPUT TYPE='text' NAME='comp_name' id='comp_name' class='form-control' placeholder='ระบุชื่อร้าน' required></div>")
                                        ,$("<div class='form-group'>เลขที่เสียภาษี : <INPUT TYPE='text' NAME='comp_vax' id='comp_vax' class='form-control' placeholder='ระบุเลขที่เสียภาษี'></div>")
                                        ,$("<div class='form-group'>ที่อยู่ร้าน : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุที่อยู่ร้าน' name='comp_address' id='comp_address'></textarea></div>")
                                        ,$("<div class='form-group'>หมายเลขโทรศัพท์ : <INPUT TYPE='text' NAME='comp_tell' id='comp_tell' class='form-control' placeholder='ระบุหมายเลขโทรศัพท์'></div>")
                                        ,$("<div class='form-group'>หมายเลขโทรศัพท์มือถือ : <INPUT TYPE='text' NAME='comp_mobile' id='comp_mobile' class='form-control' placeholder='ระบุหมายเลขโทรศัพท์มือถือ'></div>")
                                        ,$("<div class='form-group'>หมายเลขโทรสาร : <INPUT TYPE='text' NAME='comp_fax' id='comp_fax' class='form-control' placeholder='ระบุหมายเลขโทรสาร'></div>"));
                                                                            
                            $("#comp_name").val(data[0].comp_name);
                            $("#comp_vax").val(data[0].comp_vax);
                            $("#comp_address").val(data[0].comp_address);
                            $("#comp_tell").val(data[0].comp_tell);
                            $("#comp_mobile").val(data[0].comp_mobile);
                            $("#comp_fax").val(data[0].comp_fax);
                                        
            $("div#SC_content").append($("<input type='hidden' id='method' name='method' value='edit_store'>")
                                        ,$("<input type='hidden' id='comp_id' name='comp_id' value='"+data[0].comp_id+"'>"));                
            $("div#SC_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='SCsubmit'>แก้ไข</button></div>");
            $("button#SCsubmit").click(function (e) { 
                                        if($("#comp_name").val()==''){
                                            alert("กรุณาระบุชื่อร้านด้วยครับ!!!");
                                            $("#comp_name").focus();
                                            e.preventDefault();
                                        }else if($("#comp_address").val()==''){
                                            alert("กรุณาระบุที่อยู่ร้านด้วยครับ!!!");
                                            $("#comp_address").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcstore.php",
                                           data: $("#frmaddstore").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_store.html');
					   }
					 });e.preventDefault();
                                     }
        });
                });
            }
        }
