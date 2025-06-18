// const printbill=(txt,amount) => {
//     console.log("----------------");
//     console.log(txt,"RS: ",amount);
//     console.log("----------------");
// };

// const calculatebillamountforfood=(price) =>{
//     return price*1.05;
// };

// const calculatebillamountforcloths=(price) =>{
//     return price*1.12;
// };

// const calculatebillamountfordrinks=(price) =>{
//     return price*1.2;
// };

// const totalbill= (food,cloths,drinks) =>{
//     const foodamount=calculatebillamountforfood(food);
//     printbill("food",foodamount);
//     const clothamount=calculatebillamountforcloths(cloths);
//     printbill("cloths",clothamount);
//     const drinkamount=calculatebillamountforcloths(drinks);
//     printbill("drinks",drinkamount);
//     const finalamount=foodamount+clothamount+drinkamount;
//     printbill("total",finalamount);
// }

// totalbill(2000,1234,12334);


const printbill=(txt) => {
    console.log("----------------");
    console.log("RS: ",txt);
    console.log("----------------");
};

const calculatebillamountforfood=(price) =>{
    return price*1.05;
};

const calculatebillamountforcloths=(price) =>{
    return price*1.12;
};

const calculatebillamountfordrinks=(price) =>{
    return price*1.2;
};

const totalbill= (food,cloths,drinks,cd) =>{  //higher order function --> that function which accepts another function as a parameter or returns a function
    const foodamount=calculatebillamountforfood(food);
    const clothamount=calculatebillamountforcloths(cloths);
    const drinkamount=calculatebillamountforcloths(drinks);
    const finalamount=foodamount+clothamount+drinkamount;
    cd(finalamount);
}

totalbill(2000,1234,12334,printbill);//here printbill is a call back function


