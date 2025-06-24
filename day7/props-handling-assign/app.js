const domroot = document.getElementById("root");
const reactroot = ReactDOM.createRoot(domroot);


const arr = [
    {
        name: "nare",
        age: "21",
    },
    {
        name: "pavan",
        age: "21",
    },
    {
        name: "gagan",
        age: "21",
    },
    {
        name: "yeragan",
        age: "21",
    },
    {
        name: "andhra",
        age: "21",
    },
    {
        name: "pradesh",
        age: "21",
    },
];
const Card = (props) => {
    const { name, age } = props;
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Card name={arr[0].name} age={arr[0].age}></Card>
        </div>
    );
};

reactroot.render(App());