let selectedBodyPart = "";

function selectPart(part, element){

selectedBodyPart = part;

document.querySelectorAll(".body-part").forEach(el=>{
el.classList.remove("selected");
});

element.classList.add("selected");

}

function updatePain(value){

document.getElementById("painValue").innerText = value;

}



const bodyDatabase = {

"shoulder":{
recommendation:"Reduce overhead activity and perform shoulder mobility exercises.",
stretches:[
{
name:"Cross Body Shoulder Stretch",
img:"https://i.imgur.com/6X8KQpP.png",
video:"https://www.youtube.com/embed/2B2LWHlhqNA"
},
{
name:"Arm Circles",
img:"https://i.imgur.com/8Qf6R7O.png",
video:"https://www.youtube.com/embed/140RTNMciH8"
}
]
},

"elbow":{
recommendation:"Rest throwing motion and stretch forearm muscles.",
stretches:[
{
name:"Forearm Flexor Stretch",
img:"https://i.imgur.com/Vn0K9kT.png",
video:"https://www.youtube.com/embed/d85QKyWvrbI"
}
]
},

"wrist":{
recommendation:"Limit heavy gripping and perform wrist mobility.",
stretches:[
{
name:"Wrist Flexor Stretch",
img:"https://i.imgur.com/Vn0K9kT.png",
video:"https://www.youtube.com/embed/d85QKyWvrbI"
}
]
},

"upper back":{
recommendation:"Improve posture and thoracic mobility.",
stretches:[
{
name:"Cat Cow Stretch",
img:"https://i.imgur.com/MY6Yk1X.png",
video:"https://www.youtube.com/embed/wBq3nP8q7Zk"
}
]
},

"lower back":{
recommendation:"Reduce heavy lifting and improve spinal mobility.",
stretches:[
{
name:"Childs Pose",
img:"https://i.imgur.com/8Qf6R7O.png",
video:"https://www.youtube.com/embed/eqVMAPM00DM"
}
]
},

"hip":{
recommendation:"Improve hip mobility and reduce explosive movements.",
stretches:[
{
name:"Hip Flexor Stretch",
img:"https://i.imgur.com/3ZQ3Z6O.png",
video:"https://www.youtube.com/embed/X8J8eZ6ZJ4M"
}
]
},

"quad":{
recommendation:"Stretch quadriceps and reduce sprint intensity.",
stretches:[
{
name:"Standing Quad Stretch",
img:"https://i.imgur.com/3ZQ3Z6O.png",
video:"https://www.youtube.com/embed/Q6V9gq2xR2Q"
}
]
},

"knee":{
recommendation:"Reduce impact activity and strengthen surrounding muscles.",
stretches:[
{
name:"Hamstring Stretch",
img:"https://i.imgur.com/6yZ7m6F.png",
video:"https://www.youtube.com/embed/s2NQhpFGIOg"
}
]
},

"ankle":{
recommendation:"Perform ankle mobility and stability exercises.",
stretches:[
{
name:"Calf Stretch",
img:"https://i.imgur.com/6yZ7m6F.png",
video:"https://www.youtube.com/embed/2L2lnxIcNmo"
}
]
}

};



function analyzeSymptoms(){

const text = document.getElementById("symptomInput").value.toLowerCase();
const pain = document.getElementById("painSlider").value;

let body = selectedBodyPart;

if(!body){

if(text.includes("shoulder")) body="shoulder";
else if(text.includes("elbow")) body="elbow";
else if(text.includes("wrist")) body="wrist";
else if(text.includes("upper back")) body="upper back";
else if(text.includes("back")) body="lower back";
else if(text.includes("hip")) body="hip";
else if(text.includes("quad")) body="quad";
else if(text.includes("knee")) body="knee";
else if(text.includes("ankle")) body="ankle";

}



let painType="General Muscle Discomfort";
let reasoning="Based on the symptoms you described.";

if(text.includes("sharp")){

painType="Possible Muscle Strain";
reasoning="Detected keywords describing sharp pain.";

}

else if(text.includes("tight")){

painType="Muscle Tightness";
reasoning="Detected words related to tightness.";

}

else if(text.includes("burn")){

painType="Possible Nerve Irritation";
reasoning="Detected burning sensation.";

}

else if(text.includes("swelling")){

painType="Inflammation";
reasoning="Detected swelling related symptoms.";

}



let severity="Mild";

if(pain >= 7){

severity="High pain level detected. Reduce activity and consider medical evaluation.";

}

else if(pain >= 4){

severity="Moderate pain level. Reduce training intensity.";

}



let recommendation="Perform light mobility work.";

let stretches=[];

if(bodyDatabase[body]){

recommendation = bodyDatabase[body].recommendation;
stretches = bodyDatabase[body].stretches;

}



let stretchHTML = stretches.map(s=>`

<div class="stretch-card">

<h4>${s.name}</h4>

<img src="${s.img}">

<iframe width="220" height="130"
src="${s.video}"
frameborder="0"
allowfullscreen>
</iframe>

</div>

`).join("");



document.getElementById("aiResponse").innerHTML = `

<h3>AI Injury Analysis</h3>

<p><b>Detected Body Area:</b> ${body || "Not specified"}</p>

<p><b>Pain Classification:</b> ${painType}</p>

<p><b>Severity:</b> ${severity}</p>

<p><b>Recommendation:</b> ${recommendation}</p>

<h4>Suggested Stretches</h4>

${stretchHTML}

<br>

<small>This AI assistant provides educational guidance only and is not a medical diagnosis.</small>

`;

}
function showLabel(part){

document.getElementById("bodyLabel").innerText = "Body Area: " + part;

}