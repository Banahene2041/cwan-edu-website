const mySlide = () =>{
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    
    // toggling the burger div
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-Links');

        burger.classList.toggle('toggle');
        // toggling the burger div end
    });
}

mySlide();

// toggling the header
const header = document.getElementById('header');
const scrollButton =document.querySelector('.btn');
const aboutHeading = document.getElementById('part-1');

window.addEventListener('scroll', function(){
    // console.log(this.scrollY);
    const headerHeight = header.getBoundingClientRect().height;
    if (window.scrollY > headerHeight){
        header.classList.add('header-active');
    }
    else{
        header.classList.remove('header-active');
    }

    if (window.scrollY > 600){
        scrollButton.classList.add('hide-btn');
    }
    else{
        scrollButton.classList.remove('hide-btn');
    }

    console.log(window.scrollY);

    if (window.scrollY > 722 && window.scrollY < 1165){
        aboutHeading.classList.add('part-1-fixed');
    }
    else{
        aboutHeading.classList.remove('part-1-fixed');
    }


});

// toggling the preloader
const preLoader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preLoader.classList.add('hide-preloader');
});

const links = document.querySelectorAll('link');

links.forEach(function(link){
    link.addEventListener('click', function(){
        console.log('helo');
    });
});