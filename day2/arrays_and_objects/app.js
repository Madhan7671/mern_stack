// const cse018= {
//     name: "madhan",
//     address:"kolkata, wb",
//     bloodgroup: "0-",
// };

// console.log(cse018);

// const cse100={
//     name:"hello",
//     address:"andhrapardesh",
//     bloodgroup:"A+",
// };

// //read the values
// //templete recalls is helps to do string manipulations
// const studentName=cse018.name;
// console.log("student name", studentName);

// // to update the value

// cse018.bloodgroup="B+";

// // to add the key-value pair

// cse018.colleage="MIT";

// console.log("cse018: ",cse018);

// delete cse018.address;
// console.log("cse018: ",cse018);

//---------------------------------------------
//when we use the arrow function this keyword will not work it will point to window object so we will use function keyword for this
// const person={
//     name:'madhan',
//     age:'21',
//     height:'5.6',
//     weight:'54',
//     colleage:'LPU',
//     rollnumber:'21',
//     getbmi:()=>{
//         console.log(5.6,54);
//     }
// };
// person.getbmi();
//-------------------------------------------

//to access the variables we will use the function keyword
// const person={
//     name:'madhan',
//     age:'21',
//     height:'1.71',
//     weight:'54',
//     colleage:'LPU',
//     rollnumber:'21',
//     getbmi:function(){
//         bmi=this.weight/this.height**2;
//         console.log(`bmi for ${this.name} is ${this.weight/this.height**2}`);
        // if(bmi < 20)
        // {
        //     console.log("It seems underweight");
        // }
        // else if(bmi <25 && bmi>20)
        // {
        //     console.log("it seems fit");
        // }
//     },
// };
//--------------------------------------------

//------------------dynamic value entries-------------------

// const person1={
//     name:"madhan",
//     height:2,
//     weight:54,
//     colleage:"LPU",
//     rollnumber:"1234",
// };

// const person2 = person1;
// person2.name="raj";

// console.log("person1",person1);
// console.log("person2",person2); 


// //---------------destructuring --------------------------

// const {weight,colleage}=person1;
// console.log("val -->: ",weight,colleage);

const person1={
    name:"madhan",
    height:1.8,
    weight:54,
    colleage:"LPU",
    rollnumber:21,
    marks:{
        evs:100,
        maths:100,
    },
};

const person2={...person1};
person1.name="raj";
person1.marks.maths=75;
console.log(person1);
console.log(person2);