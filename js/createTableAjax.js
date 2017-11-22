var createTableAjax = function () {
    
    this.GetNewTableAjax = function (content,jsonsource,tempdata,cols,namefunc,tid1=null,tid2=null,tid3=null) {
                var table = document.createElement ("table");
            	//table.border = "1px";
                if(tid1!=null){
                    var tid=tid1;
                }else if(tid2!=null){
                    var tid=tid2;
                }else if(tid3!=null){
                    var tid=tid3;
                }//console.log(tid1);console.log(tid);
                table.setAttribute("id", tid);
                table.setAttribute("class", "table table-border table-hover");
                table.setAttribute("frame","below");
                var tHead = document.createElement ("thead");
                tHead.setAttribute("bgcolor","#898888");
                tHead.setAttribute("style","text-align: center");
                table.appendChild (tHead);
                var rowh = tHead.insertRow (-1);
                var cellh;
                for (var keys in cols) {
                    cellh = rowh.insertCell (-1);
                    cellh.innerHTML = cols[keys];
                }
            	var tBody = document.createElement ("tbody");
            	table.appendChild (tBody);
                
                $.getJSON(jsonsource, function (dataTB) {
                var value=[];
                    if (dataTB != null && dataTB.length > 0) {
                for (var i = 0; i < dataTB.length; i++) {
                		var row = tBody.insertRow (-1);
                                var I=0;
                                    $.each( dataTB[i], function( dkey, val ) {
                    			var cell = row.insertCell (-1);
                    				cell.innerHTML = val;
                                                value[I]=val;
                                                I++;
                		});
                                        var cellEdit = row.insertCell (-1);
					editButton = document.createElement("a");
					cellEdit.appendChild(editButton);
					editButton.innerHTML = "<img src='images/icon_set1/file.ico' width='25'>";
					editButton.setAttribute("href","#");
					//editButton.setAttribute("onclick","loadPage('#index_content','content/testSendDatat.php',{data: "+value+"});");
                                        editButton.setAttribute("onclick","loadAjax('#index_content','"+tempdata+"','"+value[0]+"','"+namefunc+"');");
                                        

					var cellDel = row.insertCell (-1);
					delButton = document.createElement("a");
					cellDel.appendChild(delButton);
					delButton.innerHTML = "<img src='images/icon_set1/file_delete.ico' width='25'>";
					delButton.setAttribute("href","#");
					//delButton.setAttribute("onclick","del_local('"+//val+"')");
            }
            	var container = document.getElementById (content);
            	container.appendChild(table);
            }
            $("#"+tid1+"").DataTable();
            $("#"+tid2+"").DataTable({
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": true,
            "autoWidth": false
        });
        $("#"+tid3+"").DataTable({
            "paging": false,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "info": true,
            "autoWidth": true
        });
    });
    }    

            
        }
