'Use strict';

/*window.scrollTo( 0, 999, {
    behavior: 'smooth'
});*/

///Header
const Menu = document.querySelector('.menu'); 
Menu.addEventListener('click', (event) => {
    Menu.querySelectorAll('a').forEach(elem => {
        elem.classList.remove('active');
        closeMenu();
    })
    event.target.classList.add('active');
    
    
});

document.addEventListener('scroll', onScroll);
function onScroll(event) {
    let position = window.scrollY;
    let sections = document.querySelectorAll('.scroll');
    let links = document.querySelectorAll('.menu__item-link');
    sections.forEach((elem) =>{
        if (elem.offsetTop <= position && (elem.offsetTop + elem.offsetHeight) > position) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (elem.getAttribute('id') === a.getAttribute('href').substring(1)) {
                 a.classList.add('active');   
                }
            })
        }
    });
    
}

/*Portfolio*/
const Portfolio = document.querySelector('.portfolio__list'); 
Portfolio.addEventListener('click', (event) => {
    Portfolio.querySelectorAll('div').forEach(elem => {
        elem.classList.remove('portfolio__image_border');    
    })
    event.target.classList.add('portfolio__image_border');
    
    
});
let PortfolioObj = [];
let obj = {};

function portfolio() {
    PortfolioObj = [...Portfolio.children]
    console.log(PortfolioObj);
    PortfolioObj[0].style.listStyle = "none";
    Portfolio.innerHTML = '';
    //PortfolioObj.forEach((elem) => {
      //  Portfolio.append(elem); 
    //});
    
    
    //Portfolio.querySelectorAll('div').forEach((elem, i) => {
        //let compStyles = window.getComputedStyle(elem);
        /*console.log(compStyles.getPropertyValue('height'));*/
        /*console.log(elem.style.backgroundImage);*/
        //PortfolioObj[i] = compStyles.getPropertyValue('background-image');
        //obj.position = compStyles.getPropertyValue('background-position');
        //PortfolioObj[i] = obj;
        //obj = {};
    //});
}
//portfolio();
//console.log(PortfolioObj);

/*document.querySelector(".portfolio__list__image:nth-of-type(11)").style.backgroundImage = "url('assets/picture-12.png')";*/
/*console.log(document.querySelector('.header__wrapper').style.backgroundColor);
let para = document.querySelector('.header__wrapper');
let compStyles = window.getComputedStyle(para);*/
//console.log((11+3)%12);

const FilterButton1 = document.querySelector('#filter__button1'); 
const FilterButton2 = document.querySelector('#filter__button2'); 
const FilterButton3 = document.querySelector('#filter__button3'); 
const FilterButton4 = document.querySelector('#filter__button4'); 
FilterButton1.addEventListener('click', () => mix(1));
function mix(n) {
    portfolio();
    //console.log(PortfolioObj.length);
    let array = [];
    for (let i = 0; i < PortfolioObj.length; i++) {
        let j = (n+i) % PortfolioObj.length;
        console.log(j);
        Portfolio.append(PortfolioObj[j]); 
        array.push(PortfolioObj[j]);  
    };
    //console.log(array[0]);
    //Portfolio.append(array[0]);
    //Portfolio.append(array[1]);
    /*Portfolio.querySelectorAll('div').forEach((elem, i) => {
        let j = (n+i)%12;
        elem.style.backgroundImage = PortfolioObj[j];
        //elem.style.backgroundPosition = PortfolioObj[j].position;
       
    });  */
}
FilterButton2.addEventListener('click', () => mix(2));

FilterButton3.addEventListener('click', () => mix(3));

FilterButton4.addEventListener('click', () => mix(4));

/*Contact*/
let form = document.querySelector('form');
const CloseButton = document.getElementById('close-button');
const SubmitButton = document.querySelector('.submit');
//object.onsubmit = function(){myScript};
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        
        let a = document.getElementById('message-block');
        //console.log(a.parentNode);
        
        const Subject = document.getElementById('subject').value.toString();
        if (Subject == '') {
            document.getElementById('message-subject').innerText = 'Без темы';
        } else {
            document.getElementById('message-subject').innerText = 'Тема:';
            
        }
        document.getElementById('subject-result').innerText = Subject; 
        
        const description = document.getElementById('description').value.toString();
        if (description == '') {
            document.getElementById('message-description').innerText = 'Без описания';
        }  else {
            document.getElementById('message-description').innerText = 'Описание:';
        }
        
            document.getElementById('description-result').innerText = description;
           
          
        document.getElementById('message-block').classList.remove('hidden');
        
        let d = window.scrollY;
        a.style.top = d+'px';
        
      
    });   


