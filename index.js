var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// function turnLeft () {
// if (rover.direction === "N"){
//     rover.direction === "W";
// }
// else if (rover.direction === "W"){
//     rover.direction === "S";
// }
// else if (rover.direction === "S"){
//     rover.direction === "E";
// }
// else if (rover.direction === "E"){
//     rover.direction === "N";
// }

// console.log("Giro a la izquierda, mi nueva dirección es:" + rover.direction);
// }

// ORIENTACIONES

function turnLeft() {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "N";
      break;
  }
  console.log("Giro a la izquierda. Mi nueva dirección es: " + rover.direction);
}

function turnRight() {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;

    case "W":
      rover.direction = "N";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "E":
      rover.direction = "S";
      break;
  }
  console.log("Giro a la derecha. Mi nueva dirección es: " + rover.direction);
}

function moveForward() {
  if (rover.direction === "N" && rover.y > 0) {
    rover.y = rover.y - 1;
    console.log("Avanzo. Mis nuevas coordenadas son: " + rover.x + " y " + rover.y);
  } else if (rover.direction === "E" && rover.x < 9) {
    rover.x = rover.x + 1;
    console.log("Avanzo. Mis nuevas coordenadas son: " + rover.x + " y " + rover.y);
  } else if (rover.direction === "S" && rover.y < 9) {
    rover.y = rover.y + 1;
    console.log("Avanzo. Mis nuevas coordenadas son: " + rover.x + " y " + rover.y);
  } else if (rover.direction === "W" && rover.x > 0) {
    rover.x = rover.x - 1;
    console.log("Avanzo. Mis nuevas coordenadas son: " + rover.x + " y " + rover.y);
  } else {
    console.log("No puedo avanzar. Estoy fuera de campo.");
  }
  rover.travelLog.push(rover.x + " , " + rover.y);
}


function commands(letra) {
 for (var i=0; i<letra.length; i++) {
     switch (letra[i]){
         case "f":
         moveForward();
         break;

         case "r":
         turnRight();
         break;

         case "l":
         turnLeft();
         break;
     }
 }
 console.log ("Mi historial de coordenadas es: " + rover.travelLog);
}
 