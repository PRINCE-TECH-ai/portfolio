// Simple greeting based on hour
(function(){
  const h = new Date().getHours();
  const greet = h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
  const about = document.querySelector("#about p");
  if(about) about.innerHTML = `${greet}! I’m Prince — learning web dev, crypto & Web3. Building things and sharing what I learn.`;
})();
document.addEventListener("DOMContentLoaded", () => {
  const about = document.querySelector("#about");
  about.style.opacity = 0;
  about.style.transition = "opacity 1.5s ease";
  
  setTimeout(() => {
    about.style.opacity = 1;
  }, 300); // fade in after 0.3s
});