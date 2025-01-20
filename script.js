const container=document.querySelector(".container");
const loginLink=document.querySelector(".login-link");
const registarLink=document.querySelector(".register-link");
const croseIcon=document.querySelector(".crose-icon");
const navButton=document.querySelector(".nav-button");

    loginLink.addEventListener("click", ()=>{
        container.classList.remove("active");
    
    });
    registarLink.addEventListener("click", ()=>{
        container.classList.add("active");
    });
    navButton.addEventListener("click", ()=>{
        container.classList.add("active-button");
    });
    croseIcon.addEventListener("click", ()=>{
        container.classList.remove("active-button");
    });