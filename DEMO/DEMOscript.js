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
var rect = viewer.getBoundingClientRect()
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
    ParkSports.innerHTML = "Basketball <br> Soccer <br> Volleyball"
})
nelsonPark.addEventListener("click",function(){  
    ParkTitle.textContent = "Nelson Park";
    ParkImg.innerHTML= "";
    divshowpark.style.display = "block";
    ParkSports.innerHTML = "Outdoor Hockey <br> Tennis "
})
lansdownePark.addEventListener("click",function(){  
    ParkTitle.textContent = "Lansdowne Park";
    ParkImg.innerHTML= "";
    divshowpark.style.display = "block";
    ParkSports.innerHTML = "Basketball"
})