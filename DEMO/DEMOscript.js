let viewer = document.getElementById("divDemoMain")
let img = document.getElementById("MapIMG")
let springhurstPark = document.getElementById("park1")
let nelsonPark = document.getElementById("park2")
let lansdownePark = document.getElementById("park3")
let divshowpark = document.getElementById("divPark")
let ParkTitle = document.getElementById("divParkTitle")
let ParkImg = document.getElementById("divParkImg")
let ParkSports = document.getElementById("divParkSports")
let divDemo = document.getElementById("divDemo")
let downPoint;
let downScrollPosition;
var body = document.getElementById("body")
let pplList = [
"Brenna Jagger",
"Zena Kemp",
"Jonah Christian",
"Dewayne Christison",
"Émeline Spalding",
"Kiley Frank",
"James Denzil",
"Annabelle Allen",
"Genevieve Abraham",
"Stephany Wootton",
"Ronald Gatsby",
"Current User"
]

body.addEventListener("pointerup", function(){
    downPoint= undefined
})
img.addEventListener('pointerdown', function(e){
    downPoint = {x:e.clientX, y:e.clientY};
    downScrollPosition = {x:viewer.scrollLeft, y:viewer.scrollTop}
});
divDemo.addEventListener("pointerup",function(e){
    downPoint= undefined
});
img.addEventListener("pointermove", function(e){
    if (downPoint != undefined) {
        let offsetX = e.clientX -downPoint.x
        let offsetY = e.clientY -downPoint.y
        let newScrollLeft = downScrollPosition.x - offsetX;
        let newScrollTop = downScrollPosition.y - offsetY;
        viewer.scrollLeft = newScrollLeft;
        viewer.scrollTop = newScrollTop;
    }

});

springhurstPark.addEventListener("click",function(){
    ParkTitle.textContent = "Springhurst Park";
    ParkImg.innerHTML= "";
    divshowpark.style.display = "block";
    divshowpark.style.height = "275px";
    divshowpark.setAttribute("style","display:block;height:275px");
    ParkSports.innerHTML = `
    <h1 id=HBasketball class=hSport onclick=ShowTeam("Basketball",5,"Springhurst")> Basketball </h1> 
    <h3 id=HVolleyball class=hSport onclick=ShowTeam("Volleyball",6,"Springhurst")> Beach Volleyball </h3>
    `;
    
})
nelsonPark.addEventListener("click",function(){  
    ParkTitle.textContent = "Nelson Park";
    ParkImg.innerHTML= "";
    divshowpark.style.display = "block";
    divshowpark.style.height = "250px";
    divshowpark.setAttribute("style","display:block;height:250px");
    ParkSports.innerHTML = `
    <h1 id=HODRHockey class=hSport onclick=ShowTeam("Hockey",6,"Nelson")> Outdoor Hockey </h1> 
    <h2 id=HTennis class=hSport onclick=ShowTeam("Tennis",2,"Nelson")> Tennis </h2> 
    `;
})
lansdownePark.addEventListener("click",function(){  
    ParkTitle.textContent = "Lansdowne Park";
    ParkImg.innerHTML= "";
    divshowpark.style.display = "block";
    divshowpark.style.height = "225px";
    divshowpark.setAttribute("style","display:block;height:225px");
    ParkSports.innerHTML = `
    <h1 id=HBasketball class=hSport onclick=ShowTeam("Basketball",5,"Lansdowne")> Basketball </h1>  
    `;
})
function ShowTeam(Sport, teamSize, Park){
 let TeamMenu = document.getElementById("TeamMenu");
 let Team1 = document.getElementById("Team1");
 let Team2 = document.getElementById("Team2");
 let SportName = document.getElementById("SportName")
 let l = pplList.slice();
 document.body.style.overflow = 'hidden';
 TeamMenu.style.width = "100%";
 TeamMenu.style.zIndex = 3;
 Team1.innerHTML = "";
 Team2.innerHTML = "";
 SportName.textContent = Sport;
 for(let i=0; i<teamSize; i++){
   
    var randomIndex = Math.floor(Math.random() * l.length);
    var randomElement = l[randomIndex];
    Team1.innerHTML += `
    <div id="T1${i}" class="divPlayers divTeam1">
    <img class="playerIMG" src="IMG/Default_pfp.svg.png">
    <h1  class="HPlayer">${randomElement}</h1>
    </div>
    `;
    l.splice(randomIndex, 1);
    randomIndex = Math.floor(Math.random() * l.length);
    randomElement = l[randomIndex];
    Team2.innerHTML += `
    <div id="T2${i}" class="divPlayers divTeam2">
    <h1  class="HPlayer">${randomElement}</h1>
    <img class="playerIMG" src="IMG/Default_pfp.svg.png">
    </div>
    `;
    l.splice(randomIndex, 1);
 }
}
let xButton = document.getElementById("xButton");
xButton.addEventListener("click", function(){
    let TeamMenu = document.getElementById("TeamMenu");
    TeamMenu.style.width = "0%";
    TeamMenu.style.zIndex = 0;
})


