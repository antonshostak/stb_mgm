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
function upload(evt) {
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
                    alert('Imported -' + JSON.stringify(data) + '- rows successfully!');
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
(function ( $ ) {
    $.fn.initUPDATE_SW = function() {
        $('#UPDATE_SW').html(getUPDATE_SW());
        $('#UPDATE_SW_click').on('click',function(){
            $('#UPDATE_SW_List').click();
        });
        document.getElementById('UPDATE_SW_List').addEventListener('change', upload, false);
        
    };
    $.fn.initVOD_REFRESH = function(){
        $('#VOD_REFRESH').html(getVOD_REFRESH());
        $('#VOD_REFRESH_click').on('click',function(){
            $('#VOD_REFRESH_List').click();
        });
        document.getElementById('VOD_REFRESH_List').addEventListener('change', upload, false);
    };
    $.fn.initDTT_SCAN = function(){
        $('#DTT_SCAN').html(getDTT_SCAN());
        $('#DTT_SCAN_click').on('click',function(){
            $('#DTT_SCAN_List').click();
        });
        document.getElementById('DTT_SCAN_List').addEventListener('change', upload, false);
    };
    $.fn.initREMOTE_LOG = function(){
        $('#REMOTE_LOG').html(getREMOTE_LOG());
        $('#REMOTE_LOG_click').on('click',function(){
            $('#REMOTE_LOG_List').click();
        });
        document.getElementById('REMOTE_LOG_List').addEventListener('change', upload, false);
    };
    
}(jQuery));