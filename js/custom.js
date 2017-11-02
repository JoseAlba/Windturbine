/**
 * Created by Jose on 2017-11-02.
 */
$('[data-open-details]').click(function (e) {
    e.preventDefault();
    $(this).next().toggleClass('is-active');
    $(this).toggleClass('is-active');
});


var $navList = $('.menu-fancy');

$navList.on('click', 'li:not(.is-selected)', function(e){
    $navList.find(".is-selected").removeClass("is-selected");
    $(e.currentTarget).addClass("is-selected");
});
