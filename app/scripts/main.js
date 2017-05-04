function changeColor() {

}

function myClick(url){
    var newUrl = location.hostname;
    console.log( "newUrl", newUrl);
    location.reload( newUrl + "/" + url)
}