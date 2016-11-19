$(document).ready(function () {
    browser_class();
    replceBG();
    tesoSlider();

    /*** ref url:http://sachinchoolur.github.io/lightGallery/demos/videos.html **/
    if ($('#lightgallery').length) {
        $('#lightgallery').lightGallery();
    }
    if ($('#videos-without-poster').length) {
        $('#videos-without-poster').lightGallery();
    }
    /*** ref url:http://sachinchoolur.github.io/lightGallery/demos/videos.html **/

    /*** downloads ***/
    $('.download-expand').on('click',function (){
       $('.download-wrapper .sub-item').not($(this).parent().find('.sub-item')).slideUp().parent().find('i').removeClass('fa-chevron-circle-down');
       $(this).parent().find('.sub-item').slideToggle('fast').parent().find('i').toggleClass('fa-chevron-circle-down');
    });
    /*** downloads ***/

    /*** accordian ***/
    $('.panel-heading').on('click', function () {
        $('.panel-body').not($(this).parent().find('.panel-body')).slideUp('fast');
        $('.panel-body').not($(this).parent().find('.panel-body')).parent().removeClass('open');
        $(this).parent().find('.panel-body').slideToggle('fast').parent().toggleClass('open');
    });
    /*** accordian ***/

    /*** go to top ***/
    $(".go-to-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
    /*** go to top ***/

    /*** sub-menu ***/
    $('.sub-menu').each(function () {
        $(this).parent().addClass('has-sub');
        $(this).parent().append('<span class="arrow"><i class="fa fa-angle-down"></i></span>');
    });
    /*** sub-menu ***/

    /*** mobile sub-menu ***/
    $('.arrow').on('click', function () {
        $(this).parent().find('.sub-menu').slideToggle('fast').parent().find('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
    });
    /*** mobile sub-menu ***/

    /*** mobile nav ***/
    $('.mobile-nav').on('click', function () {
        $('body').toggleClass('menu-open');
        $('.menu-overlay').fadeToggle('fast');
    });
    $('.menu-overlay').on('click', function () {
        $('body').removeClass('menu-open');
        $('.menu-overlay').fadeOut('fast');
    });
    /*** mobile nav ***/

    /*** google map ***/
    if ($('.map-wrapper').length) {
        var myCenter = new google.maps.LatLng(51.508742, -0.120850);
        function initialize()
        {
            var mapProp = {
                center: myCenter,
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                rotateControl: false
            };

            var map = new google.maps.Map(document.getElementById("map"), mapProp);

            var marker = new google.maps.Marker({
                position: myCenter,
            });
            marker.setMap(map);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
    /*** google map ***/
});

$(window).load(function () {
});

$(window).resize(function () {
    alignVertical();
    replceBG();
});

/*** testnominal slider ***/
function tesoSlider() {
    $('.testimonial-slider').owlCarousel({
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        nav: true,
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
}
/*** testnominal slider ***/

/*** Align verticle ***/
function alignVertical() {
    $('.align-vertical').each(function () {
        var that = $(this);
        var height = that.height();
        var parentHeight = that.parent().height();
        var padAmount = (parentHeight / 2) - (height / 2);
        that.css('padding-top', padAmount);
    });
}
/*** Align verticle ***/

/*** Background Placeholder ***/
function replceBG() {
    $('.bg-place-holder').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).css('background-image', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
    });
}
/*** Background Placeholder ***/

/*** Add Browser + Os Class ***/
function browser_class() {
    var os = ['iphone', 'ipad', 'windows', 'mac', 'linux'];
    var platform = navigator.userAgent.toLowerCase().match(new RegExp(os.join('|')));
    var browsers = ['firefox', 'safari', 'chrome', 'msie'];
    var browser = navigator.userAgent.toLowerCase().match(new RegExp(browsers.join('|')));
    if (platform[0]) {
        $('body').addClass(platform[0] + ' ' + browser);
    }
    ;
}
/*** Add Browser + Os Class ***/

/*** Background Placeholder ***/
function bgHeight() {
    $('.bg-height').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).css("min-height", $(this).children('img').height());
        $(this).css('background-image', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
    });
}
/*** Background Placeholder ***/