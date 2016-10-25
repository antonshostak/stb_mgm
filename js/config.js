/**
 * Created by User1 on 16/10/2016.
 */
var config = {
    STB_Model:[
        {STB:"ALL STBs",Value:"0"},
        {STB:"Altech DTR-9401",Value:"DTR-9401",url:"http://stboot.netvision.net.il/DTR-9401.ENC"},
        {STB:"All ADB",Value:"NET-2721TW,NET-3720TWX"},
        {STB:"ADB NET-2721",Value:"NET-2721TW",url:"http://stboot.netvision.net.il/NET-2721TW.ENC"},
        {STB:"ADB NET-3720",Value:"NET-3720TWX",url:"http://stboot.netvision.net.il/NET-3720TWX.ENC"}
    ],
    Tasks:[
        {Name:"UPDATE_SW"},
        {Name:"VOD_REFRESH"},
        {Name:"DTT_SCAN"},
        {Name:"REMOTE_LOG"}
    ],
    url:"http://212.29.244.206:80/siapp-dispatcher-ws/job/postJob"
};
