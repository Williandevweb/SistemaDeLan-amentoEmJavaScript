function setConfig(){
    var texts = {
        "title":"Loja online"
    };
    document.title = texts.title;
    document.getElementById("navTitle").innerHTML = texts.title;
}
setConfig();