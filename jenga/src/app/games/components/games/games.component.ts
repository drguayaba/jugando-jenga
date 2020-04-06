import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { GameService } from '@app/services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
	public players: {};
	public colors: boolean;
	public numbers: boolean;
	public errorType: boolean;
	public gamers = new FormGroup({
		player: new FormControl('')
	});

	options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(private gameService: GameService, fb: FormBuilder) {
  	this.players = [
  		{
  			"id": 0,
  			"value": 1
  		},
  		{
  			"id": 1,
  			"value": 2
  		},
  		{
  			"id": 2,
  			"value": 3
  		},
  		{
  			"id": 3,
  			"value": 4
  		},
  		{
  			"id": 4,
  			"value": 5
  		},
  		{
  			"id": 5,
  			"value": 6
  		},
  		{
  			"id": 6,
  			"value": 7
  		},
  		{
  			"id": 7,
  			"value": 8
  		},
  		{
  			"id": 8,
  			"value": 9
  		},
  		{
  			"id": 9,
  			"value": 10
  		},
  	];

  	this.colors = false;
  	this.numbers = false;
  	this.errorType = false;

  	this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit() {
  }

  setTypeGame(type: string) {
  	if(type == 'colors')  {
  		this.colors = true;
  		this.numbers = false;
  	}

  	else if(type == 'numbers') {
  		this.numbers = true;
  		this.colors = false;
  	}

  	else this.errorType = true;
  }

  validatePlayers() {}
}
