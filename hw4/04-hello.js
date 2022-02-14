// Add your code here
let mainelement = document.querySelector("main");
let divelement = document.createElement('div');
var img = document.createElement("img");
img.src = "../hw1/Akansha.jpg";
const para = document.createElement("p");
para.innerHTML = `<span style = "font-weight: bold"> Hi! My name is Akansha Jain. I am a graduate student at PSU.</span>This is my 4th term, being an international student, I am enjoying this new country. I love cooking and music. In my free time I always make some paintings using acrylic colors. I love beaches so my most go to place over the weekends is canon beach.`;
divelement.style.width = "50%";
divelement.style.textAlign = "center";
divelement.style.margin = "auto auto";
img.style.borderRadius = "50%";
img.style.width = "200px";
img.style.height = "200px";
img.style.justifyContent = "center";
mainelement.append(divelement);
divelement.append(img);
divelement.append(para);