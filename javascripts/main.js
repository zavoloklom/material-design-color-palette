/**
 * Created by Kupletsky Sergey on 16.12.14.
 *
 * Add JQuery animation to bootstrap dropdowns
 */

(function($) {
    $("body")
        // Add slidedown animation to dropdown
        .on('show.bs.dropdown', '.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        })
        // Add slideup animation to dropdown
        .on('hide.bs.dropdown', '.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });
})(jQuery);

/**
 * Created by Kupletsky Sergey on 16.09.14.
 *
 * Hierarchical timing
 * Add specific delay for CSS3-animation to elements.
 */

(function($){
    jQuery.fn.materialTiming = function(settings){

        var options = $.extend( {
            'speed' : '1500'
        }, settings);

        return this.each(function() {
            var elements = $(this).children();
            elements.each(function() {
                var elementOffset = $(this).position();
                var offset = elementOffset.left*0.8 + elementOffset.top - $(this).parent().position().top;
                var delay = parseFloat(offset/options.speed).toFixed(2);
                $(this)
                    .css("-webkit-animation-delay", delay+'s')
                    .css("-o-animation-delay", delay+'s')
                    .css("animation-delay", delay+'s');
            });
        });
    };
})(jQuery);

/* ========================================================================
 * SnackbarJS
 * Copyright 2014, FezVrasta.
 * MIT LICENSE (https://github.com/FezVrasta/snackbarjs/blob/master/LICENSE.md)
 * ======================================================================== */

(function( $ ){

    $(document).ready(function() {
        $("body").append("<div id=snackbar-container/>");
    });

    function isset(variable) {
        if (typeof variable !== "undefined" && variable !== null) {
            return true;
        } else {
            return false;
        }
    }

    $(document)
        .on("click", "[data-toggle=snackbar]", function() {
            $(this).snackbar("toggle");
        })
        .on("click", "#snackbar-container .snackbar", function() {
            $(this).snackbar("hide");
        });

    $.snackbar = function(options) {

        if (isset(options) && options === Object(options)) {
            var $snackbar;

            if (!isset(options.id)) {
                $snackbar = $("<div/>").attr("id", "snackbar" + Date.now()).attr("class", "snackbar");
            } else {
                $snackbar = $("#" + options.id);
            }

            var snackbarStatus = $snackbar.hasClass("is-open");

            if (isset(options.style)) {
                $snackbar.attr("class", "snackbar " + options.style);
            } else {
                $snackbar.attr("class", "snackbar");
            }

            options.timeout = (isset(options.timeout)) ? options.timeout : 5000;

            if (isset(options.content)) {
                if ($snackbar.find(".snackbar-content").length) {
                    $snackbar.find(".snackbar-content").html(options.content);
                } else {
                    $snackbar.prepend("<span class=snackbar-content>" + options.content + "</span>");
                }
            }

            if (!isset(options.id)) {
                $snackbar.appendTo("#snackbar-container");
            } else {
                $snackbar.insertAfter("#snackbar-container .snackbar:last-child");
            }

            // Show or hide item
            if (isset(options.action) && options.action == "toggle") {
                if (snackbarStatus) {
                    options.action = "hide";
                } else {
                    options.action = "show";
                }
            }

            var animationId1 = Date.now();
            $snackbar.data("animationId1", animationId1);
            setTimeout(function() {
                if ($snackbar.data("animationId1") === animationId1) {
                    if (!isset(options.action) || options.action == "show") {
                        $snackbar.addClass("is-open");
                    } else if (isset(options.action) && options.action == "hide") {
                        $snackbar.removeClass("is-open");
                    }
                }
            }, 50);

            // Set timer for item autohide
            var animationId2 = Date.now();
            $snackbar.data("animationId2", animationId2);

            if (options.timeout !== 0) {
                setTimeout(function() {
                    if ($snackbar.data("animationId2") === animationId2) {
                        $snackbar.removeClass("is-open");
                    }
                }, options.timeout);
            }

            return $snackbar;

        } else {
            return false;
        }
    };

    $.fn.snackbar = function(action) {

        var options = {};

        if (!this.hasClass("snackbar")) {

            if (!isset(action) || action === "show" || action === "hide" || action == "toggle") {
                options = {
                    content: $(this).attr("data-content"),
                    style: $(this).attr("data-style"),
                    timeout: $(this).attr("data-timeout")
                };
            }

            if (isset(action)) {
                options.id = this.attr("data-snackbar-id");

                if(action === "show" || action === "hide" || action == "toggle") {
                    options.action = action;
                }
            }

            var $snackbar = $.snackbar(options);
            this.attr("data-snackbar-id", $snackbar.attr("id"));

            return $snackbar;

        } else {

            options.id = this.attr("id");
            if(action === "show" || action === "hide" || action == "toggle") {
                options.action = action;
            }
            return $.snackbar(options);
        }

    };
})( jQuery );



(function($) {
    $(document).ready(function() {
        $('.display-animation').materialTiming();


        var colorPalettes = $('.color-palette');
        //var colorBlocks = $('.color-palette > div > div');

        colorPalettes.each(function(j) {
            var colorBlocks = $(this).find('> div > div');

            var color = $(this).parent().attr('id');

            colorBlocks.each(function(i) {

                var number = $(this).find('.title').text();
                var hex = $(this).find('.subhead').text();

                var textClass = $(this).find('>div').attr('class');

                // Add ddropdown
                $(this).prepend(
                    '<div class="hidden-xs dropdown pull-right">'
                        + '<a href="#" class="dropdown-toggle '+textClass+'" type="button" data-toggle="dropdown">'
                        + '<i class="md md-content-copy"></i>'
                        + '</a>'
                        + '<ul class="dropdown-menu">'
                        + '<li><a href="#" id="color-'+ j + i+'" class="zclip" data-copy-text="'+ hex +'">Copy color</a></li>'
                        + '<li><a href="#" id="text-'+j + i+'" class="zclip" data-copy-text="mdc-text-'+ color + '-' + number +'">Copy class for text</a></li>'
                        + '<li><a href="#" id="bg-'+j + i+'" class="zclip" data-copy-text="mdc-bg-'+ color + '-' + number +'">Copy class for background</a></li>'
                        + '</ul>'
                        + '</div>'
                );

            });
        });

        $("body")
            .on('click', '.zclip', function(e){
                e.preventDefault();
            })
            .on('copy', '.zclip', function(e) {
                e.preventDefault();
                var copy = $(this).data("copy-text");
                e.clipboardData.clearData();
                e.clipboardData.setData("text/plain", copy);
                $.snackbar({content: 'Value "'+ copy +'" is copied to your clipboard!'});
            });
    });

})(jQuery);
