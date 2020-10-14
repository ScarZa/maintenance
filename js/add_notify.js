function AddNotify (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>เพิ่ม Token key</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> เพิ่ม Token key</li>"+
                                    "</ol>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มข้อมูล Token key </h4></div>"+
                                    "<div class='box-body' id='add_user'><div class='col-md-12'>"+
                                    "<div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> Token key : computer </h4></div><div class='box-body'><form action='' name='frmaddnotify' id='frmaddnotify' method='post'>"+
                                    "<div class='col-md-12' id='SC_content'></div></form></div></div></div>" +
                                    "<div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> Token key : technicial </h4></div><div class='box-body'><form action='' name='frmaddnotifyT' id='frmaddnotifyT' method='post'>"+
                                    "<div class='col-md-12' id='SC_contentT'></div></form></div></div></div>"+
                                    "</div></div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                            

            var idsymp = id;
////////////////////// Notify Comp.
                $.getJSON('JsonData/notify.php',{data: idsymp.data}, function (data) { 
        
                $("#SC_content").append($("<div class='form-group'>Token key : <INPUT TYPE='text' NAME='notify_tokenkey' id='notify_tokenkey' class='form-control' placeholder='ระบุ Token key' required></div>"));
                                            $("#notify_tokenkey").val(data.notify_tokenkey);
                                
            $("div#SC_content").append($("<input type='hidden' id='method' name='method' value='edit_notify'>")
                                        ,$("<input type='hidden' id='notify_id' name='notify_id' value='"+data.notify_id+"'>"));                
            $("div#SC_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='SCsubmit'>แก้ไข</button></div>");
            $("button#SCsubmit").click(function (e) { 
                                        if($("#notify_tokenkey").val()==''){
                                            alert("กรุณาระบุ Token key ด้วยครับ!!!");
                                            $("#notify_tokenkey").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcnotify.php",
                                           data: $("#frmaddnotify").serialize(),
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/info_index.html');
					   }
					 });e.preventDefault();
                                     }
        });
                });
        ////////////////////// Notify Tech
                $.getJSON('JsonData/notify.php',{data: 5}, function (data) { console.log(data)
        
                        $("#SC_contentT").append($("<div class='form-group'>Token key : <INPUT TYPE='text' NAME='notify_tokenkey' id='notify_tokenkeyT' class='form-control' placeholder='ระบุ Token key' required></div>"));
                                                    $("#notify_tokenkeyT").val(data.notify_tokenkey);
                                        
                    $("div#SC_contentT").append($("<input type='hidden' id='method' name='method' value='edit_notify'>")
                                                ,$("<input type='hidden' id='notify_id' name='notify_id' value='"+data.notify_id+"'>"));                
                    $("div#SC_contentT").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='SCsubmitT'>แก้ไข</button></div>");
                    $("button#SCsubmitT").click(function (e) { 
                                                if($("#notify_tokenkeyT").val()==''){
                                                    alert("กรุณาระบุ Token key ด้วยครับ!!!");
                                                    $("#notify_tokenkeyT").focus();
                                                    e.preventDefault();
                                                }else{
                                                $.ajax({
                                                   type: "POST",
                                                   url: "process/prcnotify.php",
                                                   data: $("#frmaddnotifyT").serialize(),
                                                   success: function(result) {
                                                        alert(result);
                                                        $("#index_content").empty().load('content/info_index.html');
                                                   }
                                                 });e.preventDefault();
                                             }
                });
                        });
          
        }
