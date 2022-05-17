burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
navList.classList.toggle('v-class-res');
navbar.classList.toggle('h-nav-res');
})