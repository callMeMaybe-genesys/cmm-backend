function retrieve_results() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "/search/result", true);
    //Send the proper header information along with the request
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            document.getElementById("results").innerHTML = this.responseText;
        }
    } 
    var searchText = document.getElementById("searchtext").value;
    data = {searched: searchText};
    xhttp.send(JSON.stringify(data));
}

$('a').click(function (event) {
    event.preventDefault();
    retrieve_results();
});
