const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption1");

previews.forEach((preview) =>  {
    var path = document.getElementsByClassName("full-img").src 
    preview.addEventListener("click", (e) => {
        if (!e.target.classList.contains("thumb")) {

        }
        else {
            modal.classList.add("open");
            original.classList.add("open");
            //Dynamic text and image
            const originalSrc = preview.getAttribute('data-original');
            // original.src = `../web_images/gallery/${originalSrc}`
            original.src = originalSrc;
            const altText = preview.alt;
            caption.textContent = altText;
            modal.disableScroll()
        }
    })
    
})

modal.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }

})

function disableScroll() { 
	document.body.classList.add("stop-scrolling"); 
} 

function enableScroll() { 
	document.body.classList.remove("stop-scrolling"); 
} 

