function AddRepairQR(content, id = null) {
    $.getJSON('JsonData/head_repair.php', function (data) {
        $(content).empty().append("<h2 style='color: blue'>แจ้งขอรับบริการงานคอมพิวเตอร์</h2>" +
            "<ol class='breadcrumb'>" +
            "<li><a href='readQRCode.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>" +
            "<li class='active'><i class='fa fa-envelope'></i> แจ้งขอรับบริการงานคอมพิวเตอร์</li>" +
            "</ol><form action='' name='frmaddrepair' id='frmaddrepair' method='post'>" +
            "<div class='row'>" +
            "<div class='col-md-12'>" +
            "<div class='box box-primary box-solid'>" +
            "<div class='box-header with-border'>" +
            "<h4 class='box-title'> แจ้งขอรับบริการคอมพิวเตอร์ </h4></div>" +
            "<div class='box-body'><div class='col-md-12' id='add_repair'>" +
            "<div class='box box-primary box-solid'><div class='box-header with-border'>" +
            "<h4 class='box-title'> รายละเอียด </h4></div><div class='box-body'><div id='Dr_content'></div></div></div></div>" +
            "</div></div></div></form>");

        var idrepair = id;
        var fullname = data.fullname;
        var posi = data.posi;
        var dep = data.dep;

        $("h2").prepend("<img src='images/icon_set2/computer.ico' width='40'> ");
        $("h2").append(" : ซ่อมงานคอมพิวเตอร์");
        $("#Dr_content").append($("<div class='form-group' id='inform'></div>")
            , $("<div class='form-group'>งาน : <select name='depid' class='form-control select2' id='depid' required></select></div>")
            , $("<div class='form-group'>เครื่องที่เสีย : <select name='pd_id' class='form-control select2' id='pd_id' required></select></div>")
            , $("<div class='form-group'>อาการเสีย : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุอาการเสีย' name='symptom' id='symptom' required></textarea></div>")
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
        console.log(idrepair)
        $.getJSON('JsonData/Dep_DataQR.php', { data: idrepair }, function (QR) {
            console.log(QR)
            $.getJSON('JsonData/Dep_Data.php', function (GD) {
                var option = "$('<option value=''> เลือกงาน </option>')";
                for (var key in GD) {
                    if (GD[key].depId == QR[0].depId) { var select = 'selected'; } else { var select = ''; }
                    option += "$('<option value='" + GD[key].depId + "' " + select + "> " + GD[key].depName + " </option>'),";
                }
                $("select#depid").empty().append(option);
                //$(".select2").select2();
            });
            $.getJSON('JsonData/dep_prods.php', { data: QR[0].depId }, function (GD) {
                for (var key in GD) {
                    if (GD[key].pd_id == idrepair) { var select = 'selected'; } else { var select = ''; }
                    $("select#pd_id").append($("<option value='" + GD[key].pd_id + "' " + select + "> " + GD[key].pd_number + " : " + GD[key].name + " (" + GD[key].note + ") </option>"));
                }
                //$(".select2").select2();
            });
        });
        $("select#depid").change(function () {
            $.getJSON('JsonData/dep_prods.php', { data: $("#depid").val() }, function (GD) {
                var option = "$('<option value=''> เลือกครุภัณฑ์ </option>')";
                for (var key in GD) {
                    //if(LR[key].group_id==data.detail.group_id){var select='selected';}else{var select='';}
                    option += "$('<option value='" + GD[key].pd_id + "'> " + GD[key].pd_number + " : " + GD[key].name + " (" + GD[key].note + ") </option>'),";
                }
                $("select#pd_id").empty().append(option);
                $(".select2").select2();
            });
        });


        $("div#add_repair").append("<input type='hidden' id='method' name='method' value='add_repair'>");
        if (data.status == 'USER') {
            $("div#add_repair").append("<input type='hidden' id='informer' name='informer' value='" + data.empno + "'>");
        }
        $("div#add_repair").append("<button type='submit' class='btn btn-primary' id='ARsubmit'>บันทึกใบแจ้งซ่อม</button>");
        $("button#ARsubmit").click(function (e) {

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
                $.ajax({
                    type: "POST",
                    url: "process/prcrepair.php",
                    data: $("#frmaddrepair").serialize(),
                    success: function (result) {
                        alert(result);
                        $.getJSON('JsonData/DT_TRP.php', function (data) {
                            if (data.req_repair != 0) {
                                $("#listRepair").append($("<small class='label pull-right bg-red'>" + data.req_repair + "</small>"));
                            }
                            KillMe(); self.focus(); window.opener.location.reload();
                        });
                    }
                });
            }
            e.preventDefault();
        });
    });
}
