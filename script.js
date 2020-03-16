'Use strict';

///Header
const Menu = document.querySelector('.menu'); 
Menu.addEventListener('click', (event) => {
    Menu.querySelectorAll('a').forEach(elem => {
        elem.classList.remove('active');
    })
    event.target.classList.add('active');
});
const Portfolio = document.querySelector('.portfolio__list'); 
Portfolio.addEventListener('click', (event) => {
    Portfolio.querySelectorAll('li').forEach(elem => {
        elem.classList.remove('portfolio__image_border');
    })
    event.target.classList.add('portfolio__image_border');
});
let PortfolioObj = [];
let obj = {};

function portfolio() {
    Portfolio.querySelectorAll('li').forEach((elem, i) => {
        let compStyles = window.getComputedStyle(elem);
        /*console.log(compStyles.getPropertyValue('height'));*/
        /*console.log(elem.style.backgroundImage);*/
        obj.background = compStyles.getPropertyValue('background-image');
        obj.position = compStyles.getPropertyValue('background-position');
        PortfolioObj[i] = obj;
        obj = {};
    });
}
portfolio();
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
    Portfolio.querySelectorAll('li').forEach((elem, i) => {
        let j = (n+i)%12;
        elem.style.backgroundImage = PortfolioObj[j].background;
        elem.style.backgroundPosition = PortfolioObj[j].position;
       
    });  
}
FilterButton2.addEventListener('click', () => mix(2));

FilterButton3.addEventListener('click', () => mix(3));

FilterButton4.addEventListener('click', () => mix(4));



/////Form
const CloseButton = document.getElementById('close-button');
const SubmitButton = document.querySelector('.submit');
SubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
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
    form.reset();
  
});
CloseButton.addEventListener('click', () => {
    document.getElementById('message-block').classList.add('hidden');
    });

    ////Slider
const VertPhone1 = document.querySelector('#iphoneVertical1');
const VertPhone2 = document.querySelector('#iphoneVertical2');
const HorPhone = document.querySelector('.iphone-horizontal__container');
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


///////*

let items = document.querySelectorAll('.carousel-item');
let currentItem = 0;
function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}
document.querySelector('.chev-right').addEventListener('click', function() {

    items[currentItem].classList.remove('img-active');
    
    
    changeCurrentItem(currentItem - 1);
    
    items[currentItem].classList.add('img-active');
    blue();
    
})
document.querySelector('.chev-left').addEventListener('click', function() {
  
    items[currentItem].classList.remove('img-active');
    

    
    changeCurrentItem(currentItem + 1);
  
    items[currentItem].classList.add('img-active');
    blue();
    
})

function blue() {
    if (document.querySelector('.slide2').classList.contains('img-active') ) {
        document.querySelector('.slider__wrapper').style.backgroundColor = '#648bf0';
        
    } else {
        document.querySelector('.slider__wrapper').style.backgroundColor = '#f06c64';
    }
}
/*

let items = document.querySelectorAll('.carousel-item');


let currentItem = 0;
let isEnable = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}
document.querySelector('.chev-right').addEventListener('click', function() {
    if (isEnable) {
     previousItem(currentItem);   
    }
    
})

document.querySelector('.chev-left').addEventListener('click', function() {
    if (isEnable) {
      nextItem(currentItem);  
    }
    
})

function previousItem(n) {
hideItem('to-right');
changeCurrentItem(n - 1);
//setTimeout(showItem, 1000, 'from-left');
let animated = document.querySelector('.img-active');
animated.onanimationend = () => {
showItem('from-left');

}

}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    let animated = document.querySelector('.img-active');
animated.onanimationend = () => {
    showItem('from-right');
    
}

    }

    function hideItem(direction) {
        blue();
        isEnable = false;
        items[currentItem].classList.add(direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('img-active', direction);
        });
        blue();
    }

    function showItem(direction) {
        blue();
        items[currentItem].classList.add('img-next',direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('img-next', direction);
            this.classList.add('img-active');
            isEnable = true;
        });
        
    }*/