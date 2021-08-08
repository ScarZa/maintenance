function DetialQR (content,id=null) {
  
  var PD = new photoPDModal(content, id);
    PD.GetPDetial();
  $(content).append("<hr><div align='center'><a class='btn btn-primary' id='add-repair'><i class='glyphicon glyphicon-wrench'></i> แจ้งซ่อม</a></div>");

  
  $("#add-repair").click(function () {
    $.getJSON('JsonData/detail_prod.php', { data: id }, function (data) {
      if (data.group_id == 10) {
        AddRepairQR(content, id);
      } else {
        AddRepairTQR(content, id);
      }
      
    });
  });
        }
