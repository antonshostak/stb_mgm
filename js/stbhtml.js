/**
 * Created by User1 on 18/10/2016.
 */
function getUPDATE_SW(){
    var opt = '';
    config.STB_Model.forEach(function(el,ind){
        opt += '<option value="'+el.Value+'">'+el.STB+'</option>';
    });
    return '<h2>UPDATE_SW</h2>' +
        '<form class="form-horizontal">' +
        '<div class="form-group col-sm-6">' +
        '   <label class="control-label col-sm-3" for="STB_Model">STB_Model:</label>' +
        '     <div class="col-sm-9">'+
        '        <select type="text" class="form-control" id="STB_Model" placeholder="Choose Model">' + opt +'</select>'+
        '    </div>' +
        '</div>' +
        '<div class="form-group col-sm-6">' +
        '    <label class="control-label col-sm-3" for="STB_Version">STB_Version:</label>' +
        '    <div class="col-sm-9">' +
        '        <input type="text" class="form-control" id="STB_Version" placeholder="StbVersionNumberFilter">' +
        '    </div>' +
        '</div>' +
        '<div class="form-group col-sm-6">' +
        '    <div class="checkbox">' +
        '        <label><input id="DEV_Filter" type="checkbox">DEV Filter</label>' +
        '    </div>' +
        '</div>' +
        '<div class="form-group col-sm-6">' +
        '   <label class="control-label col-sm-3" for="Download_URL">Download URL:</label>' +
        '     <div class="col-sm-9">'+
        '        <select type="text" class="form-control" disabled="disabled" id="Download_URL">' + opt +'</select>'+
        '    </div>' +
        '</div>' +
        '<div class="form-group col-sm-6">' +
        '    <div class="checkbox">' +
        '        <label><input id="Download_Flag" type="checkbox">Download Flag</label>' +
        '    </div>' +
        '</div>' +
        '<div class="form-group col-sm-6">' +
        '   <label class="control-label col-sm-3" for="Restart">Restart:</label>' +
        '     <div class="col-sm-9">'+
        '        <select type="text" class="form-control" id="Restart"> <option value="Immediate">Immediate</option>' +
        '       <option value="WindowBased">WindowBased</option> </select>'+
        '    </div>' +
        '</div>' +
        '<div class="form-group col-sm-6">' +
        '    <label class="control-label col-sm-3" for="Balance">Balance:</label>' +
        '    <div class="col-sm-9">' +
        '        <input type="text" class="form-control" id="Balance" placeholder="Enter Balance" value="3600000">' +
        '    </div>' +
        '</div>' +
        '    <div class="form-group col-sm-12">' +
        '        <div class="col-sm-offset-1 col-sm-5">' +
        '<button type="submit" id="UPDATE_SW_save" class="btn btn-default">Save Configuration</button>' +
        '       <button type="submit" id="UPDATE_SW_load" class="btn btn-default">Load Configuration</button>' +
        '    </div> ' +
        '        <div class="col-sm-offset-1 col-sm-5">' +
        '        <input type="file" id="UPDATE_SW_List" accept="csv/*" class="btn btn-default hidden"/>' +
        '<button type="submit" id="UPDATE_SW_click" class="btn btn-default">Send to List</button>' +
        '       <button type="submit" class="btn btn-default">Send to All</button>' +
        '    </div> ' +
        '</form>'
}
function getVOD_REFRESH(){
    return '<h2>VOD_REFRESH</h2>' +
        '<form class="form-horizontal" id="VOD_REFRESH">' +
        '<div class="form-group col-sm-6">' +
        '    <label class="control-label col-sm-3" for="VOD_REFRESH_Balance">Balance:</label>' +
        '    <div class="col-sm-9">' +
        '        <input type="text" class="form-control" id="VOD_REFRESH_Balance" placeholder="Enter Balance" value="3600000">' +
        '    </div>' +
        '</div>' +
        '        <div class="col-sm-offset-1 col-sm-5">' +
        '        <input type="file" id="VOD_REFRESH_List" accept="csv/*" class="btn btn-default hidden"/>' +
        '<button type="submit" id="VOD_REFRESH_click" class="btn btn-default">Send to List</button>' +
        '       <button type="submit" class="btn btn-default">Send to All</button>' +
        '    </div> ' +
        '</form>'
}
function getDTT_SCAN(){
    return '<h2>DTT_SCAN</h2>' +
        '<form class="form-horizontal" id="DTT_SCAN">' +
        '<div class="form-group col-sm-6">' +
        '    <label class="control-label col-sm-3" for="DTT_SCAN_Balance">Balance:</label>' +
        '    <div class="col-sm-9">' +
        '        <input type="text" class="form-control" id="DTT_SCAN_Balance" placeholder="Enter Balance" value="3600000">' +
        '    </div>' +
        '</div>' +
        '        <div class="col-sm-offset-1 col-sm-5">' +
        '        <input type="file" id="DTT_SCAN_List" accept="csv/*" class="btn btn-default hidden"/>' +
        '<button type="submit" id="DTT_SCAN_click" class="btn btn-default">Send to List</button>' +
        '       <button type="submit" class="btn btn-default">Send to All</button>' +
        '    </div> ' +
        '</form>'
}
function getREMOTE_LOG(){
    var opt = '';
    config.STB_Model.forEach(function(el,ind){
        opt += '<option value="'+el.Value+'">'+el.STB+'</option>';
    });
    return '<h2>REMOTE_LOG</h2>' +
        '<form class="form-horizontal" id="REMOTE_LOG">' +
        '<div class="form-group col-sm-6">' +
        '   <label class="control-label col-sm-3" for="STB_Model">STB_Model:</label>' +
        '     <div class="col-sm-9">'+
        '        <select type="text" class="form-control" id="REMOTE_LOG_STB_Model">' + opt +'</select>'+
        '    </div>' +
        '</div>' +
        '<div class="form-group col-sm-6">' +
        '    <label class="control-label col-sm-3" for="REMOTE_LOG_HOST_URL">HOST URL:</label>' +
        '    <div class="col-sm-9">' +
        '        <input type="text" class="form-control" id="REMOTE_LOG_HOST_URL" placeholder="HOST URL">' +
        '    </div>' +
        '</div>' +
        '<div class="form-group col-sm-6">' +
        '    <div class="checkbox">' +
        '        <label><input id="REMOTE_LOG_Enable" type="checkbox">Enable/Disable</label>' +
        '    </div>' +
        '</div>' +
        '<div class="form-group col-sm-6">' +
        '   <label class="control-label col-sm-3" for="REMOTE_LOG_Port">Port:</label>' +
        '     <div class="col-sm-9">'+
        '        <input type="text" class="form-control" id="REMOTE_LOG_Port" placeholder="Port">'+
        '    </div>' +
        '</div>'+
        '<div class="form-group col-sm-6">' +
        '    <label class="control-label col-sm-3" for="REMOTE_LOG_Balance">Balance:</label>' +
        '    <div class="col-sm-9">' +
        '        <input type="text" class="form-control" id="REMOTE_LOG_Balance" placeholder="Enter Balance" value="3600000">' +
        '    </div>' +
        '</div>' +
        '    <div class="form-group col-sm-12">' +
        '        <div class="col-sm-offset-1 col-sm-5">' +
        '<button type="submit" id="REMOTE_LOG_save" class="btn btn-default">Save Configuration</button>' +
        '       <button type="submit" id="REMOTE_LOG_load" class="btn btn-default">Load Configuration</button>' +
        '    </div> ' +
        '        <div class="col-sm-offset-1 col-sm-5">' +
        '        <input type="file" id="REMOTE_LOG_List" accept="csv/*" class="btn btn-default hidden"/>' +
        '<button type="submit" id="REMOTE_LOG_click" class="btn btn-default">Send to List</button>' +
        '       <button type="submit" class="btn btn-default">Send to All</button>' +
        '    </div> ' +
        '</form>'

}