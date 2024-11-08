let viewer = document.getElementById("divDemoMain")
let img = document.getElementById("MapIMG")
let springhurstPark = document.getElementById("park1")
let nelsonPark = document.getElementById("park2")
let lansdownePark = document.getElementById("park3")
let divshowpark = document.getElementById("divPark")
let ParkTitle = document.getElementById("divParkTitle")
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
    divshowpark.classList.add("show")
    ParkTitle.textContent = "Springhurst Park";
    divshowpark.setAttribute("style","display:flex;height:275px");
    ParkSports.innerHTML = `
    <h2 id=HBasketball class=hSport onclick=ShowTeam("Basketball",5,"Springhurst")> Basketball </h1> 
    <h2 id=HVolleyball class=hSport onclick=ShowTeam("Tennis",6,"Springhurst")> Tennis </h2>
    `;
    
})
nelsonPark.addEventListener("click",function(){
    divshowpark.classList.add("show")  
    ParkTitle.textContent = "Nelson Park";
    divshowpark.style.display = "flex";
    divshowpark.style.height = "250px";
    divshowpark.setAttribute("style","display:flex;height:250px");
    ParkSports.innerHTML = `
    <h2 id=HODRHockey class=hSport onclick=ShowTeam("Hockey",6,"Nelson")> Outdoor Hockey </h1> 
    <h2 id=HTennis class=hSport onclick=ShowTeam("Tennis",2,"Nelson")> Tennis </h2> 
    `;
})
lansdownePark.addEventListener("click",function(){  
    divshowpark.classList.add("show")
    ParkTitle.textContent = "Lansdowne Park";
    divshowpark.style.display = "flex";
    divshowpark.style.height = "225px";
    ParkSports.innerHTML = `
    <h2 id=HBasketball class=hSport onclick=ShowTeam("Basketball",5,"Lansdowne")> Basketball </h1>  
    `;
})
function ShowTeam(Sport, teamSize, Park){
 let TeamMenu = document.getElementById("TeamMenu");
 let PlayerMenu = document.getElementById("PlayerMenu")
 document.body.style.overflow = 'hidden';
 TeamMenu.style.width = "100%";
 TeamMenu.style.zIndex = 3;
 if (Sport=="Basketball")
 {
    PlayerMenu.style.backgroundImage = "url(IMG/Basketball-Page.jpg)";
 }
 if (Sport=="Tennis"){
    PlayerMenu.style.backgroundImage = "url(IMG/Tennis-Page.jpg)"
 }
 }

let xButton = document.getElementById("xButton");
xButton.addEventListener("click", function() {
    let TeamMenu = document.getElementById("TeamMenu");
    TeamMenu.style.width = "0%";
    TeamMenu.style.zIndex = "0";
    TeamMenu.style.transition = "0.5s";
});


