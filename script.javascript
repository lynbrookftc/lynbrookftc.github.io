var centerIt = function (lead /* (jQuery element) Element to center */) {
    if (!lead) {
    	return;
    }
    var moveIt = function () {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        lead.css("position","absolute").css("left", ((winWidth / 2) - (el.width() / 2)) + "px").css("top", ((winHeight / 2) - (lead.height() / 2)) + "px");
    }; 
    $(window).resize(moveIt);
    moveIt();
};