$(function () {
    var projects = [{
        id: "jquery",
        name: "jQuery",
        location: "the write less, do more, JavaScript library"
    }, {
        id: "jquery-ui",
        name: "jQuery UI",
        location: "the official user interface library for jQuery"
    }, {
        id: "sizzlejs",
        name: "Sizzle JS",
        location: "a pure-JavaScript CSS selector engine"
    }, {
        id: "jQuery2DotNet",
        name: "jQuery2DotNet",
        location: "cool jquery autocomplete tutorial - www.jQuery2DotNet.com"
    }];

    $("#project").autocomplete({
        minLength: 0,
        source: function (request, response) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
            var array = $.grep(projects, function (value) {
                return matcher.test(value.id) || matcher.test(value.name) || matcher.test(value.location);
            });
            response(array);
        },
        focus: function (event, ui) {
            $("#project").val(ui.item.name);
            return false;
        },
        select: function (event, ui) {
            $("#project").val(ui.item.name);
            $("#project-id").val(ui.item.id);
            $("#project-description").html(ui.item.location);

            return false;
        }
    })
        .data("ui-autocomplete")._renderItem = function (ul, item) {
        return $("<li>")
            .append("<a>" + item.name + "<br><span class='sub-text'>" + item.location + "</span></a>")
            .appendTo(ul);
    };
});