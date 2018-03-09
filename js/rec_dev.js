function recDevModal (id=null) { 
$("#createModal").empty().append("<div class='modal' id='recDevModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='recDevModalLabel'>รับใบแจ้งซ่อม</h4></div><div class='modal-body' id='modelrecDev'><span id='recDev_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button><button type='button' class='btn btn-success' id='submrecDev'>บันทึก</button></div></div></div></div>");
    $('#recDevModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('บันทึกการพัฒนา : Module ลำดับที่ ' + recipient)
  
   //$.getJSON('JsonData/repair_Data.php',{data: recipient},function (data) {
//        $('#recDev_detail').empty().append("ผู้แจ้งซ่อม : "+data.inform+"  &nbsp;&nbsp;งาน : "+data.depName+"<br>"
//                            +"เลขครุภัณฑ์/อาการ/ความต้องการ : "+data.pd_number+"  &nbsp;&nbsp;หมายเหตุ : "+data.note+"<br>"
//                            +"รายละเอียดอาการ : "+data.symptom+"<br>วันที่แจ้ง : "+data.repair_date+"  &nbsp;&nbsp;<b style='color: red;'>"+data.vital+"</b>");
        $('div#modelrecDev').append("<form name='frmrecDev' id='frmrecDev'></form>");
                $('#frmrecDev').empty().append($("<div class='row'><div class='col-md-12 col-xs-12'><div class='form-group'><label for='datepicker1' class='control-label'>วันที่เริ่มซ่อม </label> <input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required></div></div></div>"
                                    +"<div class='row'><div class='col-md-6 col-xs-3'><div class='form-group'><label for='H-begin' class='control-label'>เวลาเริ่ม : ชั่วโมง </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <select name='H-begin' id='H-begin' class='select2 form-control'></select></div></div>"
                                    +"<div class='col-md-6 col-xs-3'><div class='form-group'><label for='M-begin' class='control-label'>นาที </label> <select name='M-begin' id='M-begin' class='form-control select2'></select></div></div></div>"
                                    +"<div class='row'><div class='col-md-6 col-xs-3'><div class='form-group'><label for='H-end' class='control-label'>เวลาสิ้นสุด : ชั่วโมง </label> <select name='H-end' id='H-end' class='select2 form-control'></select></div></div>"
                                    +"<div class='col-md-6 col-xs-3'><div class='form-group'><label for='M-end' class='control-label'>นาที </label> <select name='M-end' id='M-end' class='select2 form-control'></select></div></div></div>")
                                    ,$("<div class='form-group' id='re_detail'><label for='dev_detail' class='control-label'>รายละเอียดการพัฒนา</label><textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='อธิบายรายละเอียดการพัฒนา' name='dev_detail' id='dev_detail' required></textarea></div>")
                                    ,$("<input type='hidden' class='form-control' id='module_id' name='module_id'>")
                                    ,$("<input type='hidden' class='form-control' id='method' name='method'>"));
                                    if(id != null){
                                        $('#frmrecDev').append("<input type='hidden' class='form-control' id='repair_id' name='repair_id' value='"+id+"'>");
                                    }
                                $(".select2").select2();
                                var DP = new DatepickerThai();
                                DP.GetDatepicker('#datepicker1');
                                MakeHour("#H-begin");    
                                MakeHour("#H-end");
                                MakeMinute("#M-begin");
                                MakeMinute("#M-end");
                                modal.find('input#module_id').val(recipient)
                                modal.find('input#method').val('add_hisdev')
                                
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