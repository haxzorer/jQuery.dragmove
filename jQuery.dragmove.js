// Draggable functionality for DOM elements
// Source: github.com/ByNathan/jQuery.dragmove
// Version: 1.0

(function($) {

    $.fn.dragmove = function(options) {
    
        return this.each(function() {

            var hasOptions = false;

            if (typeof options !== 'undefined') {
                hasOptions = true;
            }
            
            var $document = $(document),
                $this = $(this),
                active,
                startX,
                startY;
            
            var isChromeMobile = (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && navigator.userAgent.toLowerCase().indexOf('android') > -1);

            $this.on('mousedown touchstart', function(e) {
                
                active = true;

                if (isChromeMobile) {
                    startX = e.originalEvent.touches[0].pageX - $this.offset().left;
                    startY = e.originalEvent.touches[0].pageY - $this.offset().top;
                } else {
                    startX = e.originalEvent.pageX - $this.offset().left;
                    startY = e.originalEvent.pageY - $this.offset().top;
                }
                
                if ('mousedown' == e.type)
                    
                    click = $this;
                                    
                if ('touchstart' == e.type)
                
                    touch = $this;

                if (window.mozInnerScreenX == null)
                
                    return false;

            });
            
            $document.on('mousemove touchmove', function(e) {
                if (isChromeMobile) {
                    e.preventDefault();
                }

                if (active) {
                    var newPos = getNewPosition(e);
                }
                
                if ('mousemove' == e.type && active)
                    
                    click.offset({
                    
                        left: newPos.left,
                        top: newPos.top
                        
                    });
                    
                
                if ('touchmove' == e.type && active)
                
                    touch.offset({
                    
                        left: newPos.left,
                        top: newPos.top
                        
                    });
                
            }).on('mouseup touchend', function() {
                
                active = false;
                
            });

            function getNewPosition (e) {
                var newTop;
                var newLeft;
                var obj;

                var pageX;
                var pageY;

                if (isChromeMobile) {
                    pageX = e.originalEvent.touches[0].pageX;
                    pageY = e.originalEvent.touches[0].pageY;
                } else {
                    pageX = e.originalEvent.pageX;
                    pageY = e.originalEvent.pageY;
                }

                if ('mousemove' == e.type && active) {
                    obj = click;
                }

                if ('touchmove' == e.type && active) {
                    obj = touch;
                }

                if (hasOptions && typeof options.regionDiv !== 'undefined') {

                    var maxLeft = options.regionDiv.offset().left;
                    var maxTop = options.regionDiv.offset().top;
                    var maxRight = options.regionDiv.offset().left + options.regionDiv.outerWidth();
                    var maxBottom = options.regionDiv.offset().top + options.regionDiv.outerHeight();
                    var clickRight = (pageX - startX) + obj.width();
                    var clickBottom = (pageY - startY) + obj.height();

                    if (pageX - startX > maxLeft) {
                        newLeft = pageX - startX;
                    } else {
                        newLeft = maxLeft;
                    }

                    if (pageY - startY > maxTop) {
                        newTop = pageY - startY;
                    } else {
                        newTop = maxTop;
                    }

                    if (clickRight > maxRight) {
                        newLeft = maxRight - obj.width();
                    }

                    if (clickBottom > maxBottom) {
                        newTop = maxBottom - obj.height();
                    }
                } else {
                    newLeft = pageX - startX;
                    newTop = pageY - startY;
                }

                return {
                    left: newLeft,
                    top: newTop
                };
            }
                                
        });
            
    };

})(jQuery);