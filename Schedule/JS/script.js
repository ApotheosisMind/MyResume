var scheduledata;
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../JS/data.json', true);

    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}



function loadData(){
    loadJSON(function(response){
        let data = JSON.parse(response);
        scheduledata = data;
        renderSchedulePage();
    });
    
}
loadData();


function renderSchedulePage(){
    var x = '';
    for(let i = 0; i< scheduledata.length; i++){
        x = x + '<div class="card col-md-8 card-border mt-3"><div class="p-2">'+
            '<div class="d-flex justify-content-center">'+
                '<div class="col-md-6 col-4"><span>'+scheduledata[i].EventTime+'</span></div>'+
                '<div class="schedule-title col-md-6 col-8"><span>'+scheduledata[i].EventTitle+'</span>'+
                '</div></div></div></div>';
    }
    document.getElementById('scheduleArea').innerHTML = x;
}