$(document).ready(function() {
    function generateQuote() {
        $.getJSON("js/quote.json", function(json) {
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
