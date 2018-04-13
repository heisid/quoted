$(document).ready(function() {
    function generateQuote() {
        $.getJSON("https://gist.githubusercontent.com/heisid/6663a7f5d3aa77e8c597e7bdc7f3f514/raw/6f01be263ed1cfdf439224b53e2aade9884896d3/quoted.json", function(json) {
            // Just wondering if I'm doing right.
            // console.log("JSON Length = " + json.length);
            var html = "";
            var rnd = Math.floor(Math.random()*(json.length));
            json = json.filter(function(val) {
                return val.id == rnd;
            });
            json.forEach(function(val) {
                html += "<p id='quote-text'>\"" + val.quote + "\"</p>";
                html += "<p id='who-text'><em> --" + val.who + "</em></p>";
            });
            $(".message").html(html);
        });
    };
    generateQuote();
    $("#getQuote").on("click", function() {
        generateQuote();
    });
});
