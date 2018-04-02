function RefreshRepair () {
    $.getJSON('JsonData/count_rep.php',function (data) { 
        $("#mySpan").empty().append($("<a href='#' class='dropdown-toggle' data-toggle='dropdown'>"
                                  +"<i style='color: yellow;' class='fa fa-bell-o'></i>"
                                  +"<span class='label label-warning'>"+data.alertRepair+"</span></a>")
                                ,$("<ul class='dropdown-menu'><li class='header' style='color: red;'><b>คุณมี "+data.alertRepair+" รายการแจ้งย้าย</b></li>"
                                   +"<li><ul id='menu_alert' class='menu'></ul></li>"
                                   +"<li class='footer'><a href='#' id='total_rep'>ดูทั้งหมด</a></li></ul>"));
                            $("#total_rep").attr("onclick","loadPage('#index_content','content/list_repair_order.html')");
                            $("");
            $.getJSON('JsonData/detail_rep.php',function (data) { 
                            for (var key in data) {
                                var icon,color;
                                if(data[key].vital=='0'){
                                       icon = "fa fa-send fa-2x"; 
                                       color='success';
                                    }else if(data[key].vital=='1'){
                                       icon = 'fa fa-flash fa-2x'; 
                                       color='red';
                                    }
                                    $("#menu_alert").append($("<li><a href='#' id='recM' data-toggle='modal' data-target='#receiveModal' data-whatever='"+data[key].repair_id+"'>"
                                                            +"<h5><i class='"+icon+" text-"+color+"'></i> "+data[key].pd_number+":</h5>"
                                                            +" <p>"+data[key].depName+"("+data[key].note+")</p>"
                                                            +" <p>"+data[key].symptom+"...</p>"
                                                            +" <small><i class='fa fa-clock-o'> "+data[key].repair_date+"</i></small></a></li>"));
                                                    $("#recM").attr("onclick","receiveModal();")
                                    }    
});
});
    
}
