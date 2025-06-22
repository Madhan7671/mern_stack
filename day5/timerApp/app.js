const totaltime = document.getElementById("timestamp");
let timesec = 0;
let z = 0;
let intervalid = null;

const timefunc = () => {
    timesec++;
    console.log(timesec);
    timesec = timesec % 60;
    let timemin = Math.floor(timesec / 60);
    timemin = timemin % 60;
    let hr = Math.floor(timesec / 3600);
    totaltime.innerText = `${hr.toString().padStart(2, "0")}:${timemin.toString().padStart(2, "0")}:${timesec.toString().padStart(2, "0")}`;
};

const handlestart = () => {
    if (!intervalid) {
        intervalid = setInterval(timefunc, 1000);
    }
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("resume-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "inline-block";
    document.getElementById("pause-btn").style.display = "inline-block";
    document.getElementById("lap-btn").style.display = "inline-block";
};

const handlereset = () => {
    clearInterval(intervalid);
    intervalid = null;
    timesec = 0;
    totaltime.innerText = "00:00:00";
    document.getElementById("start-btn").style.display = "inline-block";
    document.getElementById("resume-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "none";
    document.getElementById("pause-btn").style.display = "none";
    document.getElementById("lap-btn").style.display = "none";
    document.getElementById("root").innerText = "";
    const root = document.getElementById("root");
    root.innerText = "";
    root.style.display = "none";
    z = 0;
};

const handlepause = () => {
    clearInterval(intervalid);
    intervalid = null;
    document.getElementById("pause-btn").style.display = "none";
    document.getElementById("resume-btn").style.display = "inline-block";
};

const handleresume = () => {
    if (intervalid == null) {
        intervalid = setInterval(timefunc, 1000);
    }
    document.getElementById("resume-btn").style.display = "none";
    document.getElementById("pause-btn").style.display = "inline-block";
};


const handlelap = () => {
    const root = document.getElementById("root");
    if (z == 0) {
        const heading = document.createElement("h3");
        heading.innerText = "Laptimes";
        root.appendChild(heading);
    }
    const para = document.createElement("p");
    z++;
    para.innerText = z + ".  " + totaltime.innerText;
    root.style.display = "block";
    document.getElementById("root").appendChild(para);
};

window.onload = () => {
    document.getElementById("start-btn").style.display = "inline-block";
    document.getElementById("pause-btn").style.display = "none";
    document.getElementById("lap-btn").style.display = "none";
    document.getElementById("resume-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "none";
};

function updateSystemTime() {
    const now = new Date();
    const hr = now.getHours().toString().padStart(2, "0");
    const min = now.getMinutes().toString().padStart(2, "0");
    const sec = now.getSeconds().toString().padStart(2, "0");
    const timeString = `Current Time : ${hr}:${min}:${sec}`;
    document.getElementById("current-time").innerText = timeString;
}
setInterval(updateSystemTime, 1000);
updateSystemTime(); // Call once on page load
