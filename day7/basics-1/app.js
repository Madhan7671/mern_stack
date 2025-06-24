// console.log("Hello from day 7");
// const parentele = document.getElementById("root");
// const unorderedlist = () => {
//     const li = document.createElement("ul");
//     const lis1 = document.createElement("li");
//     lis1.innerText = "Item1";
//     const lis2 = document.createElement("li");
//     lis2.innerText = "Item2";
//     li.appendChild(lis1);
//     li.appendChild(lis2);
//     parentele.appendChild(li);
// };

// unorderedlist();

// const Item1 = React.createElement("li", {}, "item1");
// console.log("item1:", Item1);
// const Item2 = React.createElement("li", {}, "item2");
// const list = React.createElement("ul", {}, [Item1, Item2]);

// const rootelem = document.getElementById("parent");
// const reactroot = ReactDOM.createRoot(rootelem);
// reactroot.render(list);

const list = <ul>
    <li>Item1</li>
    <li>Item2</li>
</ul>
//react

const rootelem = document.getElementById("parent");
const reactroot = ReactDOM.createRoot(rootelem);

reactroot.render(list);