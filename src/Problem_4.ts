{

    // union type of shape rectangle and circle and calculate both shape

    type Circle = {
         shape: "circle";
         radius: number;
    };

    type Rectangle = {
        shape:'rectangle';
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;
    function calculateShapeArea(shape: Shape): number {
        if(shape.shape === "circle"){
            return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
        } else {
            return shape.width * shape.height;
        }
    }

    // call the function
    const circleArea = calculateShapeArea({shape: "circle", radius: 5});
    const rectangleArea = calculateShapeArea({shape: "rectangle", width: 4, height:6});
    
    // for output
    console.log(circleArea);
    console.log(rectangleArea);



}