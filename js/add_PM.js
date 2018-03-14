function AddPM (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>เพิ่มโปรแกรมและโมดูล</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> เพิ่มโปรแกรมและโมดูล</li>"+
                                    "</ol>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มโปรแกรมและโมดูล </h4></div>"+
                                    "<div class='box-body' id='add_user'><div class='col-md-12'><div class='col-md-5'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มโปรแกรม </h4></div><div class='box-body'><form action='' name='frmaddP' id='frmaddP' method='post'>"+
                                    "<div class='col-md-12' id='P_content'></div></form><br><div id='TBP_content'></div></div></div></div>"+
                                    "<div class='col-md-7'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มโมดูล </h4></div><div class='box-body'><form action='' name='frmaddM' id='frmaddM' method='post'>"+
                                    "<div class='col-md-12' id='M_content'></div></form><br><div id='TBM_content'></div></div></div></div>"+
                                    "</div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/flame.ico' width='40'> ");
                            if(id==null){
                                AddP();AddM();
                            }
                            
                                                        
                                    }
                                    
 function AddP (id=null) {
    var column1 = ["id.","โปรแกรม","แก้ไข","ลบ"];
              var CTb1 = new createTableAjax();
              CTb1.GetNewTableAjax('TBP_content','JsonData/DT_P.php','JsonData/tempSendData.php',column1
              ,'AddPM?AddP','dev_program','pg_id','content/add_PM.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb1');                    
                                

            var idpm = id;
            if(idpm == null){
        $("#P_content").append($("<div class='form-group'><label for='pg_name' class='control-label'>ชื่อโปรแกรม </label><input type='text' name='pg_name' id='pg_name' class='form-control' required></div>")
                                ,$("<div class='form-group'><label for='datepicker1' class='control-label'>วันที่เริ่มพัฒนา/เริ่มใช้งาน </label><input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required></div>"));
                                    
            $("div#P_content").append("<input type='hidden' id='method' name='method' value='add_prog'>");                
            $("div#P_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='Psubmit'>บันทึก</button></div>");
                                var DP = new DatepickerThai();
                                DP.GetDatepicker('#datepicker1');
            $("button#Psubmit").click(function (e) { 
                                    if($("#pg_name").val()==''){
                                            alert("กรุณาระบุชื่อโปรแกรมด้วยครับ!!!");
                                            $("#pg_name").focus();
                                        }else{
                                        $.ajax({
					   type: "POST",
					   url: "process/prcdev.php",
                                           data: $("#frmaddP").serialize(),
					   success: function(result) {
                                               alert(result);
                                               $("#index_content").empty().load('content/add_PM.html');
					   }
					 });e.preventDefault();
                                     }
        });
            }else{
                $.getJSON('JsonData/program_dev.php',{data: idpm.data}, function (data) { console.log(data);
        $("#P_content").append($("<div class='form-group'><label for='pg_name' class='control-label'>ชื่อโปรแกรม </label><input type='text' name='pg_name' id='pg_name' class='form-control' required></div>")
                                ,$("<div class='form-group'><label for='datepicker1' class='control-label'>วันที่เริ่มพัฒนา/เริ่มใช้งาน </label><input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required></div>"));
             
                    $("#pg_name").val(data[0].pg_name);
                    
            $("div#P_content").append($("<input type='hidden' id='method' name='method' value='edit_prog'>")
                                        ,$("<input type='hidden' id='pg_id' name='pg_id' value='"+data[0].pg_id+"'>"));                
            $("div#P_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='Psubmit'>แก้ไข</button></div>");
                                var DP = new DatepickerThai();
                                DP.GetDatepicker('#datepicker1');
                                $("#datepicker1").datepicker("setDate",new Date(data[0].dev_begin));
                    $("button#Psubmit").click(function (e) { 
                                    if($("#pg_name").val()==''){
                                            alert("กรุณาระบุชื่อโปรแกรมด้วยครับ!!!");
                                            $("#pg_name").focus();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcdev.php",
                                           data: $("#frmaddP").serialize(),
					   success: function(result) {
                                               alert(result);
                                               $("#index_content").empty().load('content/add_PM.html');
					   }
					 });e.preventDefault();
                                     }
        });
            });
}
}
function AddM (id=null) {
    var column1 = ["id.","โปรแกรม","โมดูล","แก้ไข","ลบ"];
              var CTb2 = new createTableAjax();
              CTb2.GetNewTableAjax('TBM_content','JsonData/DT_M.php','JsonData/tempSendData.php',column1
              ,'AddPM?AddM','dev_module','module_id','content/add_PM.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb2');                    
                                

            var idpm = id;
            if(idpm == null){
                $("#M_content").append($("<div class='form-group'><label for='selpg_id' class='control-label'>เลือกโปรแกรม </label><select name='selpg_id' id='selpg_id' class='form-control select2'></select></div>")
                                    ,$("<div class='form-group'><label for='module_name' class='control-label'>ชื่อโมดูล </label><input type='text' name='module_name' id='module_name' class='form-control' required></div>"));
                                $.getJSON('JsonData/program_dev.php', function (GD) {
                                     var option="<option value=''> เลือกโปรแกรม </option>";
                                    for (var key in GD) {
                                              option += "$('<option value='"+GD[key].pg_id+"'> "+GD[key].pg_name+" </option>'),";
                                        }
                                        $("select#selpg_id").empty().append(option);
                                        $(".select2").select2();
                                }); 
            $("div#M_content").append("<input type='hidden' id='method' name='method' value='add_module'>");                
            $("div#M_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='Msubmit'>บันทึก</button></div>");
            $("button#Msubmit").click(function (e) { 
                                    if($("#selpg_id").val()==''){
                                            alert("กรุณาเลือกชื่อโปรแกรมด้วยครับ!!!");
                                            $("#selpg_id").focus();
                                        }else if($("#module_name").val()==''){
                                            alert("กรุณาระบุชื่อโมดูลด้วยครับ!!!");
                                            $("#module_name").focus();
                                        }else{
        				$.ajax({
                                            type: "POST",
					   url: "process/prcdev.php",
                                           data: $("#frmaddM").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_PM.html');
					   }
					 });e.preventDefault();
                                     }
        });
            }else{
                $.getJSON('JsonData/progmodule_dev.php',{data: idpm.data}, function (data) { console.log(data);
                 $("#M_content").append($("<div class='form-group'><label for='selpg_id' class='control-label'>เลือกโปรแกรม </label><select name='selpg_id' id='selpg_id' class='form-control select2'></select></div>")
                                    ,$("<div class='form-group'><label for='module_name' class='control-label'>ชื่อโมดูล </label><input type='text' name='module_name' id='module_name' class='form-control' required></div>"));
                                $.getJSON('JsonData/program_dev.php', function (GD) {
                                     var option="<option value=''> เลือกโปรแกรม </option>";
                                    for (var key in GD) {
                                        if(GD[key].pg_id==data[0].pg_id){var select='selected';}else{var select='';}
                                              option += "$('<option value='"+GD[key].pg_id+"' "+select+"> "+GD[key].pg_name+" </option>'),";
                                        }
                                        $("select#selpg_id").empty().append(option);
                                        $(".select2").select2();
                                }); 
                                $("#module_name").val(data[0].module_name);
                                
            $("div#M_content").append($("<input type='hidden' id='method' name='method' value='edit_module'>")
                                        ,$("<input type='hidden' id='module_id' name='module_id' value='"+data[0].module_id+"'>"));                
            $("div#M_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='Msubmit'>แก้ไข</button></div>");
            $("button#Msubmit").click(function (e) { 
                                    if($("#selpg_id").val()==''){
                                            alert("กรุณาเลือกชื่อโปรแกรมด้วยครับ!!!");
                                            $("#selpg_id").focus();
                                        }else if($("#module_name").val()==''){
                                            alert("กรุณาระบุชื่อโมดูลด้วยครับ!!!");
                                            $("#module_name").focus();
                                        }else{
        				$.ajax({
                                            type: "POST",
					   url: "process/prcdev.php",
                                           data: $("#frmaddM").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_PM.html');
					   }
					 });e.preventDefault();
                                     }
        });
                });
            }
}
                                   
        
