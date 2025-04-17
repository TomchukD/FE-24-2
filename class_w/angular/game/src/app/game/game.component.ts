import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { CoreService } from 'src/app/game/core.service';

enum CellStatus {
    idle = 'idle',
    pending = 'pending',
    success = 'success',
    fail = 'fail'
}

@Component({
    selector: 'app-game',
    imports: [
        ReactiveFormsModule,
        NgClass
    ],
    templateUrl: './game.component.html',
    styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
    private cellCount = 100;

    private selectedCell: number = 0;

    private timerID: number | null = null;


    constructor(private core: CoreService) {
    }

    public gridCells: number[] = Array(this.cellCount).fill(0);

    public gridStateCells: CellStatus[] = Array(this.cellCount).fill(CellStatus.idle);

    public timerForm = new FormControl<number | null>(1000, [Validators.required, Validators.max(3500)]);

    public get disabledStart(): boolean {
        return !this.timerForm.value || this.timerID !== null;
    }

    public get playerScore(): number {
        return this.core.playerScore;
    }
    public get computerScore(): number {
        return this.core.computerScore;
    }

    ngOnInit(): void {
    }

    public startGame(): void {
        this.timerForm.disable();
        this.randomCell();
        this.startTimer();
    }

    public resetGame(): void {
        clearInterval(this.timerID!);
        this.timerID = null;
        this.core.playerScore = 0;
        this.core.computerScore = 0;
        this.gridStateCells = Array(this.cellCount).fill(CellStatus.idle);
        this.timerForm.enable();
    }

    public onSelectItem(index: any): void {
        if (this.gridStateCells[index] === CellStatus.pending) {
            this.core.playerScore++;
            this.gridStateCells[index] = CellStatus.success;
            this.checkWinner();
            clearInterval(this.timerID!);
            this.startTimer();

        }
    }

    private randomCell(): void {
        do {
            this.selectedCell = Math.floor(Math.random() * this.cellCount);
        } while (this.gridStateCells[this.selectedCell] !== CellStatus.idle);
        {
            this.gridStateCells[this.selectedCell] = CellStatus.pending;
        }
    }

    private startTimer(): void {
        this.timerID = setInterval(() => {
            if (this.gridStateCells[this.selectedCell] === CellStatus.pending) {
                this.gridStateCells[this.selectedCell] = CellStatus.fail;
                this.core.computerScore += 1;
            }
            this.selectedCell = -1;
            this.checkWinner();
        }, Number(this.timerForm.value));
    }

    private checkWinner(): void {
        if ( this.core.computerScore === 10 || this.core.playerScore === 10) {
            clearInterval(this.timerID!);
            return;
        }
        this.randomCell();
    }

}
