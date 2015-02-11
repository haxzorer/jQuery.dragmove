# jQuery.dragmove
Lightweight jQuery extension for enabling draggable functionality on DOM elements without requiring the `jQuery UI` library. Compatible with trackpads, touch devices, and standard computer mice.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.dragmove.js` in the `<head>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.dragmove.js"></script>
```
## How to Use
Start by calling the `dragmove();` method on any DOM element. Move the element by clicking ( tapping on touch devices ) and dragging it around the viewport. The following example will enable dragging functionality for all `div` elements.

```javascript
$(function() {  

    // All div elements
    $('div').dragmove(); 
	
});
```

**Demo:** [code.bynathan.com/dragmove](http://code.bynathan.com/dragmove)

## Browser Support
– Google Chrome  
– Safari ( Desktop and Mobile )  
– Internet Explorer ( 8, 9, 10+ )  
– Firefox 

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [mail@bynathan.com](mailto:mail@bynathan.com) or find me on twitter [@ByNathan](http://twitter.com/ByNathan).