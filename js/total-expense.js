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

    // console.log(playerArray);
    // console.log(playerArray.length);
    const count = document.getElementById('counter');
    count.innerText = playerArray.length; 
    addedPlayers(playerArray);

    return count;
} 

document.getElementById('button-1').addEventListener('click', function (){
    const player1 = updatePlayerName('player-1');
    // alert(player1);
})
document.getElementById('button-2').addEventListener('click', function (){
    const player2 = updatePlayerName('player-2');
    // alert(player2);
})
document.getElementById('button-3').addEventListener('click', function (){
    const player3 = updatePlayerName('player-3');
    // alert(player3);
})
document.getElementById('button-4').addEventListener('click', function (){
    const player4 = updatePlayerName('player-4');
    // alert(player4);
})
document.getElementById('button-5').addEventListener('click', function (){
    const player5 = updatePlayerName('player-5');
    // alert(player5);
})
document.getElementById('button-6').addEventListener('click', function (){
    const player6 = updatePlayerName('player-6');
    // alert(player6);
})


document.getElementById('player-expense-btn').addEventListener('click', function () {

    const perPlayerCostElement = document.getElementById('per-player-cost');
    const perPlayerCostElementString = perPlayerCostElement.value;
    const perPlayerCost = parseInt(perPlayerCostElementString);

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
    console.log(perPlayerExpense); 
    
    
    const playerExpenseElement = document.getElementById('player-expense');
    const playerExpenseElementString = playerExpenseElement.innerText;
    const playerExpense = parseInt(playerExpenseElementString); 
    
    playerExpenseElement.innerText = perPlayerExpense;


    document.getElementById('total-btn').addEventListener('click', function(){

        const managerExpenseElement = document.getElementById('manager-expense');
        const managerExpenseElementString = managerExpenseElement.value;
        const managerExpense = parseInt(managerExpenseElementString);

        const coachExpenseElement = document.getElementById('coach-expense');
        const coachExpenseElementString = coachExpenseElement.value;
        const coachExpense = parseInt(coachExpenseElementString);

        if (isNaN(managerExpense && coachExpense)) {
            alert('Please enter amount');
            return;
        }

        if (managerExpense < 0 || coachExpense < 0) {
            alert('Please provide a valid amount');
            return;
        }

        const totalCost = perPlayerExpense + managerExpense + coachExpense; 

        const totalExpenseElement = document.getElementById('total-expense');
        const totalExpenseElementString = totalExpenseElement.innerText;
        const totalExpense = parseInt(totalExpenseElementString); 

        totalExpenseElement.innerText = totalCost; 
    });


})



