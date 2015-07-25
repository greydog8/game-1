'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload,create:create,update:update,render:render});



function preload(){
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image('ship', 'ship.png');
}

function create(){
  ship = game.add.sprite(400,550,'ship');
}

function update(){
}

function render(){
}
