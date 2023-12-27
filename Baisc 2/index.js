// Factory Function

function createRectangle(width,breadth){
    let react = {
        width: width,
        breadth : breadth,
        draw : function (){
            console.log("Rectangle Drawn ");
            return 0;
        }
    }
    return react;
}

const rectangle = createRectangle(10,20);

console.log(rectangle.draw());

// Constructor Function

function Rectangle(width,breadth){
    this.width = width;
    this.breadth = breadth;
    this.draw = function(){
        console.log("Constructor Rectangle Has been Drawn");
    }
}

let obj = new Rectangle(10,20);
console.log(obj.width + obj.breadth);

//for-of loop
console.log("For of Loop:");
for(let value of Object.keys(obj)){
    console.log(value);
}


console.log("For in Loop:");
// For in loop
for(let value in obj){
    console.log(obj[value]);
}

// Check Property Exist or not

if("draw" in obj){
    console.log("YES");
}
else {
    console.log("NO");
}

// Object Cloning

let newObject = {}

// 1. Iteration



// for(let value in obj){
//     newObject[value] = obj[value];
// }


// 2. Assign Function

// let src = {value:20};
// newObject = Object.assign({},obj,src);     // We can give Multiple Source in the assign function.
 

// 3. Spread Function

// newObject = {...obj};

console.log(newObject);