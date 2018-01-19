function HisRepair (content,id=null) {
//$.getJSON('JsonData/repair_Data.php',{data: id.data},function (data) { 
        $(content).empty().append("<h2 style='color: blue'>ประวัติการซ่อมครุภัณฑ์คอมพิวเตอร์</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> ครุภัณฑ์คอมพิวเตอร์</li>"+
                                    "</ol>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> ครุภัณฑ์คอมพิวเตอร์ </h4></div>"+
                                    "<div class='box-body'><div class='table-responsive' id='contentTBPD'></div></div>"+
                                    "</div></div></div>");
                            
                    var column1 = ["ใบแจ้งที่","วันที่เริ่มซ่อม","วันที่ซ่อมเสร็จ","เวลาที่ใช้","ผู้แจ้ง","สาเหตุการเสีย","ผู้ซ่อม","ประวัติการซ่อม"];
                    var CTb = new createTableAjax();
                    CTb.GetNewTableAjax('contentTBPD','JsonData/DT_HP.php?'+id.data,'JsonData/tempSendData.php',column1
                    ,null,null,null,null,false,false,null,true,'HisModal',false,null,null,null,null,null,'dbtb');
//        });
        }
