function disable(button) {
    button.disabled = true; 
    button.style.backgroundColor = '#344FA1';
    button.style.color = 'gray';  
}

const playerArray = [];

function addedPlayers(player) {
    const listItem = document.getElementById('list-of-players'); 
    listItem.innerText = '';

    for (let i = 0; i < playerArray.length; i++ ) {
        const playerName = playerArray[i];
        const li = document.createElement('li');
        li.innerText = `${i + 1}. ${playerName}`;
        listItem.appendChild(li);
    }
}

function updatePlayerName (elementId) {
    const playerNameElement = document.getElementById(elementId);
    const playerName = playerNameElement.innerText; 
    playerArray.push(playerName);

    if (playerArray.length > 5) {
        alert('Not more than 5 players');
        return;
    }

    const count = document.getElementById('counter');
    count.innerText = playerArray.length; 
    addedPlayers(playerArray);

    return count;
} 

document.getElementById('button-1').addEventListener('click', function (){
    const player1 = updatePlayerName('player-1');
})
document.getElementById('button-2').addEventListener('click', function (){
    const player2 = updatePlayerName('player-2');
})
document.getElementById('button-3').addEventListener('click', function (){
    const player3 = updatePlayerName('player-3');
})
document.getElementById('button-4').addEventListener('click', function (){
    const player4 = updatePlayerName('player-4');
})
document.getElementById('button-5').addEventListener('click', function (){
    const player5 = updatePlayerName('player-5');
})
document.getElementById('button-6').addEventListener('click', function (){
    const player6 = updatePlayerName('player-6');
})

document.getElementById('player-expense-btn').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValueById('per-player-cost'); 

    if (isNaN(perPlayerCost)) {
        alert('Please enter amount');
        return;
    }

    if(perPlayerCost < 0) {
        alert('Please provide a valid amount');
        return;
    }

    const countElement = document.getElementById('counter');
    const countString = countElement.innerText;
    const count = parseInt(countString); 
    const perPlayerExpense = perPlayerCost * count;
    const playerExpense = getElementValueById('player-expense'); 
    setElementValueById('player-expense', perPlayerExpense);
    
    document.getElementById('total-btn').addEventListener('click', function(){
        const managerExpense = getInputFieldValueById('manager-expense'); 
        const coachExpense = getInputFieldValueById('coach-expense');

        if (isNaN(managerExpense && coachExpense)) {
            alert('Please enter amount');
            return;
        }

        if (managerExpense < 0 || coachExpense < 0) {
            alert('Please provide a valid amount');
            return;
        }

        const totalCost = perPlayerExpense + managerExpense + coachExpense; 
        const totalExpense = getElementValueById('total-expense'); 
        setElementValueById('total-expense', totalCost);
    });
})



