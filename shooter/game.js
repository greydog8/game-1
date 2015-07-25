'use strict';
var ship;
var cursors;

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload,create:create,update:update,render:render});


function preload(){
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image('ship', 'ship');
}

function create(){
  ship = game.add.sprite(400,550,'ship');
  game.physics.enable(ship, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
}

function update(){
  ship.body.velocity.x = 0;
  ship.body.velocity.y = 0;
  if (cursors.down.isDown) {
    ship.body.velocity.y = -300;
  }
else if (cursors.down.isDown){
  ship.body.velocity.y = 300;
  }
}


function render(){
}
