// ======================================
// FOREVER US ❤️
// SCRIPT.JS (PART 1)
// ======================================

// ---------- INTRO ----------

const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const openBtn = document.getElementById("openBtn");

if(openBtn){

openBtn.addEventListener("click",()=>{

intro.style.opacity="0";
intro.style.transform="scale(.95)";
intro.style.transition=".7s";

setTimeout(()=>{

intro.style.display="none";

hero.style.display="flex";
hero.classList.add("fadeIn");

window.scrollTo({
top:0,
behavior:"smooth"
});

},700);

});

}

// ---------- JOURNEY BUTTON ----------

const journeyBtn=document.getElementById("journeyBtn");

if(journeyBtn){

journeyBtn.onclick=()=>{

const gallery=document.getElementById("gallery");

if(gallery){

gallery.scrollIntoView({
behavior:"smooth"
});

}

};

}

// ---------- LIVE COUNTER ----------

const startDate=new Date("2025-07-28T00:00:00");

function updateCounter(){

const counter=document.getElementById("days");

if(!counter) return;

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/86400000);

const hours=Math.floor(diff/3600000)%24;

const minutes=Math.floor(diff/60000)%60;

const seconds=Math.floor(diff/1000)%60;

counter.innerHTML=`
${days} Days<br>
<span style="font-size:18px">
${hours}h ${minutes}m ${seconds}s
</span>
`;

}

updateCounter();

setInterval(updateCounter,1000);

// ---------- FLOATING HEARTS ----------

const hearts=document.getElementById("hearts");

if(hearts){

const emojis=["💖","💕","💗","💞","🤍"];

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animation="floatUp "+(5+Math.random()*3)+"s linear forwards";

heart.style.zIndex="999";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},250);

}

// ---------- ROSE PETALS ----------

const petals=document.getElementById("petals");

if(petals){

const flowers=["🌸","🌹","🌺","💮"];

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

},700);

}

// ---------- STARS ----------

const stars=document.getElementById("stars");

if(stars){

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(1+Math.random()*3)+"s";

star.style.animationDelay=Math.random()*2+"s";

stars.appendChild(star);

}

}
// ======================================
// SCRIPT.JS (PART 2)
// ======================================

// ---------- GALLERY POPUP ----------

const popup=document.getElementById("popup");
const popupImg=document.getElementById("popupImg");
const popupCaption=document.getElementById("popupCaption");
const popupDate=document.getElementById("popupDate");
const closePopup=document.getElementById("closePopup");

const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");

const cards=document.querySelectorAll(".photo-card");

let currentIndex=0;

function showImage(index){

if(cards.length===0) return;

const card=cards[index];

popupImg.src=card.querySelector("img").src;

const caption=card.querySelector(".caption")?.textContent.trim()||"";
const date=card.querySelector(".date")?.textContent.trim()||"";

if(popupCaption){
popupCaption.textContent=caption;
popupCaption.style.display=caption?"block":"none";
}

if(popupDate){
popupDate.textContent=date;
popupDate.style.display=date?"block":"none";
}

popup.style.display="flex";

}

cards.forEach((card,index)=>{

card.querySelector("img").addEventListener("click",()=>{

currentIndex=index;

showImage(currentIndex);

});

});

if(closePopup){

closePopup.onclick=()=>{

popup.style.display="none";

};

}

if(popup){

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

};

}

if(prevBtn){

prevBtn.onclick=(e)=>{

e.stopPropagation();

currentIndex--;

if(currentIndex<0){

currentIndex=cards.length-1;

}

showImage(currentIndex);

};

}

if(nextBtn){

nextBtn.onclick=(e)=>{

e.stopPropagation();

currentIndex++;

if(currentIndex>=cards.length){

currentIndex=0;

}

showImage(currentIndex);

};

}

// ---------- FINAL SURPRISE ----------

const loveBtn=document.getElementById("loveBtn");
const finalBox=document.getElementById("finalSurprise");
const closeFinal=document.getElementById("closeFinal");

if(loveBtn && finalBox){

loveBtn.onclick=()=>{

finalBox.style.display="flex";

};

}

if(closeFinal){

closeFinal.onclick=()=>{

finalBox.style.display="none";

};

}

// ---------- SCROLL ANIMATION ----------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});