function HisModal () {
$("#createModal").empty().append("<div class='modal' id='HisModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='hisModalLabel'>รับใบแจ้งซ่อม</h4></div><div class='modal-body' id='modelhis'><span id='his_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></div></div></div>");
    $('#HisModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('รายละเอียดใบแจ้ง : ลำดับที่ ' + recipient)
   $.getJSON('JsonData/synopsis_repair_Data.php',{data: recipient},function (data) {
        $('span#his_detail').empty().append("ผู้แจ้งซ่อม : "+data.inform+"  &nbsp;&nbsp;งาน : "+data.depName+"<br>"
                            +"เลขครุภัณฑ์/สาเหตุ : "+data.pd_number+"  &nbsp;&nbsp;หมายเหตุ : "+data.note+"<br>"
                            +"อาการ : "+data.symptom+"<br>วันที่แจ้ง : "+data.repair_date+" &nbsp;&nbsp;<b style='color: red;'>"+data.vital+"</b><br><hr>"
                            +"วันที่รับใบแจ้ง : "+data.receive_date+"&nbsp;&nbsp;ผู้รับใบแจ้งซ่อม : "+data.receiver+"<br><hr>"
                            +"วันที่เริ่ม : "+data.strepair_date+"&nbsp;&nbsp;วันที่เสร็จ : "+data.enrepair_dare+"&nbsp;&nbsp;รวมเวลาซ่อม : "+data.total_day+"&nbsp;วัน "+data.total_time+"&nbsp;ชม.<br>ผู้ซ่อม : "+data.repairer+"<br>"
                            +"สรุปสาเหตุการเสีย : "+data.symp_name+"&nbsp;&nbsp;เกิดจาก &nbsp;&nbsp;"+data.symmptom_name+"<br>"
                            +"รายละเอียดการซ่อม : "+data.repair_detail+"<br><span id='acc'></span><span id='send'></span>"
                            +"ผู้รับครื่อง : "+data.rece_pd+"<br>"
                            +"วันที่บันทึกการซ่อม : "+data.result_recdate+"&nbsp;&nbsp;ผู้บันทึก : "+data.result_recorder);
                    if(data.accessories==1){
                        $.getJSON('JsonData/detail_acc_part.php',{data: data.repair_id}, function (CD) {
                                    var option='อุปกรณ์ที่เปลี่ยน :<br>';
                                    var c=1;
                                    for (var key in CD) {
                                              option += c+". "+CD[key].accp_name+" : "+CD[key].acc_detail+" &nbsp;&nbsp;ราคา "+CD[key].acc_price+" บาท <br>";
                                              c++;
                                        }
                                        $("span#acc").empty().html(option);
                                });
                    }
                    if(data.send_repair==1){
                        $.getJSON('JsonData/send_repair_Data.php',{data: data.repair_id}, function (CD) {
                                    var option='ส่งซ่อมภายนอก :<br>';
                                        option += "ส่งร้าน "+CD.comp_name+"<br>วันที่ส่ง "+CD.send_date+" &nbsp;&nbsp;วันที่รับคืน "+CD.resend_date+"<br>";
                                        option += "รายละเอียดการซ่อม "+CD.repair_detail+"<br>ค่าซ่อม "+CD.send_price+" บาท<br>";
                                         $("span#send").empty().html(option);
                                });
                    }

    });

});
}

function HisDiv (content, id=null) {
$(content).empty().append(
                                    "<div class='col-md-12'>"+
                                    "<div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'>"+
                                    "<h4 class='box-title'> เพิ่มโปรแกรมและโมดูล </h4></div>"+
                                    "<div class='box-body' id='HisModal'>"
                                    +"<div id='modelhis'><span id='his_detail'></span></div>"
                                    +"</div></div>");
  var idrep = id;
  
  $('h4').text('รายละเอียดใบแจ้ง : ลำดับที่ ' + idrep)
   $.getJSON('../JsonData/synopsis_repair_Data.php',{data: idrep},function (data) {
        $('span#his_detail').empty().append("ผู้แจ้งซ่อม : "+data.inform+"  &nbsp;&nbsp;งาน : "+data.depName+"<br>"
                            +"เลขครุภัณฑ์/สาเหตุ : "+data.pd_number+"  &nbsp;&nbsp;หมายเหตุ : "+data.note+"<br>"
                            +"อาการ : "+data.symptom+"<br>วันที่แจ้ง : "+data.repair_date+" &nbsp;&nbsp;<b style='color: red;'>"+data.vital+"</b><br><hr>"
                            +"วันที่รับใบแจ้ง : "+data.receive_date+"&nbsp;&nbsp;ผู้รับใบแจ้งซ่อม : "+data.receiver+"<br><hr>"
                            +"วันที่เริ่ม : "+data.strepair_date+"&nbsp;&nbsp;วันที่เสร็จ : "+data.enrepair_dare+"&nbsp;&nbsp;รวมเวลาซ่อม : "+data.total_day+"&nbsp;วัน "+data.total_time+"&nbsp;ชม.<br>ผู้ซ่อม : "+data.repairer+"<br>"
                            +"สรุปสาเหตุการเสีย : "+data.symp_name+"&nbsp;&nbsp;เกิดจาก &nbsp;&nbsp;"+data.symmptom_name+"<br>"
                            +"รายละเอียดการซ่อม : "+data.repair_detail+"<br><span id='acc'></span><span id='send'></span>"
                            +"ผู้รับครื่อง : "+data.rece_pd+"<br>"
                            +"วันที่บันทึกการซ่อม : "+data.result_recdate+"&nbsp;&nbsp;ผู้บันทึก : "+data.result_recorder);
                    if(data.accessories==1){
                        $.getJSON('JsonData/detail_acc_part.php',{data: data.repair_id}, function (CD) {
                                    var option='อุปกรณ์ที่เปลี่ยน :<br>';
                                    var c=1;
                                    for (var key in CD) {
                                              option += c+". "+CD[key].accp_name+" : "+CD[key].acc_detail+" &nbsp;&nbsp;ราคา "+CD[key].acc_price+" บาท <br>";
                                              c++;
                                        }
                                        $("span#acc").empty().html(option);
                                });
                    }
                    if(data.send_repair==1){
                        $.getJSON('JsonData/send_repair_Data.php',{data: data.repair_id}, function (CD) {
                                    var option='ส่งซ่อมภายนอก :<br>';
                                        option += "ส่งร้าน "+CD.comp_name+"<br>วันที่ส่ง "+CD.send_date+" &nbsp;&nbsp;วันที่รับคืน "+CD.resend_date+"<br>";
                                        option += "รายละเอียดการซ่อม "+CD.repair_detail+"<br>ค่าซ่อม "+CD.send_price+" บาท<br>";
                                         $("span#send").empty().html(option);
                                });
                    }

    });


}