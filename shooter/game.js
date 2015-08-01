'use strict';
var ship;
var cursors;
var background;
var missle;
var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload,create:create,update:update,render:render});


function preload(){
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image('background','background.gif');
  game.load.image('missle','missle.gif');
  game.load.image('ship', 'ship.gif');
}

function create(){
  background = game.add.tileSprite(0,0,800,600,'background');
  background.autoScroll(-300,0);
  ship = game.add.sprite(20,300,'ship');
  missle = game.add.sprite(20,300,'missle');
  game.physics.enable(ship, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
}

function update(){
  ship.body.velocity.x = 0;
  ship.body.velocity.y = 0;
  missle.x = ship.x + 65
  missle.y = ship.y + 35
  if (cursors.up.isDown) {
    ship.body.velocity.y = -300;
  }
else if (cursors.down.isDown){
  ship.body.velocity.y = 300;
  }
}


function render(){
}
