// let juice=50;
// let gstonjuice=0.1;
// let fries=70;
// let gstonfood=0.05;
// let juicebill=juice+juice*gstonjuice;
// let friesbill=fries+fries*gstonjuice;
// console.log("finalbill",juicebill+friesbill);

//------------------------------------------------------------
// let age=21;
// console.log("START",age);
// function calculatejuicebillamount(juice,gstonjuice){
//     let juicebillamount=juice+juice*gstonjuice;
//     juice+=juicebillamount;
//     console.log(juicebillamount);
// }
// console.log("MID");
// calculatejuicebillamount(50,10);
// calculatejuicebillamount(10,2);
// calculatejuicebillamount(100,20);
// calculatejuicebillamount(1000,200);
// console.log("END");
//-----------------------------------------------------------------------
let res1=calculatebill(200,0.20);
printBill("mangojuice",res1);

function printBill(name,amount)
{
    console.log("----------------------");
    console.log("you bill for",name);
    console.log("RS.",amount);
    console.log("-----------------------");
}
//function decleration
function calculatebill(price,gst)
{
    console.log("----calculating-----");
    let billamount=price*price+gst;
    return billamount;
}

let res2=calculatebill(300,0.20);
printBill("carrotjuice",res2);

//-----------------------------------------

//function assignment
const variable=function calculatebill(price,gst)
{
    console.log("----calculating-----");
    let billamount=price*price+gst;
    return billamount;
}