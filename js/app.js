//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName('navi');
// don't forget this shit ^^^ is an array

for(i=0; i<navElem.length; i++){
    navElem[i].addEventListener('click', showHide);
}

function showHide(){
    var insides = this.querySelector('.inner');
    if(insides.style.display === 'block'){
        insides.style.display = 'none';
    }else{
        insides.style.display = 'block';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var menuElem = document.getElementsByClassName('name');

for(i=0; i<menuElem.length; i++){
    menuElem[i].addEventListener('click', showHideMenu);
}

function showHideMenu(){
    var menuCSS = this.querySelector('.menu');
    if(menuCSS.style.display === 'block'){
        menuCSS.style.display = 'none';
    }else{
        menuCSS.style.display = 'block';
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumbElem = document.getElementsByClassName('thumb');

for(i=0; i<thumbElem.length; i++){
    var counts = document.createElement('a');
    counts.className = 'likes';
    thumbElem[i].addEventListener('click', counter);
    thumbElem[i].appendChild(counts);
}

function counter(){
    var countingThing = this.querySelector('.likes');
    countingThing.innerHTML++;
}