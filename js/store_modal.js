function StoreModal () {
$("#createModal").empty().append("<div class='modal' id='StoreModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='StoreModalLabel'>ร้าน</h4></div><div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></div></div></div>");
    $('#StoreModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('รายละเอียดร้าน : ลำดับที่ ' + recipient)
   $.getJSON('JsonData/comp_Data.php',{data: recipient},function (data) {
        $('span#Store_detail').empty().append("ชือร้าน : "+data[0].comp_name+"  &nbsp;&nbsp;เลขที่เสียภาษี : "+data[0].comp_vax+"<br>"
                            +"ที่อยู่ : "+data[0].comp_address+"<br>"
                            +"หมายเลขโทรศัพท์ : "+data[0].comp_tell+"<br>หมายเลขโทรศัพท์มือถือ : "+data[0].comp_mobile+"<br>หมายเลขโทรสาร : "+data[0].comp_fax);

    });

});
}