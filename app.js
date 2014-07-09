(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(window).load(function(){
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
},{}]},{},[1])