 $("#sec_content").append("<div class='modal' id='receiveModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='receiveModalLabel'>รับใบแจ้งซ่อม</h4></div><div class='modal-body' id='modelrepair'><span id='repair_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button><button type='button' class='btn btn-success' id='submrepair'>รับใบแจ้งซ่อม</button></div></div></div></div>");
    $('#receiveModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('รับใบแจ้งซ่อม : ลำดับที่ ' + recipient)
  
   $.getJSON('JsonData/repair_Data.php',{data: recipient},function (data) {
        $('#repair_detail').empty().append("ผู้แจ้งซ่อม : "+data.inform+"  &nbsp;&nbsp;งาน : "+data.depName+"<br>"
                            +"เลขครุภัณฑ์ : "+data.pd_number+"  &nbsp;&nbsp;หมายเหตุ : "+data.note+"<br>"
                            +"อาการ : "+data.symptom+"<br>วันที่แจ้ง : "+data.repair_date+"  &nbsp;&nbsp;<b style='color: red;'>"+data.vital+"</b>");
        $('div#modelrepair').append("<form name='frmreceive' id='frmreceive'></form>");
                $('#frmreceive').empty().append($("<div class='form-group'><label for='datepicker1' class='control-label'>วันที่ลงทะเบียน </label><input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required>")
                                    ,$("<div class='form-group' id='repairer_sel'></div>")
                                    ,$("<input type='hidden' class='form-control' id='repair_id' name='repair_id'>")
                                    ,$("<input type='hidden' class='form-control' id='method' name='method'>"));
                    $('#repairer_sel').empty().append("<label for='repairer' class='control-label'>เลือกผู้ซ่อม</label><select name='repairer' id='repairer' class='form-control select2'></select>");
                    $.getJSON('JsonData/dep_com.php', function (GD) {
                                    for (var key in GD) {
                                        //if(GD[key].pd_id==data.pd_id){var select='selected';}else{var select='';}
                                              $("select#repairer").append($("<option value='"+GD[key].empno+"'> "+GD[key].fullname+"</option>"));
                                    }//$(".select2").select2();
                                });
                                var DP = new DatepickerThai();
                                DP.GetDatepicker('#datepicker1');
                                modal.find('input#repair_id').val(recipient)
                                modal.find('input#method').val('receive_repair')
                                
                                $("button#submrepair").click(function(e) {
                                        e.preventDefault();
                                        modal.modal('hide');
        				$.ajax({
					   type: "POST",
					   url: "process/prcrepair.php",
                                           data: $("#frmreceive").serialize(),
					   success: function(result) {
                                               alert(result);
                                                $("#index_content").empty().load('content/list_repair_order.html');
					   }
					 });
        });
    });
});