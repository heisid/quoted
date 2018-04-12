$(document).ready(function() {
    $("#getQuote").on("click",function() {
        $.getJSON("https://gist.githubusercontent.com/heisid/6663a7f5d3aa77e8c597e7bdc7f3f514/raw/61c559ef5c5e9f0d8a6e8aa96cb6882eb6c58af7/quoted.json", function(json) {
            var html = "";
            var rnd = Math.floor(Math.random()*(json.length));
            json = json.filter(function(val) {
                return val.id == rnd;
            });
            json.forEach(function(val) {
                html += "<p>" + val.quote + "</p>"
            });
            $(".message").html(html);
        });
    });
});