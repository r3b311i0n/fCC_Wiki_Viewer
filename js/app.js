const api = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=allpages&aplimit=30&apprefix=";

var main = function () {
    $("#search").animate({
        "width": "15em"
    }, 2000, function () {
        $("#search").css("width", "15em");
    });

    $(".glyphicon-search").delay(2000).animate({
        "opacity": 100
    }, 3000, function () {
        $(".glyphicon-search").css("opacity", 100);
    });
};

$(document).ready(main());