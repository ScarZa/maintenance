var photoPDModal = function(content,id){
    this.divModal = content;
    this.id = id;
    this.GetPDetial = function () {
        $(this.divModal).empty().append("<div class='row'>"
            + "<h4 id='photoPDLabel'>รับใบแจ้งซ่อม</h4><div class='row'><div class='modal-body' id='modelphotoPD'><div class='block'><img id='PDimage' width='90' /></div><span id='photoPD_detail'></span></div></div></div>"
        );
    

        $.getJSON('JsonData/detail_prod.php', { data: this.id }, function (data) {
            if (data.photo_pd == '' || data.photo_pd === null) {
                $('#PDimage').empty().attr('src', 'images/icon_set2/image.ico');
            } else {
                $('#PDimage').empty().attr('src', 'PD_imgs/' + data.photo_pd);
            }
            $('#photoPDLabel').text('ครุภัณฑ์ : เลขที่ ' + data.pd_number)
            $('#photoPD_detail').empty().append("<b>ข้อมูลครุภัณฑ์</b><br>"
                + "เลขครุภัณฑ์ : " + data.pd_number + "<br>หมวด : " + data.group_name + "  <br>ประเภท : " + data.category_name + "<br>"
                + "ชื่อ : " + data.name + "  <br>ยี่ห้อ : " + data.brand + "<br>หมายเลข : " + data.serial + "  &nbsp;&nbsp;สถานะ : " + data.pd_status + "<hr>"
                + "<b>ข้อมูลการซื้อ</b><br>"
                + "ผู้ขาย : " + data.comp_name + "  &nbsp;&nbsp;ราคา : " + data.price + " บาท<br>"
                + "ชนิดเงิน : " + data.money + "  &nbsp;&nbsp;วิธีซื้อ : " + data.mon_name + "  &nbsp;&nbsp;ปีที่ซื้อ : " + data.yearbuy + "<hr>"
                + "<b>ข้อมูลการรับประกัน</b><br>"
                + "เลขที่สัญญา : " + data.ct_number + "  &nbsp;&nbsp;วันที่ลงทะเบียน : " + data.regis_date + "<br>วันที่เริ่มประกัน : " + data.date_stinsur + "  &nbsp;&nbsp;จำนวนเดือนรับประกัน : " + data.nbmoth_insur + "<hr>"
                + "<b>ข้อมูลสถานที่</b><br>"
                + "งาน : " + data.depName + "  &nbsp;&nbsp;วันที่ติดตั้ง : " + data.lnstalldate + "  <br>วันที่เคลื่อนย้าย : " + data.movingdate + "<br>"
                + "ผู้รับผิดชอบ : " + data.rp_person + "  &nbsp;&nbsp;หมายเหตุ : " + data.note + "<hr>");
            $('div#modelphotoPD').append("<form name='uploadimage' id='uploadimage' method='post' enctype='multipart/form-data'><div id='add-pics'></div></form>");
            $('#add-pics').empty().append($("<div class='main'><b>เพิ่มรูปครุภัณฑ์</b>")
                , $("<div id='image_preview'><img id='previewing' src='images/icon_set2/image.ico' width='50' /></div>")
                , $("<div id='selectImage'><label>เลือกรูปครุภัณฑ์</label><br/>")
                , $("<input type='file' name='file' id='file' class='form-control' required /></div></div><h4 id='loading' >loading..</h4><div id='message'></div>")
                , $("<input type='hidden' class='form-control' id='pd_id' name='pd_id'>")
                , $("<input type='hidden' class='form-control' id='method' name='method'>")
                , $("<br><input type='submit' value='เพิ่มรูป' class='btn btn-success' />"));

            
            $('#loading').hide();
            $("#uploadimage").on('submit', (function (e) {
                e.preventDefault();
                $("#message").empty();
                $('#loading').show();
                $.ajax({
                    url: "process/prcupimg.php", // Url to which the request is send
                    type: "POST", // Type of request to be send, called as method
                    data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
                    contentType: false, // The content type used when sending data to the server.
                    cache: false, // To unable request pages to be cached
                    processData: false, // To send DOMDocument or non processed data file it is set to false
                    success: function (data)   // A function to be called if request succeeds
                    {
                        $('#loading').hide();
                        //$("#message").html(data);
                        alert(data);
                        e.preventDefault();
                        modal.modal('hide');
                    }
                });
            }));

            // Function to preview image after validation
            $(function () {
                $("#file").change(function () {
                    $("#message").empty(); // To remove the previous error message
                    var file = this.files[0];
                    var imagefile = file.type;
                    var match = ["image/jpeg", "image/png", "image/jpg", "image/JPEG", "image/PNG", "image/JPG"];
                    if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2] || imagefile == match[3]) || (imagefile == match[4]) || (imagefile == match[5]))) {
                        $('#previewing').attr('src', 'noimage.png');
                        $("#message").html("<p id='error'>Please Select A valid Image File</p>" + "<h4>Note</h4>" + "<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
                        return false;
                    } else {
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
            ;

        });
    }
}