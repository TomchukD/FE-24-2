export class CharacterCreate {
    constructor() {
        this.maxPoint = 10;
        this.points = {
            player1: this.maxPoint,
            player2: this.maxPoint,
        }
        this.initializeEventListener()
    }

    initializeEventListener() {
        ['player1', 'player2'].forEach((playerID) => {
            const form = document.getElementById(playerID);

            form.querySelectorAll('.plus, .minus').forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    this.handleStatChange(e, playerID);
                })
            })
        })
    }

    handleStatChange(event, playerID) {
        const button = event.target;
        const isPlus = button.classList.contains('plus');
        const statItem = button.closest('.stat-item');
        const valueSpan = statItem.querySelector('.stat-value');
        const currentPoints = parseInt(valueSpan.textContent);

        if(isPlus && this.points[playerID] > 0) {
            valueSpan.textContent = currentPoints + 1;
            this.points[playerID]--;
        }else if(!isPlus && this.points[playerID] > 0) {
            valueSpan.textContent = currentPoints - 1;
            this.points[playerID]++;
        }
        document.querySelector(`#${playerID} .point-left`).textContent = this.points[playerID];
        this.validPoits(playerID);
    }

    validPoits(playerID) {
        const form = document.getElementById(playerID);
        const plusBtns = form.querySelectorAll('.plus');
        const minusBtns = form.querySelectorAll('.minus');

        plusBtns.forEach((btn) => {
            btn.disabled = this.points[playerID] <=0;
        });

        // TODO  як заблочити коли 10 поінтів не використані

        minusBtns.forEach((btn) => {
            btn.disabled = this.points[playerID] <=0;
        });
        const canStart = this.points.player1 === 0 && this.points.player2 === 0;
        document.querySelector('#start').disabled = !canStart;
    }
}
