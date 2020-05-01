let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'; 
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

const isBot = (door) => {
  return door.src === botDoorPath ? true:
  false;
}

const isClicked = (door) => {
  return door.src === closedDoorPath ? false:
  true;
};


const playDoor = (door) => {
  numClosedDoors-- ;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
};

//Non-bot doors should be assigned randomly, use random and subswitches or if/else
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 1:
      openDoor1 = beachDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 2:
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = botDoorPath;
      break;
  }
};


doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!'
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  };
  currentlyPlaying = false;
};


startRound();