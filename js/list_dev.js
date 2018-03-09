function ListDev (content,id=null) { 
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>บันทึกผู้พัฒนา (Developer)</h2>"+
                                    "<ol class='breadcrumb'><li><a href='index.html'><i class='หน้าหลัก'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-wrench'></i> บันทึกผู้พัฒนา</li></ol>"+
                                    "<div class='well well-sm'><a href='#' class='btn btn-success' data-toggle='modal' data-target='#progModal' data-whatever='P'><i class='fa fa-plus'></i> เพิ่มโปรแกรม</a>"+
                                    " <a href='#' class='btn btn-success' data-toggle='modal' data-target='#progModal' data-whatever='M'><i class='fa fa-plus'></i> เพิ่ม  Module</a></div><p>"+
                                    "<div><select name='pg_id' class='form-control select2' id='pg_id' style='width: 300px'></select>"+
                                    " <select name='module_id' class='form-control select2' id='module_id' style='width: 300px' required></select>"+
                                    "</div><br>"+
                                    "<div class='row'><div class='col-md-12'><div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'><h4 class='box-title'><i class='fa fa-star'></i> รายการพัฒนาแอพพลิเคชัน/รายงาน </h4>"+
                                    "<div class='box-tools pull-right'><button type='button' class='btn btn-box-tool' data-widget='collapse'><i class='fa fa-minus'></i></button>"+
                                    "</div></div>"+
                                    "<div class='box-body'><div id='contentTB' class='table-responsive'></div>"+
                                    "</div></div></div></div>");
                            if(id==null){
                            $(".well:first > a").attr("onclick","progModal()");
                            $(".well:last > a").attr("onclick","progModal()");    
                            }else{
                            $(".well:first > a").attr("onclick","progModal("+id.data+")");
                            $(".well:last > a").attr("onclick","progModal("+id.data+")");
                        }
                            $("h2").prepend("<img src='images/Good_Idea.ico' width='40'> ");
                            $.getJSON('JsonData/program_dev.php', function (GD) {
                                     var option="<option value=''> เลือกโปรแกรม </option>";
                                    for (var key in GD) {
                                              option += "$('<option value='"+GD[key].pg_id+"'> "+GD[key].pg_name+" </option>'),";
                                        }
                                        $("select#pg_id").empty().append(option);
                                        $(".select2").select2();
                                });
                                $("select#module_id").append($("<option value=''> เลือก module </option>"));
                                $("select#pg_id").change(function () {
                                $.getJSON('JsonData/module_dev.php',{data: $("#pg_id").val()}, function (CD) {
                                    var option="$('<option value=''> เลือก module </option>'),";
                                    for (var key in CD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              option += "$('<option value='"+CD[key].module_id+"'> "+CD[key].module_name+" </option>'),";
                                        }
                                        $("select#module_id").empty().append(option);
                                        $(".select2").select2();
                                    
                                }); 
                                var column1 = ["id","โปรแกรม","โมดูล","บันทึก"];
                                var CTb = new createTableAjax();
                                $("#contentTB").empty();
                                if(id==null){
                                 CTb.GetNewTableAjax('contentTB','JsonData/DT_Prog.php?'+$("#pg_id").val(),'JsonData/tempSendData.php',column1
                                ,null,null,null,null,false,false,null,true,'recDevModal',false,null,null,null,null,null,'dbtb');   
                                }else{
                                CTb.GetNewTableAjax('contentTB','JsonData/DT_Prog.php?'+$("#pg_id").val(),'JsonData/tempSendData.php',column1
                                ,null,null,null,null,false,false,null,true,'recDevModal?'+id.data,false,null,null,null,null,null,'dbtb');
                            }
                            }); 
                            $("select#module_id").change(function () {
                                var column1 = ["id","วันที่พัฒนา","เริ่มต้น","สิ้นสุด","ผู้พัฒนา","รายละเอียด"];
                                var CTb = new createTableAjax();
                                $("#contentTB").empty();
                                CTb.GetNewTableAjax('contentTB','JsonData/DT_module.php?'+$("#module_id").val(),'JsonData/tempSendData.php',column1
                                ,null,null,null,null,false,false,null,true,'detailDevModal',false,null,null,null,null,null,'dbtb');
            
                            });

            
        }
