let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });


        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },4000);
        
        setTimeout(()=>{
            intro.style.opacity = '0'; 
            intro.style.pointerEvents = 'none'; 
            let loader = document.createElement('div');
            loader.classList.add('loader');
            document.body.appendChild(loader);

            setTimeout(()=> {
                window.location.href ='home.html';
            },2000);
        },4300);
    })
})
