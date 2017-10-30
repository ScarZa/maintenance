(function($){   
    $.fn.serializeObject = function(){
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    var ajax_post = function(url,vals) {
        return $.ajax({
            url: url,
            type: "post",
            cache: false,
            data:vals,
            dataType: 'json'
        });
    };
    //HTML valiable    
    var HTML_layoutPage = function(){
        var txt = 
        "<div class='chayanon-wrap-page'>"+
            "<div class='container-fluid chayanon-main-page'>"+
                "<nav class='navbar navbar-default navbar-static-top'>"+
                    "<div class='container-fluid'>"+
                        "<div class='navbar-header'>"+
                            "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'  aria-controls='navbar'>"+
                                "<span class='sr-only'>Toggle navigation</span>"+
                                "<span class='icon-bar'></span>"+
                                "<span class='icon-bar'></span>"+
                                "<span class='icon-bar'></span>"+
                            "</button>"+
                            "<a class='navbar-brand'  href='#'>"+
                                "<img class='hidden-xs img-responsive' src='img/skph-logo1.gif' alt=''>"+
                                "<img class='visible-xs img-responsive' src='img/skph-logo1.gif' alt=''>"+ 
                            "</a>"+
                        "</div>"+
                        "<div id='navbar' class='navbar-collapse collapse'>"+
                            //menu
                            "<ul class='nav navbar-nav' id='MenuGroup'>"+
                                "<li class='active'><a href='#' class='layoutTextMenu' key='home' onclick='window.location.reload(true);'>หน้าหลัก</a></li>"+
                                "<li class='dropdown-full'>"+//เกี่ยวกับโรงพยาบาลฯ
                                    "<a data-toggle='dropdown' href='#' class='dropdown-toggle layoutTextMenu' key='about'>เกี่ยวกับหน่วยงาน</a>"+
                                    "<div class='dropdown-menu  no-shadow no-border-radius bordered'>"+
                                        "<div id='Action_about' class='visible-lg-inline visible-md-inline visible-sm-inline visible-xs-inline'></div>"+
                                    "</div>"+ 
                                "</li>"+
                            "</ul>"+
                            //switch lang
                            "<ul class='nav navbar-nav navbar-right' id='MenuLangSwitch'>"+
                                "<li class='dropdown-full'>"+
                                    "<a href='#' class='dropdown-toggle layoutTextMenu' key='lang' data-toggle='dropdown' role='button'>ภาษา <span class='caret'></span></a>"+
                                    "<div class='dropdown-menu  no-shadow no-border-radius bordered'>"+
                                        "<div class='visible-lg-inline visible-md-inline visible-sm-inline visible-xs-inline'>"+
                                            "<div class='show-grid'>"+
                                                "<div class='col-xs-6 col-sm-6 col-md-6 col-lg-6'>"+
                                                    "<span class='iconmenu'>"+
                                                        "<a href='#langTH'>"+
                                                            "<h1>"+
                                                                "<span class='lang-lg lang-lbl' lang='th'></span>"+
                                                            "</h1>"+
                                                        "</a>"+
                                                    "</span>"+
                                                "</div>"+
                                                "<div class='col-xs-6 col-sm-6 col-md-6 col-lg-6'>"+
                                                    "<span class='iconmenu'>"+
                                                        "<a href='#langEN'>"+
                                                            "<h1>"+
                                                                "<span class='lang-lg lang-lbl' lang='en'></span>"+
                                                            "</h1>"+
                                                        "</a>"+
                                                    "</span>"+
                                                "</div>"+
                                            "</div>"+
                                        "</div>"+
                                    "</div>"+
                                "</li>"+
                            "</ul>"+

                            //search
                            "<div class='nav navbar-nav navbar-right col-lg-4 col-md-4 col-sm-4' id='MenuSearch'>"+ 
                                "<gcse:search "+
                                        "enableAutoComplete='true' "+
                                    ">"+
                                "</gcse:search>"+
                            "</div>"+

                        "</div>"+//navbar-collapse collapse
                    "</div>"+//container-fluid
                "</nav>"+//nav menu

                "<div class='container-fluid' id='StartContentFluid'>"+//start content
                    "<div class='row' id='FreeArea'>"+//free content
                        "<div class='panel panel-info'>"+
                            "<div class='panel-heading'>"+
                                "<div class='row'>"+
                                    "<div class='col-xs-9 col-sm-8 col-md-9 col-lg-10'>"+
                                        "<h3>"+
                                            "<i class='fa fa-pagelines fa-lg'></i>&nbsp;"+
                                            "<span></span>"+
                                        "</h3>"+
                                    "</div>"+
                                    "<div class='col-xs-3 col-sm-4 col-md-3 col-lg-2'>"+
                                        "<a class='btn btn-lg btn-danger pull-right'>"+
                                            "<div class='row-fluid'>"+
                                                "<div class='span6'><i class='fa fa-times-circle-o fa-2x'></i></div>"+
                                                "<div class='span6'>Close</div>"+
                                            "</div>"+
                                        "</a>"+
                                    "</div>"+
                                "</div>"+    
                            "</div>"+
                            "<div class='panel-body chayanon-fixed-panel'></div>"+//action ตรงนี้
                        "</div>"+
                    "</div>"+
                    
                    "<div class='row'>"+//2p
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-smile-o fa-lg'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='2p'>2P to PTSD Screening</a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='2P'></div>"+//action ตรงนี้
                        "</div>"+   
                    "</div>"+  
                    
                    
                    /*
                    "<div class='row' >"+//video background https://github.com/BGStock/jquery-background-video
                        "<div  class='jquery-background-video-wrapper'>"+
                            "<video id='vidBG'  loop autoplay poster='js/plugin/video/ocean.jpg' controls>"+//class='my-background-video jquery-background-video'
                                "<source src='js/plugin/video/PrVidSKPH.mp4' type='video/mp4'>"+
                            "</video>"+
                        "</div>"+ 
                    "</div>"+  
                    */
                    "<div class='row'>"+//HeadLine
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-header fa-lg'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='HeadLine'>eadLine</a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='HeadLine'></div>"+//action ตรงนี้
                        "</div>"+   
                    "</div>"+  
                    
                    "<div class='row' id='SlickSlider'></div>"+//Hightlight slider 
            
                    
                    "<div class='row'>"+//InfoGraphic
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-info fa-lg'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='InfoGraphic'>nfographic</a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='InfoGraphic'></div>"+//action ตรงนี้
                        "</div>"+   
                    "</div>"+
                    
                    
                    "<div class='row'>"+//E-Service 
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-cloud fa-lg'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='E-Service'>บริการออนไลน์</a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='EService'></div>"+//action ตรงนี้
                        "</div>"+   
                    "</div>"+   

                    

                    "<div class='row'>"+//ข้อมูลบริการ
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<span class='glyphicon glyphicon-cog'></span>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='service'>ข้อมูลบริการ</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='service' ></div>"+//action ตรงนี้
                        "</div>"+ 
                    "</div>"+                
                    "<div class='row'>"+//ข่าวประชาสัมพันธ์                
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-info-circle'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='news'>ข่าวประชาสัมพันธ์</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='news' ></div>"+//action ตรงนี้
                        "</div>"+
                    "</div>"+ 
                    
                    "<div class='row'>"+//ข่าวกิจกรรม (hight light เก่าๆ ย้อนหลังจะอยู่ที่นี่)
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<span class='glyphicon glyphicon-camera'></span>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='newsAct'>ข่าวกิจกรรม</a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='newsAct'></div>"+//action ตรงนี้
                        "</div>"+
                    "</div>"+
                    
                    "<div class='row'>"+//คลังภาพกิจกรรม
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<span class='glyphicon glyphicon-camera'></span>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='family'>คลังภาพกิจกรรม</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='family'></div>"+//action ตรงนี้
                        "</div>"+
                    "</div>"+
                                       
                    "<div class='row'>"+//ดาวน์โหลดแบบฟอร์ม,คู่มือ
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-download' aria-hidden='true'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='downloadSKPHForm'>ดาวน์โหลดแบบฟอร์ม</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='downloadSKPHForm' ></div>"+
                        "</div>"+
                    "</div>"+  
                    "<div class='row'>"+//แผ่นพับ
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-newspaper-o' aria-hidden='true'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='skphbrochures'>แผ่นพับ</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='skphbrochures' ></div>"+
                        "</div>"+
                    "</div>"+  
                    "<div class='row'>"+//สื่อมัลติมีเดีย
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-file-video-o' aria-hidden='true'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='skphmultimedia'>สื่อมัลติมีเดีย</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='skphmultimedia'></div>"+
                        "</div>"+
                    "</div>"+
                    /*
                    "<div class='row'>"+//Q&A
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-question' aria-hidden='true'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='QA'>ถาม-ตอบ(Q & A)</a>"+
                                    "<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='QA' ></div>"+
                        "</div>"+
                    "</div>"+  
                    */
                    
                    "<div class='row'>"+//คลังความรู้
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<span class='glyphicon glyphicon-hdd'></span>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='km'>คลังความรู้</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='km'></div>"+
                        "</div>"+
                    "</div>"+  
                    
                    "<div class='row'>"+//กฎ ระเบียบ ข้อบังคับ ที่เกี่ยวข้อง
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-balance-scale' aria-hidden='true'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='Law'>กฎ ระเบียบ ข้อบังคับ ที่เกี่ยวข้อง</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='Law'></div>"+
                        "</div>"+      
                    "</div>"+  
                    "<div class='row'>"+//เว็บลิงค์
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<span class='glyphicon glyphicon-globe'></span>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='WebLink'>เว็บลิงค์</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='WebLink'></div>"+
                        "</div>"+      
                    "</div>"+        
                    "<div class='row'>"+//แบบประเมินการใช้งานเว็บไซต์
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<span class='glyphicon glyphicon-thumbs-up'></span>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='PollSKPH'>แบบประเมินการใช้งานเว็บไซต์</a>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-down  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='SKPHPoll'></div>"+
                        "</div>"+
                    "</div>"+
                    "<div class='row'>"+//รับเรื่องร้องเรียน ข้อเสนอแนะ
                        "<div class='panel panel-default outer'>"+
                            "<div class='panel-heading headerbar'>"+
                                "<h3>"+
                                    "<i class='fa fa-quote-left'></i>&nbsp;"+
                                    "<a href='#' class='layoutTextMenu' key='complaint'>รับเรื่องร้องเรียน ข้อเสนอแนะ</a>"+
                                    "&nbsp;<i class='fa fa-quote-right'></i>"+
                                    //"<a href='#'><i class='indicator fa fa-chevron-circle-up  pull-right'></i></a>"+
                                "</h3>"+
                            "</div>"+
                            "<div class='panel-body' id='complaint'></div>"+
                        "</div>"+
                    "</div>"+
            "</div>"+
                "</div>"+//start content  container-fluid
            "</div>"+//container-fluid chayanon-main-page
        "</div>"+//chayanon-wrap-page
        "<div class='container-fluid chayanon-footer'></div>";
        return txt;
    };
    var ModalOK = $("<div class='modal'>"+
            "<div class='modal-dialog'>"+
                "<div class='modal-content'>"+
                    "<div class='modal-header bg-primary'>"+
                        "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button>"+
                        "<h4 class='modal-title'><span></span></h4>"+//header
                    "</div>"+
                    "<div class='modal-body'>"+
                        "<span></span>"+//body
                    "</div>"+
                    "<div class='modal-footer bg-info'>"+
                        "<a href='#' data-dismiss='modal' class='btn btn-primary'>ปิด</a>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>");
    var BlogService_HTML = function(lang){
        $("#service").empty();
        ajax_post('call_blog_service.php',{'lang':JSON.stringify(lang)}).done(function(data){
            if (typeof data === 'object'){
                var service = $("#service");
                var htm = "<div class='panel-group' id='accordionService' role='tablist' aria-multiselectable='true'>";
                function toggleChevron(e) {
                    $(e.target)
                        .prev('.panel-heading')
                        .find("i.indicator")
                        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
                }
                $.each(data,function(i,v){
                    htm +=
                    "<div class='panel panel-default'>"+
                        "<div class='panel-heading' role='tab' id='heading"+v.menu_keylink+"'>"+
                            "<h2 class='panel-title'>"+
                                "<a role='button' data-toggle='collapse'  "+
                                    "data-parent='#accordionService' href='#"+v.menu_keylink+"' "+
                                    "aria-expanded='false' aria-controls='"+v.menu_keylink+"'>"+
                                    v.menu_name +
                                "</a><i class='indicator glyphicon glyphicon-chevron-down  pull-right'></i>"+
                            "</h2>"+
                        "</div>"+
                        "<div id='"+v.menu_keylink+"' class='panel-collapse ' role='tabpanel' aria-labelledby='heading"+v.menu_keylink+"'>"+
                            "<div class='panel-body'>"+v.content+"</div>"+
                        "</div>"+
                    "</div>";
                });
                htm +=
                        "<div class='panel'><button>ดูทั้งหมด</button></div>"+
                    "</div>"; 
                service.empty();
                service.append(htm);
                //service.TogglePanelBody();
                var btnall = $('#accordionService').children('div:last-child').find('button');
                var len = $('#accordionService').children('div').length;
                var txtbtn = [];
                if(lang === 'TH'){
                    txtbtn.length = 0;
                    txtbtn = ['ดูทั้งหมด','ซ่อน'];
                }else{
                    txtbtn.length = 0;
                    txtbtn = ['All','hide'];
                }
                btnall.text(txtbtn[0]);
                if(len > 3){
                    for(var i = 0;i < len; i++){
                        if(  (i > 1) && (i !== len -1)  ){
                            $('#accordionService').children('div').eq(i).addClass('accordionEChide').hide();
                        }
                    }
                }
                $('#accordionService').on('hidden.bs.collapse', toggleChevron);
                $('#accordionService').on('shown.bs.collapse', toggleChevron);
                btnall.off('click').on('click',function(e){
                    e.stopPropagation();
                    var txt = $(this).text();
                    var btn = $(this);
                    var next = txtbtn[($.inArray(txt,txtbtn) + 1) % txtbtn.length];
                    $("#service .accordionEChide").toggle(function(){
                        btn.text(next);
                    });
                });
            }
            else
            {
                $("#service").html(data);
            }
        });
    };
    var BlogNews_HTML = function(lang){
        var news = $("#news").empty();
       // news.TogglePanelBody();
        var getMenuTabs = function(lang){
            var deferMN = $.Deferred();
            ajax_post('call_blog_mn_news.php',{'lang':JSON.stringify(lang)}).done(function(data){    
                var htm = "<div class='tabs-x align-center tabs-above tab-bordered'>"+
                            "<ul class='nav nav-tabs'>";
                if (typeof data === 'object')
                {
                    $.each(data,function(i,v){
                       htm+="<li><a href='#"+v.menu_keylink+"'  data-toggle='tab'>"+v.menu_name+"</a></li>"; 
                    });
                    htm+="</ul><div class='tab-content'></div></div>";
                }
                deferMN.resolve(htm);
            });
            return deferMN.promise();
        };
        var getContentTabs = function(lang,keylink,elmTabx){
            var CreateContent = function(data){
                var htmcontent = "";
                var htmbtn = "";
                if (typeof data === 'object')
                {
                    $.each(data,function(i,v){
                        if(v!==""){
                            if(i==="htmcontent"){
                                htmcontent += v;
                            }
                            if(i==="htmbtn"){
                                htmbtn += v;
                            }
                        }
                    });
                }
                /*
                elmTabx.children('.tab-content').empty().append(tabpane);
                elmTabx.tabsX({
                    enableCache: true,
                    cacheTimeout:300000,//5นาที ให้ refresh cache ใหม่
                    maxTitleLength: 10
                });
                */
               return htmcontent+htmbtn;
            };
            var FirstPageContentTabs = function(){
                var DeferfirstPage = $.Deferred();
                var ajaxPageOne = ajax_post('call_blog_content_news.php',{
                    'lang':JSON.stringify(lang),
                    'menu_keylink':JSON.stringify(keylink),
                    'page':JSON.stringify(1)
                });
                ajaxPageOne.done(function(data){
                    DeferfirstPage.resolve(CreateContent(data));
                });
                return DeferfirstPage.promise();
            };
            var CounterDownload_Click = function(a){
                var arr = a.attr("href").split("/");
                var cond1=arr[1],cond2=arr[2];
                ajax_post('counter_blog_content_news.php',{'cond1':JSON.stringify(cond1),'cond2':JSON.stringify(cond2)}).done(function(data){
                    a.find("span").html("");
                    a.find("span").html(" "+data+" ครั้ง");
                });
            };
            $.when(FirstPageContentTabs()).done(function(htmFirstPage){
                elmTabx.children('.tab-content').empty().append(htmFirstPage);
                elmTabx.tabsX({
                    enableCache: true,
                    cacheTimeout:300000,//5นาที ให้ refresh cache ใหม่
                    maxTitleLength: 10
                });
                elmTabx.find('div.tab-pane.active').off('click').on('click','a',function(e){
                    CounterDownload_Click($(e.target));
                });
                elmTabx.off("click",".mypg a").on( "click", ".mypg a", function (e){
                    e.preventDefault();
                    var page = $(this).attr("data-page"); //get page number from link
                    var ajaxPageNext = ajax_post('call_blog_content_news.php',{
                        'lang':JSON.stringify(lang),
                        'menu_keylink':JSON.stringify(keylink),
                        'page':JSON.stringify(page)
                    });
                    ajaxPageNext.done(function(htmNextPage){
                        elmTabx.children('.tab-content').empty().append(CreateContent(htmNextPage));
                        elmTabx.tabsX({
                            enableCache: true,
                            cacheTimeout:300000,//5นาที ให้ refresh cache ใหม่
                            maxTitleLength: 10
                        });
                        elmTabx.find('div.tab-pane.active').off('click').on('click','a',function(e){
                            CounterDownload_Click($(e.target));
                        });
                    });
                });
            });
        };
        $.when(getMenuTabs(lang)).done(function(MenuTabs){
            news.empty().append(MenuTabs);
            var tabx = news.children('div:nth-child(1)');
            getContentTabs(lang,'mn_general_news',tabx);
            tabx.find('.nav-tabs [data-toggle="tab"]').on('tabsX.click', function(e){
                var keylinktab = ($(this).attr('href')).replace('#','');
                getContentTabs(lang,keylinktab,tabx);
            });
        });
    };
    var BlogHighlight_HTML = function(lang){
        ajax_post('call_blog_hightlight.php',{'lang':JSON.stringify(lang)}).done(function(data){
            var SlickSlider = $('#SlickSlider');
            if (typeof data === 'object')
            {
                var txthtm = "";
                txthtm+=
                    '<div id="jssor_1"  style="display:inline-block;position:relative;margin:0 auto;top:0px;left:0px;width:1250px;height:600px;overflow:hidden;visibility:hidden;">'+
                        '<!-- Loading Screen -->'+
                        '<div data-u="loading" style="position:absolute;top:0px;left:0px;background:url("img/jssorSliderIMG/loading.gif") no-repeat 50% 50%;background-color:rgba(0, 0, 0, 0.7);"></div>'+
                        '<div data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:1250px;height:600px;overflow:hidden;">';
                        $.each(data,function(i,v){
                            txthtm+=
                            '<div>'+
                                '<img data-u="image" src="'+v.image_file_path+'" />'+
                                '<div data-u="thumb">'+v.title+'</div>'+
                            '</div>';
                        });
                        txthtm+=
                        '</div>'+
                        '<!-- Thumbnail Navigator -->'+
                        '<div data-u="thumbnavigator" class="jssort09-600-45" style="position:absolute;bottom:0px;left:0px;width:800px;height:200px;">'+
                            '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;filter:alpha(opacity=40.0);opacity:0.4;"></div>'+
                            '<!-- Thumbnail Item Skin Begin -->'+
                            '<div data-u="slides" style="cursor: default;">'+
                                '<div data-u="prototype" class="p">'+
                                    '<div data-u="thumbnailtemplate" class="t" style="font-size:18px;line-height:95%;"></div>'+
                                '</div>'+
                            '</div>'+
                            '<!-- Thumbnail Item Skin End -->'+
                        '</div>'+
                        '<!-- Bullet Navigator -->'+
                        '<div data-u="navigator" class="jssorb01" style="bottom:16px;right:16px;">'+
                            '<div data-u="prototype" style="width:12px;height:12px;"></div>'+
                        '</div>'+
                        '<!-- Arrow Navigator -->'+
                        '<span data-u="arrowleft" class="jssora05l" style="top:0px;left:8px;width:40px;height:40px;" data-autocenter="2"></span>'+
                        '<span data-u="arrowright" class="jssora05r" style="top:0px;right:8px;width:40px;height:40px;" data-autocenter="2"></span>'+
                    '</div>';
                SlickSlider.empty().append(txthtm);    
                var jssor_1_SlideshowTransitions = [
                  {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
                  {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
                ];

                var jssor_1_options = {
                  $AutoPlay: 1,
                  $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: jssor_1_SlideshowTransitions,
                    $TransitionsOrder: 1
                  },
                  $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                  },
                  $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$
                  },
                  $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$,
                    $Cols: 1,
                    $Align: 0,
                    $NoDrag: true
                  }
                };

                var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

                /*responsive code begin*/
                /*remove responsive code if you don't want the slider scales while window resizing*/
                function ScaleSlider() {
                    var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                    if (refSize) {
                        refSize = Math.min(refSize,1250);
                        jssor_1_slider.$ScaleWidth(refSize);
                    }
                    else {
                        window.setTimeout(ScaleSlider, 30);
                    }
                }
                ScaleSlider();
                $(window).bind("load", ScaleSlider);
                $(window).bind("resize", ScaleSlider);
                $(window).bind("orientationchange", ScaleSlider);
                /*responsive code end*/
            }
            else
            {
               SlickSlider.html(data); 
            }
        });  
    };
    /*var BlogEC_HTML = function(lang){
        function toggleChevron(e) {
            $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        }
        ajax_post('call_blog_ec.php',{'lang':JSON.stringify(lang)}).done(function(data){
            var ec = $("#ec");
            var htm = "";
            ec.empty();
            if (typeof data === 'object')
            {
                htm += "<div class='panel-group' id='accordionEC' role='tablist' aria-multiselectable='true'>";
                $.each(data,function(i,v){
                    htm +=
                    "<div class='panel panel-default'>"+
                        "<div class='panel-heading' role='tab' id='heading"+v.menu_keylink+"'>"+
                            "<h4 class='panel-title'>"+
                                "<a role='button' data-toggle='collapse' data-parent='#accordionEC' href='#"+v.menu_keylink+"' aria-expanded='false' aria-controls='"+v.menu_keylink+"'>"+
                                    v.menu_name +
                                "</a><i class='indicator glyphicon glyphicon-chevron-down  pull-right'></i>"+
                            "</h4>"+
                        "</div>"+
                        "<div id='"+v.menu_keylink+"' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading"+v.menu_keylink+"'>"+
                            "<div class='panel-body'>"+
                                v.content+
                            "</div>"+
                        "</div>"+
                    "</div>";
                });
                htm +=
                        "<div class='panel'><button>ดูทั้งหมด</button></div>"+
                    "</div>"; 
                ec.empty();
                ec.append(htm);
                //ec.TogglePanelBody();
                var btnall = $('#accordionEC').children('div:last-child').find('button');
                var len = $('#accordionEC').children('div').length;
                var txtbtn = [];
                if(lang === 'TH'){
                    txtbtn.length = 0;
                    txtbtn = ['ดูทั้งหมด','ซ่อน'];
                }else{
                    txtbtn.length = 0;
                    txtbtn = ['All','hide'];
                }
                btnall.text(txtbtn[0]);
                if(len > 3){
                    for(var i = 0;i < len; i++){
                        if(  (i > 1) && (i !== len -1)  ){
                            $('#accordionEC').children('div').eq(i).addClass('accordionEChide').hide();
                        }
                    }
                }
                $('#accordionEC').on('hidden.bs.collapse', toggleChevron);
                $('#accordionEC').on('shown.bs.collapse', toggleChevron);
                btnall.off('click').on('click',function(e){
                    e.stopPropagation();
                    var txt = $(this).text();
                    var btn = $(this);
                    var next = txtbtn[($.inArray(txt,txtbtn) + 1) % txtbtn.length];
                    $("#ec .accordionEChide").toggle(function(){
                        btn.text(next);
                    });
                });
            }
            else
            {
                htm = "";
                ec.html(data);
            }
        });
    };*/
    var BlogEservice_HTML = function(lang){
        ajax_post('call_blog_e-service.php',{'lang':JSON.stringify(lang)}).done(function(data){
            var Eservice = $('#EService');
            Eservice.empty();
            if (typeof data === 'object')
            {
                var len = data.length;
                var fixCol = 3;
                var row = 0;
                var htm = "";
                function createHTM(cnt){
                    var txt = "";
                    $.each(data,function(i,v){
                        if(i===cnt){
                            txt += 
                                "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>"+
                                    "<div class='row-fluid'>"+
                                        "<div class='span6'>"+
                                            "<a href='"+v.url+"' target='_blank' style='text-decoration: none;'>"+
                                                "<img src='"+v.icon_menu_filename+"' class='img-responsive' style='margin:0 auto;'>"+
                                            "</a>"+
                                        "</div>"+
                                        "<div class='span6 EServiceTxtMenu'>"+
                                            "<a href='"+v.url+"' target='_blank' style='text-decoration: none;'>"+
                                                "<p align='center' style='word-wrap: break-word;'>"+v.menu_name+"</p>"+
                                            "</a>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                        }
                    });
                    return txt;
                };
                if( (len/fixCol) > 0  ){//กรณีผลลัพธ์ไม่เป็น 0 (ตัวตั้งมากกว่าตัวหาร)
                    if( (len%fixCol) === 0  ){//กรณีไม่มีเศษ
                        row = len/fixCol; 
                    }else{
                        row = Math.floor(len/fixCol) + 1;
                    }
                }else{//กรณีผลลัพธ์เป็น 0 (ตัวตั้งน้อยกว่าตัวหาร)
                    row = 1;
                }//console.log('len='+len+',row='+row);
                if(row > 0){
                    var cnt = 0;
                    for(var i = 0;i<row;i++){//แถว
                        htm += "<div class='row'>";
                        for(var j = 0;j<fixCol;j++){//หลัก
                            htm+=createHTM(cnt);
                            cnt+=1;
                        }
                        htm +="</div>";
                    }
                }else{
                    htm = "";
                }
                Eservice.empty();
                //Eservice.css({height:$('#highlight').height()+'px'});
                Eservice.append(htm);
                //Eservice.TogglePanelBody();
                if ($(window).width() < 350) {//ตั้งแต่ sm,xs ลงมา
                    Eservice.find('.EServiceTxtMenu').toggleClass('hidden').hide();
                }else{
                    Eservice.find('.EServiceTxtMenu').removeClass('hidden').show();
                }
                $(window).on("resize", function() {
                    if ($(window).width() < 350) {//ตั้งแต่ sm,xs ลงมา
                        Eservice.find('.EServiceTxtMenu').toggleClass('hidden').hide();
                    }else{
                        Eservice.find('.EServiceTxtMenu').removeClass('hidden').show();
                    }
                });
            }
            else
            {
                Eservice.html(data); 
            }
        });
    };
    var BlogAbout_HTML = function(lang){
        ajax_post('call_blog_about.php',{'lang':JSON.stringify(lang)}).done(function(data){
            var Action_about = $('#Action_about');
            function setCarouselHeight(id)
            {
                var slideHeight = [];
                $(id+' .item').each(function()
                {
                    // add all slide heights to an array
                    slideHeight.push($(this).height());
                });

                // find the tallest item
                var max = Math.max.apply(null, slideHeight);

                // set the slide's height
                $(id+' .carousel-content').each(function()
                {
                    $(this).css('height',max+'px');
                });
            }
            if (typeof data === 'object')
            {
                Action_about.empty();
                var len = data.length;
                var fixCol = 4;
                var row = 0;
                var htm = "";

                function createHTM(cnt){
                    var txt = "";
                    $.each(data,function(i,v){
                        if(i===cnt){
                            txt += 
                            "<div class='col-xs-12 col-sm-3 col-md-3 col-lg-3'>"+
                                "<span class='iconmenu'>"+
                                    "<a href='javascript:;'  data-aboutdata='"+v.content+"'>"+
                                        "<img src='"+v.img_path+"' width='80' alt='"+v.menu_name+"' title='"+v.menu_name+"'><br>"+
                                        "<b>"+v.menu_name+"</b>"+
                                    "</a>"+
                                "</span>"+
                            "</div>";
                        }
                    });
                    return txt;
                };
                if( (len/fixCol) > 0  ){//กรณีผลลัพธ์ไม่เป็น 0 (ตัวตั้งมากกว่าตัวหาร)
                    if( (len%fixCol) === 0  ){//กรณีไม่มีเศษ
                        row = len/fixCol; 
                    }else{
                        row = Math.floor(len/fixCol) + 1;
                    }
                }else{//กรณีผลลัพธ์เป็น 0 (ตัวตั้งน้อยกว่าตัวหาร)
                    row = 1;
                }//console.log('len='+len+',row='+row);
                if(row > 0){
                    var cnt = 0;
                    for(var i = 0;i<row;i++){//แถว
                        htm += "<div class='show-grid'>";
                        for(var j = 0;j<fixCol;j++){//หลัก
                            htm+=createHTM(cnt);
                            cnt+=1;
                        }
                        htm +="</div>";
                    }
                }else{
                    htm = "";
                }
                Action_about.append(htm);    
                Action_about.find('a').each(function(){
                   $(this).click(function(e){
                       e.preventDefault();
                       e.stopPropagation();
                       var htmbody = $(this).data('aboutdata');//console.log(htmbody);
                       var htmheader = $(this).find('b').text();
                       ShwFreeArea(htmheader,htmbody);
                   });
                });
            }
            else
            {
                Action_about.empty();
                Action_about.append(data);
            }
        });
    };
    var BlogSKPHfamily_HTML = function(lang){
        var family = $('#family');
        var createHTM_byCalcRow = function(d1,d2){
            var htm = "";
            var len = d1.length;
            var fixCol = 3;
            var row = 0;
            if( (len/fixCol) > 0  ){//กรณีผลลัพธ์ไม่เป็น 0 (ตัวตั้งมากกว่าตัวหาร)
                if( (len%fixCol) === 0  ){//กรณีไม่มีเศษ
                    row = len/fixCol; 
                }else{
                    row = Math.floor(len/fixCol) + 1;
                }
            }else{//กรณีผลลัพธ์เป็น 0 (ตัวตั้งน้อยกว่าตัวหาร)
                row = 1;
            }//console.log('len='+len+',row='+row);
            if(row > 0){
                var cnt = 0;
                for(var i = 0;i<row;i++){//แถว
                    htm += "<div class='row'>";
                    for(var j = 0;j<fixCol;j++){//หลัก
                        $.each(d1,function(i,v){
                            if(i===cnt){
                                htm += 
                                "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>"+
                                    "<a href='"+v.image_file_path+"' "+
                                        " style='text-decoration: none;' class='swipebox'>"+
                                        "<img src='"+v.image_file_path+"' class='img-responsive' style='margin:0 auto;'>"+
                                    "</a>"+
                                "</div>";
                            }
                        });
                        cnt+=1;
                    }
                    htm +="</div>";
                }
            }else{
                htm = "";
            }
            return "<div class='row'>"+d2+"</div>"+htm;
        };
        var FirstPagination = function(){
            var Mydeferred = $.Deferred();
            var firstDeferred = ajax_post('call_blog_skphfamily.php',{'page':JSON.stringify(1),'lang':JSON.stringify(lang)});
            firstDeferred.done(function(data){
                Mydeferred.resolve(createHTM_byCalcRow(data[0],data[1]));
                family.find(".swipebox").swipebox();
            });
            return Mydeferred.promise();
        };
        $.when(FirstPagination()).done(function(htm1){
            family.empty().append(htm1);
            //family.TogglePanelBody();
            family.off("click").on( "click", ".mypg a", function (e){
                e.preventDefault();
                var page = $(this).attr("data-page"); //get page number from link
                var nextDeferred = ajax_post('call_blog_skphfamily.php',{'page':JSON.stringify(page),'lang':JSON.stringify(lang)});
                nextDeferred.done(function(data){
                    family.empty().append(createHTM_byCalcRow(data[0],data[1]));
                    //family.TogglePanelBody();
                });
            });
        });
    };
    var BlogSKPHPoll_HTML = function(lang){
        var LoadQuestion = function(lang){
            var deferQuestion = $.Deferred();
            var htmQuestion = function(data,lang){
                var txtQuestion = (lang === 'EN' ? 'Question':'ข้อคำถาม');
                var txtScore = (lang === 'EN' ? 'Score':'ระดับคะแนน');
                var txtSavePoll = (lang === 'EN' ? 'VOTE':'โหวต');
                var txtResetPoll = (lang === 'EN' ? 'RESET':'รีเซ็ต');
                var tbl = "<div class='table-responsive'>"+
                            "<table class='table table-bordered table-hover chayanonPoll-tbl'>"+
                                "<tr>"+
                                    "<th class='th-setting' rowspan='2'>"+txtQuestion+"</th>"+
                                    "<th class='th-setting' colspan='5'>"+txtScore+"</th>"+
                                "</tr>"+
                                "<tr>"+
                                    "<td class='th-setting'>5</td>"+
                                    "<td class='th-setting'>4</td>"+
                                    "<td class='th-setting'>3</td>"+
                                    "<td class='th-setting'>2</td>"+
                                    "<td class='th-setting'>1</td>"+
                                "</tr>";
                                
                $.each(data,function(i,v){
                    var num = parseInt(v.id);//นำ id ไปใช้ตอนบันทึกผล poll
                    tbl+="<tr>"+
                            "<td class='col-questionPoll'>"+v.question_name+"</td>"+
                            "<td><input type='radio' name='PollQuestion_"+num+"' value='5'></td>"+
                            "<td><input type='radio' name='PollQuestion_"+num+"' value='4'></td>"+
                            "<td><input type='radio' name='PollQuestion_"+num+"' value='3'></td>"+
                            "<td><input type='radio' name='PollQuestion_"+num+"' value='2'></td>"+
                            "<td><input type='radio' name='PollQuestion_"+num+"' value='1'></td>"+
                        "</tr>";
                });
                tbl+="<tr>"+
                        "<td colspan='6'>"+
                            "<button class='btn btn-success btn-lg'><span class='glyphicon glyphicon-thumbs-up'></span>&nbsp;"+txtSavePoll+"</button>"+
                            "<button class='btn btn-danger btn-lg'><span class='glyphicon glyphicon-refresh'></span>&nbsp;"+txtResetPoll+"</button>"+
                        "</td>"+
                    "</tr>";
                tbl+="</table></div>"; 
                return tbl;
            };
            ajax_post('call_blog_question_poll.php',{'lang':JSON.stringify(lang)}).done(function(data){
                deferQuestion.resolve(htmQuestion(data,lang));
            });
            return deferQuestion.promise();
        };
        var PollData = ajax_post('call_result_vote_poll.php');
        var PlotPoll = function(ajaxdata,elm){
            elm.empty();
            var txtTitle = (lang === 'EN' ? 'Result Poll Website':'ผลสำรวจการใช้งานเว็บไซต์');
            var yAxis = (lang === 'EN' ? 'Vote Count':'จำนวน(ครั้ง)');
            var xAxis_categories = (lang === 'EN' ? ['Question1', 'Question2',
                'Question3', 'Question4', 'Question5']:['คำถามที่1', 'คำถามที่2',
                'คำถามที่3', 'คำถามที่4', 'คำถามที่5']);
            var xAxis_title = (lang === 'EN' ? 'Question':'ข้อคำถาม');
            var name_series = (lang === 'EN' ? 'score':'คะแนน');
            var score5 = [];score5.length = 0;
            var score4 = [];score4.length = 0;
            var score3 = [];score3.length = 0;
            var score2 = [];score2.length = 0;
            var score1 = [];score1.length = 0;
            var series = [];series.length = 0;
            $.each(ajaxdata,function(i){//console.log(ajaxdata[i].score5);
                score5[i] = Math.floor(parseInt(ajaxdata[i].score5));
                score4[i] = Math.floor(parseInt(ajaxdata[i].score4));
                score3[i] = Math.floor(parseInt(ajaxdata[i].score3));
                score2[i] = Math.floor(parseInt(ajaxdata[i].score2));
                score1[i] = Math.floor(parseInt(ajaxdata[i].score1));
            });
            series.push(
                {name: '1'+ name_series,data:score1},
                {name: '2'+ name_series,data:score2},
                {name: '3'+ name_series,data:score3},
                {name: '4'+ name_series,data:score4},
                {name: '5'+ name_series,data:score5}
            );
            elm.highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: txtTitle
                },
                xAxis: {
                    categories: xAxis_categories,
                    title: {
                        text: xAxis_title
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: yAxis,
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    },
                    allowDecimals: false
                },
                tooltip: {
                    valueSuffix: ' vote'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ('#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series:series
            });
        };
        $.when(LoadQuestion(lang)).done(function(Question){
            var divPoll = $("#SKPHPoll");
            //divPoll.TogglePanelBody();
            divPoll.empty().append("<div class='row'></div><div class='row'></div>");
            var QuestionPoll = divPoll.children('div:nth-child(1)');
            var divResultPoll = divPoll.children('div:nth-child(2)');
            
            QuestionPoll.append(Question);//append html question
            
            var btnVote = QuestionPoll.find('button:nth-child(1)');
            var btnReset = QuestionPoll.find('button:nth-child(2)');
            var btnResultPoll = QuestionPoll.find('button:nth-child(3)');//call ผลมา plot กราฟ
            var resetFormPoll = function(){
                $("input[name^='PollQuestion_']").each(function(){
                    $(this).prop('checked',false);
                });
            };
            
            
            var ResultPOLL = {};
            var getRDOvals = function (){
                var RdoName =  [];RdoName.length = 0;
                $("input[name^='PollQuestion_']").each(function(){//เก็บ radio name ทั้งหมด เข้า array
                    if($.inArray( $(this).attr('name'),RdoName   ) === -1){
                        RdoName.push($(this).attr('name'));
                    }
                });

                $.each(RdoName,function(i,v){//เก็บค่าเข้า object ResultPOLL
                    ResultPOLL[v] = 0;//กรณีไม่ได้ตอบ
                    $("input[name='"+v+"']:radio").on('change',function(e){
                        e.stopPropagation();
                        if($(this).prop('checked')){
                            ResultPOLL[v] = parseInt($(this).val());//console.log('v='+v+',val='+parseInt($(this).val()));
                        }
                    });
                });
            };//เก็บ ค่า Radio เข้า ResultPOLL
            getRDOvals();
            
            //Reset Poll
            btnReset.click(function(e){
                e.stopPropagation();
                resetFormPoll();
            });
            
            //Vote Poll
            btnVote.off('click').on('click',function(e){
                e.stopPropagation();
                var cnt = 0;//นับข้อที่ไม่ได้ตอบ
                $.each(ResultPOLL,function(i,v){
                    if(v===0){cnt+=1;}//console.log('i='+i+',v='+v+',cnt='+cnt);
                });
                if(cnt===0){
                    ClearModalOK();
                    ajax_post('vote_poll.php',{'data':JSON.stringify(ResultPOLL)}).done(function(data){
                        if(data==="ok"){
                            ajax_post('call_result_vote_poll.php').done(function(data){
                                PlotPoll(data,divResultPoll);
                            });
                            resetFormPoll();
                            ResultPOLL = {};
                            getRDOvals();
                            ModalOK.find('.modal-body').children('span').html('<font size=+1 color = green>ขอขอบคุณสำหรับการให้ข้อมูล !!</font>');
                            ModalOK.children('.modal-dialog').addClass('modal-sm');
                            ModalOK.modal('show');
                            ModalOK.on('hidden.bs.modal',function(e){
                               e.stopPropagation(); 
                               ClearModalOK();
                            });
                            //PlotPoll(divResultPoll,lang,RsltPoll);
                        }
                    });
                }else{
                    ClearModalOK();
                    ModalOK.find('.modal-body').children('span').html('<font size=+1 color = red>ตอบไม่ครบ !!</font>');
                    ModalOK.children('.modal-dialog').addClass('modal-sm');
                    ModalOK.find('.modal-header').addClass('bg-danger');
                    ModalOK.modal('show');
                    ModalOK.on('hidden.bs.modal',function(e){
                       e.stopPropagation(); 
                       ClearModalOK();
                    });
                }
            });
            
            //Plot Poll
            PollData.done(function(data){PlotPoll(data,divResultPoll);});
            btnResultPoll.click(function(e){
                e.stopPropagation(); 
                ajax_post('call_result_vote_poll.php').done(function(data){
                   PlotPoll(data,divResultPoll);
                });
            });
        });
    };
    var BlogComplaint_HTML = function(lang){
        var objComplaint = $("#complaint").empty();
        //objComplaint.TogglePanelBody();
        var txtForm = function(){
            var txtTopic = (lang === 'EN' ? 'Topic':'เรื่อง');
            var txtName = (lang === 'EN' ? 'Name':'ชื่อ-สกุล');
            var txtEmail = (lang === 'EN' ? 'Email(for feedback)':'อีเมล์(สำหรับตอบกลับ)');
            var txtComplaint = (lang === 'EN' ? 'Complaint':'ร้องเรียนหรือข้อเสนอแนะ');
            var txtAntiSpam = (lang === 'EN' ? 'Click Puzzle for matching':'คลิก เพื่อจับคู่กับภาพที่เห็น');
            var txt = 
                "<form>"+    
                    "<div class='form-group'>"+
                        "<label for='complaint_topic' class='col-md-5 control-label'>"+txtTopic+"&nbsp;<i class='fa fa-pencil'></i></label>"+
                        "<div class='col-md-7'>"+
                            "<input type='text' class='form-control' name='complaint_topic' placeholder='"+txtTopic+"'>"+
                        "</div>"+
                    "</div>"+
                    "<div class='form-group'>"+
                        "<label for='complaint_name' class='col-md-5 control-label'>"+txtName+"&nbsp;<i class='fa fa-user'></i></label>"+
                        "<div class='col-md-7'>"+
                            "<input type='text' class='form-control' name='complaint_name' placeholder='"+txtName+"'>"+
                        "</div>"+
                    "</div>"+
                    "<div class='form-group'>"+
                        "<label for='complaint_email' class='col-md-5 control-label'>"+txtEmail+"&nbsp;<i class='fa fa-at'></i></label>"+
                        "<div class='col-md-7'>"+
                            "<input type='text' class='form-control' name='complaint_email' placeholder='"+txtEmail+"'>"+
                        "</div>"+
                    "</div>"+
                    "<div class='form-group'>"+
                        "<label for='complaint_detail' class='col-md-5 control-label'>"+txtComplaint+"&nbsp;</label>"+
                        "<div class='col-md-7'>"+
                            "<input type='text' class='form-control' name='complaint_detail' placeholder='"+txtComplaint+"'>"+
                        "</div>"+
                    "</div>"+
                    "<div class='form-group'>"+
                        "<div class='row-fluid col-md-5'>"+
                            "<div class='span6'><label class='control-label'>"+txtAntiSpam+"</label></div>"+
                            "<div class='span6'><label class='control-label'>(Anti Spam Bot)</label></div>"+
                        "</div>"+
                        "<div class='col-md-7'>"+
                            "<div></div>"+
                            "<input type='hidden' class='puzzleCAPTCHA' name='NameConfirmOnServer'>"+
                        "</div>"+  
                    "</div>"+
                    "<div class='form-group'>"+
                        "<div class='col-md-offset-3 col-md-9'>"+
                            "<button type='submit' disabled='true' class='btn btn-lg btn-success'>Send</button>"+
                            "<span></span>"+
                        "</div>"+
                    "</div>"+
                "</form>";
    
            return txt;
        };
        objComplaint.append(txtForm);   
        
        var fform = objComplaint.find('form');
        var BtnSend = fform.children('div:nth-child(6)').find('button');
        var CaptchaConfirmServer = fform.children('div:nth-child(5)').find("input[name='NameConfirmOnServer']");
        var CaptchaImg = CaptchaConfirmServer.parent('div').children('div:first-child');
        var MsgErr = fform.children('div:nth-child(6)').find('span').css({'background-color':'yellow','font-size':'150%'});
        var txtMsgErr = (lang === 'EN' ? 'Empty field or Email incorrect!!':'กรอกข้อมูลให้ครบ หรือ ตรวจสอบรูปแบบอีเมล์อีกครั้ง');
        CaptchaImg.PuzzleCAPTCHA({
            imageURL:'img/EService/mini16module.png',//รูปภาพจากแหล่งใดๆที่เป็น http
            width:'auto',
            height:'auto',
            targetInput:CaptchaConfirmServer,//input hidden ที่จะส่งค่าไปฝั่ง server เพื่อตรวจสอบ
            targetVal:'CaptchaChayanonValidated',//ค่าตรวจสอบที่ฝั่ง server แม้ button จะ enable แล้วก็ตาม (จับคู่ถูก)
            targetButton:BtnSend
        });
        BtnSend.click(function(e){
            e.preventDefault();
            e.stopPropagation();
            var chk = 0;
            fform.find("input[type=text]").each(function(idx,elm){
                if($(elm).val().length === 0){
                    chk+=1;//console.log('name='+$(elm).attr('name')+',val='+$(elm).val());
                }
                if($(elm).attr('name')==='complaint_email'){
                    if(!isValidEmailAddress($(elm).val())){
                        chk+=1;
                    }
                }
            });
            if(chk===0){
                MsgErr.html("");
                ajax_post('post_complaint.php',{'data':JSON.stringify(fform.serializeObject())}).done(function(data){
                    if(data==='OK'){
                        window.location.reload(true);
                    }else{
                        MsgErr.html(data);
                    }
                });
            }else{
                MsgErr.html(txtMsgErr);
            }
        });
        
    };
    var Footer_HTML = function(lang){
        var footer = $(document.body).find('.chayanon-footer').empty();
        var htm = function(lang){
            var txtCopyright = (lang === 'EN' ? 'Copyright © 2016 Songkhla Rajanagarindra Psychiatric Hospital (SKPH)':
                    'ลิขสิทธิ์ © 2559 โรงพยาบาลจิตเวชสงขลาราชนครินทร์');
            var txtAddress = (lang === 'EN' ? 
                "<strong>Address:</strong>472 Triburi RD. Boryang MaungSongkhla zipcode 90000":
                "<strong>ที่อยู่:</strong>472 ถนนไทรบุรี ตำบลบ่อยาง อำเภอเมือง จังหวัดสงขลา 90000");
            var txtPhone = (lang === 'EN' ? 
                "<strong>Phone:</strong>(074)317400 FAX (074)323202":
                "<strong>โทร:</strong>(074)317400 แฟกซ์ (074)323202");
            var txt = 
            "<div class='row text-center'><mark>"+txtCopyright+"</mark></div>"+        
            "<div class='row'>"+
                "<div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>"+
                    "<ul class='chayanonfooter-ul'>"+
                        "<li><a href='#addr'><i class='fa fa-map-marker'></i>&nbsp;&nbsp;"+txtAddress+"</a></li>"+
                        "<li><a href='#'><i class='fa fa-phone'></i>&nbsp;&nbsp;"+txtPhone+"</a></li>"+
                        "<li><a href='mailto:skph@skph.go.th'><i class='fa fa-envelope'></i>&nbsp;&nbsp;skph@skph.go.th</a></li>"+
                    "</ul>"+
                "</div>"+
                "<div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>"+
                    /*
                    "<div class='row text-left'><font color='white'>Follow Us</font></div>"+
                    //"<div id='fb-root'></div>"+
                    "<div class='row fb-like' "+
                        "data-href='http://www.skph.go.th'  "+
                        "data-width='150' "+
                        "data-layout='standard' "+
                        "data-action='like' "+
                        "data-show-faces='true' "+
                        "data-share='true' "+
                      ">"+
                    "</div>"+
                    
                    "<div class='row statcounter'>"+
                        "<a title='website "+
                            "statistics' href='http://statcounter.com/free-web-stats/' "+
                            "target='_blank'><img class='statcounter' "+
                            "src='//c.statcounter.com/10967873/0/0c570076/0/' "+
                            "alt='website statistics'>&nbsp;VISITS"+
                        "</a>"+
                    "</div>"+
                    */
                    "<div class='row'>"+
                        "<a href='https://www.google.com/analytics/'>"+
                            "<img src='img/GA/logo-ga.png' class='img-responsive' style='width:40%;height:40%;'>"+
                        "</a>"+
                    "</div>"+
                "</div>"+
            "</div>";
            return txt;
        };
        footer.append(htm(lang));
        /* แสดง popup ที่อยู่โรงพยาบาล*/
        var aAddrPOPUP = footer.children('div:nth-child(2)').children('div:nth-child(1)').find('a').first();
        aAddrPOPUP.click(function(e){
            e.preventDefault();
            e.stopPropagation();
            var showAddr = function(AddrData){
                ModalOK.find('.modal-body').children('span').html(AddrData);
                ModalOK.modal('show');        
                ModalOK.on('hidden.bs.modal',function(e){
                   e.stopPropagation(); 
                   ClearModalOK();
                });
            };
            if( $(this).attr('href') === '#addr' ){
                ajax_post('call_blog_about.php',{'lang':JSON.stringify(lang)}).done(function(data){
                    $.each(data,function(i,v){
                       if(v.menu_keylink ==='mn_about_contact') {
                           showAddr(v.content);
                       }
                    });
                });
            }
        });
    };
    var BlogWebLink_HTML = function(lang){
        ajax_post('call_blog_weblink.php',{'lang':JSON.stringify(lang)}).done(function(data){
            if (typeof data === 'object'){
                var WebLink = $("#WebLink").empty();
                var htm = "<div class='panel-group' id='accordionWebLink' role='tablist' aria-multiselectable='true'>";
                $.each(data,function(i,v){
                    htm +=
                    "<div class='panel panel-default'>"+
                        "<div class='panel-heading' role='tab' id='headingWeblink"+v.menu_keylink+"'>"+
                            "<h2 class='panel-title'>"+
                                "<a role='button' data-toggle='collapse'  "+
                                    "data-parent='#accordionWebLink' href='#WeblinkContent"+v.menu_keylink+"' "+
                                    "aria-expanded='false' aria-controls='"+v.menu_keylink+"'>"+
                                    v.menu_name +
                                "</a><i class='indicator glyphicon glyphicon-chevron-down  pull-right'></i>"+
                            "</h2>"+
                        "</div>"+
                        "<div id='WeblinkContent"+v.menu_keylink+"' class='panel-collapse collapse' role='tabpanel' aria-labelledby='headingWeblink"+v.menu_keylink+"'>"+
                            "<div class='panel-body'>"+v.content+"</div>"+
                        "</div>"+
                    "</div>";
                });
                htm +="</div>"; 
                WebLink.append(htm);
                //WebLink.TogglePanelBody();
            }
            else
            {
                $("#WebLink").html(data);
            }
        });
    };
    var BlogLaw_HTML = function(lang){
        ajax_post('call_blog_law.php',{'lang':JSON.stringify(lang)}).done(function(data){
            if (typeof data === 'object'){
                var Law = $("#Law").empty();
                var htm = "<div class='panel-group' id='accordionLaw' role='tablist' aria-multiselectable='true'>";
                $.each(data,function(i,v){
                    htm +=
                    "<div class='panel panel-default'>"+
                        "<div class='panel-heading' role='tab' id='headingLaw"+v.menu_keylink+"'>"+
                            "<h2 class='panel-title'>"+
                                "<a role='button' data-toggle='collapse'  "+
                                    "data-parent='#accordionLaw' href='#LawContent"+v.menu_keylink+"' "+
                                    "aria-expanded='false' aria-controls='"+v.menu_keylink+"'>"+
                                    v.menu_name +
                                "</a><i class='indicator glyphicon glyphicon-chevron-down  pull-right'></i>"+
                            "</h2>"+
                        "</div>"+
                        "<div id='LawContent"+v.menu_keylink+"' class='panel-collapse collapse' role='tabpanel' aria-labelledby='headingLaw"+v.menu_keylink+"'>"+
                            "<div class='panel-body'>"+v.content+"</div>"+
                        "</div>"+
                    "</div>";
                });
                htm +="</div>"; 
                Law.append(htm);
                //Law.TogglePanelBody();
            }
            else
            {
                $("#Law").html(data);
            }
        });
    };
    var Blogkm_HTML = function(lang){
        var km = $("#km").empty();
        //km.TogglePanelBody();
        var getMenuTabs = function(lang){
            var deferMN = $.Deferred();
            ajax_post('call_blog_mn_km.php',{'lang':JSON.stringify(lang)}).done(function(data){    
                var htm = "<div class='tabs-x  tabs-left tab-bordered'>"+
                            "<ul class='nav nav-tabs' data-tabs='tabs'>";
                if (typeof data === 'object')
                {
                    $.each(data,function(i,v){
                       htm+="<li ><a href='#"+v.menu_keylink+"'  data-toggle='tab'>"+
                               (lang === 'EN' ? v.menu_name_en:v.menu_name_th)
                               +"</a></li>"; 
                    });
                    htm+="</ul><div class='tab-content'></div></div>";
                }
                deferMN.resolve(htm);
            });
            return deferMN.promise();
        };
        var getContentTabs = function(lang,keylink,elmTabx){
            var CreateContent = function(data){
                var htmcontent = "";
                var htmbtn = "";
                if (typeof data === 'object')
                {
                    $.each(data,function(i,v){
                        if(v!==""){
                            if(i==="htmcontent"){
                                htmcontent += v;
                            }
                            if(i==="htmbtn"){
                                htmbtn += v;
                            }
                        }
                    });
                }
               return htmcontent+htmbtn;
            };
            var FirstPageContentTabs = function(){
                var DeferfirstPage = $.Deferred();
                var ajaxPageOne = ajax_post('call_blog_content_km.php',{
                    'lang':JSON.stringify(lang),
                    'menu_keylink':JSON.stringify(keylink),
                    'page':JSON.stringify(1)
                });
                ajaxPageOne.done(function(data){
                    DeferfirstPage.resolve(CreateContent(data));
                });
                return DeferfirstPage.promise();
            };
            $.when(FirstPageContentTabs()).done(function(htmFirstPage){
                elmTabx.children('.tab-content').empty().append(htmFirstPage);
                elmTabx.tabsX({
                    enableCache: true,
                    cacheTimeout:300000,//5นาที ให้ refresh cache ใหม่
                    maxTitleLength: 10
                });
                elmTabx.off("click",".mypg a").on( "click", ".mypg a", function (e){
                    e.preventDefault();
                    var page = $(this).attr("data-page"); //get page number from link
                    var ajaxPageNext = ajax_post('call_blog_content_km.php',{
                        'lang':JSON.stringify(lang),
                        'menu_keylink':JSON.stringify(keylink),
                        'page':JSON.stringify(page)
                    });
                    ajaxPageNext.done(function(htmNextPage){
                        elmTabx.children('.tab-content').empty().append(CreateContent(htmNextPage));
                        elmTabx.tabsX({
                            enableCache: true,
                            cacheTimeout:300000,//5นาที ให้ refresh cache ใหม่
                            maxTitleLength: 10
                        });
                    });
                });
            });
        };
        $.when(getMenuTabs(lang)).done(function(MenuTabs){
            km.empty().append(MenuTabs);
            var tabx = km.children('div:nth-child(1)');
            tabx.find('.nav-tabs [data-toggle="tab"]').on('tabsX.click', function(e){
                e.preventDefault();
                var keylinktab = ($(this).attr('href')).replace('#','');
                getContentTabs(lang,keylinktab,tabx);
            });
            tabx.find('.nav-tabs [data-toggle="tab"]').trigger('tabsX.click');//trigger ทีหลังจากเก็บ event on('tabsX.click)
        });
    };
    var BlogFormDownload_HTML = function(lang){
        var downloadSKPHForm = $("#downloadSKPHForm").empty();
        //downloadSKPHForm.TogglePanelBody();
        var CallPage = function(lang,page){
            var DeferfirstPage = $.Deferred();
            var ajaxPage = ajax_post('call_blog_doc_download.php',{
                'lang':JSON.stringify(lang),
                'page':JSON.stringify(page)
            });
            ajaxPage.done(function(data){
                var htmcontent = "",htmbtn="";
                if (typeof data === 'object')
                {
                    $.each(data,function(i,v){
                        
                        if(v!==""){
                            if(i==="htmcontent"){
                                htmcontent += v;
                            }
                            if(i==="htmbtn"){
                                htmbtn += v;
                            }
                        }
                    });
                }
                DeferfirstPage.resolve(htmcontent+htmbtn);
            });
            return DeferfirstPage.promise();
        };
        $.when(CallPage(lang,1)).done(function(firstpage){
            downloadSKPHForm.empty().append(firstpage);
            downloadSKPHForm.off("click",".mypg a").on( "click",".mypg a",function (e){
                e.preventDefault();
                e.stopPropagation();
                var page = $(this).attr("data-page");
                (CallPage(lang,page)).done(function(nextpage){
                    downloadSKPHForm.empty().append(nextpage);
                });
            });
        });
    };
    /*var BlogQA_HTML = function(lang){
        var QA = $("#QA").empty();
        //QA.TogglePanelBody();
        var PostQuestionEvt = function(QA,htmlPage){
            QA.empty().append(htmlPage);
            //Declare variable
            var postDiv = QA.find('.container div:first-child');                    
            var txtTopicPost = postDiv.children('div:nth-last-child(4)').find('input[type=text]');
            var txtPost = postDiv.children('div:nth-last-child(3)').find('textarea');
            var txtCaptcha = postDiv.children('div:nth-last-child(2)').find('input[type=text]');
            var spanCaptcha = postDiv.children('div:nth-last-child(2)').find('span');
            var btnPost = postDiv.children('div:nth-last-child(1)').find('button');
            var Msg = "<span style='background-color:red';>error!! validate </span>";
            var sendData = function(data){
                var def = $.Deferred();
                var postData = ajax_post('post_webboard.php',{'data':JSON.stringify(data)});
                postData.done(function(data){
                    def.resolve(data);
                });
                return def.promise();
            };
            var questionDiv = QA.find('.container div:last-child');
            var headTbl = questionDiv.find('table > thead > tr');
            //Translate
            if(lang==='EN')
            {
                btnPost.text('POST Your Question');
                postDiv.find('h3').text('Question-Answer');
                postDiv.find('h5').text('To discuss mental health issues, child and adolescent psychiatry, geriatric psychiatry , drugs , etc ');
                txtTopicPost.parent('div').children('label').text('Topic:');
                txtPost.parent('div').children('label').text('Detail:');
                txtCaptcha.parent('div').children('label').text('Anti Spam Bot:');
                txtTopicPost.attr('placeholder','Your Topic here');
                txtPost.attr('placeholder','Your Question Detail here');
                txtCaptcha.attr('placeholder','What? character you see');
                headTbl.children('th:nth-child(2)').html('Topic');
                headTbl.children('th:nth-child(3)').html('Reply by');
                headTbl.children('th:nth-child(4)').html('Date Post');
            }
            else
            {
                btnPost.text('โพสต์ข้อคำถาม');
                postDiv.find('h3').text('ถาม-ตอบ');
                postDiv.find('h5').text('เพื่อปรึกษาปัญหาสุขภาพจิต,จิตเวช,จิตเวชเด็กและวัยรุ่น,ผู้สูงอายุ,ระบบประสาท,ยาเสพติด ฯลฯ');
                txtTopicPost.parent('div').children('label').text('หัวข้อ:');
                txtPost.parent('div').children('label').text('รายละเอียด:');
                txtCaptcha.parent('div').children('label').text('ป้องกันสแปมบอท:');
                txtTopicPost.attr('placeholder','หัวข้อคำถาม');
                txtPost.attr('placeholder','เขียนรายละเอียดของข้อคำถามคุณที่นี่');
                txtCaptcha.attr('placeholder','พิมพ์ตัวอักษรตามที่มองเห็น');
                headTbl.children('th:nth-child(2)').html('หัวข้อ');
                headTbl.children('th:nth-child(3)').html('ตอบโดย');
                headTbl.children('th:nth-child(4)').html('วันที่โพสต์ถาม');
            }
           
            //event
            questionDiv.find('table > tbody > tr').find('a[data-toggle=popover]').click(function(e){
               e.preventDefault(); 
            }).popover();
            btnPost.click(function(e){
                e.preventDefault();
                e.stopPropagation(); 
                var divBtn = $(this).parent('div');
                if(divBtn.find('span').length!==0){
                    divBtn.find('span').remove();
                }
                if( chkEmptyText(txtTopicPost.val()) && chkEmptyText(txtPost.val()) && chkEmptyText(txtCaptcha.val()) && txtCaptcha.val() === spanCaptcha.text() )
                {
                    var data = {'topicPost':txtTopicPost.val(),'detailPost':txtPost.val()};
                    $.when( sendData(data),CallQuestionPerPage(1) )
                    .done(function(resp1,htmlpage){
                        if(resp1==="ok"){
                            PostQuestionEvt(QA,htmlpage);
                        }
                    });
                }
                else
                {
                    divBtn.append(Msg);
                }
            });
        };
        var CallQuestionPerPage = function(page){
            var DeferfirstPage = $.Deferred();
            var ajaxPage = ajax_post('call_webboard_question.php',{
                'page':JSON.stringify(page)
            });
            ajaxPage.done(function(data){
                var htmcontent = "",htmbtn="";
                if (typeof data === 'object')
                {
                    $.each(data,function(i,v){

                        if(v!==""){
                            if(i==="htmcontent"){
                                htmcontent += v;
                            }
                            if(i==="htmbtn"){
                                htmbtn += v;
                            }
                        }
                    });
                }
                DeferfirstPage.resolve(htmcontent+htmbtn);
            });
            return DeferfirstPage.promise();
        };            
        $.when(CallQuestionPerPage(1)).done(function(firstpage){
            PostQuestionEvt(QA,firstpage);
            QA.off("click",".mypg a").on( "click",".mypg a",function (e){
                e.preventDefault();
                e.stopPropagation();
                var page = $(this).attr("data-page");
                CallQuestionPerPage(page).done(function(nextpage){
                    PostQuestionEvt(QA,nextpage);
                });
            });
        });
    };*/
    var Blogbrochures_HTML = function(lang){
        var skphbrochures = $("#skphbrochures").empty();
        //skphbrochures.TogglePanelBody();
        var createHTM_byCalcRow = function(d1,d2){
            var htm = "";
            var len = d1.length;
            var fixCol = 3;
            var row = 0;
            if( (len/fixCol) > 0  ){//กรณีผลลัพธ์ไม่เป็น 0 (ตัวตั้งมากกว่าตัวหาร)
                if( (len%fixCol) === 0  ){//กรณีไม่มีเศษ
                    row = len/fixCol; 
                }else{
                    row = Math.floor(len/fixCol) + 1;
                }
            }else{//กรณีผลลัพธ์เป็น 0 (ตัวตั้งน้อยกว่าตัวหาร)
                row = 1;
            }//console.log('len='+len+',row='+row);
            if(row > 0){
                var cnt = 0;
                for(var i = 0;i<row;i++){//แถว
                    htm += "<div class='row'>";
                    for(var j = 0;j<fixCol;j++){//หลัก
                        $.each(d1,function(i,v){
                            if(i===cnt){
                                htm += 
                                "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>"+
                                    "<a href='"+v.image_file_path+"' "+
                                        " style='text-decoration: none;' class='swipebox'>"+
                                        "<img src='"+v.image_file_path+"' class='img-responsive' style='margin:0 auto;'>"+
                                    "</a>"+
                                "</div>";
                            }
                        });
                        cnt+=1;
                    }
                    htm +="</div>";
                }
            }else{
                htm = "";
            }
            return "<div class='row'>"+d2+"</div>"+htm;
        };
        var FirstPagination = function(){
            var Mydeferred = $.Deferred();
            var firstDeferred = ajax_post('call_blog_skphbrochures.php',{'page':JSON.stringify(1)});
            firstDeferred.done(function(data){
                Mydeferred.resolve(createHTM_byCalcRow(data[0],data[1]));
                skphbrochures.find(".swipebox").swipebox();
            });
            return Mydeferred.promise();
        };
        $.when(FirstPagination()).done(function(htm1){
            skphbrochures.empty().append(htm1);
            skphbrochures.off("click").on( "click", ".mypg a", function (e){
                e.preventDefault();
                var page = $(this).attr("data-page"); //get page number from link
                var nextDeferred = ajax_post('call_blog_skphbrochures.php',{'page':JSON.stringify(page)});
                nextDeferred.done(function(data){
                    skphbrochures.empty().append(createHTM_byCalcRow(data[0],data[1]));
                });
            });
        });
    };
    var BlogMultimedia_HTML = function(lang){
        var skphmultimedia = $("#skphmultimedia").empty();
        //skphmultimedia.TogglePanelBody();
        ajax_post('call_blog_skphmultimedia.php').done(function(data){
            var txt = "";
            if (typeof data === 'object'){
                $.each(data,function(i,v){
                    txt += "<div class='row col-lg-11 chayanon-col-centered'>"+v.html_markup+"</div>";
                });
            }
            skphmultimedia.empty().append(txt);
        });
    };
    var BlogPopupStartPage_HTML = function(){
        var md = $("<div class='modal'>"+
                    "<div class='modal-dialog modal-lg'>"+
                      "<div class='modal-content'>"+
                        "<div class='modal-body'></div>"+
                      "</div>"+
                    "</div>"+
                   "</div>");
       
        var page = function(page){
            var def = $.Deferred();
            ajax_post('call_blog_popup_startpage.php',{'page':JSON.stringify(page)}).done(function(data){    
                var txt = "";
                var htmArr = [];htmArr.length = 0;
                var strImg = "";
                var strTitle = "";
                var strContent = "";
                if (typeof data === 'object')
                {
                    $.each(data,function(i,v){
                        if(i===0){
                            $.each(v,function(j,k){
                                if(!chkEmptyText(k.img_content)||k.img_content===null){
                                    strImg = "";
                                }else{
                                    strImg = "<div class='row'><img class='img-responsive' src='"+k.img_content+"'></div>";

                                }
                                if(!chkEmptyText(k.popup_title)|| k.popup_title ===null){
                                    strTitle = "";
                                }else{
                                    strTitle = "<div class='row'>"+k.popup_title+"</div>";
                                }
                                if(!chkEmptyText(k.popup_content)|| k.popup_content ===null){
                                    strContent = "";
                                }else{
                                    strContent = "<div class='row'>"+k.popup_content+"</div>";
                                }
                                txt += 
                                    "<div class='container-fluid'>"+
                                        strTitle+   
                                        strContent+
                                        strImg+
                                        k.post_datetime+
                                        "<div class='row'><a href='#' data-dismiss='modal' class='btn center-block'><h4 class='btn btn-default btn-lg'>Close</h4></a></div>";
                                    "</div>";
                            });
                            htmArr[0]=txt;
                        }

                        if(i===1){
                            htmArr[1]=v;
                        }
                    });
                }else{
                    txt +=data;
                }
                if(htmArr[0]){
                    var mdb = md.find('.modal-body').empty().append(htmArr[1]+htmArr[0]);
                    var tabularObj = mdb.find('.myTubular');
                    var runTubular = function(tabularObj){
                        if( tabularObj[0]  && chkEmptyText(tabularObj.data('videoplayid'))){
                            var mdW = (md.children('.modal-dialog').width());
                            var videoArr = tabularObj.data('videoplayid').split(',');
                            var vidI = 0;
                            tabularObj.empty();
                            tabularObj.tubular({
                                wrapperZIndex:98,
                                width:mdW,
                                videoId: videoArr[vidI], 
                                mute: false,
                                videoFinished: function (state, player) {
                                    vidI++;
                                    vidI %= videoArr.length;
                                    var nextVideo = videoArr[vidI];
                                    player.loadVideoById(nextVideo);
                                }
                            });
                        }
                    };
                    
                    md.modal('show');
                    runTubular(tabularObj);
                    
                   /*
                    md.on('shown.bs.modal', function(e) {
                        e.preventDefault();
                        runTubular(tabularObj);
                    }).modal('show');
                    */   
                    md.on('hidden.bs.modal',function(e){
                        e.stopPropagation(); 
                        mdb.find('.mypg a').off('click');
                        $(this).data('bs.modal', null);
                    });
                    def.resolve(mdb);
                }
            });
            return def.promise();
        };//จบสร้าง html จาก page

        $.when(page(1)).done(function(mdb){
            mdb.off("click",".mypg a").on( "click",".mypg a",function (e){
                e.preventDefault();
                e.stopPropagation();
                var Nextpage = parseInt($(this).attr("data-page"));
                $.when.apply(this,page(Nextpage));
            });
        });
    };
    var BlogVidBG_HTML = function(){
        var vidBG =  $("#vidBG");
        /*
        $("#vidBG").bgVideo({
            fullScreen: false, // Sets the video to be fixed to the full window - your <video> and it's container should be direct descendents of the <body> tag
            fadeIn: 500, // Milliseconds to fade video in/out (0 for no fade)
            pauseAfter: 120, // Seconds to play before pausing (0 for forever)
            fadeOnPause: false, // For all (including manual) pauses
            fadeOnEnd: true, // When we've reached the pauseAfter time
            showPausePlay: true, // Show pause/play button
            pausePlayXPos: 'right', // left|right|center
            pausePlayYPos: 'top', // top|bottom|center
            pausePlayXOffset: '15px', // pixels or percent from side - ignored if positioned center
            pausePlayYOffset: '15px' // pixels or percent from top/bottom - ignored if positioned center
        });
        */
       // When the window is resized
        $(window).resize(function() {
          var newWidth = vidBG.parent().width();
          vidBG.each(function() {// Resize all videos according to their own aspect ratio
            var $el = $(this);
            $el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
          });
        // Kick off one resize to fix all videos on page load
        }).resize();
    };
    var BlogNewsAct_HTML = function(lang){
        var func_run_easyTicker = function(){
            var def = $.Deferred();
            var txt="<div class='vticker'>";
            txt+="<ul class='list-group list-inline'>"+
                    "<li>List 2</li>"+
                    "<li>List 3</li>"+
                    "<li>List 4</li>"+
                    "<li>List 5 </li>"+
                 "<ul>"+   
            "</div>";
            var newsAct = $("#newsAct").empty().append(txt);

            newsAct.closest('.row').find('.panel-heading h3').empty().append(
                    "<span class='glyphicon glyphicon-camera'></span>&nbsp;"+
                    "<a href='#' class='layoutTextMenu' key='newsAct'>ข่าวกิจกรรม</a>&nbsp;&nbsp;&nbsp;"+
                    "<a href='#' class='btn btn-default vticker_up'><span class='glyphicon glyphicon-circle-arrow-up'></span>UP</a>"+
                    "<a href='#' class='btn btn-default vticker_down'><span class='glyphicon glyphicon-circle-arrow-down'></span>DOWN</a>"
            );

            newsAct.children('.vticker').easyTicker({
                    direction: 'up',
                   // easing: 'easeInOutBack',
                   // speed: 'slow',
                    interval: 2500,
                    height: 'auto',
                    visible: 10,
                    mousePause: 0,
                    controls: {
                            up: '.vticker_up',
                            down: '.vticker_down',
                            toggle: '.vticker_toggle',
                            stopText: 'Stop !!!'
                    }
            }).data('easyTicker');
            ajax_post('call_blog_activitynews.php',{'lang':JSON.stringify(lang)}).done(function(data){
                if (typeof data === 'object')
                {
                    var txt = "";
                    $.each(data,function(i,v){
                        txt+="<li>"+
                                "<a href='#vticker_id_"+v.id+"'>"+
                                    "<div class='row no-gutter'>"+
                                        "<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'><img class='img-responsive'  src='img/ActivityNewsIMG/"+v.head_news_image_thumb+"'></div>"+
                                        "<div class='col-xs-12 col-sm-6 col-md-8 col-lg-8'>"+v.head_news_text+"###"+v.datetime_upload+"###</div>"+
                                    "</div>"+
                                "</a>"+
                              "</li>";
                    });
                    newsAct.find(".vticker ul").empty().append(txt);
                }
            });
            
            
            def.resolve(newsAct);
            return def.promise();
        };
        var func_display_DetailNews = function(target){
            var id = target.replace('#vticker_id_','');
            ajax_post('call_blog_activitynews.php',{'lang':JSON.stringify(lang),'id':JSON.stringify(id)}).done(function(data){
                var detail_txt = "",img_txt = "";
                $.each(data,function(i,v){
                    detail_txt = v.activity_text_detail;
                    img_txt = v.activity_img_array;
                });
                var img_arr = img_txt.split(',');
                var src_img = "";
                
                var ModalOK = $("<div class='modal'>"+
                    "<div class='modal-dialog'>"+
                        "<div class='modal-content'>"+
                            "<div class='modal-header bg-success'>"+
                                "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button>"+
                                "<img src='img/skph-logo1.gif' class='row img-responsive' style='width:150px;height:150px;margin: 0 auto;'>"+
                            "</div>"+
                            "<div class='modal-body'></div>"+
                            "<div class='modal-footer bg-success'>"+
                                "<a href='#' data-dismiss='modal' class='btn btn-default'>Close</a>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                ModalOK.css({
                    'height':'auto',
                    'width': '100%' 
                });
                
                ModalOK.find('.modal-body').css({
                    'max-width': '100%',
                    'max-height': 'auto'
                });
                
                
                if(img_arr.length!==0){
                    $.each(img_arr,function(i,v){
                        src_img+="<img class='img-responsive' src='"+v+"'><br>";
                    });
                }
                ModalOK.find('.modal-body').empty().append(detail_txt+src_img);
                ModalOK.modal('show');
                ModalOK.on('hidden.bs.modal', function () {
                    $(this).data('bs.modal', null);
                });
            });
        };
        $.when(func_run_easyTicker()).done(function(obj){
            obj.off('click').on('click','.vticker ul li a',function(e){
               e.stopPropagation();
               func_display_DetailNews($(this).attr('href'));
            });
        });
    };
    var BlogCountDownPopup_HTML = function(){
        var ModalOK = $("<div class='modal' data-close='9' data-open='0' tabindex='-1'>"+
            "<div class='modal-dialog'>"+
                "<div class='modal-content'>"+
                    "<div class='modal-body'></div>"+
                    "<div class='modal-footer'>"+
                        "<img src='img/CountDownPopup/r9.jpg' class='img-responsive'>"+
                        "<div  style='box-shadow: -2px 0px 25px #000000;text-align: center;'>"+
                            "สถิตอยู่ในใจตราบนิรันดร์<br>"+
                            "น้อมสำนึกในพระมหากรุณาธิคุณเป็นล้นพ้นอันหาที่สุดมิได้<br>"+
                            "ข้าพระพุทธเจ้า คณะผู้บริหาร และเจ้าหน้าที่โรงพยาบาลจิตเวชสงขลาราชนครินทร์"+
                        "</div>"+
                        "<div class='will-close'><h1></h1></div>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>");
        
        ModalOK.find('.modal-body').empty().append('');
        ModalOK.modal({backdrop: 'static', keyboard: false});  
        var time = ModalOK.find('.will-close h1');
        var closeSeconds = ModalOK.attr("data-close");
        var openSeconds = ModalOK.attr("data-open");
  
        setTimeout(function(e) {
            ModalOK.modal('show');
            time.html(closeSeconds+'s');
            var interval = setInterval(function(){
                time.html(closeSeconds+'s');
                closeSeconds--;
                if(closeSeconds < 0){
                    ModalOK.modal('hide');
                    clearInterval(interval);
                }
            }, 1000);
        }, openSeconds * 1000);
    };
    var BlogNewsHeadLine_HTML = function(){
        //var HeadLine = $("#HeadLine").empty();
        var func_run_easyTicker = function(){
            var def = $.Deferred();
            var txt="<div class='vticker'>";
            txt+="<ul class='list-group list-inline'>"+
                    "<li>List 2</li>"+
                    "<li>List 3</li>"+
                 "<ul>"+   
            "</div>";
            var HeadLine = $("#HeadLine").empty().append(txt);

            HeadLine.closest('.row').find('.panel-heading h3').empty().append(
                    "<i class='fa fa-header fa-lg'></i>&nbsp;"+
                    "<a href='#' class='layoutTextMenu' key='HeadLine'>eadLine</a>&nbsp;&nbsp;&nbsp;"+
                    "<a href='#' class='btn btn-default vticker_up'><span class='glyphicon glyphicon-circle-arrow-up'></span>UP</a>"+
                    "<a href='#' class='btn btn-default vticker_down'><span class='glyphicon glyphicon-circle-arrow-down'></span>DOWN</a>"
            );

            HeadLine.children('.vticker').easyTicker({
                    direction: 'up',
                   // easing: 'easeInOutBack',
                    speed: 'slow',
                    interval: 4000,
                    height: 'auto',
                    visible: 2,
                    mousePause: 0,
                    controls: {
                            up: '.vticker_up',
                            down: '.vticker_down',
                            toggle: '.vticker_toggle',
                            stopText: 'Stop !!!'
                    }
            }).data('easyTicker');
            ajax_post('call_blog_newsheadline.php').done(function(data){
                if (typeof data === 'object')
                {
                    var txt = "";
                    $.each(data,function(i,v){
                        txt+="<li>"+
                                "<a href='#vticker_id_"+v.id+"'>"+
                                    "<div class='row no-gutter'>"+
                                        "<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'><img class='img-responsive'  src='img/NewsHeadLine/"+v.head_news_image_thumb+"'></div>"+
                                        "<div class='col-xs-12 col-sm-6 col-md-8 col-lg-8'>"+v.head_news_text+"###"+v.datetime_upload+"###</div>"+
                                    "</div>"+
                                "</a>"+
                              "</li>";
                    });
                    HeadLine.find(".vticker ul").empty().append(txt);
                }
            });
            
            
            def.resolve(HeadLine);
            return def.promise();
        };
        var func_display_DetailNews = function(target){
            var id = target.replace('#vticker_id_','');
            ajax_post('call_blog_newsheadline.php',{'id':JSON.stringify(id)}).done(function(data){
                var detail_txt = "",img_txt = "";
                $.each(data,function(i,v){
                    detail_txt = v.activity_text_detail;
                    img_txt = v.activity_img_array;
                });
                var img_arr = img_txt.split(',');
                var src_img = "";
                
                var ModalOK = $("<div class='modal'>"+
                    "<div class='modal-dialog'>"+
                        "<div class='modal-content'>"+
                            "<div class='modal-header bg-success'>"+
                                "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button>"+
                                "<img src='img/skph-logo1.gif' class='row img-responsive' style='width:150px;height:150px;margin: 0 auto;'>"+
                            "</div>"+
                            "<div class='modal-body'></div>"+
                            "<div class='modal-footer bg-success'>"+
                                "<a href='#' data-dismiss='modal' class='btn btn-default'>Close</a>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>");
                ModalOK.css({
                    'height':'auto',
                    'width': '100%' 
                });
                
                ModalOK.find('.modal-body').css({
                    'max-width': '100%',
                    'max-height': 'auto'
                });
                
                
                if(img_arr.length!==0){
                    $.each(img_arr,function(i,v){
                        src_img+="<img class='img-responsive' src='"+v+"'><br>";
                    });
                }
                ModalOK.find('.modal-body').empty().append(detail_txt+src_img);
                ModalOK.modal('show');
                ModalOK.on('hidden.bs.modal', function () {
                    $(this).data('bs.modal', null);
                });
            });
        };
        $.when(func_run_easyTicker()).done(function(obj){
            obj.off('click').on('click','.vticker ul li a',function(e){
               e.stopPropagation();
               func_display_DetailNews($(this).attr('href'));
            });
        });
    };
    var BlogInfographic_HTML = function(){
        var InfoGraphic = $('#InfoGraphic');
        var createHTM_byCalcRow = function(d1,d2){
            var htm = "";
            var len = d1.length;
            var fixCol = 3;
            var row = 0;
            if( (len/fixCol) > 0  ){//กรณีผลลัพธ์ไม่เป็น 0 (ตัวตั้งมากกว่าตัวหาร)
                if( (len%fixCol) === 0  ){//กรณีไม่มีเศษ
                    row = len/fixCol; 
                }else{
                    row = Math.floor(len/fixCol) + 1;
                }
            }else{//กรณีผลลัพธ์เป็น 0 (ตัวตั้งน้อยกว่าตัวหาร)
                row = 1;
            }//console.log('len='+len+',row='+row);
            if(row > 0){
                var cnt = 0;
                for(var i = 0;i<row;i++){//แถว
                    htm += "<div class='row'>";
                    for(var j = 0;j<fixCol;j++){//หลัก
                        $.each(d1,function(i,v){
                            if(i===cnt){
                                htm += 
                                "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>"+
                                    "<a href='"+v.image_file_path+"' "+
                                        " style='text-decoration: none;' class='swipebox'>"+
                                        "<img src='"+v.image_file_path+"' class='img-responsive' style='margin:0 auto;'>"+
                                    "</a>"+
                                "</div>";
                            }
                        });
                        cnt+=1;
                    }
                    htm +="</div>";
                }
            }else{
                htm = "";
            }
            return "<div class='row'>"+d2+"</div>"+htm;
        };
        var FirstPagination = function(){
            var Mydeferred = $.Deferred();
            var firstDeferred = ajax_post('call_blog_infographic.php',{'page':JSON.stringify(1)});
            firstDeferred.done(function(data){
                Mydeferred.resolve(createHTM_byCalcRow(data[0],data[1]));
                InfoGraphic.find(".swipebox").swipebox();
            });
            return Mydeferred.promise();
        };
        $.when(FirstPagination()).done(function(htm1){
            InfoGraphic.empty().append(htm1);
            //family.TogglePanelBody();
            InfoGraphic.off("click").on( "click", ".mypg a", function (e){
                e.preventDefault();
                var page = $(this).attr("data-page"); //get page number from link
                var nextDeferred = ajax_post('call_blog_infographic.php',{'page':JSON.stringify(page)});
                nextDeferred.done(function(data){
                    InfoGraphic.empty().append(createHTM_byCalcRow(data[0],data[1]));
                    //family.TogglePanelBody();
                });
            });
        });
    };
    var Blog2Pscreening_HTML = function(){
        var txtfirst = function(){
            var txt = 
            "<div class='row' "+
                    "style='font-size:1vmax;  "+//1.414em
                        "font-weight: 150;"+
                        //"font-style: oblique;"+
                        "color: #616161;"+
                        "text-shadow: rgba(255,255,255,.2) 3px 2px 3px;"+
                    "'"+
                ">"+
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-quote-left' aria-hidden='true'></i>&nbsp;&nbsp;โรงพยาบาลจิตเวชสงขลาราชนครินทร์ ได้ศึกษาวิจัยและพัฒนาเครื่องมือคัดกรอง 2P ขึ้น"+
                "เพื่อใช้สำหรับคัดกรองผู้ป่วยโรคเครียดหลังเหตุการณ์สะเทือนขวัญ(PTSD) ช่วงแรกของการพัฒนา ผ่านการพิจารณา"+
                "โดยจิตแพทย์ 14 จังหวัดภาคใต้และปรับปรุงตามข้อเสนอแนะ จากนั้น ทดลองใช้ในแผนกผู้ป่วยนอก รพ.จิตเวชสงขลาฯ"+
                "เป็นรูปแบบเอกสาร ต่อมาศึกษาเปรียบเทียบแบบคัดกรอง 2P กับ แบบสัมภาษณ์ MINI หมวด PTSD ผลการศึกษา"+
                "เป็นที่น่าเชื่อถือ มีค่า&#10077;<u>Sensitivity=87.2% &#44; Specificity=89.1% &#44; PPV=44.2% &#44; NPV=98.6% </u>&#10078; และเพื่อให้เกิดความ"+
                "สะดวกแก่บุคลากรสาธารณสุข รวมถึงการเข้าถึงแบบคัดกรองดังกล่าวสำหรับประชาชนทั่วไป จึงได้พัฒนาแบบคัดกรอง 2P "+
                "บนหน้า WebPage ของโรงพยาบาลจิตเวชสงขลาราชนครินทร์ ขึ้น&nbsp;&nbsp;<i class='fa fa-quote-right' aria-hidden='true'></i>"+
                "<div class='row'>"+
                    "<div class='col-lg-1 col-lg-offset-1'>"+//col-lg-offset-3
                        "<button class='btn btn-lg btn-primary'>เริ่มกันเลย&nbsp;!!</button>"+
                    "</div>"+//button Start
                    "<div class='col-lg-4 col-lg-offset-7' "+
                        "style=' "+
                            "font-size:1vmax;text-align:right; "+
                            "-webkit-box-shadow: 0 8px 6px -6px black;"+
                                "-moz-box-shadow: 0 8px 6px -6px black;"+
                                    "box-shadow: 0 8px 6px -6px black;"+
                        "'>"+
                        "&nbsp;&nbsp;&nbsp;&nbsp;โดย ศูนย์ความเป็นเลิศด้านวิกฤติสุขภาพจิตจากภัยพิบัติ (Excellent center for Trauma and Crissis) โรงพยาบาลจิตเวชสงขลาราชนครินทร์"+
                    "</div>"+//Credit by
                "</div>"+

            "</div>";
            return txt;
        };
        var home = $(txtfirst());
        var dsp2p = $("#2P").empty().append(home);  
        var htmquestion = function(){
            var def = $.Deferred();
            var createHtmlQuestion = function(data){
                var q2p = "",qptsd="";
                $.each(data,function(i,v){
                    if(v.type==="2p"){
                        q2p+="<div class='q2p container-fluid hidden' id='"+v.qcode+"'>"+
                                "<p "+
                                    "style='font-size:1.7vmax;  "+// 0.8/18px หรือ 1.414em หรือ 2vw 2vh
                                            "font-weight: 100;"+
                                            "color: #616161;"+
                                            "text-shadow: rgba(255,255,255,.2) 3px 2px 3px;"+
                                            "box-shadow: 10px 10px 5px #888888;"+
                                    "'"+
                                ">"+v.qcode+"&#41;&nbsp;"+v.question+"</p>"+
                                "<div class='row' style='margin-top:20px;'>"+
                                    "<div class='col-md-4 col-md-offset-5 btn-group' data-toggle='buttons'>"+ 
                                        "<label class='btn btn-default btn-md ' style='font-size:large;'>"+ 
                                            "<input type='radio' name='rdo"+v.qcode+"' value='Y'>&check;&nbsp;ใช่"+ 
                                         "</label>"+    
                                        "<label class='btn btn-default btn-md ' style='font-size:large;'>"+ 
                                            "<input type='radio' name='rdo"+v.qcode+"' value='N'>&cross;&nbsp;ไม่ใช่<br>"+ 
                                         "</label>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row' style='margin-top:20px;'>"+
                                    "<div class='col-md-6 col-md-offset-5'>"+
                                        "<a href='#' class='btn mol2pptsdPrevious'><i class='fa fa-hand-o-left fa-lg'></i> Previous</a>&nbsp;"+
                                        "<a href='#' class='mol2pptsdHome'><i class='fa fa-home fa-3x'></i></a>&nbsp;"+
                                        "<a href='#' class='btn mol2pptsdNext'>Next <i class='fa fa-hand-o-right fa-lg'></i></a>"+
                                    "</div>"+
                                "</div>"+
                                "<div  id='jp_jplayer_"+v.qcode+"' class='jp-jplayer' data-title = 'Titleswd' "+
                                    "data-art='chayanon' data-m4a='"+v.q_sound_filename+"' >"+
                                "</div>"+
                            "</div>";
                    }else if(v.type==='ptsd'){
                        qptsd+="<div class='qptsd container-fluid hidden' id='"+v.qcode+"'>"+
                                "<p "+
                                    "style='font-size:1.7vmax;  "+// 0.8/18px หรือ 1.414em หรือ 2vw 2vh
                                            "font-weight: 100;"+
                                            "color: #616161;"+
                                            "text-shadow: rgba(255,255,255,.2) 3px 2px 3px;"+
                                            "box-shadow: 10px 10px 5px #888888;"+
                                    "'"+
                                ">"+v.qcode+"&#41;&nbsp;"+v.question+"</p>"+
                                "<div class='row' style='margin-top:20px;'>"+
                                    "<div class='col-md-4 col-md-offset-5 btn-group' data-toggle='buttons'>"+ 
                                        "<label class='btn btn-default btn-md ' style='font-size:large;'>"+ 
                                            "<input type='radio' name='rdo"+v.qcode+"' value='Y'>&check;&nbsp;ใช่"+ 
                                         "</label>"+    
                                        "<label class='btn btn-default btn-md ' style='font-size:large;'>"+ 
                                            "<input type='radio' name='rdo"+v.qcode+"' value='N'>&cross;&nbsp;ไม่ใช่<br>"+ 
                                         "</label>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='row' style='margin-top:20px;'>"+
                                    "<div class='col-md-6 col-md-offset-5'>"+
                                        "<a href='#' class='btn mol2pptsdPrevious'><i class='fa fa-hand-o-left fa-lg'></i> Previous</a>&nbsp;"+
                                        "<a href='#' class='mol2pptsdHome'><i class='fa fa-home fa-3x'></i></a>&nbsp;"+
                                        "<a href='#' class='btn mol2pptsdNext'>Next <i class='fa fa-hand-o-right fa-lg'></i></a>"+
                                    "</div>"+
                                "</div>"+
                                "<div  id='jp_jplayer_"+v.qcode+"' class='jp-jplayer' data-title = 'Titleswd' "+
                                    "data-art='chayanon' data-m4a='"+v.q_sound_filename+"' >"+
                                "</div>"+
                            "</div>";
                    }
                });
                return $("<div class='allQ'>"+q2p+qptsd+"</div>");
            };
            ajax_post('call_blog_2pquestion.php').done(function(data){
                if(typeof data==='object'){
                    def.resolve(createHtmlQuestion(data));
                }else{
                    console.log(data);
                }
            });
            return def.promise();
        };

        home.find('button').click(function(e){
            e.preventDefault();
            $.when(htmquestion()).done(function(q){//q ก็คือ $('.allQ')
                dsp2p.empty().append(q);//ข้อคำถามทั้งหมดจาก DB
                //---- เตรียมชุดคำถาม
                var SetupJplayer = function(obj){
                    obj.find('.jp-jplayer').off('click').on('click',function(e){
                        $(e.target).jPlayer({
                            ready: function (e){
                                var $this = $(e.target);
                                $this.jPlayer("setMedia", {
                                    title: $this.data('title'),
                                    m4a: $this.data("m4a") //mp4: $this.data('mp4')
                                });
                            },
                            supplied: "m4a"//m4a
                        }).jPlayer("play"); 
                    });
                };//config jplayer
                var Q2pAns = {};
                dsp2p.find('.q2p').each(function(i,v){
                    Q2pAns[$(this).attr("id")]="";
                    SetupJplayer($(this));
                });
                dsp2p.find('.qptsd').each(function(i,v){
                    Q2pAns[$(this).attr("id")]="";
                    SetupJplayer($(this));
                });
                //--- event function
                var shw = function(all,obj){
                    $.each(all.children(),function(){
                        $(this).toggleClass('hidden').hide();
                        $(this).find('.jp-jplayer').jPlayer("stop"); 
                    });
                    obj.removeClass('hidden').show({
                        done:function(){ 
                            $(this).find('.jp-jplayer').click();
                        } 
                    });
                };
                var txtModal = function(){
                    var txt ='<div class="modal fade"  tabindex="-1" role="dialog">'+
                        '<div class="modal-dialog" role="document">'+
                                '<div class="modal-body" style="background-color:white;"></div>'+
                                '<div class="modal-footer">'+
                                    "<button class='btn btn-danger btn-lg' data-dismiss='modal'>ไม่บันทึก</button>"+
                                    "<button class='btn btn-success btn-lg'>บันทึก</button>"+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
                    return txt;
                };
                var myModal = $(txtModal());
                myModal.on('hidden.bs.modal',function(){
                    $(this).data('bs.modal', null);
                    window.location.reload(true);
                });
                var SetModalOnShow = function(ResultTxt,valSave){
                    myModal.on('shown.bs.modal', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        $.each($('.allQ').children(),function(){
                            $(this).find('.jp-jplayer').jPlayer("destroy"); 
                        });
                        
                        var $this = $(e.target),btnSave=$this.find(".modal-footer button:nth-child(2)");
                        if(ResultTxt !==null && ResultTxt!==""){
                            ResultTxt = "<div class='row' style='box-shadow: 10px 10px 5px #888888;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;"+
                                    ResultTxt+"&rdquo;</div>";
                        }
                        var QRcode = 
                            "<div class='row' style='margin-top:10px;'>"+
                                "<div class='col-lg-8 col-lg-offset-3'>"+
                                    "<div class='row-fluid' style='font-size:1vmax;text-align:center;'>"+
                                        "<div class='span6' >"+
                                            "<img src='img/QRcodeKanLaeKan.jpg' class='img-responsive'>"+
                                        "</div>"+
                                        "<div class='span6'>"+
                                            "มาพูดคุยกับเราที่&nbsp;&nbsp;<font style='color:green;'><u>คลินิกกันและกัน</u></font>&nbsp;&nbsp;นะครับ"+
                                        "</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>";//QR Code
                        var frm = 
                            '<form class="loginmodal-container" style="margin-top:20px;">'+
                                '<input type="text"  placeholder="เลขบัตรประชาชน" style="box-shadow: 0 0 3px #CC0000;">'+
                                '<input type="text"  placeholder="ชื่อ-สกุล" style="box-shadow: 0 0 3px #CC0000;">'+
                                '<input type="email" placeholder="email (ไม่บังคับหากมีโปรดระบุ)">'+
                                '<input type="text"  placeholder="เบอร์โทร (ไม่บังคับหากมีโปรดระบุ)">'+
                                '<input type="text"  placeholder="LineID (ไม่บังคับหากมีโปรดระบุ)">'+
                            '</form>';
                        var txtNote =                                     
                            "<div class='row' style='font-style:italic; box-shadow: 1px 1.5px 2.5px #888888;margin-top:20px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;ในการนำข้อมูลของท่านไปใช้ในงานวิจัยให้เกิดประโยชน์แก่สาธารณชน "+
                            "ด้านบริการสาธารณสุข ท่านจะให้เราบันทึกผลการประเมินนี้ไว้หรือไม่  <u><font color=green>หากยินดีให้ข้อมูลกรุณาคลิกที่ "+
                            "ปุ่มบันทึก</font> และ <font color=red>หากไม่ยินดีให้ข้อมูลกรุณาคลิกที่ปุ่มไม่บันทึก</font></u>&rdquo;</div>";
                        $this.find('.modal-body').empty().append(ResultTxt+frm+QRcode+txtNote);
                        var req = null;
                        btnSave.off("click").on("click",function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            var frm = $this.find('.loginmodal-container'),
                                id13 = frm.children("input:nth-child(1)"),
                                pname = frm.children("input:nth-child(2)"),
                                email = frm.children("input:nth-child(3)"),
                                tel = frm.children("input:nth-child(4)"),
                                lineid = frm.children("input:nth-child(5)");
                            var ObjSaveArr = [{
                                    'id13':id13.val(),'pname':pname.val(),
                                    'email':email.val(),'tel':tel.val(),
                                    'lineid':lineid.val()
                            },valSave];
                            if(id13.val()!=="" && pname!==""){
                                frm.find('span').last().remove();
                                if (req !== null){
                                    req.abort();
                                }
                                req = ajax_post('save_2p.php',{'data':JSON.stringify(ObjSaveArr)}).done(function(data){
                                    if(data==="OK"){
                                        window.location.reload(true);
                                    }else{
                                        console.log(data);
                                    }
                                }); 
                            }else{
                                frm.find('span').last().remove();
                                frm.append("<font style='font-size:small;color:red'>หากต้องการบันทึกโปรดระบุเลขบัตรประจำตัวประชาชน และ ชื่อ-สกุลเป็นอย่างน้อย</font>");
                            }
                        });
                    });
                };
                //--เริ่ม module 
                var molP1 = function(){
                    $("#jp_jplayer_P1").trigger('click');
                    //append เหตุการณ์และช่วงเวลาที่เกิดเหตุการณ์
                    $("#P1 .mol2pptsdPrevious").remove();
                    if( $("#P1 input[name='rdoP1sub']").length===0  ){
                        var evt = $("<div  class='row hidden' style='background:rgb(230, 255, 230);margin-top:20px;box-shadow: 10px 10px 5px #888888;'>"+
                            "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-6' style='border-left:0;border-right:1px dotted;border-bottom:0;border-top:0;'>"+       
                                "<label style='font-size:small;'><u>เลือกเหตุการณ์นั้น</u></label>"+ 
                                "<div class='btn-group' data-toggle='buttons'>"+ 
                                    "<label class='row btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='1' >อุบัติเหตุรุนแรง&nbsp;&#44;"+ 
                                     "</label>"+     
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='2' >ถูกทำร้ายร่างกายจิตใจหรือทารุณกรรมทางเพศ&nbsp;&#44;"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='3' >เหตุการณ์ความไม่สงบ&nbsp;&#44;"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='4' >การถูกจัดเป็นตัวประกัน&nbsp;&#44;"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='5' >ถูกลักพาตัว&nbsp;&#44;"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='6' >อัคคีภัย&nbsp;&#44;"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='7' >พบศพผู้เสียชีวิต&nbsp;&#44;"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='8' >การเสียชีวิตอย่างกระทันหันของบุคคลใกล้ชิด&nbsp;&#44;"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='9' >ภัยสงคราม&nbsp;&#44;"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='checkbox' name='chkboxP1sub' value='10' >ภัยธรรมชาติ"+ 
                                     "</label>"+   
                                 "</div>"+ //btn-group
                            "</div>"+//col-lg-6
                            "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-6'>"+       
                                "<label style='font-size:small;'><u>เลือกช่วงเวลาที่พบเหตุการณ์นั้น</u></label>"+ 
                                "<div class='btn-group' data-toggle='buttons'>"+ 
                                    "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='radio' name='rdoP1sub' value='1' >น้อยกว่า 1 เดือน"+ 
                                     "</label>"+     
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='radio' name='rdoP1sub' value='2' >1-3 เดือน"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='radio' name='rdoP1sub' value='3' >4-6 เดือน"+ 
                                     "</label>"+   
                                     "<label class='btn btn-xs ' style='font-size:small;'>"+ 
                                        "<input type='radio' name='rdoP1sub' value='4' >มากกว่า 6 เดือน"+ 
                                     "</label>"+   
                                 "</div>"+ //btn-group
                            "</div>"+//col-lg-6

                        "</div>");
                        evt.insertBefore($("#P1 .mol2pptsdHome").closest(".row"));
                    }//if length=0 แทรกเหตุการณ์                    
                    //event ขณะ change radio ใช่ ไม่ใช่  
                    $("#P1 input[name='rdoP1']").change(function(){
                        var divEvt = $("#P1 input[name='rdoP1sub']").closest(".row");
                        if($(this).prop("checked",true).val()==="Y"){
                            divEvt.removeClass('hidden').show();
                        }else if($(this).prop("checked",true).val()==="N"){
                            divEvt.toggleClass('hidden').hide();
                            //clear radio กับ checkbox เหตุการณ์ที่เลือกค้างไว้ตอนตอบใช่ ออกให้หมด
                            $("#P1 .mol2pptsdNext").find('span').remove();
                            $("#P1 input[name='rdoP1sub']").prop("checked",false);
                            $("#P1 input[name='rdoP1sub']").parent('label').removeClass('active');
                            $("#P1 input[name='chkboxP1sub']").prop("checked",false);
                            $("#P1 input[name='chkboxP1sub']").parent('label').removeClass('active');
                        }
                    });//เมื่อ change rdo ให้แสดงเหตุการณ์
                    //กด next P1
                    
                    $("#P1 .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        
                        if( $("#P1 input[type='radio']:checked").val()==="Y" ){
                            if(  $("#P1 input[name='rdoP1sub']:checked").length !==0 &&
                                 $("#P1 input[name='chkboxP1sub']:checked").length !==0 
                                ){
                                $("#P1 .mol2pptsdNext").find('span').remove();
                                Q2pAns["P1"]="Y";
                                shw(q,$("#P2"));
                                molP2();
                            }else{
                                $("#P1 .mol2pptsdNext").find('span').remove();
                                $("#P1 .mol2pptsdNext").append("<span>"+
                                    "<font style='color:red;font-size:1vmax'>กรุณาเลือกเหตุการณ์และช่วงเวลาที่เกิดเหตุการณ์ด้วย !!</font>"+
                                "</span>");
                            }
                        }else if($("#P1 input[type='radio']:checked").val()==="N"){
                            Q2pAns["P1"]="N";
                            var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P ในเบื้องต้น(2P="+Q2pAns["P1"]+")"+
                                "พบว่า<u><font color=green>ท่านไม่อยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }else{
                            Q2pAns["P1"]="";
                        }
                        
                    });
                };
                var molP2 = function(){
                    $("#jp_jplayer_P2").trigger('click');
                    $("#P2 .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#P2 input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["P2"]="Y";
                            shw(q,$("#P3"));
                            molP3();
                        }else if($("#P2 input[type='radio']:checked").val()==="N"){
                            Q2pAns["P2"]="N";
                            var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P ในเบื้องต้น(2P="+Q2pAns["P2"]+")"+
                                "พบว่า<u><font color=green>ท่านไม่อยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }else{
                            Q2pAns["P2"]="";
                        }
                    });
                    $("#P2 .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#P1"));
                        molP1();
                    });
                };
                var molP3 = function(){
                    $("#jp_jplayer_P3").trigger('click');
                    $("#P3 .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#P3 input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["P3"]="Y";
                            shw(q,$("#I1"));
                            molI1();
                        }else if($("#P3 input[type='radio']:checked").val()==="N"){
                            Q2pAns["P3"]="N";
                            var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P ในเบื้องต้น(2P="+Q2pAns["P3"]+")"+
                                "พบว่า<u><font color=green>ท่านไม่อยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }else{
                            Q2pAns["P3"]="";
                        }
                    });
                    $("#P3 .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#P2"));
                        molP2();
                    });
                };
                var molI1 = function(){
                    $("#jp_jplayer_I1").trigger('click');
                    $("#I1 .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I1 input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I1"]="Y";
                            shw(q,$("#I2"));
                            molI2();
                        }else if($("#I1 input[type='radio']:checked").val()==="N"){
                            Q2pAns["I1"]="N";
                             var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P และ ประเมินต่อด้วย PTSD (2P=Positive,PTSD=Negative)"+
                                "พบว่า<u><font color=green>ท่านไม่อยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }else{
                            Q2pAns["I1"]="";
                        }
                    });
                    $("#I1 .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#P3"));
                        molP3();
                    });
                };
                var molI2 = function(){
                    $("#jp_jplayer_I2").trigger('click');
                    $("#I2 .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I2 input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I2"]="Y";
                            shw(q,$("#I3"));
                            molI3();
                        }else if($("#I2 input[type='radio']:checked").val()==="N"){
                            Q2pAns["I2"]="N";
                            var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P และ ประเมินต่อด้วย PTSD (2P=Positive,PTSD=Negative)"+
                                "พบว่า<u><font color=green>ท่านไม่อยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }else{
                            Q2pAns["I2"]="";
                        }
                    });
                    $("#I2 .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I1"));
                        molI1();
                    });
                };
                var molI3 = function(){
                    $("#jp_jplayer_I3").trigger('click');
                    $("#I3 .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I3 input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I3"]="Y";
                            shw(q,$("#I4a"));
                            molI4a();
                        }else if($("#I3 input[type='radio']:checked").val()==="N"){
                            Q2pAns["I3"]="N";
                             var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P และ ประเมินต่อด้วย PTSD (2P=Positive,PTSD=Negative)"+
                                "พบว่า<u><font color=green>ท่านไม่อยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }else{
                            Q2pAns["I3"]="";
                        }
                    });
                    $("#I3 .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I2"));
                        molI2();
                    });
                };
                var molI4a = function(){
                    $("#jp_jplayer_I4a").trigger('click');
                    $("#I4a .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I4a input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I4a"]="Y";
                        }else if($("#I4a input[type='radio']:checked").val()==="N"){
                            Q2pAns["I4a"]="N";
                        }else{
                            Q2pAns["I4a"]="";
                        }
                        shw(q,$("#I4b"));
                        molI4b();
                        
                    });
                    $("#I4a .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I3"));
                        molI3();
                    });
                };
                var molI4b = function(){
                    $("#jp_jplayer_I4b").trigger('click');
                    $("#I4b .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I4b input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I4b"]="Y";
                        }else if($("#I4b input[type='radio']:checked").val()==="N"){
                            Q2pAns["I4b"]="N";
                        }else{
                            Q2pAns["I4b"]="";
                        }
                        shw(q,$("#I4c"));
                        molI4c();
                        
                    });
                    $("#I4b .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I4a"));
                        molI4a();
                    });
                };
                var molI4c = function(){
                    $("#jp_jplayer_I4c").trigger('click');
                    $("#I4c .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I4c input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I4c"]="Y";
                        }else if($("#I4c input[type='radio']:checked").val()==="N"){
                            Q2pAns["I4c"]="N";
                        }else{
                            Q2pAns["I4c"]="";
                        }
                        shw(q,$("#I4d"));
                        molI4d();
                    });
                    $("#I4c .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I4b"));
                        molI4b();
                    });
                };
                var molI4d = function(){
                    $("#jp_jplayer_I4d").trigger('click');
                    $("#I4d .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I4d input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I4d"]="Y";
                        }else if($("#I4d input[type='radio']:checked").val()==="N"){
                            Q2pAns["I4d"]="N";
                        }else{
                            Q2pAns["I4d"]="";
                        }
                        shw(q,$("#I4e"));
                        molI4e();
                    });
                    $("#I4d .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I4c"));
                        molI4c();
                    });
                };
                var molI4e = function(){
                    $("#jp_jplayer_I4e").trigger('click');
                    $("#I4e .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I4e input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I4e"]="Y";
                        }else if($("#I4e input[type='radio']:checked").val()==="N"){
                            Q2pAns["I4e"]="N";
                        }else{
                            Q2pAns["I4e"]="";
                        }
                        shw(q,$("#I4f"));
                        molI4f();
                    });
                    $("#I4e .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I4d"));
                        molI4d();
                    });
                };
                var molI4f = function(){
                    $("#jp_jplayer_I4f").trigger('click');
                    $("#I4f .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I4f input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I4f"]="Y";
                        }else if($("#I4f input[type='radio']:checked").val()==="N"){
                            Q2pAns["I4f"]="N";
                        }else{
                            Q2pAns["I4f"]="";
                        }
                        shw(q,$("#I4g"));
                        molI4g();
                    });
                    $("#I4f .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I4e"));
                        molI4e();
                    });
                };
                var molI4g = function(){
                    $("#jp_jplayer_I4g").trigger('click');
                    $("#I4g .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I4g input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I4g"]="Y";
                        }else if($("#I4g input[type='radio']:checked").val()==="N"){
                            Q2pAns["I4g"]="N";
                        }else{
                            Q2pAns["I4g"]="";
                        }
                        var I4_arr = ['I4a','I4b','I4c','I4d','I4e','I4f','I4g'];
                        var n=0;
                        $.each(Q2pAns,function(i,v){
                            if(($.inArray(i,I4_arr)!== -1)&&(Q2pAns[i]==="Y")){
                                n+=1;
                            }
                        });
                        if(n>=3){
                            shw(q,$("#I5a"));
                            molI5a();
                        }else{
                            var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P และ ประเมินต่อด้วย PTSD (2P=Positive,PTSD=Negative)"+
                                "พบว่า<u><font color=green>ท่านไม่อยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }
                    });
                    $("#I4g .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I4f"));
                        molI4f();
                    });
                };
                var molI5a = function(){
                    $("#jp_jplayer_I5a").trigger('click');
                    $("#I5a .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I5a input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I5a"]="Y";
                        }else if($("#I5a input[type='radio']:checked").val()==="N"){
                            Q2pAns["I5a"]="N";
                        }else{
                            Q2pAns["I5a"]="";
                        }
                        shw(q,$("#I5b"));
                        molI5b();
                    });
                    $("#I5a .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I4g"));
                        molI4g();
                    });
                };
                var molI5b = function(){
                    $("#jp_jplayer_I5b").trigger('click');
                    $("#I5b .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I5b input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I5b"]="Y";
                        }else if($("#I5b input[type='radio']:checked").val()==="N"){
                            Q2pAns["I5b"]="N";
                        }else{
                            Q2pAns["I5b"]="";
                        }
                        shw(q,$("#I5c"));
                        molI5c();
                    });
                    $("#I5b .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I5a"));
                        molI5a();
                    });
                };
                var molI5c = function(){
                    $("#jp_jplayer_I5c").trigger('click');
                    $("#I5c .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I5c input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I5c"]="Y";
                        }else if($("#I5c input[type='radio']:checked").val()==="N"){
                            Q2pAns["I5c"]="N";
                        }else{
                            Q2pAns["I5c"]="";
                        }
                        shw(q,$("#I5d"));
                        molI5d();
                    });
                    $("#I5c .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I5b"));
                        molI5b();
                    });
                };
                var molI5d = function(){
                    $("#jp_jplayer_I5d").trigger('click');
                    $("#I5d .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I5d input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I5d"]="Y";
                        }else if($("#I5d input[type='radio']:checked").val()==="N"){
                            Q2pAns["I5d"]="N";
                        }else{
                            Q2pAns["I5d"]="";
                        }
                        shw(q,$("#I5e"));
                        molI5e();
                    });
                    $("#I5d .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I5c"));
                        molI5c();
                    });
                };
                var molI5e = function(){
                    $("#jp_jplayer_I5e").trigger('click');
                    $("#I5e .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I5e input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I5e"]="Y";
                        }else if($("#I5e input[type='radio']:checked").val()==="N"){
                            Q2pAns["I5e"]="N";
                        }else{
                            Q2pAns["I5e"]="";
                        }
                        var I5_arr = ['I5a','I5b','I5c','I5d','I5e'];
                        var n=0;
                        $.each(Q2pAns,function(i,v){
                            if(($.inArray(i,I5_arr)!== -1)&&(Q2pAns[i]==="Y")){
                                n+=1;
                            }
                        });
                        if(n>=2){
                            shw(q,$("#I6"));
                            molI6();
                        }else{
                            var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P และ ประเมินต่อด้วย PTSD (2P=Positive,PTSD=Negative)"+
                                "พบว่า<u><font color=green>ท่านไม่อยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }
                    });
                    $("#I5e .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I5d"));
                        molI5d();
                    });
                };
                var molI6 = function(){
                    $("#jp_jplayer_I6").trigger('click');
                    $("#I6 .mol2pptsdNext").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        if( $("#I6 input[type='radio']:checked").val()==="Y" ){
                            Q2pAns["I6"]="Y";
                            var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P และ ประเมินต่อด้วย PTSD (2P=Positive,PTSD=Positive)"+
                                "พบว่า<u><font color=red>ท่านอยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ...</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }else if($("#I6 input[type='radio']:checked").val()==="N"){
                            Q2pAns["I6"]="N";
                             var ResultText = "จากการตอบแบบสอบถามตามเครื่องมือ 2P และ ประเมินต่อด้วย PTSD (2P=Positive,PTSD=Negative)"+
                                "พบว่า<u><font color=green>ท่านไม่อยู่ในเกณฑ์เสี่ยงที่จะเป็นโรคเครียดหลังเหตุการณ์สะเทือนขวัญ</font></u>";
                            SetModalOnShow(ResultText,Q2pAns);
                            myModal.modal('show');
                        }else{
                            Q2pAns["I6"]="";
                        }
                        //ไม่ว่าจะ ตอบใช่ หรือ ไม่ใช่ ให้แสดง popup ผลตามกรอบวินิจฉัยตรงนี้
                    });
                    $("#I6 .mol2pptsdPrevious").off('click').on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        shw(q,$("#I5e"));
                        molI5e();
                    });
                };
                //--- เริ่ม event
                shw(q,$("#P1"));
                molP1();
                $(".mol2pptsdHome").off("click").click(function(e){
                   e.preventDefault();
                   window.location.reload(true);
                });
            });//when
        });//home start click
    };
    //function 
    var getReady = function(){
      var deferredReady = $.Deferred();
      $(document).ready(function(e){
         deferredReady.resolve(e); 
      });
      return deferredReady.promise();
    };
    var SetLang = function(lang){
        LangLaoutTextMenu(lang);
        BlogAbout_HTML(lang);
        BlogService_HTML(lang);
        BlogNews_HTML(lang);
        BlogHighlight_HTML(lang);
        BlogEservice_HTML(lang);
        BlogSKPHfamily_HTML(lang);
        BlogSKPHPoll_HTML(lang);
        BlogComplaint_HTML(lang);
        Footer_HTML(lang);
        BlogWebLink_HTML(lang);
        BlogLaw_HTML(lang);
        Blogkm_HTML(lang);
        Blogkm_HTML(lang);
        BlogFormDownload_HTML(lang);
        //BlogQA_HTML(lang);
        Blogbrochures_HTML(lang);
        BlogMultimedia_HTML(lang);
        BlogVidBG_HTML();
        BlogNewsAct_HTML(lang);
        BlogNewsHeadLine_HTML();
        BlogInfographic_HTML();
        Blog2Pscreening_HTML();
    };
    var LangLaoutTextMenu = function(lang){
        var aLangKeys=new Array();
        aLangKeys.length = 0;
            aLangKeys['EN']=new Array();
            aLangKeys['TH']=new Array();

            aLangKeys['EN']['home']='Home';
            aLangKeys['EN']['about']='About';
            aLangKeys['EN']['contact']='Contact Us';
            aLangKeys['EN']['staff']='For Staff';
            aLangKeys['EN']['lang']='language';
            aLangKeys['EN']['E-Service']='E-Service';
            
            aLangKeys['EN']['filter']='filter';
            aLangKeys['EN']['filter_siteSch']='skph.go.th';
            aLangKeys['EN']['filter_DMHSch']='dmh.go.th';
            aLangKeys['EN']['filter_websiteSch']='Google Search';
            
            aLangKeys['EN']['service']='Service Info';
            aLangKeys['EN']['news']='News Release';
            aLangKeys['EN']['km']='Knowledge base';
            aLangKeys['EN']['family']="Activities Gallery";
            aLangKeys['EN']['WebLink']='Web Link';
            aLangKeys['EN']['PollSKPH']='Website Evaluation';
            aLangKeys['EN']['complaint']='Complaint Letter';
            aLangKeys['EN']['Law']='Rules and Regulations';
            aLangKeys['EN']['downloadSKPHForm']='Document Download';
            aLangKeys['EN']['QA']='Question - Answer (Q & A)';
            aLangKeys['EN']['skphbrochures']='Brochures';
            aLangKeys['EN']['skphmultimedia']='Multimedia';
            aLangKeys['EN']['newsAct']='Activities News';
            aLangKeys['EN']['2p']='2P to PTSD Screenning';

            aLangKeys['TH']['home']='หน้าหลัก';
            aLangKeys['TH']['about']='เกี่ยวกับหน่วยงาน';
            aLangKeys['TH']['contact']='ติดต่อเรา';
            aLangKeys['TH']['staff']="สำหรับเจ้าหน้าที่";
            aLangKeys['TH']['lang']='ภาษา';
            aLangKeys['TH']['E-Service']='E-Service';
            
            aLangKeys['TH']['filter']='ค้นจาก';
            aLangKeys['TH']['filter_siteSch']='เฉพาะเว็บนี้';
            aLangKeys['TH']['filter_DMHSch']='กรมสุขภาพจิต';
            aLangKeys['TH']['filter_websiteSch']='ทั่วโลก';
            
            aLangKeys['TH']['service']='ข้อมูลบริการ';
            aLangKeys['TH']['news']='ข่าวประชาสัมพันธ์';
            aLangKeys['TH']['km']='คลังความรู้';
            aLangKeys['TH']['family']='คลังภาพกิจกรรม';
            aLangKeys['TH']['WebLink']='เว็บลิงค์';
            aLangKeys['TH']['PollSKPH']='แบบประเมินการใช้งานเว็บไซต์';
            aLangKeys['TH']['complaint']='รับเรื่องร้องเรียน ข้อเสนอแนะ';
            aLangKeys['TH']['Law']='กฎ ระเบียบ ข้อบังคับ ที่เกี่ยวข้อง';
            aLangKeys['TH']['downloadSKPHForm']='ดาวน์โหลดคู่มือ,แบบฟอร์ม ฯลฯ';
            aLangKeys['TH']['QA']='ถาม - ตอบ (Q & A)';
            aLangKeys['TH']['skphbrochures']='แผ่นพับ';
            aLangKeys['TH']['skphmultimedia']='สื่อมัลติมีเดีย';
            aLangKeys['TH']['newsAct']='ข่าวกิจกรรม';
            aLangKeys['TH']['2p']='เครื่องมือ 2P เพื่อคัดกรองโรคเครียดหลังเหตุการณ์สะเทือนขวัญ(PTSD)';
        $.each($('.layoutTextMenu'),function(i){
            $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });    
    };  
    
    var ClearModalOK = function(){
        var body = ModalOK.find('.modal-body').children('span').html("");
        var title = ModalOK.find('.modal-title').children('span').html("Information Alert !!");
        var modaldialog = ModalOK.children('.modal-dialog');
        var modalheader = ModalOK.find('.modal-header');modalheader.toggleClass('bg-primary');
        
        body.removeAttr("style");
        title.removeAttr("style");
        
        modaldialog.removeClass('modal-sm modal-lg modal-md modal-xs');
        if(modalheader.hasClass('bg-danger')){
            modalheader.removeClass('bg-danger');
        }
    };

    var ShwFreeArea = function(htmHeader,htmBody){
        ClsFreeArea();
        var FreeArea = $("#FreeArea");
        var btnClose = FreeArea.find('.panel-heading').find('a');
        
        FreeArea.find('.panel-heading').find('span').append(htmHeader);
        FreeArea.find('.panel-body').append(htmBody);
        FreeArea.removeClass('hidden').show();
        
        btnClose.click(function(e){
            e.stopPropagation();
            ClsFreeArea();
        });
    };
    var ClsFreeArea = function(){
        var FreeArea = $("#FreeArea");
        FreeArea.find('.panel-heading').find('span').empty();
        FreeArea.find('.panel-body').empty();
        FreeArea.toggleClass('hidden').hide();
    };
    var chkEmptyText = function(str){
       return  /([^\s])/.test(str);
    };//check ค่าว่างของ element text
    var isValidEmailAddress = function(emailAddress){
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };
    $.fn.TogglePanelBody = function(){
        return this.each(function(){
            var pbody = $(this);
            var aToggle = pbody.siblings('.panel-heading').find('a');
            aToggle.off('click').on('click',function(e){
                e.preventDefault();
                e.stopPropagation();
                $(this)
                    .closest('.panel-heading')
                    .find("i.indicator")
                    .toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
                pbody.fadeToggle('fast');// pbody.slideToggle();      
            });
        });
    };

    $(document).ready(function() {
        $(document.body).append(HTML_layoutPage);   
        $('.navbar [data-toggle="dropdown"]').bootstrapDropdownHover();
        SetLang('TH');     
        $(".dropdown-menu").on('click','a',function(e){
            e.preventDefault();
            e.stopPropagation();            
            ClsFreeArea();//Clear FreeArea
            var target = $(this).attr('href'); //#id
            var lang  = 'TH';
            if( target.indexOf("#lang") !== -1 ){
                lang = target.replace("#lang","");
            }
            SetLang(lang); 
        });       
        ClsFreeArea();//Clear FreeArea
        ajax_post('manage_popup_startpage.php').done(function(data){
            if(data!==""){
                switch(data) {
                    case 'BlogPopupStartPage':
                        BlogPopupStartPage_HTML();
                        break;
                    case 'BlogCountDownPopup':
                        BlogCountDownPopup_HTML();
                        break;
                }
            }
        });
    });
    $(document).scroll(function(){
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 0){//console.log(scrollTop);
            $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
        }
    });
})(jQuery);
