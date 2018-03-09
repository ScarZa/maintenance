            $.getJSON('JsonData/up_header.php',function (data) {
                if(data.conn=='Connect_DB_false'){
                    $(".content-wrapper").append("<section class='content' id='sec_content'></section>");   
                                            $("#sec_content").append("<div id='index_content'></div>");
                                            $("#index_content").html("<center><h4><a href='#'>Please connect Database!!!!</a></h4></center>");
                                                $("a").attr("onclick","return popup('content/set_conn_db.php?method="+data.check+"&host=main', popup, 400, 600);");
                }else{
              $("head").prepend($("<title></title>").text("ระบบแจ้งซ่อม")
                                ,$("<link rel='SHORTCUT ICON' href='"+data.logo+"'>"));  
              if(data.m_status == 'ADMIN' || data.m_status == 'MUSER'){
                  var onload="bodyOnload();";
              }else{
                var onload="";
            }
        $("body").attr("Onload",onload);
                                    $("#gear_side").empty().load("content/inbox.php");//โหลด inbox.php เข้ามา
                        $(".sidebar").append($("<ul class='sidebar-menu'></ul>"));
                                $(".image").append("<img src='"+data.logo+"' class='img-circle' alt='User Image'>");
                                $(".info").append($("<p>"+data.hos_name2+"</p>"),$("<a href='#'><i class='fa fa-circle text-success'></i> ระบบแจ้งซ่อม</a>"));
                                $(".sidebar-menu").append($("<li class='header'>เมนูหลัก</li>")
                                                        ,$("<li id='home'><a href='#'><img src='images/gohome.ico' width='20'> <span>หน้าหลัก</span></a></li>"));
                                                        
                                    $(".content-wrapper").append("<section class='content' id='sec_content'></section>");   
                                            $("#sec_content").append("<div id='index_content'></div><div id='createModal'></div>");
                                        if(data.m_status == ''){
                                            $("#home > a").attr("onclick","loadPage('#index_content','content/NoLogon_index.html');");
                                            $("#index_content").empty().load("content/NoLogon_index.html");
                                        }else{
                                            $("#home > a").attr("onclick","loadPage('#index_content','content/info_index.html');");
                                            $("#index_content").empty().load("content/info_index.html");    
                                        }
                    $(".main-footer").append("<div id='version' class='pull-right hidden-xs'></div>").append("<strong>Copyright &copy; 2018 <a href='http://rploei.go.th'>โรงพยาบาลจิตเวชเลยราชนครินทร์</a>.</strong> All rights reserved.");       
                                $("#version").append("<b>Version</b> 1.1");
                    $(".control-sidebar").empty().load("menu_footer.php");                                                               
                                              if(data.m_status == 'ADMIN' || data.m_status == 'MUSER'){
                                                  if(data.m_status == 'MUSER' || data.m_status == 'SUSER' || data.m_status == 'USUSER'){$("#gear_side1").remove();}
                                            $(".sidebar-menu").append($("<li id='ad_treeview1' class='treeview'></li>")
                                                                    ,$("<li id='ad_treeview2' class='treeview'></li>")
                                                                    ,$("<li id='ad_manual'></li>"));
                                                        $("#ad_treeview1").append($("<a href='#'><img src='images/menu_items_options.ico' width='20'> <span>เมนูผู้ดูแลระบบ : (คอมฯ)</span><i class='fa fa-angle-left pull-right'></i></a>")
                                                                                ,$("<ul id='ad_treeview-menu1' class='treeview-menu'></ul>"));
                                                                $("#ad_treeview-menu1").append($("<li class=''><a id='listRepair' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/tools.ico' width='20'> <span>รายการแจ้งซ่อม</span> </a></li>")
                                                                                                ,$("<li class=''><a id='listResult' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/tools.ico' width='20'> <span>รายการซ่อม</span> </a></li>")
                                                                                                ,$("<li class=''><a id='listSendResult' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/rocket.ico' width='20'> <span>ส่งซ่อมภายนอก</span> </a></li>")
                                                                                                ,$("<li class=''><a id='listResultTotal' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/bookshelf.ico' width='20'> <span>สรุปผลการซ่อมคอมพิวเตอร์</span></a></li>")
                                                                                                //,$("<li id='ad_report'><a href='#'>&nbsp;&nbsp;<img src='images/icon_set2/piechart.ico' width='20'> รายงานผู้ดูแลระบบ <i class='fa fa-angle-left pull-right'></i></a></li>")
                                                                                                ,$("<li id='ad_Prods'><a href='#'>&nbsp;&nbsp;<img src='images/icon_set2/dolly.ico' width='20'> ครุภัณฑ์ <i class='fa fa-angle-left pull-right'></i></a></li>")
                                                                                                );
                                                                                    $.getJSON('JsonData/DT_TRP.php',function (data) {
                                                                                        if(data.req_repair !=0){
                                                                                        $("#listRepair").append($("<small class='label pull-right bg-red'>"+data.req_repair+"</small>"));
                                                                                    }
                                                                                    if(data.list_repair !=0){
                                                                                        $("#listResult").append($("<small class='label pull-right bg-yellow'>"+data.list_repair+"</small>"));
                                                                                        }
                                                                                    if(data.send_repair !=0){
                                                                                        $("#listSendResult").append($("<small class='label pull-right bg-red'>"+data.send_repair+"</small>"));
                                                                                    }
                                                                                    });    
                                                                            $("#ad_Prods").append("<ul id='ulad_Prods' class='treeview-menu'></ul>");  
                                                                            $("#ad_request").append("<ul id='ulad_Request' class='treeview-menu'></ul>"); 
                                                                                $("#ulad_Prods").append($("<li class=''><a id='addProds' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/dolly.ico' width='20'> <span>เพิ่มครุภัณฑ์</span></a></li>")
                                                                                                ,$("<li class=''><a id='listProds' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/dolly.ico' width='20'> <span>รายการครุภัณฑ์</span></a></li>"));    
                                                                            $("#ad_report").append("<ul id='ulad_report' class='treeview-menu'></ul>");  
                                                                                $("#ulad_report").append($("<li><a href='#'><i class='fa fa-circle-o text-aqua'></i> รายงานที่ 1 </a></li>")
                                                                                                        ,$("<li><a href='#'><i class='fa fa-circle-o text-aqua'></i> รายงานที่ 2 </a></li>"));
                                                                        $("#addProds").attr("onclick","loadPage('#index_content','content/add_prods.html');");
                                                                        $("#listProds").attr("onclick","loadPage('#index_content','content/list_prods.html');");
                                                                        $("#addRepair").attr("onclick","loadPage('#index_content','content/add_repair.html');");
                                                                        $("#addRepairNo").attr("onclick","loadAjax('#index_content','JsonData/tempSendData.php','NoPd','AddRepair');");
                                                                        $("#reqReport").attr("onclick","loadAjax('#index_content','JsonData/tempSendData.php','ReqRp','AddRepair');");
                                                                        $("#listRepair").attr("onclick","loadPage('#index_content','content/list_repair_order.html');");
                                                                        $("#listResult").attr("onclick","loadPage('#index_content','content/list_repair_result.html');");
                                                                        $("#listSendResult").attr("onclick","loadPage('#index_content','content/list_send_result.html');");
                                                                        $("#listResultTotal").attr("onclick","loadPage('#index_content','content/list_repair_result_total.html');");
                                                        $("#ad_treeview2").append($("<a href='#'><img src='images/menu_items_options.ico' width='20'> <span>เมนูผู้ใช้ทั่วไป</span><i class='fa fa-angle-left pull-right'></i></a>")
                                                                                ,$("<ul id='ad_treeview-menu2' class='treeview-menu'></ul>"));
                                                                $("#ad_treeview-menu2").append($("<li class=''><a id='addRepairUser' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/computer.ico' width='20'> <span>แจ้งซ่อมคอมพิวเตอร์</span></a></li>")
                                                                                            ,$("<li class=''><a id='addRepairNoUser' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/computer.ico' width='20'> <span>แจ้งซ่อมคอมฯ(ไม่ใช่ครุภัณฑ์)</span></a></li>")
                                                                                            ,$("<li class=''><a id='reqReportUser' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/clipboard.ico' width='20'> <span>ขอข้อมูล/รายงาน/Dev.</span></a></li>")
                                                                                            //,$("<li id='us_report'><a href='#'>&nbsp;&nbsp;<img src='images/icon_set2/piechart.ico' width='20'> รายงานผู้ใช้ทั่วไป <i class='fa fa-angle-left pull-right'></i></a></li>")
                                                                                            );
                                                                                    $("#addRepairUser").attr("onclick","loadPage('#index_content','content/add_repair.html');");
                                                                                    $("#addRepairNoUser").attr("onclick","loadAjax('#index_content','JsonData/tempSendData.php','NoPd','AddRepair');");
                                                                                    $("#reqReportUser").attr("onclick","loadAjax('#index_content','JsonData/tempSendData.php','ReqRp','AddRepair');");
                                                                            $("#us_report").append("<ul id='ulus_report' class='treeview-menu'></ul>");  
                                                                                $("#ulus_report").append($("<li><a href='#'><i class='fa fa-circle-o text-aqua'></i> รายงานที่ 1 </a></li>")
                                                                                                        ,$("<li><a href='#'><i class='fa fa-circle-o text-aqua'></i> รายงานที่ 2 </a></li>"));                                 
                                        
//        var page = getURL("page");
//        var data = getURL("data");
//if(page!=''){
//    $("#index_content").empty().load(page,{data: data}, function(responseTxt, statusTxt, xhr){
//        if(statusTxt == "success")
            /*$(function(){
                $.ajax({
  dataType: "json",
  type: "post",
  url: 'JsonData/detail_risk.php',
  data: {data:data},
  success: success
});
});*/
//        if(statusTxt == "error")
//            alert("Error: " + xhr.status + ": " + xhr.statusText);
//    });
//    }else{

//    }
    //loadPage('#index_content',page,data);  
                                    }else if(data.m_status == 'USER' || data.m_status == 'SUSER' || data.m_status == 'USUSER'){
                                        $("#gear_side1").remove();//ไม่ให้แสดง gear   
                                        $(".sidebar-menu").append($("<li class=''><a id='addRepairUser' href='#'><img src='images/icon_set2/computer.ico' width='20'> <span>แจ้งซ่อมคอมพิวเตอร์</span></a></li>")
                                                        ,$("<li class=''><a id='addRepairNoUser' href='#'><img src='images/icon_set2/computer.ico' width='20'> <span>แจ้งซ่อมคอมฯ(ไม่ใช่ครุภัณฑ์)</span></a></li>")
                                                        ,$("<li class=''><a id='reqReportUser' href='#'><img src='images/icon_set2/clipboard.ico' width='20'> <span>ขอข้อมูล/รายงาน/Dev.</span></a></li>")
                                                        ,$("<li class=''><a id='reqStatusUser' href='#'><img src='images/icon_set2/eye.ico' width='20'> <span>สถานะคำขอ</span></a></li>"));
                                                $("#addRepairUser").attr("onclick","loadPage('#index_content','content/add_repair.html');");
                                                $("#addRepairNoUser").attr("onclick","loadAjax('#index_content','JsonData/tempSendData.php','NoPd','AddRepair');");
                                                $("#reqReportUser").attr("onclick","loadAjax('#index_content','JsonData/tempSendData.php','ReqRp','AddRepair');");
                                                $("#reqStatusUser").attr("onclick","loadPage('#index_content','content/list_user_result.html');");
                                                
                                                if(data.m_status == 'SUSER' || data.m_status == 'USUSER'){
                                                    $(".sidebar-menu").append($("<li id='ad_Prods'><a href='#'><img src='images/icon_set2/dolly.ico' width='20'> ครุภัณฑ์ <i class='fa fa-angle-left pull-right'></i></a></li>"));
                                                        $("#ad_Prods").append("<ul id='ulad_Prods' class='treeview-menu'></ul>");
                                                            $("#ulad_Prods").append($("<li class=''><a id='addProds' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/dolly.ico' width='20'> <span>เพิ่มครุภัณฑ์</span></a></li>")
                                                                        ,$("<li class=''><a id='listProds' href='#'>&nbsp;&nbsp;<img src='images/icon_set2/dolly.ico' width='20'> <span>รายการครุภัณฑ์</span></a></li>"));
                                                                        $("#addProds").attr("onclick","loadPage('#index_content','content/add_prods.html');");
                                                                        $("#listProds").attr("onclick","loadPage('#index_content','content/list_depprods.html');");
                                                }
                                                
                                    }else if(data.m_status == ''){
                                            $(".sidebar-menu").append($("<li class=''><a href='#' id='manual_maintenance'>\n\
                                <img src='images/icon_set2/booklet.ico' width='20'> <span>คู่มือโปรแกรม</span></a></li>"));
                                                                        
                                                    $("#manual_maintenance").attr("onclick","window.open('manual/manual_maintenance.pdf','','width=750,height=1000'); return false");
                                                    $("#gear_side").append("<li class='dropdown messages-menu'><a id='login' href='#' title='เข้าสู่ระบบแจ้งซ่อม'><img src='images/key-y.ico' width='18'> เข้าสู่ระบบ</a></li>");
                                                            $("#login").attr("onclick","return popup('login_page.html', popup, 300, 500);");
                                            $("#gear_side1").remove();//ไม่ให้แสดง gear         
                                        }
                                $(".sidebar-menu").append("<li class=''><a id='about' href='#'><img src='images/Paper Mario.ico' width='20'> <span>เกี่ยวกับ</span></a></li>");
                                            $("#about").attr("onclick","loadPage('#index_content','content/about.html')");        
 }   
 });               
            