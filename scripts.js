
function init () {

let altitude = 0;
let posX = 0
let posY = 0

    const ship = document.getElementById("rocket")

    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    let position = 0

    takeOff.addEventListener('click', event => {
      let ready = window.confirm("Confirm that the shuttle is ready for takeoff?");
      if (ready){
        flightStatus.innerHTML = 'Shuttle in flight!';
        shuttleBackground.style.backgroundColor = 'green'
        altitude = 10000
        spaceShuttleHeight.innerHTML = altitude;
      }
    })

    land.addEventListener('click', event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
          flightStatus.innerHTML = 'The shuttle has landed!';
          shuttleBackground.style.backgroundColor = 'steelblue'
          altitude = 0
          spaceShuttleHeight.innerHTML = altitude;
        
      })

      abort.addEventListener('click', event => {
        let ready = window.confirm("Houston we have a problem");
        if (ready){
          flightStatus.innerHTML = 'Mission Aborted';
          shuttleBackground.style.backgroundColor = 'tomato'
          altitude = 0
          spaceShuttleHeight.innerHTML = altitude;
        }
      })

      down.addEventListener('click', event => {
        position +=10
        ship.style.top = position+"px"
        
        altitude -= 10000
        spaceShuttleHeight.innerHTML = altitude;
      });
      
      up.addEventListener('click', event => {
        position -=10
        ship.style.top = position+"px"
        altitude += 10000
        spaceShuttleHeight.innerHTML = altitude;
      });

      left.addEventListener('click', event => {
        position -=10
        ship.style.left = position+"px"

      });
      
      right.addEventListener('click', event => {
        position +=10
        ship.style.left = position+"px"

      });  



    

    

    
}



window.addEventListener("load", init);
