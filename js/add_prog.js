function progModal (id=null) { console.log(id);
$("#createModal").empty().append("<div class='modal' id='progModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='progModalLabel'>รับใบแจ้งซ่อม</h4></div><div class='modal-body' id='modelprog'><span id='prog_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button><button type='button' class='btn btn-success' id='submprog'>บันทึก</button></div></div></div></div>");
    $('#progModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  if(recipient=='P'){
    modal.find('.modal-title').text('เพิ่มโปรแกรมที่พัฒนา')
    $('div#modelprog').append("<form name='frmprog' id='frmprog'></form>");
                $('#frmprog').empty().append($("<div class='form-group'><label for='pg_name' class='control-label'>ชื่อโปรแกรม </label><input type='text' name='pg_name' id='pg_name' class='form-control' required></div>")
                                    ,$("<div class='form-group'><label for='datepicker1' class='control-label'>วันที่เริ่มพัฒนา/เริ่มใช้งาน </label><input type='text' name='datepicker1' id='datepicker1' class='form-control' readonly required></div>")
                                    ,$("<input type='hidden' class='form-control' id='method' name='method'>"));
                                var DP = new DatepickerThai();
                                DP.GetDatepicker('#datepicker1');
                                modal.find('input#method').val('add_prog')
                                $("button#submprog").click(function(e) {
                                    if($("#pg_name").val()==''){
                                            alert("กรุณาระบุชื่อโปรแกรมด้วยครับ!!!");
                                            $("#pg_name").focus();
                                        }else{
                                        e.preventDefault();
                                        modal.modal('hide');
        				$.ajax({
					   type: "POST",
					   url: "process/prcdev.php",
                                           data: $("#frmprog").serialize(),
					   success: function(result) {
                                               alert(result);
                                               loadAjax('#index_content','JsonData/tempSendData.php',id,'ListDev');
					   }
					 });
                                     }
        });
  }else{
    modal.find('.modal-title').text('เพิ่มโมดูลที่พัฒนา')  
     $('div#modelprog').append("<form name='frmprog' id='frmprog'></form>");
                $('#frmprog').empty().append($("<div class='form-group'><label for='selpg_id' class='control-label'>เลือกโปรแกรม </label><select name='selpg_id' id='selpg_id' class='form-control select2'></select></div>")
                                    ,$("<div class='form-group'><label for='module_name' class='control-label'>ชื่อโมดูล </label><input type='text' name='module_name' id='module_name' class='form-control' required></div>")
                                    ,$("<input type='hidden' class='form-control' id='method' name='method'>"));
                        $.getJSON('JsonData/program_dev.php', function (GD) {
                                     var option="<option value=''> เลือกโปรแกรม </option>";
                                    for (var key in GD) {
                                              option += "$('<option value='"+GD[key].pg_id+"'> "+GD[key].pg_name+" </option>'),";
                                        }
                                        $("select#selpg_id").empty().append(option);
                                        $(".select2").select2();
                                });            
                                modal.find('input#method').val('add_module')
                                $("button#submprog").click(function(e) {
                                        if($("#selpg_id").val()==''){
                                            alert("กรุณาเลือกชื่อโปรแกรมด้วยครับ!!!");
                                            $("#selpg_id").focus();
                                        }else if($("#module_name").val()==''){
                                            alert("กรุณาระบุชื่อโมดูลด้วยครับ!!!");
                                            $("#module_name").focus();
                                        }else{
                                        modal.modal('hide');
        				$.ajax({
					   type: "POST",
					   url: "process/prcdev.php",
                                           data: $("#frmprog").serialize(),
					   success: function(result) {
                                               alert(result);
                                               loadAjax('#index_content','JsonData/tempSendData.php',id,'ListDev');
					   }
					 });
                                     } e.preventDefault();
        });
  }
});
}