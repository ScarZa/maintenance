function SymptomGroup01 (content,id=null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    
    $("li#page").text(" รายงานการแจ้งซ่อม แยกอาการเสีย")
    $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ")
    $("h2,h4.box-title").append(" รายงานการแจ้งซ่อม");
    //$("li:nth-child(2)").remove();
    //$("li#prev").remove();
    $("#sel_year").append($("<select name='yearS' class='form-control' id='yearS'></select>"))
    $("#back").append(" รายงานการแจ้งซ่อม แยกสรุปอาการเสีย").attr("onclick","SymptomGroup('index_content');");
    
    

    // var BY = new Date();
    // var nowyear = BY.getFullYear()+543;
    // $("#Budget").empty().append("ปีงบประมาณ : "+(BY.getFullYear()+543));
    // var title1 = "จำนวนความเสี่ยงที่ได้รับ แยกงาน";
    // var subtitle = "รายเดือน";
    // var unit = "ครั้ง";                                 
                                              
    // //var column1 = '{"รายการความเสี่ยงที่รอ RM man มาตรวจสอบ":["เลขที่","รายการ","เกิดขึ้นเมื่อ","ได้รับเมื่อ"]}';
    var column1 = ["เลขที่","สรปสาเหตุอาการเสีย","จำนวน","รายละเอียด"];
    var title1 = "จำนวนการแจ้งซ่อมจำแนกตามกลุ่มสาเหตุการเสีย แยกสาเหตุ";
    var title2 = "ความเสี่ยงแยกตามด้านในปีงบประมาณ "+year;
    var title3 = "ความเสี่ยงแยกระดับความรุนแรงในปีงบประมาณ "+year;
    var subtitle = "รายเดือน";
    var unit = "ครั้ง";
    var idsymp = id;
   
    
    if(idsymp == null){
        $("#Budget").empty().append("ปีงบประมาณ : "+$.cookie('year'));     
        var option = "$('<option value=''> เลือกปีงบประมาณ </option>')";
        for (var i=2561;i<2566;i++) { 
            if(idsymp==i){ var select = 'selected';}else{ var select = '';}
                                                option += "$('<option value='"+i+"' "+select+"> "+i+" </option>'),";
                                            }
                                            $("select#yearS").empty().append(option);
        var year = $.cookie('year');                                  
            $.getJSON('JsonData/graph_sympG01.php',{data:year,data2:$.cookie('symp_cate')},function (data) { 
        var symp = data.symmptom;
        var CCharts =  new AJAXCharts('contentGr','column',title1,unit,symp,'JsonData/DC_columnSympG.php?'+year+'?'+$.cookie('symp_cate'),subtitle);
        $(CCharts.GetCL());
        });  
        
        var CTb = new createTableAjax();
        //RemovejQueryCookie('year')
        
       // GetjQueryCookie('year',nowyear)
        //var column1 = '{"รายการความเสี่ยงที่รอ RM man มาตรวจสอบ":["เลขที่","รายการ","เกิดขึ้นเมื่อ","ได้รับเมื่อ"]}';
                 
                  //CTb.GetNewTableAjax('JsonData/DT_CR.php','contentTB','content/detail_risk.php');
                  CTb.GetNewTableAjax('contentTB','JsonData/DT_RSy.php?'+year+'?'+$.cookie('symp_cate'),'JsonData/tempSendData.php',column1
                  ,null,null,null,null,false,true,'SymptomGroup02',false,null,false,null,null,null,null,null);
        $("select#yearS").change(function () {
            //RemovejQueryCookie('year');
            GetjQueryCookie('year',$("#yearS").val())
            $.getJSON('JsonData/graph_sympG01.php',{data:$("#yearS").val(),data2:$.cookie('symp_cate')},function (data) { 
                var symp = data.symmptom;
        
        var CCharts =  new AJAXCharts('contentGr','column',title1,unit,symp,'JsonData/DC_columnSympG.php?'+$("#yearS").val()+'?'+$.cookie('symp_cate'),subtitle);
        $(CCharts.GetCL());
        }); 
                      $("#Budget").empty().append("ปีงบประมาณ : "+$("#yearS").val());
                      $("#contentTB").empty();
                      CTb.GetNewTableAjax('contentTB','JsonData/DT_RSy.php?'+$("#yearS").val()+'?'+$.cookie('symp_cate'),'JsonData/tempSendData.php',column1
                  ,null,null,null,null,false,true,'SymptomGroup02',false,null,false,null,null,null,null,null);
                  });
        
       
       
          }else{ 
            GetjQueryCookie('symp_cate',idsymp.data);
            $("#Budget").empty().append("ปีงบประมาณ : "+$.cookie('year'));     
            var option = "$('<option value=''> เลือกปีงบประมาณ </option>')";
            for (var i=2561;i<2566;i++) { 
                if(idsymp==i){ var select = 'selected';}else{ var select = '';}
                                                    option += "$('<option value='"+i+"' "+select+"> "+i+" </option>'),";
                                                }
                                                $("select#yearS").empty().append(option);
            var year = $.cookie('year');                                  
                $.getJSON('JsonData/graph_sympG01.php',{data:year,data2:idsymp.data},function (data) { 
            var symp = data.symmptom;
            var CCharts =  new AJAXCharts('contentGr','column',title1,unit,symp,'JsonData/DC_columnSympG.php?'+year+'?'+idsymp.data,subtitle);
            $(CCharts.GetCL());
            });  
            
            var CTb = new createTableAjax();
            //RemovejQueryCookie('year')
            
           // GetjQueryCookie('year',nowyear)
            //var column1 = '{"รายการความเสี่ยงที่รอ RM man มาตรวจสอบ":["เลขที่","รายการ","เกิดขึ้นเมื่อ","ได้รับเมื่อ"]}';
                     
                      //CTb.GetNewTableAjax('JsonData/DT_CR.php','contentTB','content/detail_risk.php');
                      CTb.GetNewTableAjax('contentTB','JsonData/DT_RSy.php?'+year+'?'+idsymp.data,'JsonData/tempSendData.php',column1
                      ,null,null,null,null,false,true,'SymptomGroup02',false,null,false,null,null,null,null,null);
            $("select#yearS").change(function () {
                //RemovejQueryCookie('year');
                GetjQueryCookie('year',$("#yearS").val())
                $.getJSON('JsonData/graph_sympG01.php',{data:$("#yearS").val(),data2:idsymp.data},function (data) { 
                    var symp = data.symmptom;
            
            var CCharts =  new AJAXCharts('contentGr','column',title1,unit,symp,'JsonData/DC_columnSympG.php?'+$("#yearS").val()+'?'+idsymp.data,subtitle);
            $(CCharts.GetCL());
            }); 
                          $("#Budget").empty().append("ปีงบประมาณ : "+$("#yearS").val());
                          $("#contentTB").empty();
                          CTb.GetNewTableAjax('contentTB','JsonData/DT_RSy.php?'+$("#yearS").val()+'?'+idsymp.data,'JsonData/tempSendData.php',column1
                      ,null,null,null,null,false,true,'SymptomGroup02',false,null,false,null,null,null,null,null);
                      });
          }
        }
