function recTDevModal (id=null) { 
$("#createModal").empty().append("<div class='modal' id='recTDevModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='recTDevModalLabel'>รับใบแจ้งซ่อม</h4></div><div class='modal-body' id='modelrecDev'><span id='recDev_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button><button type='button' class='btn btn-success' id='submrecDev'>บันทึก</button></div></div></div></div>");
    $('#recTDevModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('บันทึกการซ่อม : ลำดับที่ ' + recipient)
  
   //$.getJSON('JsonData/repair_Data.php',{data: recipient},function (data) {
//        $('#recDev_detail').empty().append("ผู้แจ้งซ่อม : "+data.inform+"  &nbsp;&nbsp;งาน : "+data.depName+"<br>"
//                            +"เลขครุภัณฑ์/อาการ/ความต้องการ : "+data.pd_number+"  &nbsp;&nbsp;หมายเหตุ : "+data.note+"<br>"
//                            +"รายละเอียดอาการ : "+data.symptom+"<br>วันที่แจ้ง : "+data.repair_date+"  &nbsp;&nbsp;<b style='color: red;'>"+data.vital+"</b>");
        $('div#modelrecDev').append("<form name='frmrecDev' id='frmrecDev'></form>");
                $('#frmrecDev').empty().append($("<div class='row'><div class='col-md-12 col-xs-12'><div class='form-group'><label for='datepickerT1' class='control-label'>วันที่ซ่อม </label> <input type='text' name='datepickerT1' id='datepickerT1' class='form-control' readonly required></div></div></div>"
                                    +"<div class='row'><div class='col-md-3 col-xs-12'><div class='form-group'><label for='H-beginT' class='control-label'>เวลาเริ่ม : ชั่วโมง </label><br> <select name='H-beginT' id='H-beginT' class='select2 form-control'></select></div></div>"
                                    +"<div class='col-md-3 col-xs-12'><div class='form-group'><label for='M-beginT' class='control-label'>นาที </label><br> <select name='M-beginT' id='M-beginT' class='form-control select2'></select></div></div></div>"
                                    +"<div class='row'><div class='col-md-3 col-xs-12'><div class='form-group'><label for='H-endT' class='control-label'>เวลาสิ้นสุด : ชั่วโมง </label><br> <select name='H-endT' id='H-endT' class='select2 form-control'></select></div></div>"
                                    +"<div class='col-md-3 col-xs-12'><div class='form-group'><label for='M-endT' class='control-label'>นาที </label><br> <select name='M-endT' id='M-endT' class='select2 form-control'></select></div></div></div>")
                                    ,$("<div class='form-group' id='re_detail'><label for='dev_detail' class='control-label'>รายละเอียดการซ่อม</label><textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='อธิบายรายละเอียดการพัฒนา' name='dev_detail' id='dev_detail' required></textarea></div>")
                                    //,$("<input type='hidden' class='form-control' id='module_id' name='module_id'>")
                                    ,$("<input type='hidden' class='form-control' id='method' name='method'>"));
                                    MakeHour("#H-beginT");    
                                    MakeHour("#H-endT");
                                    MakeMinute("#M-beginT");
                                    MakeMinute("#M-endT");
                                    if(id != null){
                                        $('#frmrecDev').append("<input type='hidden' class='form-control' id='repairT_id' name='repairT_id' value='"+id+"'>");
                                    }
                                $(".select2").select2();
                                var DP = new DatepickerThai();
                                DP.GetDatepicker('#datepickerT1');
                                
                                //modal.find('input#module_id').val(recipient)
                                modal.find('input#method').val('add_hisreT')
                                
                                $("button#submrecDev").click(function(e) {
                                    if($("#dev_detail").val()==''){
                                            alert("กรุณาระบุรายละเอียดการพัฒนาด้วยครับ!!!");
                                            $("#dev_detail").focus();
                                        }else{
                                        e.preventDefault();
                                        modal.modal('hide');
        				$.ajax({
					   type: "POST",
					   url: "process/prcdev.php",
                                           data: $("#frmrecDev").serialize(),
					   success: function(result) {
                                               alert(result);
                                               //$("#index_content").empty().load('content/list_repair_order.html');
					   }
					 });
                                     }
        });
    //});
});
}
