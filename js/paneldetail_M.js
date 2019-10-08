function PanelDetailM (content,id=null) {
        $(content).empty().append("<h2 style='color: blue'></h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    //"<li><a href='#' id='back'><i class='fa fa-angle-double-left'></i> รายการความเสี่ยง</a></li>"+
                                    "<li class='active' id='next'><i class='fa fa-envelope'></i> </li>"+
                                    "</ol>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'><i class='fa fa-star'></i>  </h4></div>"+
                                    "<div class='box-body' id='add_user'>"+
                                    "<div align='center' id='Budget'></div><div id='contentGr'></div><div id='contentTB'></div>"+
                                    "</div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                            //$("#back").attr("onclick","LevelCateSubcate('#index_content');");
//     var BY = new Date();
//     $("#Budget").empty().append("ปีงบประมาณ : "+(BY.getFullYear()+543));
                                              
    //var column1 = '{"รายการความเสี่ยงที่รอ RM man มาตรวจสอบ":["เลขที่","รายการ","เกิดขึ้นเมื่อ","ได้รับเมื่อ"]}';
              var column1 = ["ใบแจ้ง","วันที่แจ้ง","เลขครุภัณฑ์","เครื่อง","ความสำคัญ","วันที่รับใบซ่อม","ผู้ซ่อม","รายละเอียด"];
              var idsymp = id; 
          //   if(idsymp == null){
          //      $.getJSON('JsonData/LevelData.php',{data: $.cookie('level')}, function (data) {
          //         $("h4.box-title").append(" : ระดับ "+data[0].level_risk);
          //         $("h2").append(" : ระดับ "+data[0].level_risk);
          //     });
          //     $.getJSON('JsonData/Cate_Data.php',{data: $.cookie('category')}, function (data) {
          //         $("h4.box-title").append(" : "+data[0].name);
          //         $("h2").append(" : "+data[0].name);
          //     });
          //     $.getJSON('JsonData/DT_SubCate2.php',{data: $.cookie('subcate')}, function (data) {
          //         $("h4.box-title").append(" : เรื่อง "+data[0].name);
          //         $("h2").append(" : เรื่อง "+data[0].name);
          //     });
              
          //                               $("#Budget").empty().append("ปีงบประมาณ : "+$.cookie('year'));
          //    var CTb = new createTableAjax();
          //         CTb.GetNewTableAjax('contentTB','JsonData/DT_Level_Cate_Subdetail.php?'+$.cookie('year')+'?'+$.cookie('category')+'?'+$.cookie('level')+'?'+$.cookie('subcate'),'JsonData/tempSendData.php',column1
          //     ,null,null,null,null,false,true,'DetailRisk',false,null,false,null,'ไม่ผ่าน',null,'กำลังดำเนินการ','ผ่านการทบทวน','dbtb');
          // }else{ 
              var title,Data;
              if(idsymp=='T'){
                   GetjQueryCookie('method','panel1')
                   title='แจ้งซ่อมทั้งหมด';
                   Data='DT_LRRPT';
              }else if(idsymp=='W'){
                   GetjQueryCookie('method','panel2')
                   title='กำลังดำเนินการ';
                    Data='DT_LRRPW';
              }else if(idsymp=='F'){
                   GetjQueryCookie('method','panel3')
                   title='ซ่อมไม่ได้';
                   Data='DT_LRRPF';
              }else if(idsymp=='S'){
                   GetjQueryCookie('method','panel4')
                   title='ซ่อมสำเร็จ';
                   Data='DT_LRRPS';
              }
             
              $("h4.box-title").append(title);
              $("li#next").append(title);
              $("h2").append(title);
                          
                                        $("#Budget").empty().append("ปีงบประมาณ : "+$.cookie('year'));
             var CTb = new createTableAjax();
             CTb.GetNewTableAjax('contentTB','JsonData/'+Data+'.php?'+$.cookie('year')+'?'+idsymp,'JsonData/tempSendData.php',column1
             ,null,null,null,null,false,false,null,true,'HisModal',false,null,'เร่งด่วน',null,null,'ไม่เร่งด่วน','dbtb');
          //}
        }
