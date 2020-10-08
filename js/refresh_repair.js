function RefreshRepair() {

   db.collection("counter").where("proname", "==", 'maintenance')
   .onSnapshot(function(querySnapshot) {
       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           var alertRepair = doc.data().num_count;
           $("#mySpan").empty().append($("<a href='#' class='dropdown-toggle' data-toggle='dropdown'>"
           + "<i style='color: yellow;' class='fa fa-bell-o'></i>"
           + "<span class='label label-warning'>" + alertRepair + "</span></a>")
           , $("<ul class='dropdown-menu'><li class='header' style='color: red;'><b>คุณมี " + alertRepair + " รายการแจ้งย้าย</b></li>"
              + "<li><ul id='menu_alert' class='menu'></ul></li>"
              + "<li class='footer'><a href='#' id='total_rep'>ดูทั้งหมด</a></li></ul>"));
        $("#total_rep").attr("onclick", "loadPage('#index_content','content/list_repair_order.html')");
       });
   })

   db.collection("repair_detail")
        //.where("proname", "==", "risk")
    .onSnapshot(function(querySnapshot) {
      $("#menu_alert").empty();
        querySnapshot.forEach(function(doc) {
            console.log(doc.data());
            var icon, color;
            if (doc.data().vital == '0') {
               icon = "fa fa-send fa-2x";
               color = 'success';
            } else if (doc.data().vital == '1') {
               icon = 'fa fa-flash fa-2x';
               color = 'red';
            }
            $("#menu_alert").append($("<li><a href='#' id='recM' data-toggle='modal' data-target='#receiveModal' data-whatever='" + doc.data().repair_id + "'>"
               + "<h5><i class='" + icon + " text-" + color + "'></i> " + doc.data().pd_number + ":</h5>"
               + " <p>" + doc.data().depName + "(" + doc.data().note + ")</p>"
               + " <p>" + doc.data().symptom + "...</p>"
               + " <small><i class='fa fa-clock-o'> " + doc.data().repair_date + "</i></small></a></li>"));
            $("#recM").attr("onclick", "receiveModal();")
        });
        
    });
}
