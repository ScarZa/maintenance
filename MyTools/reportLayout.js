var ReportLayout = function(content){
    if(/^[a-zA-Z0-9-_]*$/.test(content) == false){
        var Mycontent=content.split("#");
        this.content = Mycontent[1];
    }else{
        this.content = content;
    }
    this.GetRL= function (){
            var layout = "<h2 style='color: blue'></h2>"+
            "<ol class='breadcrumb'>"+
            "<li><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
            "<li id='prev'><a href='#' id='back'><i class='fa fa-angle-double-left'></i> </a></li>"+
            "<li class='active' id='page'><i class='fa fa-envelope'></i> </li></ol>"+
            "<div class='row'>"+
            "<div id='sel_year' class='col-md-3 col-md-offset-9 form-group'></div>"+
            "<div class='col-md-12'>"+
            "<div class='box box-primary box-solid'>"+
            "<div class='box-header with-border'>"+
            "<h4 class='box-title'><i class='fa fa-star'></i>  </h4></div>"+
            "<div class='box-body' id='add_user'>"+
            "<div align='center' id='Budget'></div><div id='contentGr'></div><br><div id='contentTB'></div>"+
            "</div></div></div></div>";
        $('#' + this.content + '').empty().append(layout);
    }
}