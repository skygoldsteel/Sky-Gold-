// ==========================
// SKY GOLD STEEL - SCRIPT.JS
// ==========================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header shadow on scroll
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.25)";
    }else{
        header.style.boxShadow = "none";
    }

});

// Simple fade-in animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".feature-box,.product-card,.review-card,.stat-box").forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="0.6s";

    observer.observe(item);

});
