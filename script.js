// Smooth scroll button
document.getElementById("btnTentang").addEventListener("click", function(){
    document.getElementById("tentang").scrollIntoView({
        behavior:"smooth"
    });
});

// Scroll reveal animation
function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
