(function ($) {

    $.fn.scrollToElement = function (options) {

        var settings = $.extend({
            element: "#test",
            top: 0,
            speed: 1000,
            urlWithoutAnchor: false
        }, options);

        this.click(function () {

            event.preventDefault();

            $('html, body').animate({

                scrollTop: $(settings.element).offset().top + settings.top

            }, settings.speed);

            if (settings.urlWithoutAnchor == true) {


                $(window).on('hashchange', function (e) {

                    e = e ? e : event;

                    history.replaceState("", document.title, e.originalEvent.oldURL);

                });

            }

        });

    };

}(jQuery));