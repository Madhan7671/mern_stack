// console.dir("window", window);
// // console.dir(window.document.children[0], children[1].children[0].innerHTML);

// // document.getElementsByTagName => array like sturcture in iterable (HTML collection)

// const headings = document.getElementsByTagName("h3");
// console.log("headings:", headings);
// headings[0].innerHTML = "Hello madhan";
// headings[1].innerHTML = "hello madhan";


//2.document.getElement_s_ByclassName

// const headings = document.getElementsByClassName("text-brown");
// console.log("headings: ", headings);

// headings[0].style.color = "brown";
// headings[1].style.color = "brown";

//3. document.getelementbyid----> element by the id

// const text = document.getElementById("text-1");
// text.style.backgroundColor = "lime";

//queryselectorall
// const titles=document.querySelectorAll("h3");

// const textbroenelements=document.querySelectorAll(".text-brown");

// const textpara=document.querySelectorAll("#text-1");

//queryselector

const title = document.querySelector("h3");
console.log(title);

const textbrownele = document.querySelector(".text-brown");
console.log(textbrownele);

const textpara = document.querySelector("#text-1");
console.log(textpara);


