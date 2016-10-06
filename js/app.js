const api = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info&inprop=url&generator=allpages&gapfrom=";

var main = function () {
    $("#search").animate({
        "width": "15em"
    }, 2000, function () {
        $("#search").css("width", "15em");
    });

    $(".glyphicon").delay(2000).animate({
        "opacity": 100
    }, 3000, function () {
        $(".glyphicon").css("opacity", 100);
    });
};

function getJson() {
    $.ajax({
        url: api + $("#search").val(),
        dataType: "json",
        crossDomain: true,
        method: "GET",
        success: function (article) {
            $(".queryList").children().remove();

            $.each(article["query"]["pages"], function (index, value) {
                $(".queryList").append("<li class='listPadding'>" + "<a class='listPadding' target='_blank' href='" + value["canonicalurl"] + "'>" + value["title"] + "</a></li>");
            });
        }
    });
}

$("#search").on("keypress", function (e) {
    //noinspection JSJQueryEfficiency
    if ($.trim($("#search").val()) != "") {
        if (e.which == 13) {
            //noinspection JSJQueryEfficiency
            $("#search").attr("disabled", "disabled");
            $(".queryList").children().addClass("bounceOut");
            getJson();
            //noinspection JSJQueryEfficiency
            $("#search").removeAttr("disabled");
        }
    }
});

$(".glyphicon-search").on("click", function (e) {
    //noinspection JSJQueryEfficiency
    if ($.trim($("#search").val()) != "") {
        //noinspection JSJQueryEfficiency
        $("#search").attr("disabled", "disabled");
        $(".queryList").children().addClass("bounceOut");
        getJson();
        //noinspection JSJQueryEfficiency
        $("#search").removeAttr("disabled");
    }
});

$(document).ready(main());