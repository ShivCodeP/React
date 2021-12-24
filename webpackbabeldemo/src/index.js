import {add,mult} from "./cal.js"

import("./index.css");

import image from "./logo.jpg"

console.log(add(3,5))

const h1 = document.createElement('h1');
h1.innerHTML = "MakeANote",
h1.classList.add("redcolor");

const img = document.createElement("img");

img.src = image;
img.classList.add('logo')

const input  = document.createElement("input");
input.width = "80%";
input.height = "600"
input.setAttribute('class',"input_style")
input.setAttribute('id',"appenddiv")

const btn = document.createElement("button");
btn.innerHTML = "SAVE";
btn.classList.add('btn')
btn.addEventListener('click',appenddiv);

document.getElementById("navbar").append(img,h1)

document.getElementById("body").append(input,btn)

function appenddiv() {
    let data = document.getElementById('appenddiv').value;
    let para = document.createElement('p');
    para.classList.add('append_div')
    para.innerHTML = data;

    document.getElementById("append").append(para);

}