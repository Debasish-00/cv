var content = 'Please checkout below links for my small projects , i am currently learning JS in more depth and React as well. Will be creating more projects soon ..after all i"m not gonna stay a rookie forever ! RIGHT !!  ';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('p').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});