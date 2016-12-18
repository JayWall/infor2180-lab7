$(document).ready( function() {
    $("#lookup").on("click", beginSearch);
   // alert($("#lookup"));
});

function searchCountry(search, all) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200)
            document.getElementById("result").innerHTML = xhttp.responseText;
    }
    
    xhttp.open("GET", "world.php?country=" + search + "&all=" + all, true);
    xhttp.send();
}

function beginSearch() {
    var search = document.getElementById("country").value;
    var all = document.getElementById("showall").checked;
    if (all)
        searchCountry(search, 1);
    else
        searchCountry(search, 0);
}