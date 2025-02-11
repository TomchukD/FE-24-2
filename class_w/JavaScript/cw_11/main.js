const gameState = {
    playerScore: 0,
    pcScore: 0,
    timeLimit: 300,
    timeout: null,
    currentCell: null,
}

const elements = {
    startButton: null,
    timeInput: null,
    playerScoreElement: null,
    pcScoreElement: null,
    gameGrid: null,
    modalOverlay: null,
    modalMessage: null,
    modalClose: null,
}

function initializeGame() {
    elements.startButton = document.getElementById('startButton')
    elements.timeInput = document.getElementById('timeInput')
    elements.playerScoreElement = document.getElementById('playerScore')
    elements.pcScoreElement = document.getElementById('pcScore')
    elements.gameGrid = document.getElementById('gameGrid')
    elements.modalOverlay = document.getElementById('modal')
    elements.modalMessage = document.getElementById('modalMessage')
    elements.modalClose = document.getElementById('modalClose')

    createGrid()
    addEventListeners()
}

initializeGame();

function createGrid() {
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        elements.gameGrid.appendChild(cell);
    }
}

function addEventListeners() {

    elements.modalClose.addEventListener('click', hideModal)
    elements.startButton.addEventListener('click', startGame)
    elements.gameGrid.addEventListener('click', handleCellClick)


    elements.timeInput.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value < 500) {
            e.target.value = 500;
        }
        if (value > 5000) {
            e.target.value = 5000;
        }
    });
}
function startGame() {
    resetGame()
    elements.startButton.disabled = true;
    nextRount()
}

function resetGame() {
    gameState.pcScore = 0;
    gameState.playerScore = 0;
    updateScore();
    clearAllCells()
    gameState.timeout= null;
}

function clearAllCells() {
    const cells = elements.gameGrid.getElementsByClassName('cell');
    Array.from(cells).forEach(cell => cell.className = 'cell')
}
// знайти відповідь в чому різниця між getElementsByClassName і querySelectorAll

function nextRount(){
    const cells = elements.gameGrid.querySelectorAll('.cell');

    const availableCells= Array.from(cells).filter(cell=> !cell.classList.contains('red') && !cell.classList.contains('green'))


    const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    randomCell.classList.add('yellow');
    gameState.currentCell = randomCell;
    gameState.timeout = setTimeout(handelTimeout, gameState.timeLimit);

}

function handelTimeout(){
    if(gameState.currentCell){
        gameState.currentCell.classList.remove('yellow');
        gameState.currentCell.classList.add('red');
        gameState.pcScore++;
        gameState.currentCell.innerText = gameState.pcScore
        updateScore();
        checkEndGame()
    }
}

function handleCellClick(event){
    const clikedCell = event.target;
    if(clikedCell.classList.contains('yellow')){
        clearTimeout(gameState.timeout);
        clikedCell.classList.remove('yellow');
        clikedCell.classList.add('green');
        gameState.playerScore++;
        updateScore();
        checkEndGame()
    }
}

function checkEndGame(){
    if(gameState.pcScore >=10 || gameState.playerScore >= 10){
        endGame();
    }else{
        nextRount();
    }
}

function updateScore(){
    elements.pcScoreElement.textContent = gameState.pcScore;
    elements.playerScoreElement.textContent = gameState.playerScore;
}


















function endGame(mesage) {
    mesage = 'asdasdsad'
    elements.modalMessage.innerText= mesage;
    showModal()
}

function showModal() {
    elements.modalOverlay.style.display = 'flex';
}
function hideModal() {
    elements.modalOverlay.style.display = 'none';
    elements.startButton.disabled = false;
}
