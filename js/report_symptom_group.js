function SymptomGroup (content,id=null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    
    $("li#page").text(" รายงานการแจ้งซ่อมทั้งหมด")
    $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ")
    $("h2,h4.box-title").append(" รายงานการแจ้งซ่อม แยกรายเดือน");
    //$("li:nth-child(2)").remove();
    $("li#prev").remove();
    $("#sel_year").append($("<select name='yearS' class='form-control' id='yearS'></select>"))
    //$("#back").append("ทดสอบ").attr("onclick","loadPage('#index_content','content/risk_report(admin).html');");
    
    

    // var BY = new Date();
    // var nowyear = BY.getFullYear()+543;
    // $("#Budget").empty().append("ปีงบประมาณ : "+(BY.getFullYear()+543));
    // var title1 = "จำนวนความเสี่ยงที่ได้รับ แยกงาน";
    // var subtitle = "รายเดือน";
    // var unit = "ครั้ง";                                 
                                              
    // //var column1 = '{"รายการความเสี่ยงที่รอ RM man มาตรวจสอบ":["เลขที่","รายการ","เกิดขึ้นเมื่อ","ได้รับเมื่อ"]}';
    var column1 = ["เลขที่","รายชื่อหน่วยงาน","จำนวนเรื่อง","รายละเอียด"];

    var idsymp = id;
    if(idsymp == null){
        $.getJSON('JsonData/month.php',function (data) { 
            var month = data.month
            var year = data.year; 
            $("#Budget").empty().append("ปีงบประมาณ : "+year);
            var title1 = "จำนวนการแจ้งซ่อมจำแนกตามกลุ่มสาเหตุการเสีย แยกรายเดือน";
            var title2 = "ความเสี่ยงแยกตามด้านในปีงบประมาณ "+year;
            var title3 = "ความเสี่ยงแยกระดับความรุนแรงในปีงบประมาณ "+year;
            var subtitle = "รายเดือน";
            var unit = "ครั้ง";
            
            
            var option = "$('<option value=''> เลือกปีงบประมาณ </option>')";
            for (var i=2561;i<2566;i++) { 
                                                    option += "$('<option value='"+i+"'> "+i+" </option>'),";
                                                }
                                                $("select#yearS").empty().append(option);
                                              
            var CCharts =  new AJAXCharts('contentGr','line',title1,unit,month,'JsonData/DC_line1.php',subtitle);
            $(CCharts.GetCL());
            var CTb = new createTableAjax();
            //RemovejQueryCookie('year')
            
            GetjQueryCookie('year',year)
            //var column1 = '{"รายการความเสี่ยงที่รอ RM man มาตรวจสอบ":["เลขที่","รายการ","เกิดขึ้นเมื่อ","ได้รับเมื่อ"]}';
                     
                      //CTb.GetNewTableAjax('JsonData/DT_CR.php','contentTB','content/detail_risk.php');
                      CTb.GetNewTableAjax('contentTB','JsonData/DT_DR.php?'+year,'JsonData/tempSendData.php',column1
                      ,null,null,null,null,false,true,'DepRisk',false,null,false,null,null,null,null,null);
            $("select#yearS").change(function () {
                //RemovejQueryCookie('year');
                GetjQueryCookie('year',$("#yearS").val())
                var CCharts =  new AJAXCharts('contentGr','line',title1,unit,month,'JsonData/DC_line1.php?'+$("#yearS").val(),subtitle);
            $(CCharts.GetCL()); 
                          $("#Budget").empty().append("ปีงบประมาณ : "+$("#yearS").val());
                          CTb.GetNewTableAjax('contentTB','JsonData/DT_DR.php?'+$("#yearS").val(),'JsonData/tempSendData.php',column1
                      ,null,null,null,null,false,true,'DepRisk',false,null,false,null,null,null,null,null);
                      });
    
        });
        
       
       
          }else{ 
            $("#Budget").empty().append("ปีงบประมาณ : "+idsymp);     
            var option = "$('<option value=''> เลือกปีงบประมาณ </option>')";
            for (var i=2557;i<2566;i++) { 
                if(idsymp==i){ var select = 'selected';}else{ var select = '';}
                                                    option += "$('<option value='"+i+"' "+select+"> "+i+" </option>'),";
                                                }
                                                $("select#yearS").empty().append(option);
                                              
                $.getJSON('JsonData/graph_dep.php',{data:idsymp},function (data) { 
            var dep = data.dep
            
            var CCharts =  new AJAXCharts('contentGr','column',title1,unit,dep,'JsonData/DC_columnDepRep.php?'+idsymp,subtitle);
            $(CCharts.GetCL());
            });  
            
            var CTb = new createTableAjax();
            //RemovejQueryCookie('year')
            
           // GetjQueryCookie('year',nowyear)
            //var column1 = '{"รายการความเสี่ยงที่รอ RM man มาตรวจสอบ":["เลขที่","รายการ","เกิดขึ้นเมื่อ","ได้รับเมื่อ"]}';
                     
                      //CTb.GetNewTableAjax('JsonData/DT_CR.php','contentTB','content/detail_risk.php');
                      CTb.GetNewTableAjax('contentTB','JsonData/DT_DR.php?'+idsymp,'JsonData/tempSendData.php',column1
                      ,null,null,null,null,false,true,'DepRisk',false,null,false,null,null,null,null,null);
            $("select#yearS").change(function () {
                //RemovejQueryCookie('year');
                GetjQueryCookie('year',$("#yearS").val())
                $.getJSON('JsonData/graph_dep.php',{data:$("#yearS").val()},function (data) { 
            var dep = data.dep
            
            var CCharts =  new AJAXCharts('contentGr','column',title1,unit,dep,'JsonData/DC_columnDepRep.php?'+$("#yearS").val(),subtitle);
            $(CCharts.GetCL());
            }); 
                          $("#Budget").empty().append("ปีงบประมาณ : "+$("#yearS").val());
                          CTb.GetNewTableAjax('contentTB','JsonData/DT_DR.php?'+$("#yearS").val(),'JsonData/tempSendData.php',column1
                      ,null,null,null,null,false,true,'DepRisk',false,null,false,null,null,null,null,null);
                      });
          }
        }
