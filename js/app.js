// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = getSpeed();
    this.x = -100;
    this.y = 234;
};

var getSpeed = function() {
  const max = 500;
  const min = 200;
  return Math.random(max - min) + min;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;

    // rebirth
    if (this.x > 500) {
      this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 400;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
  if(direction === "right" && this.x < 402) {
    this.x += 101;
  } else if(direction === "down" && this.y < 400) {
    this.y += 83;
  } else if(direction === "left" && this.x > -2) {
    this.x -= 101;
  } else if(direction === "up" && this.y > -15) {
    this.y -= 83;
  }
  this.render();

  // If the player reaches the water
  // the game should be reset
  //  by moving the player back to the initial location.
  if (this.y === -15) {
    this.y = 400;
  }
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

var player = new Player();
