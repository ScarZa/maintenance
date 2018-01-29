function AddAcc (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>เพิ่มอุปกรณ์</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> เพิ่มอุปกรณ์</li>"+
                                    "</ol>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มข้อมูลอุปกรณ์ </h4></div>"+
                                    "<div class='box-body' id='add_user'><div class='col-md-12'>"+
                                    "<div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> รายการอุปกรณ์ </h4></div><div class='box-body'><form action='' name='frmaddacc' id='frmaddacc' method='post'>"+
                                    "<div class='col-md-12' id='SC_content'></div></form></div></div></div>"+
                                    "<div class='col-md-12'><div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> สรุปรายการอุปกรณ์ </h4></div><div class='box-body'><div id='SYMP_content'></div></div></div></div></div>"+
                                    "</div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                            
                                    var column1 = ["id.","ชื่ออุกรณ์","แก้ไข","ลบ"];
              var CTb = new createTableAjax();
              CTb.GetNewTableAjax('SYMP_content','JsonData/acc_part.php','JsonData/tempSendData.php',column1
              ,'AddAcc','m_acc_part','accp_id','content/add_acc.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb');                    
                                

            var idsymp = id;
            if(idsymp == null){
                 $("#SC_content").append($("<div class='form-group'>ชื่ออุปกรณ์ : <INPUT TYPE='text' NAME='accp_name' id='accp_name' class='form-control' placeholder='ระบุชื่ออุปกรณ์' required></div>"));
                                        
            $("div#SC_content").append("<input type='hidden' id='method' name='method' value='add_acc'>");                
            $("div#SC_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='SCsubmit'>บันทึก</button></div>");
            $("button#SCsubmit").click(function (e) { 
                                    if($("#accp_name").val()==''){
                                            alert("กรุณาระบุชื่ออุปกรณ์ด้วยครับ!!!");
                                            $("#accp_name").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcaccpart.php",
                                           data: $("#frmaddacc").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_acc.html');
					   }
					 });e.preventDefault();
                                     }
        });

            }else{ 
                $.getJSON('JsonData/acc_part.php',{data: idsymp.data}, function (data) { 
        
                $("#SC_content").append($("<div class='form-group'>ชื่ออุปกรณ์ : <INPUT TYPE='text' NAME='accp_name' id='accp_name' class='form-control' placeholder='ระบุรายการความต้องการ' required></div>"));
                                            $("#accp_name").val(data[0].accp_name);
                                
            $("div#SC_content").append($("<input type='hidden' id='method' name='method' value='edit_acc'>")
                                        ,$("<input type='hidden' id='accp_id' name='accp_id' value='"+data[0].accp_id+"'>"));                
            $("div#SC_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='SCsubmit'>แก้ไข</button></div>");
            $("button#SCsubmit").click(function (e) { 
                                        if($("#accp_name").val()==''){
                                            alert("กรุณาระบุชื่ออุปกรณ์ด้วยครับ!!!");
                                            $("#accp_name").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcaccpart.php",
                                           data: $("#frmaddacc").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_acc.html');
					   }
					 });e.preventDefault();
                                     }
        });
                });
            }
        }
