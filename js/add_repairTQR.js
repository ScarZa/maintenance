function AddRepairTQR(content, id = null) {
    $.getJSON('JsonData/head_repair.php', function (data) {
        $(content).empty().append("<h2 style='color: blue'>แจ้งขอรับบริการงานช่าง</h2>" +
            "<ol class='breadcrumb'>" +
            "<li><a href='#' id='homeQR'><i class='fa fa-home'></i> หน้าหลัก</a></li>" +
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

      $("#homeQR").click(function () {
        DetialQR(content, id);
      })
      
        var idrepair = id;
        var fullname = data.fullname;
        var posi = data.posi;
        var dep = data.dep;
      if (idrepair != null) {
          $("h2").prepend("<img src='images/icon_set2/computer.ico' width='40'> ");
            $("h2").append(" : ซ่อมงานช่าง");
            $("#Dr_content").append($("<div class='form-group' id='inform'></div>")
                , $("<div class='form-group'>งาน (ที่อุปกรณ์ติดตั้งอยู่) : <select name='depid' class='form-control' id='depid' required></select></div>")
                , $("<div class='form-group'>เครื่องที่เสีย : <select name='pd_id' class='form-control' id='pd_id' required></select></div>")
                , $("<div class='form-group'>บริเวณ : <select name='place_id' class='form-control select2' id='place_id' required></select></div>")
                , $("<div class='form-group'>สถานที่ : <input type='text' id='place' name='place' class='form-control' placeholder='ระบุสถานที่'></div>")
                , $("<div class='form-group'>อาการเสีย : <textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='ระบุอาการเสีย' name='symptom' id='symptom' required></textarea></div>")
                , $("<div class='form-group'><input type='radio' value='1' name='vital' id='vital' required> : เร่งด่วน  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' value='0' name='vital' id='vital' checked required> : ไม่เร่งด่วน</div>")
                , $("<div class='main'><b>เพิ่มรูปอาการเสีย</b>")
                , $("<div id='image_preview'><img id='previewing' src='images/icon_set2/image.ico' width='50' /></div>")
                , $("<div id='selectImage'><label>เลือกรูปอาการเสีย</label><br/>")
                , $("<input type='file' name='file' id='file' class='form-control' /></div></div><h4 id='loading' >loading.. <i class='fa fa-spinner fa-pulse fa-3x fa-fw'></i></h4><div id='message'></div>"));

            if ((data.status == 'ADMIN' && data.m_process == 0) || data.status == 'TUSER') {
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
        $.getJSON('JsonData/dep_prodsT.php', { data: QR[0].depId }, function (GD) {
            for (var key in GD) {
                if (GD[key].pd_id == idrepair) { var select = 'selected'; } else { var select = ''; }
                $("select#pd_id").append($("<option value='" + GD[key].pd_id + "' " + select + "> " + GD[key].pd_number + " : " + GD[key].name + " (" + GD[key].note + ") </option>"));
            }
            //$(".select2").select2();
        });
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
            selectList("#place_id", "placeData.php", "เลือกบริเวณสถานที่");

            $("div#add_repair").append("<input type='hidden' id='method' name='method' value='add_repairT'>");
            if (data.status == 'USER') {
                $("div#add_repair").append("<input type='hidden' id='informer' name='informer' value='" + data.empno + "'>");
            }
            $("div#add_repair").append("<input type='submit' class='btn btn-primary' id='ARsubmit' value='บันทึกใบแจ้งซ่อม' />");
            $('#loading').hide();
            $("#frmaddrepair").on('submit', (function (e) {
                e.preventDefault();
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
                    if ($("#file").val() == '') {
                    var dataForm = new FormData(this);
                    // console.log(dataForm)
                    // for (var value of dataForm.values()) {
                    //     console.log(value);
                    // }
                    var settings = {
                        type: "POST",
                        url: "process/prcrepair.php",
                        async: true,
                        crossDomain: true,
                        data: dataForm,
                        contentType: false,
                        cache: false,
                        processData: false
                    }
                    $.ajax(settings).done(function (result) {
                            $('#loading').hide();
                            alert(result);
                            $.getJSON('JsonData/DT_TRP.php', function (data) {
                                if (data.req_repair != 0) {
                                    $("#listRepair").append($("<small class='label pull-right bg-red'>" + data.req_repair + "</small>"));
                                }
                                KillMe(); self.focus(); window.opener.location.reload();
                            });
                            
                    });
                    } else {
                        console.log('1234');
                ResizeImage(this);
            }
                }
               
            }));

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
                    $("#frmaddrepair").append($("<input type='hidden' name='hidden_data' id='hidden_data' />"));
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
        
        function ResizeImage(dis,chk) {
            var filesToUpload = document.getElementById('file').files;
            var file = filesToUpload[0];
              
            // Create an image
            var img = document.createElement("img");
            // Create a file reader
            var reader2 = new FileReader();
            // Set the image once loaded into file reader
            reader2.onload = function(e) {
            //img.src = e.target.result;
              
            var img = new Image();
              
            img.src = this.result;
          
            setTimeout(function(){
                var canvas = document.createElement("canvas");
                  
                var MAX_WIDTH = 600;
                var MAX_HEIGHT = 600;
                var width = img.width;
                var height = img.height;
                  
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                    canvas.width = width;
                    canvas.height = height;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, width, height);
                    var dataurl = canvas.toDataURL("image/jpeg");
                    //document.getElementById('output').src = dataurl;
                     
                    $("#hidden_data").val(dataurl);
                     
                    //console.log(canvas);
                    $.ajax({
                        type: "POST",
                        url: "process/prcrepair.php",
                        async: true,
                        crossDomain: true,
                        data: new FormData(dis), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                        contentType: false, // The content type used when sending data to the server.
                        cache: false, // To unable request pages to be cached
                        processData: false,
                                                 //,data0:'add_prods'},
                        success: function(result) {
                         alert(result);
                         $.getJSON('JsonData/DT_TRP.php', function (data) {
                            if (data.req_repair != 0) {
                                $("#listRepair").append($("<small class='label pull-right bg-red'>" + data.req_repair + "</small>"));
                            }
                            AddRepairT('#index_content', chk);
                        });
                        },
                        error: function() 
                        {
                        } 
                     })
                
                
                },200);
                }
                // Load files into file reader
                console.log(file);
                 
                reader2.readAsDataURL(file);
            }
    });
    
}
