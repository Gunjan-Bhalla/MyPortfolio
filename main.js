var typed = new Typed(".text", {
    strings:["Frontend Developer", "Web Developer", "Android Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


/*------------------About Tabs---------------------------*/
// const tabsContainer = document.querySelector(".about-tabs"),
// aboutSection = document.querySelector(".about-section");

// tabsContainer.addEventListener("click", (e) =>{
//     if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
//         tabsContainer.querySelector(".active").classList.remove("active");
//         e.target.classList.add("active");
//         const target = e.target.getAttribute("data-target");
//         // console.log(target);
//         aboutSection.querySelector(".tab-content.active").classList.remove("active");
//         aboutSection.querySelector(target).classList.add("active");
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const tabsContainer = document.querySelector(".about-tabs");
//     const aboutSection = document.querySelector(".about-section");

//     tabsContainer.addEventListener("click", (e) => {
//         if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
//             // Remove active class from the currently active tab
//             tabsContainer.querySelector(".active").classList.remove("active");
//             // Add active class to the clicked tab
//             e.target.classList.add("active");

//             // Get the target content associated with the clicked tab
//             const target = e.target.getAttribute("data-target");

//             // Remove active class from the currently active content
//             aboutSection.querySelector(".tab-content.active").classList.remove("active");
//             // Add active class to the clicked content
//             aboutSection.querySelector(target).classList.add("active");
//         }
//     });
// });
