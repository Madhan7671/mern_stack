// const arr=["tata","mahindra","suzuki","tesla"];
// console.log(arr);
// //destructuring
// const [a,b,c]=arr;
// console.log(b,c);

//add the element in  the arr
// const arr=["tata","mahindra","suzuki","tesla"];
// arr[10]="bmw";
// console.log(arr);
// arr.push("oodi");
// console.log(arr);

// // to remove the first element
// arr.shift();
// console.log(arr);

// //to add the elements
// arr.unshift("tesla");
// console.log(arr);

// arr.splice(1,2,"kia","byd","poarch","lamborgini");//removing and adding element
// arr.splice(1,1); //removing new eleements
// arr.splice(1,0,"johndeer"); //adding new elements
// console.log(arr);

// console.log(arr.indexOf("byd"));

// const arr=[{name:"madhan",city:"nowhere"},{name:"iron man",city:"earth616"},{name:"thor",city:"asguard"}];
// console.log(arr.indexOf({name:"iron man",city:"earth616"}));
// console.log({name:"raj"}=={name:"raj"})

// const per1={name:"raj"};
// const per2={...per1};
// console.log(per1==per2);

//----------------------------------------------------

//const arr=["ab","xy","mn","ab","pq"];
//indexof("ab")-->0
//lastindexof("ab")-->3
//arr.include("ab") present

//------------------------------------------------------
//a->element
//b->index
//c->array
//d->undefine
const myfunc=(a) =>{
    if(a=="mn") return true;
    else return false;
};
const arr=["ab","xy","mn","ab","pq"];

const x=arr.find(myfunc);
console.log("elem:",x);


const arr1=[
    {name:"madhan",city:"vizag",score:33},
    {name:"Abhinav",city:"kanpur",score:34},
    {name:"sumedh",city:"Mumbai",score:10},
];
const myfunc2=(a) =>{
    if(a.name ==="Abhinav") return true;
    return false;
};

const ans=arr1.find(myfunc2);
const ans2=arr1.findIndex(myfunc2);
console.log(ans2);
console.log(ans);

const myfun3=(ele)=>
{
    if(ele.score<25)
    {
        return {...ele, remark:"fail"};
    }
    else{
        return{...ele,remark:"pass"};
    }
};
const resarr=arr1.map(myfun3);
console.log(resarr);