// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => {
  alert("Hello World");
  console.log(e);
  console.log(e.target);
  e.target.style.background = "blue";
});
