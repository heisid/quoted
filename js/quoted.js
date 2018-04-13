$(document).ready(function() {
    function generateQuote() {
        $.getJSON("https://gist.githubusercontent.com/heisid/6663a7f5d3aa77e8c597e7bdc7f3f514/raw/ed1951d80e37e4436379e6706a136a08bbbaadb8/quoted.json", function(json) {
            // console.log("JSON Length = " + json.length);
            var html = "";
            var quote = "";
            var who = "";
            var rnd = Math.floor(Math.random()*(json.length));
            json = json.filter(function(val) {
                return val.id == rnd;
            });
            json.forEach(function(val) {
                // console.log("Quote id: " + val.id);
                quote = val.quote;
                who = val.who;
                html += "<p id='quote-text'>\"" + quote + "\"</p>";
                html += "<p id='who-text'><em> --" + who + "</em></p>";
            });
            $(".message").html(html);
            // %0a is new line, %28 and %29 are ( and ) respectively.
            $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text='+ quote + "%0a%28" + who +"%29").attr('target', '_blank');
        });
    };
    generateQuote();
    $("#getQuote").on("click", function() {
        generateQuote();
    });
});
