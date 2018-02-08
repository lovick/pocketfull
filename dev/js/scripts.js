"use strict";

var body = document.querySelector("body");

var phone = document.querySelector("#phone");
var keys = document.querySelector("#keys");
var wallet = document.querySelector("#wallet");
var help = document.querySelector("#help");
var close = document.querySelector("#close");

phone.addEventListener('touchstart', phoneMenu);
phone.addEventListener('mousedown', phoneMenu);
phone.addEventListener('mouseover', hover);
phone.addEventListener('mouseout', unhover);

keys.addEventListener('touchstart', keysMenu);
keys.addEventListener('mousedown', keysMenu);
keys.addEventListener('mouseover', hover);
keys.addEventListener('mouseout', unhover);

wallet.addEventListener('touchstart', walletMenu);
wallet.addEventListener('mousedown', walletMenu);
wallet.addEventListener('mouseover', hover);
wallet.addEventListener('mouseout', unhover);

help.addEventListener('touchstart', helpMenu);
help.addEventListener('mousedown', helpMenu);
close.addEventListener('touchdown', closeMenu);
close.addEventListener('mousedown', closeMenu);

document.querySelector('html').addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);

function phoneMenu() {
    var sec = document.querySelector('section');
    if (sec != null) {
        console.log("Can't append, it exists");
    } else {
        var menu = document.createElement('section');
        menu.innerHTML = `
            <h2>My iPhone X</h2>
            <a href="#" id="close" onclick="closeMenu()">CLOSE</a>
            <p>
                My phone is perpetually either in my hand or within arms reach.
            </p>
            <p>
                I can do almost everything I need to do on a computer from it, whether checking my work schedule or even just turning the lights on or off.
            </p>
            <p>
                FaceID is wonderful, unless it's too bright outside. Or my face is against a pillow. Or it's just slightly too close to or too far from my face. Maybe not that wonderful.
            </p>
        `;
        menu.style.gridRow = "2 / 4";
        menu.style.border = "2px solid #00FFFF";
        body.appendChild(menu);
    }
}

function keysMenu() {
    var sec = document.querySelector('section');
    if (sec != null) {
        console.log("Can't append, it exists");
    } else {
        var menu = document.createElement('section');
        menu.innerHTML = `
            <h2>My Keys</h2>
            <a href="#" id="close" onclick="closeMenu()">CLOSE</a>
            <p>
                Isn't it great fun to just carry an army of keys around? No? Too bulky? Oh well.
            </p>
            <p>
                I've got a variety of keys that I carry with me everywhere; work keys, car keys, house keys, bottle opening key, and even a tiny lego Darth Vader.
            </p>
            <p>
                True to the movies, he's missing his arms and his legs as well. Downsides of being attached to a keyring for many years.
            </p>
        `;
        menu.style.gridRow = "1 / 3";
        menu.style.border = "2px solid #cd00cd";
        body.appendChild(menu);
    }
}

function walletMenu() {
    var sec = document.querySelector('section');
    if (sec != null) {
        console.log("Can't append, it exists");
    } else {
        var menu = document.createElement('section');
        menu.innerHTML = `
            <h2>My Wallet</h2>
            <a href="#" id="close" onclick="closeMenu()">CLOSE</a>
            <p>
                Ah, my wallet. I've had this wallet going on probably 10+ years now.
            </p>
            <p>
                It's stretched out full of stuff to the point where I can't actually remove some of the junk in it for fear of it not holding things properly anymore.
            </p>
            <p>
                I'm long overdue to buy a new one, but hey, it still works.
            </p>
        `;
        menu.style.border = "2px solid #FFFF00";
        menu.style.gridRow = "1 / 3";
        body.appendChild(menu);
    }
}

function helpMenu() {
    var sec = document.querySelector('section');
    if (sec != null) {
        console.log("Can't append, it exists");
    } else {
        var menu = document.createElement('section');
        menu.style.gridRow = 1 / 3;
        menu.innerHTML = `
            <h2>Pocket Full of Interface</h2>
            <a href="#" id="close" onclick="closeMenu()">CLOSE</a>
            <p>
                This is a small visualization of what I carry in my pockets daily, the things I can't live without. Click or tap on each item to learn a bit more about it.
            </p>
            <footer>
            <a href="https://validator.w3.org/check?uri=referer">Valid HTML 5</a>
            <a href="https://jigsaw.w3.org/css-validator/check/referer">Valid CSS</a>
            </footer>
        `;
        menu.style.border = "2px solid #333333";
        menu.style.transition = "width 2s, height 4s";
        body.appendChild(menu);
    }
}

function closeMenu() {
    var sec = document.querySelector('section');
    if (sec == null) {
        console.log("Can't close something that doesn't exist.");
    } else {
        console.log("attempt remvove");
        sec.remove();
    }
 }

 function hover(obj) {
     switch(obj.target.id) {
         case 'phone':
            phone.setAttribute('src', 'images/phone500C.png');
            break;
        case 'keys':
            keys.setAttribute('src', 'images/keys500M.png');
            break;
        case 'wallet':
            wallet.setAttribute('src', 'images/wallet500Y.png');
            break;
        default:
            console.log("no change?");
     }
 }

 function unhover(obj) {
     switch(obj.target.id) {
        case 'phone':
            phone.setAttribute('src', 'images/phone500.png');
            break;
        case 'keys':
            keys.setAttribute('src', 'images/keys500.png');
            break;
        case 'wallet':
            wallet.setAttribute('src', 'images/wallet500.png');
            break;
        default:
            console.log("no change to unhover");

     }
 }