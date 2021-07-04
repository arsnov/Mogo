$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();



    /* fixed header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top - $('header').innerHeight();

    $("#nav a").removeClass('active')
        $this.addClass('active');

        if ($("#nav_toggle").hasClass('active')) {
        $(window).on("scroll", function() {
        $('#nav_toggle').removeClass("active");
        $("#nav").removeClass("active");
         });
        }

        $('.section__title').removeClass('bg-highlight')
        $(blockId + ' .section__title').addClass('bg-highlight')

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });



    /* slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



    /* animated numbers */
    var time = 2, cc = 1;
    $(window).scroll(function(){
      $('#stat-num').each(function(){
        var
        cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if (cPos < topWindow + 740) {
          if (cc < 2) {
            $('.stat__count').addClass('viz');
            $('div').each(function(){
              var
              i = 1,
              num = $(this).data('num'),
              step = 1000 * time / num,
              that = $(this),
              int = setInterval(function(){
                if (i <= num) {
                  that.html(i);
                }
                else {
                  cc = cc + 2;
                  clearInterval(int);
                }
                i++;
              },step);
            });
          }
        }
      });
    });
});
