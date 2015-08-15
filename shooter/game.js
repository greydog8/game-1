'use strict';

var ship;
var cursors;
var background;
var missle;
var enemy;

console.log("what?");

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload,create:create,update:update,render:render});

function preload(){
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image('background','background.gif');
  game.load.image('missle','missle.gif');
  game.load.image('ship', 'ship.gif');
  game.load.image('enemy', 'evilFighter.png');
}

function create(){
  background = game.add.tileSprite(0,0,800,600,'background');
  background.autoScroll(-300,0);
  ship = game.add.sprite(20,300,'ship');
  missle = game.add.sprite(85,335,'missle');
  enemy = game.add.sprite(600,300,'enemy');
  game.physics.enable(ship, Phaser.Physics.ARCADE);
  game.physics.enable(missle, Phaser.Physics.ARCADE);
  game.physics.enable(enemy, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
  console.log('i am running');
  enemy.angle += -90;
  enemy.anchor.setTo(0.5, 0.5);
  enemy.scale.x = .75;
  enemy.scale.y = .75;
}



function update(){
  game.physics.arcade.overlap(missle, enemy, collisionHandler,null, this);
  ship.body.velocity.x = 0;
  ship.body.velocity.y = 0;
  
  if (!missle.shooting)  {
    missle.body.velocity.x = 0;
    missle.body.velocity.y = 0;
  }

  if (missle.x > 800) {
    missleReset();
  }  

  if (cursors.up.isDown){
    ship.body.velocity.y = -300;
    if (! missle.shooting) {
      missle.body.velocity.y = -300;
    }
  }

  else if (cursors.down.isDown){
    ship.body.velocity.y = 300;
    if (! missle.shooting) {
      missle.body.velocity.y = 300;
    }
  }
  
  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    missle.body.velocity.x = 1000;
    missle.shooting = true;
    missle.x = ship.x + 65;
    missle.y = ship.y + 35;
  }
}

function render(){
}


function collisionHandler(missle, enemy) {
  missleReset();
  enemy.kill();
}


function missleReset() {
  missle.shooting = false;
  missle.renderable = false;
  missle.body.velocity.x = 0;
  missle.body.velocity.y = 0;
  missle.x = ship.x + 65;
  missle.y = ship.y + 35;
  missle.renderable = true;
}
