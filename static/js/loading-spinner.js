window.onload = function() {
    var myVar;
    myVar = setTimeout(showPage, 3000);

    function showPage() {
        document.getElementById("loading-spinner").style.display = "none";
        document.getElementById("page-content").style.display = "block";
    }
}