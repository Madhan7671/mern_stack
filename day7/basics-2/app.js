const domroot = document.getElementById("root");
const reactroot = ReactDOM.createRoot(domroot);

const card = (obj) => {
    return (
        <div className="card">
            <h1>{obj.title}</h1>
            <p>description</p>
        </div>
    );
};

const card2 = (
    <div className="card">
        <h1>-------done-----------</h1>
        <p>description</p>
    </div>
);
const container = (
    <div>
        {card({ title: "Hello" })}
        <card title="Notice"></card>
        {card({ title: "Warning" })}
        {card2}
    </div>
);
reactroot.render(container);