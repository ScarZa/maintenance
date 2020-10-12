function AddRepairT(content, id = null) {
    $.getJSON('JsonData/head_repair.php', function (data) {
        $(content).empty().append("<h2 style='color: blue'>แจ้งขอรับบริการงานช่าง</h2>" +
            "<ol class='breadcrumb'>" +
            "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>" +
            "<li class='active'><i class='fa fa-envelope'></i> แจ้งขอรับบริการงานช่าง</li>" +
            "</ol><form action='' name='frmaddrepair' id='frmaddrepair' method='post' enctype='multipart/form-data'>" +
            "<div class='row'>" +
            "<div class='col-md-12'>" +
            "<div class='box box-primary box-solid'>" +
            "<div class='box-header with-border'>" +
            "<h4 class='box-title'> แจ้งขอรับบริการช่าง </h4></div>" +
            "<div class='box-body'><div class='col-md-12' id='add_repair'>" +
            "<div class='box box-primary box-solid'><div class='box-header with-border'>" +
            "<h4 class='box-title'> รายละเอียด </h4></div><div class='box-body'><div id='Dr_content'></div></div></div></div>" +
            "</div></div></div></form>");

        var idrepair = id;
        var fullname = data.fullname;
        var posi = data.posi;
        var dep = data.dep;
        if (idrepair == null) {
            $("h2").prepend("<img src='images/icon_set2/computer.ico' width='40'> ");
            $("h2").append(" : ซ่อมงานช่าง");
            $("#Dr_content").append($("<div class='form-group' id='inform'></div>")
                , $("<div class='form-group'>งาน : <select name='depid' class='form-control select2' id='depid' required></select></div>")
                , $("<div class='form-group'>เครื่องที่เสีย : <select name='pd_id' class='form-control select2' id='pd_id' required></select></div>")
                , $("<div class='form-group'>อาการเสีย : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุอาการเสีย' name='symptom' id='symptom' required></textarea></div>")
                , $("<div class='form-group'><input type='radio' value='1' name='vital' id='vital' required> : เร่งด่วน  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' value='0' name='vital' id='vital' checked required> : ไม่เร่งด่วน</div>")
                , $("<div class='main'><b>เพิ่มรูปอาการเสีย</b>")
                , $("<div id='image_preview'><img id='previewing' src='images/icon_set2/image.ico' width='50' /></div>")
                , $("<div id='selectImage'><label>เลือกรูปอาการเสีย</label><br/>")
                , $("<input type='file' name='file' id='file' class='form-control' required /></div></div><h4 id='loading' >loading..</h4><div id='message'></div>"));

            if (data.status == 'ADMIN' && data.m_process == 0) {
                $("#inform").append("ผู้แจ้ง : <select name='informer' class='form-control select2' id='informer' required></select>");
                $("select#informer").append($("<option value=''> เลือกผู้แจ้ง </option>"));
                $.getJSON('JsonData/emp_Data.php', function (GD) {
                    for (var key in GD) {
                        $("select#informer").append($("<option value='" + GD[key].empno + "'> " + GD[key].fullname + "</option>"));
                    } $(".select2").select2();
                });
            } else {
                $("#inform").append("ชื่อ : <b>" + fullname + "</b>&nbsp;&nbsp; ตำแหน่ง : <b>" + posi + "</b>&nbsp;&nbsp; งาน : <b>" + dep + "</b><p>");
            }
            $.getJSON('JsonData/Dep_Data.php', function (GD) {
                var option = "$('<option value=''> เลือกงาน </option>')";
                for (var key in GD) {
                    if (GD[key].depId == data.depId) { var select = 'selected'; } else { var select = ''; }
                    option += "$('<option value='" + GD[key].depId + "' " + select + "> " + GD[key].depName + " </option>'),";
                }
                $("select#depid").empty().append(option);
                $(".select2").select2();
            });
            $.getJSON('JsonData/dep_prodsT.php', { data: data.depId }, function (GD) {
                var option = "$('<option value=''> เลือกครุภัณฑ์ </option>')";
                for (var key in GD) {
                    //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                    option += "$('<option value='" + GD[key].pd_id + "'> " + GD[key].pd_number + " : " + GD[key].name + " (" + GD[key].note + ") </option>'),";
                }
                $("select#pd_id").empty().append(option);
                $(".select2").select2();
            });
            $("select#depid").change(function () {
                $.getJSON('JsonData/dep_prodsT.php', { data: $("#depid").val() }, function (GD) {
                    var option = "$('<option value=''> เลือกครุภัณฑ์ </option>')";
                    for (var key in GD) {
                        //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                        option += "$('<option value='" + GD[key].pd_id + "'> " + GD[key].pd_number + " : " + GD[key].name + " (" + GD[key].note + ") </option>'),";
                    }
                    $("select#pd_id").empty().append(option);
                    $(".select2").select2();
                });
            });


            $("div#add_repair").append("<input type='hidden' id='method' name='method' value='add_repairT'>");
            if (data.status == 'USER') {
                $("div#add_repair").append("<input type='hidden' id='informer' name='informer' value='" + data.empno + "'>");
            }
            $("div#add_repair").append("<input type='submit' class='btn btn-primary' id='ARsubmit' value='บันทึกใบแจ้งซ่อม' />");
            $('#loading').hide();
            $("input#ARsubmit").on('submit', (function (e) {
                if ($("select#informer").val() == '') {
                    alert("กรุณาเลือกผู้แจ้งด้วยครับ!!!");
                    $("select#informer").focus();
                } else if ($("#pd_id").val() == '') {
                    alert("กรุณาเลือกครุภัณฑ์ด้วยครับ!!!");
                    $("#pd_id").focus();
                } else if ($("#symptom").val() == '') {
                    alert("กรุณาระบุรายละเอียดด้วยครับ!!!");
                    $("#symptom").focus();
                } else {
                    $("#message").empty();
                    $('#loading').show();
                    $.ajax({
                        type: "POST",
                        url: "process/prcrepair.php",
                        data: new FormData(this),
                        contentType: false,
                        cache: false, 
                        processData: false,
                        success: function (result) {
                            alert(result);
                            $.getJSON('JsonData/DT_TRP.php', function (data) {
                                if (data.req_repair != 0) {
                                    $("#listRepair").append($("<small class='label pull-right bg-red'>" + data.req_repair + "</small>"));
                                }
                                AddRepairT('#index_content')
                            });
                        }
                    });
                }
                e.preventDefault();
            }));
        } else if (idrepair == 'NoPd') {
            $("h2").prepend("<img src='images/icon_set2/computer.ico' width='40'> ");
            $("h2").append(" : ซ่อมงานช่างที่ไม่ใช่ครุภัณฑ์");
            $("#Dr_content").append($("<div class='form-group' id='inform'></div>")
                , $("<div class='form-group'>งาน : <select name='depid' class='form-control select2' id='depid' required></select></div>")
                , $("<div class='form-group'>อาการเสีย : <select name='no_pdid' class='form-control select2' id='no_pdid' required></select></div>")
                , $("<div class='form-group'>อธิบายอาการเสีย : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุอาการเสีย' name='symptom' id='symptom' required></textarea></div>")
                , $("<div class='form-group'><input type='radio' value='1' name='vital' id='vital' required> : เร่งด่วน  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' value='0' name='vital' id='vital' checked required> : ไม่เร่งด่วน</div>")
                , $("<div id='image_preview'><img id='previewing' src='images/icon_set2/image.ico' width='50' /></div>")
                , $("<div id='selectImage'><label>เลือกรูปอาการเสีย</label><br/>")
                , $("<input type='file' name='file' id='file' class='form-control' required /></div></div><h4 id='loading' >loading..</h4><div id='message'></div>"));

            if (data.status == 'ADMIN' && data.m_process == 0) {
                $("#inform").append("ผู้แจ้ง : <select name='informer' class='form-control select2' id='informer' required></select>");
                $("select#informer").append($("<option value=''> เลือกผู้แจ้ง </option>"));
                $.getJSON('JsonData/emp_Data.php', function (GD) {
                    for (var key in GD) {
                        $("select#informer").append($("<option value='" + GD[key].empno + "'> " + GD[key].fullname + "</option>"));
                    } $(".select2").select2();
                });
            } else {
                $("#inform").append("ชื่อ : <b>" + fullname + "</b>&nbsp;&nbsp; ตำแหน่ง : <b>" + posi + "</b>&nbsp;&nbsp; งาน : <b>" + dep + "</b><p>");
            }
            $.getJSON('JsonData/Dep_Data.php', function (GD) {
                var option = "$('<option value=''> เลือกงาน </option>')";
                for (var key in GD) {
                    if (GD[key].depId == data.depId) { var select = 'selected'; } else { var select = ''; }
                    option += "$('<option value='" + GD[key].depId + "' " + select + "> " + GD[key].depName + " </option>'),";
                }
                $("select#depid").empty().append(option);
                $(".select2").select2();
            });
            $.getJSON('JsonData/No_pd.php', { data: 3 }, function (GD) {
                var option = "$('<option value=''> เลือกอาการเสีย </option>')";
                for (var key in GD) {
                    //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                    option += "$('<option value='" + GD[key].no_pdid + "'> " + GD[key].no_pdname + " </option>'),";
                }
                $("select#no_pdid").empty().append(option);
                $(".select2").select2();
            });


            $("div#add_repair").append("<input type='hidden' id='method' name='method' value='add_repairT'>");
            if (data.status == 'USER') {
                $("div#add_repair").append("<input type='hidden' id='informer' name='informer' value='" + data.empno + "'>");
            }
            $("div#add_repair").append("<button type='submit' class='btn btn-primary' id='ARsubmit'>บันทึกใบแจ้งซ่อม</button>");
            $("button#ARsubmit").click(function (e) {
                if ($("#no_pdid").val() == '') {
                    alert("กรุณาเลือกอาการเสียด้วยครับ!!!");
                    $("#no_pdid").focus();
                } else if ($("#symptom").val() == '') {
                    alert("กรุณาระบุรายละเอียดด้วยครับ!!!");
                    $("#symptom").focus();
                } else {
                    $.ajax({
                        type: "POST",
                        url: "process/prcrepair.php",
                        data: $("#frmaddrepair").serialize(),
                        success: function (result) {
                            $('#loading').hide();
                            alert(result);
                            $.getJSON('JsonData/DT_TRP.php', function (data) {
                                if (data.req_repair != 0) {
                                    $("#listRepair").append($("<small class='label pull-right bg-red'>" + data.req_repair + "</small>"));
                                }
                                AddRepairT('#index_content', 'NoPd');
                            });
                        }
                    });
                }
                e.preventDefault();
            });
        } else if (idrepair.data == 'ReqRp') {
            $("h2").prepend("<img src='images/icon_set2/clipboard.ico' width='40'> ");
            $("h2").append(" : ขอข้อมูล/รายงาน/พัฒนาโปรแกรม");
            $("#Dr_content").append($("<div class='form-group' id='inform'></div>")
                , $("<div class='form-group'>งาน : <select name='depid' class='form-control select2' id='depid' required></select></div>")
                , $("<div class='form-group'>สิ่งที่ต้องการ : <select name='request_data' class='form-control select2' id='request_data' required></select></div>")
                , $("<div class='form-group'>อธิบายความต้องการ : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุความต้องการ' name='symptom' id='symptom' required></textarea></div>")
                , $("<div class='form-group'><input type='radio' value='1' name='vital' id='vital' required> : เร่งด่วน  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' value='0' name='vital' id='vital' checked required> : ไม่เร่งด่วน</div>"));

            if (data.status == 'ADMIN' && data.m_process == 0) {
                $("#inform").append("ผู้แจ้ง : <select name='informer' class='form-control select2' id='informer' required></select>");
                $("select#informer").append($("<option value=''> เลือกผู้แจ้ง </option>"));
                $.getJSON('JsonData/emp_Data.php', function (GD) {
                    for (var key in GD) {
                        $("select#informer").append($("<option value='" + GD[key].empno + "'> " + GD[key].fullname + "</option>"));
                    } $(".select2").select2();
                });
            } else {
                $("#inform").append("ชื่อ : <b>" + fullname + "</b>&nbsp;&nbsp; ตำแหน่ง : <b>" + posi + "</b>&nbsp;&nbsp; งาน : <b>" + dep + "</b><p>");
            }
            $.getJSON('JsonData/Dep_Data.php', function (GD) {
                var option = "$('<option value=''> เลือกงาน </option>')";
                for (var key in GD) {
                    if (GD[key].depId == data.depId) { var select = 'selected'; } else { var select = ''; }
                    option += "$('<option value='" + GD[key].depId + "' " + select + "> " + GD[key].depName + " </option>'),";
                }
                $("select#depid").empty().append(option);
                $(".select2").select2();
            });
            $.getJSON('JsonData/No_pd.php', { data: 2 }, function (GD) {
                var option = "$('<option value=''> เลือกสิ่งที่ต้องการ </option>')";
                for (var key in GD) {
                    //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                    option += "$('<option value='" + GD[key].no_pdid + "'> " + GD[key].no_pdname + " </option>'),";
                }
                $("select#request_data").empty().append(option);
                $(".select2").select2();
            });

            $("div#add_repair").append("<input type='hidden' id='method' name='method' value='add_repair'>");
            if (data.status == 'USER') {
                $("div#add_repair").append("<input type='hidden' id='informer' name='informer' value='" + data.empno + "'>");
            }
            $("div#add_repair").append("<button type='submit' class='btn btn-primary' id='ARsubmit'>บันทึกใบแจ้งซ่อม</button>");
            $("button#ARsubmit").click(function (e) {
                if ($("#request_data").val() == '') {
                    alert("กรุณาเลือกสิ่งที่ต้องการด้วยครับ!!!");
                    $("#request_data").focus();
                } else if ($("#symptom").val() == '') {
                    alert("กรุณาระบุรายละเอียดด้วยครับ!!!");
                    $("#symptom").focus();
                } else {
                    $.ajax({
                        type: "POST",
                        url: "process/prcrepair.php",
                        data: $("#frmaddrepair").serialize(),
                        success: function (result) {
                            $('#loading').hide();
                            alert(result);
                            $.getJSON('JsonData/DT_TRP.php', function (data) {
                                if (data.req_repair != 0) {
                                    $("#listRepair").append($("<small class='label pull-right bg-red'>" + data.req_repair + "</small>"));
                                }
                                loadAjax('#index_content', 'JsonData/tempSendData.php', 'ReqRp', 'AddRepair');
                            });
                        }
                    });
                }
                e.preventDefault();
            });
        } else { 
            $.getJSON('JsonData/detail_repairT.php', { data: idrepair.data }, function (data) {
                $("#Dr_content").append($("<div class='form-group' id='inform'></div>")
                    , $("<div class='form-group'>วันที่แจ้งซ่อม : <input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required>")
                    , $("<div class='form-group' id='selpd'></div>")
                    , $("<div class='form-group'>อาการเสีย : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุอาการเสีย' name='symptom' id='symptom' required></textarea></div>")
                    , $("<div class='form-group'><input type='radio' value='1' name='vital' id='vital1' required> : เร่งด่วน  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' value='0' name='vital' id='vital0' required> : ไม่เร่งด่วน</div>"));
                $("#inform").append("ชื่อผู้แจ้ง : <b>" + data.fullname + "</b><p>");

                if (data.pd_id != 0) {
                    $("div#selpd").append("เครื่องที่เสีย : <select name='pd_id' class='form-control select2' id='pd_id' required></select>");
                    $("select#pd_id").append($("<option value=''> เลือกครุภัณฑ์ </option>"));
                    $.getJSON('JsonData/dep_prodsT.php', { data: data.depid }, function (GD) {
                        for (var key in GD) {
                            if (GD[key].pd_id == data.pd_id) { var select = 'selected'; } else { var select = ''; }
                            $("select#pd_id").append($("<option value='" + GD[key].pd_id + "' " + select + "> " + GD[key].pd_number + " : " + GD[key].name + " (" + GD[key].note + ") </option>"));
                        } $(".select2").select2();
                    });
                } else if (data.no_pdid != 0) {
                    $("div#selpd").append("อาการเสีย : <select name='no_pdid' class='form-control select2' id='no_pdid' required></select>");
                    $.getJSON('JsonData/No_pd.php', { data: 3 }, function (GD) {
                        var option = "$('<option value=''> เลือกอาการเสีย </option>')";
                        for (var key in GD) {
                            if (GD[key].no_pdid == data.no_pdid) { var select = 'selected'; } else { var select = ''; }
                            option += "$('<option value='" + GD[key].no_pdid + "' " + select + "> " + GD[key].no_pdname + " </option>'),";
                        }
                        $("select#no_pdid").empty().append(option);
                        $(".select2").select2();
                    });
                } else if (data.request_data != 0) {
                    $("div#selpd").append("ความต้องการ : <select name='request_data' class='form-control select2' id='request_data' required></select>");
                    $.getJSON('JsonData/No_pd.php', { data: 2 }, function (GD) {
                        var option = "$('<option value=''> เลือกสิ่งที่ต้องการ </option>')";
                        for (var key in GD) {
                            if (GD[key].no_pdid == data.request_data) { var select = 'selected'; } else { var select = ''; }
                            option += "$('<option value='" + GD[key].no_pdid + "' " + select + "> " + GD[key].no_pdname + " </option>'),";
                        }
                        $("select#request_data").empty().append(option);
                        $(".select2").select2();
                    });
                }

                var repair_date = data.repair_date;
                var rep_date = repair_date.split(' ');
                var DP = new DatepickerThai();
                DP.GetDatepicker('#datepicker1');
                $("#datepicker1").datepicker("setDate", new Date(rep_date[0]));
                $("#symptom").val(data.symptom);
                if (data.vital == 0) {
                    $("#vital0").attr('checked', 'checked');
                } else if (data.vital == 1) {
                    $("#vital1").attr('checked', 'checked');
                }
                $("div#add_repair").append($("<input type='hidden' id='method' name='method' value='edit_repairT'>")
                    , $("<input type='hidden' id='repairT_id' name='repairT_id' value='" + data.repairT_id + "'>"));
                $("div#add_repair").append("<button type='submit' class='btn btn-warning' id='ARsubmit'>แก้ไขใบแจ้งซ่อม</button>");
                $("button#ARsubmit").click(function (e) {
                    e.preventDefault();
                    $.ajax({
                        type: "POST",
                        url: "process/prcrepair.php",
                        data: $("#frmaddrepair").serialize(),
                        success: function (result) {
                            alert(result);
                            $("#index_content").empty().load('content/list_repairT_order.html');
                        }
                    });
                });

            });
        }
        $(function () {
            $("#file").change(function () {
                $("#message").empty(); // To remove the previous error message
                var file = this.files[0];
                var imagefile = file.type;
                var match = ["image/jpeg", "image/png", "image/jpg","image/JPEG", "image/PNG", "image/JPG"];
                if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2] || imagefile == match[3]) || (imagefile == match[4]) || (imagefile == match[5])))
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
            $('#previewing').attr('width', '250px');
            //$('#previewing').attr('height', '230px');
        }
        
    });
    
}
