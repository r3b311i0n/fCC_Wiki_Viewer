const api = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info&inprop=url&generator=allpages&gapfrom=";

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

function getJson() {
    $.ajax({
        url: api + $("#search").val(),
        dataType: "json",
        crossDomain: true,
        method: "GET",
        success: function (article) {
            $.each(article["query"]["pages"], function (index, value) {
                $(".queryList").append("<a target='_blank' href='" + value["canonicalurl"] + "'>" + "<li class='listPadding'>" + value["title"] + "</li></a>");
            });
        }
    });
}

$(document).ready(main());