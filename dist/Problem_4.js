"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
        }
        else {
            return shape.width * shape.height;
        }
    }
    // call the function
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    // for output
    console.log(circleArea);
    console.log(rectangleArea);
}