CloseButton.addEventListener('click', () => {
    document.getElementById('message-block').classList.add('hidden');
    form.reset();
    });

    /*slider*/ 
    const VertPhone1 = document.querySelector('#iphoneVertical1');
const VertPhone2 = document.querySelector('#iphoneVertical2');
const HorPhone = document.querySelector('#iphoneHorizontal1');
VertPhone1.addEventListener('click', () => {
    if (document.querySelector('#screenVertical1').style.visibility == "hidden") {
        document.querySelector('#screenVertical1').style.visibility = "visible"   
    } else {
        document.querySelector('#screenVertical1').style.visibility = "hidden";  
    }
    
    
});
VertPhone2.addEventListener('click', () => {
    if (document.querySelector('#screenVertical2').style.visibility == "hidden") {
        document.querySelector('#screenVertical2').style.visibility = "visible" 
    } else {
      document.querySelector('#screenVertical2').style.visibility = "hidden";   
    }
     
});
HorPhone.addEventListener('click', (event) => {
    if (document.querySelector('#screenHorizontal1').style.visibility == "hidden") {
        document.querySelector('#screenHorizontal1').style.visibility = "visible" 
    } else {
     document.querySelector('#screenHorizontal1').style.visibility = "hidden";   
    }
    
    
})


    ///////////////////
    let items = document.querySelectorAll('.carousel-item');
let currentItem = 0;
let isEnable = true;
let slide_bg = document.querySelector('.slider__wrapper');
console.log(slide_bg);
function bgColor() {
    if (slide_bg.classList.contains('slide_blue')) {
        slide_bg.classList.add('slide_red');
        slide_bg.classList.remove('slide_blue');

    } else {
        slide_bg.classList.add('slide_blue');
        slide_bg.classList.remove('slide_red');
        
    }
    console.log(slide_bg);
}


function changeCurrentItem(n) {
    currentItem =Math.abs((n + items.length) % items.length);
}
document.querySelector('.chev-right').addEventListener('click', function() {
    if (isEnable) {
     previousItem(currentItem);  
     bgColor();
     
    }
    //console.log(items[currentItem].classList);
    
    
})

document.querySelector('.chev-left').addEventListener('click', function() {
    if (isEnable) {
      nextItem(currentItem);  
      bgColor();
    }
    
    
});

function hideItem(direction) {
    //blue();
    isEnable = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('img-active', direction);
    });
    //blue();
}

function showItem(direction) {
    //blue();
    items[currentItem].classList.add('img-next',direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('img-next', direction);
        this.classList.add('img-active');
        isEnable = true;
    });
    
}

function previousItem(n) {
hideItem('to-right');
changeCurrentItem(n - 1);
//setTimeout(showItem, 1000, 'from-left');
//let animated = document.querySelector('.img-active');
//animated.onanimationend = () => {
//showItem('from-left');
//}
showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    //let animated = document.querySelector('.img-active');
//animated.onanimationend = () => {
    //showItem('from-right');  
//}
showItem('from-right');
    }


    /////////////
    let hamburger = document.querySelector(".hamburger");
    let nav = document.querySelector("nav");
    let logo = document.querySelector(".logo");
    let children = document.querySelector("body").children;
    
    //a.style.top = d+'px';
    console.log(document.documentElement.clientHeight);
    
function closeMenu() {
    nav.style.height = 'auto';
    
    logo.classList.remove('logo_move');
    logo.classList.add('logo_reverse');
    nav.classList.remove('navigation__mobile');
    nav.classList.add('navigation__remove');
    for (let index = 1; index < children.length; index++) {
        children[index].classList.remove('bright');
        
    };
    
    
}


    hamburger.addEventListener('click', ()=> {
        if (hamburger.classList.contains('hamburger_rotate')) {
            hamburger.classList.remove('hamburger_rotate');
    hamburger.classList.add('hamburger_reverse');
            //closeMenu();
        } else {
            
            hamburger.classList.remove('hamburger_reverse');
            hamburger.classList.add('hamburger_rotate'); 
            logo.classList.remove('logo_reverse');
            logo.classList.add('logo_move');
            nav.style.height = document.documentElement.clientHeight+"px";
            nav.classList.add('navigation__mobile');
            nav.classList.remove('navigation__remove');
            for (let index = 1; index < children.length; index++) {
                children[index].classList.add('bright');
                
            };
        }
        
        
    });
let body = document.querySelector("script");
    nav.addEventListener('transitionend', () => {
        nav.focus();    
        
    })
    nav.addEventListener('focusout', ()=> {
        closeMenu();
        
    });
    
    
    
    