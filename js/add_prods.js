function AddProds (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>เพิ่มครุภัณฑ์</h2>"+
                                    "<ol class='breadcrumb'>"+
                                    "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-envelope'></i> เพิ่มครุภัณฑ์</li>"+
                                    "</ol><form action='' name='frmaddprods' id='frmaddprods' method='post'>"+
                                    "<div class='row'>"+
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มข้อมูลครุภัณฑ์ </h4></div>"+
                                    "<div class='box-body' id='add_pd'><div class='col-md-12'><div class='col-md-6'>"+
                                    "<div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> ข้อมูลครุภัณฑ์ </h4></div><div class='box-body'><div id='DP_content'></div></div></div></div>"+
                                    "<div class='col-md-6'><div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> ข้อมูลการซื้อครุภัณฑ์ </h4></div><div class='box-body'><div id='DSP_content'></div></div></div></div></div>"+
                                    "<div class='col-md-12'><div class='col-md-6'><div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> ข้อมูลการรับประกันครุภัณฑ์ </h4></div><div class='box-body'><div id='DWP_content'></div></div></div></div>"+
                                    "<div class='col-md-6'><div class='box box-primary box-solid'><div class='box-header with-border'>"+
                                    "<h4 class='box-title'> ข้อมูลสถานที่ครุภัณฑ์ </h4></div><div class='box-body'><div id='DPP_content'></div>"+
                                    "</div></div></div></div></div></div></div><div class='col-md-12' id='DR_content'></div></div></form>");
                            $("h2").prepend("<img src='images/icon_set2/dolly.ico' width='40'> ");
            var idProds = id;
            if(idProds == null){
        $("#DP_content").append($("<div class='form-group'>หมวดครุภัณฑ์ : <select name='pdgroup' class='form-control select2' id='pdgroup' required></select>")
                        ,$("<div class='form-group'>ประเภทครุภัณฑ์ : <select name='pdcate' class='form-control select2' id='pdcate' required></select>")
                        //,$("<div class='form-group'>เลขครุภัณฑ์ : <INPUT TYPE='text' NAME='head_no' id='head_no' style='width: 100px'> <b id='cate_no'></b> <INPUT TYPE='text' NAME='num' id='num' style='width: 50px'></div>")
                        ,$("<div class='form-group'>เลขครุภัณฑ์ : <INPUT TYPE='text' NAME='pd_number' id='pd_number' class='form-control'></div>")
                        ,$("<div class='form-group'>ชื่อครุภัณฑ์ : <INPUT TYPE='text' NAME='name' id='name' class='form-control' placeholder='เช่น printer brother MFC-J5910DW'></div>")
                        ,$("<div class='form-group'>ยี่ห้อ : <INPUT TYPE='text' NAME='brand' id='brand' class='form-control'></div>")
                        ,$("<div class='form-group'>หมายเลขเครื่อง : <INPUT TYPE='text' NAME='serial' id='serial' class='form-control'></div>")
                        ,$("<div class='form-group'>สถานะการใช้งาน : <select name='pd_status' class='form-control select2' id='pd_status' required></select>")
                        ,$("<div id='image_preview'><img id='previewing' src='images/icon_set2/image.ico' width='50' /></div>")
                        ,$("<div class='form-group'>สถานะการใช้งาน : <input type='file' name='file' id='file' class='form-control' /></div></div><h4 id='loading' >loading..</h4><div id='message'></div>"));
                $("select#pdgroup").append($("<option value=''> เลือกหมวดครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/group_Data.php', function (GD) {
                                    for (var key in GD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#pdgroup").append($("<option value='"+GD[key].group_id+"'> "+GD[key].group_name+" </option>"));
                                    }$(".select2").select2();
                                });    
                $("select#pdcate").append($("<option value=''> เลือกประเภทครุภัณฑ์ </option>"));
                                $("select#pdgroup").change(function () {
                                    
                                $.getJSON('JsonData/cate_Data.php',{data: $("#pdgroup").val()}, function (CD) {
                                    var option="$('<option value=''> เลือกประเภทครุภัณฑ์ </option>'),";
                                    for (var key in CD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              option += "$('<option value='"+CD[key].category_id+"'> "+CD[key].category_name+" </option>'),";
                                        }
                                        $("select#pdcate").empty().append(option);
                                        $(".select2").select2();
                                    
                                }); 
                            }); 
                                    
                                    /*$("select#pdcate").change(function () {
                                        cate_no = $("#pdcate").val();
                                        cate = cate_no.split('_');
                                    $("#cate_no").text(cate[1]);
                                     });*/
                
                $("select#pd_status").append($("<option value=''> เลือกสถานะครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/pdstatus_Data.php', function (SD) {
                                    for (var key in SD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#pd_status").append($("<option value='"+SD[key].pd_status_id+"'> "+SD[key].pd_status+" </option>"));
                                        }
                                        $(".select2").select2();
                            });
                            
        $("#DSP_content").append($("<div class='form-group'>ผู้ขาย : <select name='com_id' class='form-control select2' id='com_id' required></select>")
                        ,$("<div class='form-group'>ราคาซื้อ : <INPUT TYPE='text' NAME='price' id='price' class='form-control'>")
                        ,$("<div class='form-group'>ชนิดเงิน : <select name='montype_id' class='form-control select2' id='montype_id' required></select>")
                        ,$("<div class='form-group'>วิธีซื้อ : <select name='mon_id' class='form-control select2' id='mon_id' required></select>")
                        ,$("<div class='form-group'>ปีที่ซื้อ : <select name='yearbuy' class='form-control select2' id='yearbuy' required></select>"));      
                $("select#com_id").append($("<option value=''> เลือกผู้ขาย </option>"));
                                $.getJSON('JsonData/comp_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#com_id").append($("<option value='"+CmD[key].comp_id+"'> "+CmD[key].comp_name+" </option>"));
                                    }$(".select2").select2();
                                });  
                $("select#montype_id").append($("<option value=''> เลือกชนิดเงินงบ </option>"));
                                $.getJSON('JsonData/montype_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#montype_id").append($("<option value='"+CmD[key].id+"'> "+CmD[key].name+" </option>"));
                                    }$(".select2").select2();
                                });  
                $("select#mon_id").append($("<option value=''> เลือกวิธีซื้อ </option>"));
                                $.getJSON('JsonData/methodsale_Data.php', function (MD) {
                                    for (var key in MD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#mon_id").append($("<option value='"+MD[key].mon_id+"'> "+MD[key].mon_name+" </option>"));
                                    }$(".select2").select2();
                                });   
                $("select#yearbuy").append($("<option value=''> เลือกปีที่ซื้อ </option>"));
                                var d = new Date();
                                var yearT = (d.getFullYear()+543);
                                     for (var i = (yearT+1);i >= (yearT+1)-15;i--) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#yearbuy").append($("<option value='"+i+"'> "+i+" </option>"));
                                    }$(".select2").select2();
                                    
        $("#DWP_content").append($("<div class='form-group'>วันที่ลงทะเบียน : <input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required>")
                        ,$("<div class='form-group'>วันที่เริ่มประกัน : <input type='text' name='datepicker2' id='datepicker2' class='form-control' readonly required>")
                        ,$("<div class='form-group'>เลขที่สัญญา : <input type='text' name='ct_number' id='ct_number' class='form-control'>")
                        ,$("<div class='form-group'>จำนวนเดือนที่รับประกัน : <input type='text' name='nbmoth_insur' id='nbmoth_insur' class='form-control'>"));
                        
        $("#DPP_content").append($("<div class='form-group'>งาน : <select name='dep_id' class='form-control select2' id='dep_id' required></select>")
                        ,$("<div class='form-group'>วันที่ติดตั้ง : <input type='text' name='datepicker3' id='datepicker3' class='form-control' readonly required>")
                        ,$("<div class='form-group'>วันที่เคลื่อนย้าย : <input type='text' name='datepicker4' id='datepicker4' class='form-control' readonly required>")
                        ,$("<div class='form-group'>ผู้รับผิดชอบ : <select name='rp_person' class='form-control select2' id='rp_person' required></select>")
                        ,$("<div class='form-group'>หมายเหตุ : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='หมายเหตุ' name='note' id='note'></textarea>"));                
                        
                $("select#dep_id").append($("<option value=''> เลือกงาน </option>"));
                                $.getJSON('JsonData/Dep_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#dep_id").append($("<option value='"+CmD[key].depId+"'> "+CmD[key].depName+" </option>"));
                                    }$(".select2").select2();
                                }); 
                $("select#rp_person").append($("<option value=''> เลือกผู้รับผิดชอบ </option>"));
                                $.getJSON('JsonData/emp_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              $("select#rp_person").append($("<option value='"+CmD[key].empno+"'> "+CmD[key].fullname+" </option>"));
                                    }$(".select2").select2();
                                });
                                
                        var DP = new DatepickerThai();
                            DP.GetDatepicker('#datepicker1');
                            DP.GetDatepicker('#datepicker2');
                            DP.GetDatepicker('#datepicker3');
                            DP.GetDatepicker('#datepicker4');
            $("div#add_pd").append("<input type='hidden' id='method' name='method' value='add_prods'>");                
            $("div#add_pd").append("<div class='col-md-12' align='center'><input id='APsubmit' type='submit' value='บันทึก' class='btn btn-primary' /></div>");
            $('#loading').hide();
            $("#frmaddprods").on('submit', (function (e) {
                $("#message").empty();
                $('#loading').show();
                                    if($("#pdgroup").val()==''){
                                            alert("กรุณาเลือกหมวดครุภัณฑ์ด้วยครับ!!!");
                                            $("#pdgroup").focus();
                                            e.preventDefault();
                                        }else if($("#pdcate").val()==''){
                                            alert("กรุณาเลือกประเภทครุภัณฑ์ด้วยครับ!!!");
                                            $("#pdcate").focus();
                                            e.preventDefault();
                                        }else if($("#pd_number").val()==''){
                                            alert("กรุณาระบุเลขครุภัณฑ์ด้วยครับ!!!");
                                            $("#pd_number").focus();
                                            e.preventDefault();
                                        }else if($("#name").val()==''){
                                            alert("กรุณาระบุชื่อครุภัณฑ์ด้วยครับ");
                                            $("#name").focus();
                                            e.preventDefault();
                                        }else if($("#pd_status").val()==''){
                                            alert("กรุณาเลือกสถานะการใช้งานด้วยครับ");
                                            $("#pd_status").focus();
                                            e.preventDefault();
                                        }else if($("#com_id").val()==''){
                                            alert("กรุณาเลือกผู้ขายด้วยครับ");
                                            $("#com_id").focus();
                                            e.preventDefault();
                                        }else if($("#price").val()==''){
                                            alert("กรุณาระบุราคาซื้อด้วยครับ");
                                            $("#price").focus();
                                            e.preventDefault();
                                        }else if($("#montype_id").val()==''){
                                            alert("กรุณาเลือกชนิดเงินด้วยครับ");
                                            $("#montype_id").focus();
                                            e.preventDefault();
                                        }else if($("#mon_id").val()==''){
                                            alert("กรุณาเลือกวิธีซื้อด้วยครับ");
                                            $("#mon_id").focus();
                                            e.preventDefault();
                                        }else if($("#ct_number").val()==''){
                                            alert("กรุณาระบุเลขที่สัญญาด้วยครับ");
                                            $("#ct_number").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcprods.php",
//					   data: {pdgroup:$("#pdgroup").val()
//                                                 ,pdcate:$("#pdcate").val()
//                                                 ,pd_number:$("#pd_number").val()
//                                                 ,name:$("#name").val()
//                                                ,brand:$("#brand").val()
//                                                ,serial:$("#serial").val()
//                                                ,pd_status:$("#pd_status").val()
//                                                ,com_id:$("#com_id").val()
//                                                ,price:$("#price").val()
//                                                ,montype_id:$("#montype_id").val()
//                                                ,mon_id:$("#mon_id").val()
//                                                ,yearbuy:$("#yearbuy").val()
//                                                ,regis_date:$("#datepicker1").val()
//                                                ,date_stinsur:$("#datepicker2").val()
//                                                ,ct_number:$("#ct_number").val()
//                                                ,nbmoth_insur:$("#nbmoth_insur").val()
//                                                ,dep_id:$("#dep_id").val()
//                                                ,lnstalldate:$("#datepicker3").val()
//                                                ,movingdate:$("#datepicker4").val()
//                                                ,rp_person:$("#rp_person").val()
//                                                ,note:$("#note").val()
                                            data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                                            contentType: false, // The content type used when sending data to the server.
                                            cache: false, // To unable request pages to be cached
                                            processData: false,
                                                //,data0:'add_prods'},
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/add_prods.html');
					   }
					 });e.preventDefault();
                                     }
                                     
        }));
        $(function () {
                $("#file").change(function () {
                    $("#message").empty(); // To remove the previous error message
                    var file = this.files[0];
                    var imagefile = file.type;
                    var match = ["image/jpeg", "image/png", "image/jpg"];
                    if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2])))
                    {
                        $('#previewing').attr('src', 'noimage.png');
                        $("#message").html("<p id='error'>Please Select A valid Image File</p>" + "<h4>Note</h4>" + "<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
                        return false;
                    } else
                    {
                        var reader = new FileReader();
                        reader.onload = imageIsLoaded;
                        reader.readAsDataURL(this.files[0]);
                    }
                });
            });
            function imageIsLoaded(e) {
                $("#file").css("color", "green");
                $('#image_preview').css("display", "block");
                $('#previewing').attr('src', e.target.result);
                $('#previewing').attr('width', '150px');
                //$('#previewing').attr('height', '230px');
            }
            }else{ 
                $.getJSON('JsonData/detail_prods.php',{data: idProds.data}, function (data) {
                     $("#DP_content").append($("<div class='form-group'>หมวดครุภัณฑ์ : <select name='pdgroup' class='form-control select2' id='pdgroup' required></select>")
                        ,$("<div class='form-group'>ประเภทครุภัณฑ์ : <select name='pdcate' class='form-control select2' id='pdcate' required></select>")
                        //,$("<div class='form-group'>เลขครุภัณฑ์ : <INPUT TYPE='text' NAME='head_no' id='head_no' style='width: 100px'> <b id='cate_no'></b> <INPUT TYPE='text' NAME='num' id='num' style='width: 50px'></div>")
                        ,$("<div class='form-group'>เลขครุภัณฑ์ : <INPUT TYPE='text' NAME='pd_number' id='pd_number' class='form-control'></div>")
                        ,$("<div class='form-group'>ชื่อครุภัณฑ์ : <INPUT TYPE='text' NAME='name' id='name' class='form-control' placeholder='เช่น printer brother MFC-J5910DW'></div>")
                        ,$("<div class='form-group'>ยี่ห้อ : <INPUT TYPE='text' NAME='brand' id='brand' class='form-control'></div>")
                        ,$("<div class='form-group'>หมายเลขเครื่อง : <INPUT TYPE='text' NAME='serial' id='serial' class='form-control'></div>")
                        ,$("<div class='form-group'>สถานะการใช้งาน : <select name='pd_status' class='form-control select2' id='pd_status' required></select>")
                        ,$("<div id='image_preview'><img id='previewing' width='50' /></div>")
                        ,$("<div class='form-group'>สถานะการใช้งาน : <input type='file' name='file' id='file' class='form-control' /></div></div><h4 id='loading' >loading..</h4><div id='message'></div>"));
                        if(data.photo_pd == '' || data.photo_pd === null){
                $('#previewing').empty().attr('src', 'images/icon_set2/image.ico');
            }else{
                $('#previewing').empty().attr('src', 'PD_imgs/'+data.photo_pd);
            }
                $("select#pdgroup").append($("<option value=''> เลือกหมวดครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/group_Data.php', function (GD) {
                                    for (var key in GD) {
                                        if(GD[key].group_id==data.group_id){var select='selected';}else{var select='';}
                                              $("select#pdgroup").append($("<option value='"+GD[key].group_id+"' "+select+"> "+GD[key].group_name+" </option>"));
                                    }$(".select2").select2();
                                });    
                $("select#pdcate").append($("<option value=''> เลือกประเภทครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/cate_Data.php',{data: data.group_id}, function (CD) {
                                    var option;
                                    for (var key in CD) {
                                        if(CD[key].category_id==data.category_id){var select='selected';}else{var select='';}
                                              option += "$('<option value='"+CD[key].category_id+"' "+select+"> "+CD[key].category_name+" </option>'),";
                                        }
                                        $("select#pdcate").empty().append(option);
                                        $(".select2").select2();
                                }); 
                                
                                $("select#pdgroup").change(function () {
                                    
                                $.getJSON('JsonData/cate_Data.php',{data: $("#pdgroup").val()}, function (CD) {
                                    var option;
                                    for (var key in CD) {
                                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                                              option += "$('<option value='"+CD[key].category_id+"'> "+CD[key].category_name+" </option>'),";
                                        }
                                        $("select#pdcate").empty().append(option);
                                        $(".select2").select2();
                                    
                                }); 
                            }); 
                                   
                                    /*$("select#pdcate").change(function () {
                                        cate_no = $("#pdcate").val();
                                        cate = cate_no.split('_');
                                    $("#cate_no").text(cate[1]);
                                     });*/
                
                $("select#pd_status").append($("<option value=''> เลือกสถานะครุภัณฑ์ </option>"));
                                $.getJSON('JsonData/pdstatus_Data.php', function (SD) {
                                    for (var key in SD) {
                                        if(SD[key].pd_status_id==data.status){var select='selected';}else{var select='';}
                                              $("select#pd_status").append($("<option value='"+SD[key].pd_status_id+"' "+select+"> "+SD[key].pd_status+" </option>"));
                                        }
                                        $(".select2").select2();
                            });
                            
        $("#DSP_content").append($("<div class='form-group'>ผู้ขาย : <select name='com_id' class='form-control select2' id='com_id' required></select>")
                        ,$("<div class='form-group'>ราคาซื้อ : <INPUT TYPE='text' NAME='price' id='price' class='form-control'>")
                        ,$("<div class='form-group'>ชนิดเงิน : <select name='montype_id' class='form-control select2' id='montype_id' required></select>")
                        ,$("<div class='form-group'>วิธีซื้อ : <select name='mon_id' class='form-control select2' id='mon_id' required></select>")
                        ,$("<div class='form-group'>ปีที่ซื้อ : <select name='yearbuy' class='form-control select2' id='yearbuy' required></select>"));      
                $("select#com_id").append($("<option value=''> เลือกผู้ขาย </option>"));
                                $.getJSON('JsonData/comp_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        if(CmD[key].comp_id==data.com_id){var select='selected';}else{var select='';}
                                              $("select#com_id").append($("<option value='"+CmD[key].comp_id+"' "+select+"> "+CmD[key].comp_name+" </option>"));
                                    }$(".select2").select2();
                                });  
                $("select#montype_id").append($("<option value=''> เลือกชนิดเงินงบ </option>"));
                                $.getJSON('JsonData/montype_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        if(CmD[key].id==data.montype_id){var select='selected';}else{var select='';}
                                              $("select#montype_id").append($("<option value='"+CmD[key].id+"' "+select+"> "+CmD[key].name+" </option>"));
                                    }$(".select2").select2();
                                });  
                $("select#mon_id").append($("<option value=''> เลือกวิธีซื้อ </option>"));
                                $.getJSON('JsonData/methodsale_Data.php', function (MD) {
                                    for (var key in MD) {
                                        if(MD[key].mon_id==data.mon_id){var select='selected';}else{var select='';}
                                              $("select#mon_id").append($("<option value='"+MD[key].mon_id+"' "+select+"> "+MD[key].mon_name+" </option>"));
                                    }$(".select2").select2();
                                });   
                $("select#yearbuy").append($("<option value=''> เลือกปีที่ซื้อ </option>"));
                                var d = new Date();
                                var yearT = (d.getFullYear()+543);
                                     for (var i = (yearT+1);i >= (yearT+1)-15;i--) {
                                        if(i==data.yearbuy){var select='selected';}else{var select='';}
                                              $("select#yearbuy").append($("<option value='"+i+"' "+select+"> "+i+" </option>"));
                                    }$(".select2").select2();
                                    
        $("#DWP_content").append($("<div class='form-group'>วันที่ลงทะเบียน : <input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required>")
                        ,$("<div class='form-group'>วันที่เริ่มประกัน : <input type='text' name='datepicker2' id='datepicker2' class='form-control' readonly required>")
                        ,$("<div class='form-group'>เลขที่สัญญา : <input type='text' name='ct_number' id='ct_number' class='form-control'>")
                        ,$("<div class='form-group'>จำนวนเดือนที่รับประกัน : <input type='text' name='nbmoth_insur' id='nbmoth_insur' class='form-control'>"));
                        
        $("#DPP_content").append($("<div class='form-group'>งาน : <select name='dep_id' class='form-control select2' id='dep_id' required></select>")
                        ,$("<div class='form-group'>วันที่ติดตั้ง : <input type='text' name='datepicker3' id='datepicker3' class='form-control' readonly required>")
                        ,$("<div class='form-group'>วันที่เคลื่อนย้าย : <input type='text' name='datepicker4' id='datepicker4' class='form-control' readonly required>")
                        ,$("<div class='form-group'>ผู้รับผิดชอบ : <select name='rp_person' class='form-control select2' id='rp_person' required></select>")
                        ,$("<div class='form-group'>หมายเหตุ : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='หมายเหตุ' name='note' id='note'></textarea>"));                
                        
                $("select#dep_id").append($("<option value=''> เลือกงาน </option>"));
                                $.getJSON('JsonData/Dep_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        if(CmD[key].depId==data.depId){var select='selected';}else{var select='';}
                                              $("select#dep_id").append($("<option value='"+CmD[key].depId+"' "+select+"> "+CmD[key].depName+" </option>"));
                                    }$(".select2").select2();
                                }); 
                $("select#rp_person").append($("<option value=''> เลือกผู้รับผิดชอบ </option>"));
                                $.getJSON('JsonData/emp_Data.php', function (CmD) {
                                    for (var key in CmD) {
                                        if(CmD[key].empno==data.rp_person){var select='selected';}else{var select='';}
                                              $("select#rp_person").append($("<option value='"+CmD[key].empno+"' "+select+"> "+CmD[key].fullname+" </option>"));
                                    }$(".select2").select2();
                                });
                                
                        var DP = new DatepickerThai();
                            DP.GetDatepicker('#datepicker1');
                            DP.GetDatepicker('#datepicker2');
                            DP.GetDatepicker('#datepicker3');
                            DP.GetDatepicker('#datepicker4');
                            $("#datepicker1").datepicker("setDate",new Date(data.regis_date));
                            $("#datepicker2").datepicker("setDate",new Date(data.date_stinsur));
                            $("#datepicker3").datepicker("setDate",new Date(data.lnstalldate));
                            $("#datepicker4").datepicker("setDate",new Date(data.movingdate));
                            
                            $("#pd_number").val(data.pd_number);
                            $("#name").val(data.name);
                            $("#brand").val(data.brand);
                            $("#serial").val(data.serial);
                            $("#price").val(data.price);
                            $("#ct_number").val(data.ct_number);
                            $("#nbmoth_insur").val(data.nbmoth_insur);
                            $("#note").val(data.note);
                            
            $("div#add_pd").append($("<input type='hidden' id='method' name='method' value='edit_prods'>")
                                    ,$("<input type='hidden' id='pd_id' name='pd_id' value='"+data.pd_id+"'>"));                
            $("div#add_pd").append("<div class='col-md-12' align='center'><input id='APsubmit' type='submit' value='แก้ไข' class='btn btn-warning' /></div>");
            $('#loading').hide();
                $("#frmaddprods").on('submit', (function (e) {
                $("#message").empty();
                $('#loading').show();
                                        if($("#pdgroup").val()==''){
                                            alert("กรุณาเลือกหมวดครุภัณฑ์ด้วยครับ!!!");
                                            $("#pdgroup").focus();
                                            e.preventDefault();
                                        }else if($("#pdcate").val()==''){
                                            alert("กรุณาเลือกประเภทครุภัณฑ์ด้วยครับ!!!");
                                            $("#pdcate").focus();
                                            e.preventDefault();
                                        }else if($("#pd_number").val()==''){
                                            alert("กรุณาระบุเลขครุภัณฑ์ด้วยครับ!!!");
                                            $("#pd_number").focus();
                                            e.preventDefault();
                                        }else if($("#name").val()==''){
                                            alert("กรุณาระบุชื่อครุภัณฑ์ด้วยครับ");
                                            $("#name").focus();
                                            e.preventDefault();
                                        }else if($("#pd_status").val()==''){
                                            alert("กรุณาเลือกสถานะการใช้งานด้วยครับ");
                                            $("#pd_status").focus();
                                            e.preventDefault();
                                        }else if($("#com_id").val()==''){
                                            alert("กรุณาเลือกผู้ขายด้วยครับ");
                                            $("#com_id").focus();
                                            e.preventDefault();
                                        }else if($("#price").val()==''){
                                            alert("กรุณาระบุราคาซื้อด้วยครับ");
                                            $("#price").focus();
                                            e.preventDefault();
                                        }else if($("#montype_id").val()==''){
                                            alert("กรุณาเลือกชนิดเงินด้วยครับ");
                                            $("#montype_id").focus();
                                            e.preventDefault();
                                        }else if($("#mon_id").val()==''){
                                            alert("กรุณาเลือกวิธีซื้อด้วยครับ");
                                            $("#mon_id").focus();
                                            e.preventDefault();
                                        }else if($("#ct_number").val()==''){
                                            alert("กรุณาระบุเลขที่สัญญาด้วยครับ");
                                            $("#ct_number").focus();
                                            e.preventDefault();
                                        }else{
        				$.ajax({
					   type: "POST",
					   url: "process/prcprods.php",
                                           data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                                           contentType: false, // The content type used when sending data to the server.
                                           cache: false, // To unable request pages to be cached
                                           processData: false,
					   success: function(result) {
						alert(result);
                                                $("#index_content").empty().load('content/list_prods.html');
					   }
					 });e.preventDefault();
                                     }
                }));
                        $(function () {
                $("#file").change(function () {
                    $("#message").empty(); // To remove the previous error message
                    var file = this.files[0];
                    var imagefile = file.type;
                    var match = ["image/jpeg", "image/png", "image/jpg"];
                    if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2])))
                    {
                        $('#previewing').attr('src', 'noimage.png');
                        $("#message").html("<p id='error'>Please Select A valid Image File</p>" + "<h4>Note</h4>" + "<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
                        return false;
                    } else
                    {
                        var reader = new FileReader();
                        reader.onload = imageIsLoaded;
                        reader.readAsDataURL(this.files[0]);
                    }
                });
            });
            function imageIsLoaded(e) {
                $("#file").css("color", "green");
                $('#image_preview').css("display", "block");
                $('#previewing').attr('src', e.target.result);
                $('#previewing').attr('width', '150px');
                //$('#previewing').attr('height', '230px');
            }
                });
            }
        }
