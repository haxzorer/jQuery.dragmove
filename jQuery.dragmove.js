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
            
            $this.on('mousedown touchstart', function(e) {
                
                active = true;
                startX = e.originalEvent.pageX - $this.offset().left;
                startY = e.originalEvent.pageY - $this.offset().top;
                
                if ('mousedown' == e.type)
                    
                    click = $this;
                                    
                if ('touchstart' == e.type)
                
                    touch = $this;
                                    
                if (window.mozInnerScreenX == null)
                
                    return false;
            });
            
            $document.on('mousemove touchmove', function(e) {

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
                    var clickRight = (e.originalEvent.pageX - startX) + obj.width();
                    var clickBottom = (e.originalEvent.pageY - startY) + obj.height();

                    if (e.originalEvent.pageX - startX > maxLeft) {
                        newLeft = e.originalEvent.pageX - startX;
                    } else {
                        newLeft = maxLeft;
                    }

                    if (e.originalEvent.pageY - startY > maxTop) {
                        newTop = e.originalEvent.pageY - startY;
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
                    newLeft = e.originalEvent.pageX - startX;
                    newTop = e.originalEvent.pageY - startY;
                }

                return {
                    left: newLeft,
                    top: newTop
                };
            }
                                
        });
            
    };

})(jQuery);