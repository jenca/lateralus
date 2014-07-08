$(window).ready(function(){
    var pages = $('.show')
    var current = 0;
    var currentPage;
    var nextPage;

    $('.button').click(function(){
        currentPage = pages.eq(current);
        if($(this).hasClass('previous')){
            if (current <= 0)
                current = pages.length-1;
            else
                current = current-1;
        }
         else
        {
            if (current >= pages.length-1)
                current = pages.length-1;
            else
                current = current+1;
        }


        nextPage = pages.eq(current);
        currentPage.hide();
        nextPage.show();
    });
});

$(document).ready(function() {
    $.scrollify ({
        section : ".panel"
    })
});