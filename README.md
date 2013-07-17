yolo.js
=======

You only live once. Egg your pages with funz. Play with them [here](http://www.mapsam.com/mugs/yolo/). Some of the eggs are jQuery dependent. The rest are st8 vanilla.

In the `<head>` of your document add the following:
```html
<script type="text/javascript" src="yolo.js"></script>
```
and attach the `onkeypress` event listener to the `<body>` of your document:
```html
<body onkeypress="yolo(event);">
```
Most functions use the CSS class `.yolo` which is `position:absolute` as to not interact with the rest of a page's div structure. To reset the page, use `shift + x` which runs `reset()` to remove the `.yolo` class from the document.

Current List
------------
* YOLO | _yoloEgg()_ | **shift + 3** | The original. Plays [yolo](www.youtube.com/embed/z5Otla5157c) video within darkened div over entire screen.
* Laugh Track | _laughTrack()_ | **shift + 4** | Plays a laughtrack and changes background to Jimmy Fallon crowd.
* Call Me Maybe | _callMe()_ | **shift + 5** | Plays Call Me Maybe
* Damn kids! | _reset()_ | **shift + x**  | Resets the window

**#yolo**

