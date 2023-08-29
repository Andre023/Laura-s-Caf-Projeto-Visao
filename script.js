document.addEventListener("DOMContentLoaded", function () {
  let mapInitialized = false;

  const mapLink = document.getElementById("lauras-mapLink");
  const mapModal = document.getElementById("lauras-mapModal");
  const closeModal = document.getElementById("lauras-closeModal");

  function initMap() {
    const location = { lat: -20.385574, lng: -43.503578 };
    const map = new google.maps.Map(document.getElementById("lauras-modalMap"), {
      zoom: 15,
      center: location
    });
    new google.maps.Marker({ position: location, map: map });
    google.maps.event.trigger(map, 'resize');  // Redefine o tamanho do mapa
    map.setCenter(location); // Re-centraliza o mapa
  }

  mapLink.addEventListener("click", function (event) {
    event.stopPropagation();
    const rect = mapLink.getBoundingClientRect();
    mapModal.style.left = (rect.left + window.pageXOffset + rect.width / 2 - 100) + "px"; 
    mapModal.style.top = (rect.top + window.pageYOffset - 2260) + "px";  // Ajustado para -150
    mapModal.style.display = "block";
    initMap();
  });
  

  closeModal.addEventListener("click", function (event) {
    event.stopPropagation();
    mapModal.style.display = "none";
  });

  document.addEventListener("click", function (event) {
    if (!mapModal.contains(event.target) && event.target !== mapLink) {
      mapModal.style.display = "none";
    }
  });
  
});

const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})