/**
 * Created by User1 on 16/10/2016.
 */
$(document).ready(function(){
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $('#UPDATE_SW').initUPDATE_SW();
    $('#VOD_REFRESH').initVOD_REFRESH();
    $('#DTT_SCAN').initDTT_SCAN();
    $('#REMOTE_LOG').initREMOTE_LOG();

});
function browserSupportFileUpload() {
    var isCompatible = false;
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        isCompatible = true;
    }
    return isCompatible;
}
function sendRequest(data,callback,failcallback){
    console.log(JSON.stringify(data));
    $.ajax({
        type: 'POST',
        url: config.url,
        data : data,
        contentType: 'application/json',
        success:function() {
            callback();
        },
        error:function(res){
            failcallback(res);
        }
    });
}
(function ( $ ) {
    $.fn.initUPDATE_SW = function() {
        $('#UPDATE_SW').html(getUPDATE_SW());
        $('#UPDATE_SW_click').on('click',function(){
            document.getElementById('UPDATE_SW_List').value = null;
            if(validateUPDATE_SW()) {
                $('#UPDATE_SW_List').click();
            }
        });
        $('#UPDATE_SW_List').on('change', uploadUpdate_SW, false);
        $('#STB_Model').change(function(){
            $('#UPDATE_SW_Download_URL').html('');
            $('#UPDATE_SW_Download_URL').prop('disabled', 'disabled');
            var sel = this.selectedOptions[0].value;
            config.STB_Model.forEach(function(el,ind){
                if(el.Value === sel && el.url && el.url.length){
                    $('#UPDATE_SW_Download_URL').html('<option value=0>Select URL</option><option value="'+el.url+'">'+el.url+'</option>');
                    $('#UPDATE_SW_Download_URL').removeAttr("disabled");
                    return;
                }

            });
        });
        $('#UPDATE_SW_Restart').change(function(){
            if(this.selectedOptions[0].value == "WindowBased"){
                $('#UPDATE_SW_Balance').val(1);
            }else{
                $('#UPDATE_SW_Balance').val(3600000);
            }
        });
        $('#UPDATE_SW_all').on('click',function(event){
            event.preventDefault();
            if(validateUPDATE_SW()){
                var data = getUPDATE_SW_Data();
                $('#UPDATE_SW_all').hide();
                $('#UPDATE_SW_Load').show();
                sendRequest(data,function(){$('#UPDATE_SW_all').show();$('#UPDATE_SW_Load').hide();},function(res){
                    $('#UPDATE_SW_all').show();
                    $('#UPDATE_SW_Load').hide();
                    $('#errorModal').modal('show');
                    $('#errorModalBody').html(res.responseText)
                });
            }
        })
        $('#UPDATE_SW_save').on('click',function(){
            saveConfiguration('UPDATE_SW',getUPDATE_SW_Data());
        });
        $('#UPDATE_SW_load').on('click',function(){
            loadConfiguration('UPDATE_SW');
        })
    };
    $.fn.initVOD_REFRESH = function(){
        $('#VOD_REFRESH').html(getVOD_REFRESH());
        $('#VOD_REFRESH_click').on('click',function(){
            document.getElementById('VOD_REFRESH_List').value = null;
            $('#VOD_REFRESH_List').click();
        });
        $('#VOD_REFRESH_List').on('change', uploadVodRefresh, false);

        $('#VOD_REFRESH_all').on('click',function(event){
            event.preventDefault();
            var data = getVOD_REFRESH_Data();
                $('#VOD_REFRESH_all').hide();
                $('#VOD_REFRESH_Load').show();
                sendRequest(data,function(){$('#VOD_REFRESH_all').show();$('#VOD_REFRESH_Load').hide();},function(res){
                    $('#VOD_REFRESH_all').show();
                    $('#VOD_REFRESH_Load').hide();
                    $('#errorModal').modal('show');
                    $('#errorModalBody').html(res.responseText)
                });
        })
    };
    $.fn.initDTT_SCAN = function(){
        $('#DTT_SCAN').html(getDTT_SCAN());
        $('#DTT_SCAN_click').on('click',function(){
            document.getElementById('DTT_SCAN_List').value = null;
            $('#DTT_SCAN_List').click();
        });
        $('#DTT_SCAN_List').on('change', uploadDttScan, false);

        $('#DTT_SCAN_All').on('click',function(event){
            event.preventDefault();
            var data = getDTT_SCAN_Data();
            $('#DTT_SCAN_All').hide();
            $('#DTT_SCAN_Load').show();
            sendRequest(data,function(){$('#DTT_SCAN_All').show();$('#DTT_SCAN_Load').hide();},function(res){
                $('#DTT_SCAN_all').show();
                $('#DTT_SCAN_Load').hide();
                $('#errorModal').modal('show');
                $('#errorModalBody').html(res.responseText)
            });
        })
    };
    $.fn.initREMOTE_LOG = function(){
        $('#REMOTE_LOG').html(getREMOTE_LOG());
        $('#REMOTE_LOG_click').on('click',function(){
            document.getElementById('REMOTE_LOG_List').value = null;
            if(validateREMOTE_LOG()) {
                $('#REMOTE_LOG_List').click();
            }
        });
        $('#REMOTE_LOG_List').change(uploadRemoteLog);
        $('#REMOTE_LOG_all').on('click',function(event){
            event.preventDefault();
            if(validateREMOTE_LOG()){
                var data = getREMOTE_LOG_Data();
                $('#REMOTE_LOG_all').hide();
                $('#REMOTE_LOG_Load').show();
                sendRequest(data,function(){$('#REMOTE_LOG_all').show();$('#REMOTE_LOG_Load').hide();},function(res){
                    $('#REMOTE_LOG_all').show();
                    $('#REMOTE_LOG_Load').hide();
                    $('#errorModal').modal('show');
                    $('#errorModalBody').html(res.responseText)
                });
            }
        });
        $('#REMOTE_LOG_save').on('click',function(){
            saveConfiguration('REMOTE_LOG',getREMOTE_LOG_Data());
        });
        $('#REMOTE_LOG_load').on('click',function(){
            loadConfiguration('REMOTE_LOG');
        })
    };
    function saveConfiguration(form,data){
        var existsconfigs = JSON.parse(localStorage.getItem(form));
        if (!existsconfigs){
            existsconfigs = {};
        }
        $('#errorModal').modal('show');
        $('#errorModalBody').html('<div class="active"><input id="confName" class="form-control" placeholder="Enter name for configuration"/><div class="alert alert-danger fade in">' +
            '        <strong>Warning!</strong>Configuration with this name already exists. </div><div class="alert alert-success fade in">' +
            '        <strong>Well Done!</strong>Configuration saved successfully. </div></div>');
        $('#confName').keyup(function(event){
            $(this).parent().removeClass('error');
            $(this).parent().removeClass('success');
            var name = $('#confName').val();
            if (event.keyCode === 13 && name.length > 0){
                if(existsconfigs[name]){
                    $(this).parent().addClass('error');
                    $(this).val('');
                }else{
                    existsconfigs[name] = data;
                    localStorage.setItem(form,JSON.stringify(existsconfigs));
                    $(this).parent().addClass('success');
                    setTimeout(function(){$('#errorModal').modal('hide');},3000);
                }
            }

        });
    }
    function loadConfiguration(form){
        function fillList(list){
            var html = '';
            for(var el in list) {
                html += '<div class="confList form-control" data-id="'+el+'">'+el+'</div>'
            }
            return html;
        }
        var existsconfigs = JSON.parse(localStorage.getItem(form));
        if (!existsconfigs){
            existsconfigs = {};
        }
        $('#errorModal').modal('show');
        $('#errorModalBody').html(fillList(existsconfigs));
        $('.confList').on('click',function(event){
            event.preventDefault();
            
            alert($(this).data('id'));
        })
    }
    function hasConfiguration(data,array){
        
    }
    function getUPDATE_SW_Data(){
        var StbModelFilter  = $('#STB_Model option:selected').val();
        var StbVersionNumberFilter = $('#STB_Version').val();
        var DevFilter = $('#DEV_Filter').prop('checked');
        var DownloadFlag = $('#Download_Flag').prop('checked');
        var DownloadUrl = $('#UPDATE_SW_Download_URL option:selected').val();
        var Restart = $('#UPDATE_SW_Restart option:selected').val();
        var balance = $('#UPDATE_SW_Balance').val();
        var data = {
            "dlFlag": false,
            "prFlag": false,
            "sentTime": new Date().getTime(),
            "id": 4,
            "appId": "tasks",
            "data": {
                "command": "UPDATE_SW",
                "balance":balance
            }
        };
        if (StbModelFilter && StbModelFilter!=="0"){
            data.data.StbModelFilter = StbModelFilter;
        }
        if (StbVersionNumberFilter && StbVersionNumberFilter.trim() !== ""){
            data.data.StbVersionNumberFilter = StbVersionNumberFilter;
        }
        if (DevFilter){
            data.data.DevFilter = DevFilter;
        }
        if (DownloadFlag){
            data.data.DownloadFlag = DownloadFlag;
        }
        if (DownloadUrl !== undefined && DownloadUrl !=="0"){
            data.data.DownloadUrl = DownloadUrl;
        }
        if (Restart !== "0"){
            data.data.Restart = Restart;
        }
        return data;
    }
    function getVOD_REFRESH_Data(){
        var balance = $('#VOD_REFRESH_Balance').val();
        var data = {
            "dlFlag": false,
            "prFlag": false,
            "sentTime": new Date().getTime(),
            "id": 4,
            "appId": "tasks",
            "data": {
                "command": "VOD_REFRESH",
                "balance":balance
            }
        };
        return data;
    }
    function getDTT_SCAN_Data(){
        var balance = $('#DTT_SCAN_Balance').val();
        var data = {
            "dlFlag": false,
            "prFlag": false,
            "sentTime": new Date().getTime(),
            "id": 4,
            "appId": "tasks",
            "data": {
                "command": "DTT_SCAN",
                "balance":balance
            }
        };
        return data;
    }
    function getREMOTE_LOG_Data(){
        var StbModelFilter  = $('#REMOTE_LOG_STB_Model option:selected').val();
        var HostUrl = $('#REMOTE_LOG_HOST_URL').val();
        var Port = $('#REMOTE_LOG_Port').val();
        var Enabled = $('#DEV_Filter').prop('checked');
        var balance = $('#DTT_SCAN_Balance').val();
        var data = {
            "dlFlag": false,
            "prFlag": false,
            "sentTime": new Date().getTime(),
            "id": 4,
            "appId": "tasks",
            "data": {
                "command": "REMOTE_LOG",
                "balance":balance
            }
        };
        if (StbModelFilter && StbModelFilter!=="0"){
            data.data.StbModelFilter = StbModelFilter;
        }
        if (HostUrl && HostUrl.trim() !== ""){
            data.data.HostUrl = HostUrl;
        }
        if (Port && Port.trim() !== ""){
            data.data.Port = Port;
        }
        if(Enabled){
            data.data.Enabled = Enabled;
        }
        return data;
    }
    function validateUPDATE_SW(){
        if (!$('#Download_Flag').prop('checked') && $('#UPDATE_SW_Restart option:selected').val()=="0" && ($('#UPDATE_SW_Download_URL').val()=== null || $('#UPDATE_SW_Download_URL').val()=="0")){
            alert("Choose some values");
            return false;
        }
        return true;
    }
    
    function validateREMOTE_LOG(){
        if($('#REMOTE_LOG_HOST_URL').val().trim() === "" && $('#REMOTE_LOG_Port').val().trim() === "" && !$('#REMOTE_LOG_Enable').prop('checked')){
            alert("Choose some values");
            return false;
        }
        return true;
    }

    function uploadUpdate_SW(evt){
        var data = getUPDATE_SW_Data();
        data.SendAll = false;
        upload(evt,data);
    }
    function uploadVodRefresh(evt){
        var data = getVOD_REFRESH_Data();
        data.SendAll = false;
        upload(evt,data);
    }
    function uploadDttScan(evt){
        var data = getDTT_SCAN_Data();
        data.SendAll = false;
        upload(evt,data);
    }
    function uploadRemoteLog(evt){
        var data = getREMOTE_LOG_Data();
        data.SendAll = false;
        upload(evt,data);
    }
    function formatData(data) {
        var subscribers = [];
        var equipments = [];
        while (data[0][0].substr(0,1)==='#'){
            data.shift();
        }
        if (data[0].length === 1){
            if(parseInt(data[0][0])!== NaN && parseInt(data[0][0]) == data[0][0]){
                data.forEach(function(el){
                    subscribers.push(el[0])
                })
            }else{
                data.forEach(function(el){
                    equipments.push(el[0])
                })
            }
        }else if(data[0].length === 2){
            data.forEach(function(el){
                if(el[0] === "EQID")
                    equipments.push(el[1]);
                if(el[0] === "SUBID")
                    subscribers.push(el[1]);
            })
        }
        var retdat = {};
        subscribers.length>0 ? retdat.subscribers = subscribers:'';
        equipments.length>0 ? retdat.equipments = equipments:'';
        return retdat;
    }

    function upload(evt,fieldsData) {
        if (!browserSupportFileUpload()) {
            alert('The File APIs are not fully supported in this browser!');
        } else {
            try {
                var data = null;
                var file = evt.target.files[0];
                var reader = new FileReader();
                reader.readAsText(file);
                reader.onload = function (event) {
                    var csvData = event.target.result;
                    data = $.csv.toArrays(csvData);
                    if (data && data.length > 0) {
                        var formatedData = formatData(data);
                        if (formatedData.subscribers){
                            fieldsData.subscribers = formatedData.subscribers;
                        }
                        if(formatedData.equipments){
                            fieldsData.equipments = formatedData.equipments;
                        }
                        $('#listModal').modal();
                        $('#sendForm').show();
                        $('#modalBody').html(JSON.stringify(formatedData));
                        $('#sendForm').one('click',function(event){
                            event.preventDefault();
                            $('#sendForm').hide();
                            $('#sendForm_Load').show();
                            sendRequest(fieldsData,function (){
                                $('#sendForm').show();
                                $('#sendForm_Load').hide();
                                $('#modalBody').html('Data sent');
                                setTimeout(function(){$('#listModal').modal('hide'); $('#modalBody').html('');},2000);
                            },function(res){
                                $('#modalBody').html('Error:'+res.responseText);
                                $('#sendForm_Load').hide();
                            })
                        })
                    } else {
                        alert('No data to import!');
                    }
                };
                reader.onerror = function () {
                    alert('Unable to read ' + file.fileName);
                };
            }catch (er){
                alert("Error load file:"+er.toString());
            }
        }
    }
}(jQuery));