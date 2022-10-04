'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const player = document.querySelectorAll('.player');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
let score1 = 0;
let score2 = 0;
let total1 = document.getElementById('score--0');
let total2 = document.getElementById('score--1');
let totalScore1 = 0;
let totalScore2 = 0;

let dice = document.querySelector('.dice');
const dices = ['dice-1.png', 'dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png'];


const switchPlayers = function() {
    for(let i = 0; i < player.length; i++) {
        player[i].classList.toggle('player--active');
    }
}

const winnerPlayer = function(num) {
    player[num].classList.add('player--winner');
    player[num].classList.add('name');
}


btnRoll.addEventListener('click', function() {
    let numDice = Math.floor((Math.random() * (dices.length - 1)  ) + 1);
    dice.src = dices[numDice];

    if(player[0].classList.contains('player--active')) {
        if(numDice === 1) {
            score1 = 0;
            switchPlayers()
        }   else {
            score1 += numDice;
        }
    }   else {
        if(numDice === 1) {
            score2 = 0;
            switchPlayers();
        }   else {
            score2 += numDice;
        }
    }
    current1.textContent = score1;
    current2.textContent = score2;

});


btnHold.addEventListener('click', function() {
    if(player[0].classList.contains('player--active')) {
        totalScore1 += score1;
        total1.textContent = totalScore1;
        score1 = current1.textContent = 0;
        if(totalScore1 >= 100) {
            winnerPlayer(0);
        }   else {
            switchPlayers();
        }
    }   else {
        totalScore2 += score2;
        total2.textContent = totalScore2;
        score2 = current2.textContent = 0;
        if(totalScore2 >= 100) {
            winnerPlayer(1);        
        }   else {
            switchPlayers();
        }
    }
 });


 btnNew.addEventListener('click', function() {
    score1 = score2 = 0;
    totalScore1 = totalScore2 = 0;
    total1.textContent = total2.textContent = 0
    player[0].classList.remove('player--winner');
    player[0].classList.remove('name');
    player[1].classList.remove('player--winner');
    player[1].classList.remove('name');

    player[0].classList.add('player--active');
 });

