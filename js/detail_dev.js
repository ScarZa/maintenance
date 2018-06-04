function detailDevModal () {
$("#createModal").empty().append("<div class='modal' id='detailDevModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='detailDevModalLabel'>รับใบแจ้งซ่อม</h4></div><div class='modal-body' id='modeldetailDev'><span id='detailDev_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></div></div></div>");
    $('#detailDevModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  //modal.find('.modal-title').text('รายละเอียดการพัฒนาครั้งที่ : ' + recipient)
  
   $.getJSON('JsonData/detail_dev.php',{data: recipient},function (data) {
       modal.find('.modal-title').text('รายละเอียดการพัฒนาโปรแกรม '+data.pg_name+' : โมดูล ' + data.module_name)
        $('#detailDev_detail').empty().append("วันที่พัฒนา : "+data.dev_date+"  &nbsp;&nbsp;เวลาเริ่ม : "+data.dev_stime+" น. ถึง "+data.dev_etime+" น. &nbsp;&nbsp;รวมเวลาซ่อม : "+data.total_time+"&nbsp;ชม.<br>"
                            +"รายละเอียด : "+data.dev_detail+"<br>"
                            +"ผู้พัฒนา : "+data.fullname);

    });
});
}

function detailDevDiv (content, id=null) {
$(content).empty().append("<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มโปรแกรมและโมดูล </h4></div>"+
                                    "<div class='box-body' id='HisModal'>"
                                    +"<div id='modelhis'><span id='his_detail'></span></div>"
                                    +"</div></div>");
var idrep = id;
  console.log(idrep);
   $.getJSON('../JsonData/detail_dev.php',{data: idrep},function (data) { console.log(data);
       $('h4').text('รายละเอียดการพัฒนาโปรแกรม '+data.pg_name+' : โมดูล ' + data.module_name)
        $('span#his_detail').empty().append("วันที่พัฒนา : "+data.dev_date+"  &nbsp;&nbsp;เวลาเริ่ม : "+data.dev_stime+" น. ถึง "+data.dev_etime+" น. &nbsp;&nbsp;รวมเวลาซ่อม : "+data.total_time+"&nbsp;ชม.<br>"
                            +"รายละเอียด : "+data.dev_detail+"<br>"
                            +"ผู้พัฒนา : "+data.fullname);

    });

}