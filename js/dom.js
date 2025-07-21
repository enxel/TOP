const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.style["color"] = "blue";


const anotherDiv = document.createElement("div");
anotherDiv.style["border"] = "1px solid black";
anotherDiv.style["backgroundColor"] = "pink";

const anotherHeader = document.createElement("h1");
anotherHeader.textContent = "I'm in a div";
const anotherPara = document.createElement("p");
anotherPara.textContent = "ME TOO!";

anotherDiv.appendChild(anotherHeader);
anotherDiv.appendChild(anotherPara);


container.appendChild(para);
container.appendChild(header);  
container.appendChild(anotherDiv);