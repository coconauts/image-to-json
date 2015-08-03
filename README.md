## Image to JSON converter

Convert image bitmaps using Javascript + Canvas into JSON.

This small black/white image

![Small sample image](/sample/map.png)

will produce this JSON with all black pixel coordinates:

```json
[{"x":1,"y":1},{"x":1,"y":2},{"x":1,"y":5},{"x":2,"y":6},{"x":3,"y":6},{"x":4,"y":6},{"x":5,"y":6},{"x":6,"y":1},{"x":6,"y":2},{"x":6,"y":5}]
```

This code was initially created for drawing hundreds of items in a HTML5 game easily.

![Map image used in pacman game](/map.png)

[See a practical usage of this converter](http://coconauts.net/html5/pacman)

### Demo

Open this URL in your browser:

http://coconauts.net/html5/image-to-json

Drag a small image (up to 200x200) from your computer or drag one of the two images in the page.

The image will be loaded and converted to JSON, you will see all the white / black / other pixels detected.

Click the `Download JSON` button to download a JSON file with the pixel coordinates.

Or click `Preview` to see a preview in Canvas of your image.
Every pixel will create a black square in the canvas,
drag your mouse over the image to watch the pixels disappear.
