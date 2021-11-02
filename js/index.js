const handOptions = {
    'rock': '/assets/Rock.png',
    'paper': '/assets/Paper.png',
    'scissors': '/assets/Scissors.png'
}


const pickUserHand = hand => {
    // hide the current page
    let hands = document.querySelector('.hands');
    hands.style.display = 'none';
    // show the next page with the hand you picked
    let contest = document.querySelector('.contest');
    contest.style.display = 'flex';

    // set the user pick
    document.getElementById('userPickImage').src = handOptions[hand]
    let cpHand = pickComputerHand()
    refree(hand, cpHand);
}

let score = 0;
const pickComputerHand = () => {
    let hands = ['rock', 'paper', 'scissors']
    let cpHand = hands[Math.floor(Math.random() * 3)]

    // set the user pick
    document.getElementById('computerPickImage').src = handOptions[cpHand];
    return cpHand
}

const refree = (userHand, cpHand) => {
    if(userHand === 'paper' && cpHand == 'scissors'){
        setDicision('YOU LOSE!')
    }
    if(userHand === 'paper' && cpHand == 'rock'){
        setDicision('YOU WIN!')
        setScore(score += 1)
    }
    if(userHand === 'paper' && cpHand == 'paper'){
        setDicision('YOU TIED!')
    }
    if(userHand == 'rock' && cpHand == 'scissors'){
        setDicision('YOU WIN!')
        setScore(score += 1)
    }
    if(userHand == 'rock' && cpHand == 'paper'){
         setDicision('YOU LOSE!')
    }
    if(userHand == 'rock' && cpHand == 'rock'){
        setDicision('YOU TIED!')
    }
    if(userHand == 'scissors' && cpHand == 'scissors'){
        setDicision('YOU TIED!')
    }
    if(userHand == 'scissors' && cpHand == 'paper'){
        setDicision('YOU WIN!')
        setScore(score += 1)
    }
}

const restartGame = () => {
    let hands = document.querySelector('.hands')
    hands.style.display = 'flex';
    // show the next page with the hand you picked
    let contest = document.querySelector('.contest');
    contest.style.display = 'none';

}
const setDicision = (decision) => {
    document.querySelector('.decision h1').innerText = decision
}

const setScore = (score) => {
    document.querySelector('.score h1').innerText = score
}