/**
 * Created by Kupletsky Sergey on 16.12.14.
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

    $(document).ready(function() {

        // jsSocials
        jsSocials.shares.paypal = {
            label: "PayPal",
            logo: "fa fa-paypal",
            shareUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business={email}&lc=US&item_name={name}&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted",
            countUrl: ""
        };
        jsSocials.shares.github = {
            label: "GitHub",
            logo: "fa fa-github",
            shareUrl: "https://github.com/zavoloklom/material-design-color-palette",
            countUrl: "https://api.github.com/repos/zavoloklom/material-design-color-palette",
            getCount: function(data) {
                return data.stargazers_count;
            }
        };

        $("#jssocial").jsSocials({
            shares: [
                {
                    share: "paypal",
                    label: "Donate with PayPal",
                    logo: "zmdi zmdi-hc-fw zmdi-paypal",
                    email: "s.kupletsky@gmail.com",
                    name: "Material Design Color Palette"
                },
                {
                    share: "github",
                    label: "Star",
                    logo: "zmdi zmdi-hc-fw zmdi-github",
                    user: "zavoloklom",
                    repo: "material-design-color-palette"
                },
                {
                    share: "twitter",
                    label: "Tweet",
                    logo: "zmdi zmdi-hc-fw zmdi-twitter",
                    via: "zavoloklom",
                    hashtags: "materialDesign"
                },
                {
                    share: "facebook",
                    label: "Share",
                    logo: "zmdi zmdi-hc-fw zmdi-facebook"
                },
                {
                    share: "googleplus",
                    label: "Share",
                    logo: "zmdi zmdi-hc-fw zmdi-google-plus"
                },
                {
                    share: "pinterest",
                    label: "Pin it",
                    logo: "zmdi zmdi-hc-fw zmdi-pinterest-box"
                }
            ],
            url: "http://zavoloklom.github.io/material-design-color-palette/",
            text: "Material Design Color Palette",
            user: "zavoloklom",
            showLabel: true,
            showCount: true
        });

        // Set Colors
        var colorPalettes = $('.color-palette');

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
                        + '<i class="zmdi zmdi-copy"></i>'
                        + '</a>'
                        + '<ul class="dropdown-menu">'
                        + '<li><a href="#" id="color-'+ j + i+'" class="zclip" data-copy-text="'+ hex +'">Copy color</a></li>'
                        + '<li><a href="#" id="text-'+j + i+'" class="zclip" data-copy-text="mdc-text-'+ color + '-' + number +'">Copy class for text</a></li>'
                        + '<li><a href="#" id="bg-'+j + i+'" class="zclip" data-copy-text="mdc-bg-'+ color + '-' + number +'">Copy class for background</a></li>'
                        //+ '<li><a href="#" id="border-'+j + i+'" class="zclip" data-copy-text="mdc-border-'+ color + '-' + number +'">Copy class for border</a></li>'
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
