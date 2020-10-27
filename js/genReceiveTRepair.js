function receiveTModal () {
$("#createModal2").empty().append("<div class='modal' id='receiveTModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='receiveTModalLabel'>รับใบแจ้งซ่อม</h4></div><div class='modal-body' id='modelrepair'><div><div class='block'><img id='DGimage' width='180' /></div><div id='repair_detail'></div></div></div>"
                                    +"<div class='modal-footer'><div class='row col-lg-12'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button><button type='button' class='btn btn-success' id='submrepair'>รับใบแจ้งซ่อม</button></div></div></div></div></div>");
    $('#receiveTModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('รับใบแจ้งซ่อม(ช่าง) : รายการที่ ' + recipient)
  
        $.getJSON('JsonData/repairT_Data.php', { data: recipient }, function (data) {
            if(data.dg_img == '' || data.dg_img === null){
                $('#DGimage').empty().attr('src', 'images/icon_set2/image.ico');
            }else{
                $('#DGimage').empty().attr('src', 'DG_imgs/'+data.dg_img);
            }
            $('#repair_detail').empty().append("ผู้แจ้งซ่อม : " + data.inform + "  &nbsp;&nbsp;งาน : " + data.depName + "<br>"
            +"บริเวณ : "+data.place_name+"<br>สถานที่ : "+data.place+"<br>"
                            +"เลขครุภัณฑ์/อาการ/ความต้องการ : "+data.pd_number+"<br>หมายเหตุ : "+data.note+"<br>"
                + "รายละเอียดอาการ : " + data.symptom + "<br>วันที่แจ้ง : " + data.repair_date + "  &nbsp;&nbsp;<b style='color: red;'>" + data.vital + "</b>"
                            +"<div class='row' id='reciveform'></div>");
        $('div#reciveform').append("<form name='frmreceive' id='frmreceive'></form>");
                $('#frmreceive').empty().append($("<div class='form-group col-lg-6'><label for='datepicker1' class='control-label'>วันที่ลงทะเบียน </label><input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required></div>")
                                    ,$("<div class='form-group col-lg-6'><label for='length' class='control-label'>คาดการณ์ระยะเวลาซ่อม</label><select name='length' id='length' class='form-control select2'></select></div>")
                                    ,$("<div class='form-group col-lg-12' id='repairer_sel'></div>")
                                    ,$("<input type='hidden' class='form-control' id='repairT_id' name='repairT_id'>")
                                    ,$("<input type='hidden' class='form-control' id='method' name='method'>"));
                    $('#repairer_sel').empty().append("<label for='repairer' class='control-label'>เลือกผู้ซ่อม</label><select name='repairer' id='repairer' class='form-control select2' required></select>");
                    $("select#length").append($("<option value=''> เลือกระยะเวลา </option>")
                                             ,$("<option value='1' selected> 1 วัน </option>")
                                             ,$("<option value='3'> 3 วัน </option>")
                                             ,$("<option value='7'> 7 วัน </option>")
                                             ,$("<option value='15'> 15 วัน </option>")
                                            , $("<option value='30'> 1 เดือน </option>")
                                            , $("<option value='90'> 3 เดือน </option>")
                                            , $("<option value='180'> 6 เดือน </option>"));
                    $.getJSON('JsonData/dep_tech.php', function (GD) {
                        $("select#repairer").append($("<option value=''> เลือกช่าง</option>"));
                                    for (var key in GD) {
                                        //if(GD[key].pd_id==data.pd_id){var select='selected';}else{var select='';}
                                              $("select#repairer").append($("<option value='"+GD[key].empno+"'> "+GD[key].fullname+"</option>"));
                                    }//$(".select2").select2();
                                });
                                var DP = new DatepickerThai();
                                DP.GetDatepicker('#datepicker1');
                                modal.find('input#repairT_id').val(recipient)
                                modal.find('input#method').val('receive_repairT')
                                
                                $("button#submrepair").click(function(e) {
                                    e.preventDefault();
                                    if ($("#repairer").val() == '') {
                                        alert("กรุณาเลือกช่างด้วยครับ!!!");
                                        $("#repairer").focus();
                                    } else{
                                        modal.modal('hide');
        				$.ajax({
					   type: "POST",
					   url: "process/prcrepair.php",
                                           data: $("#frmreceive").serialize(),
					   success: function(result) {
                                               alert(result);
                                               $.getJSON('JsonData/DT_TRPT.php',function (data) {
                                                if(data.req_repair !=0){
                                                        $("#listRepair2").append($("<small class='label pull-right bg-red'>"+data.req_repair+"</small>"));
                                                    }else{
                                                        $("#listRepair2 small").remove();
                                                    }
                                               if(data.list_repair !=0){
                                                    $("#listResult2").append($("<small class='label pull-right bg-yellow'>"+data.list_repair+"</small>"));
                                                    }
                                                });
                                                $("#index_content").empty().load('content/list_repairT_order.html');
					   }
                        });
                    }
        });
    });
});
}