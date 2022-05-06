// Come up with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

//Stores cells/boxes in a varible for easy use
const boxes = document.querySelectorAll('.cell')



class Game{
  constructor(playerOneMarker,playerTwoMarker){
    //Sets game running logic for checks
    this.gameRunning = true
    this.whosTurn = 'playerOne'
    this.makeBoxes()
  }
  setPlayersMarkers(){
    let setPlayerMarkerOne = prompt("Please enter your symbol to play as Player One", "Enter Letter Here")  
    let setPlayerMarkerTwo = prompt("Please enter your symbol to play as Player Two", "Enter Letter Here")
   
    if (setPlayerMarkerOne == null){
      setPlayerMarkerOne = "X"
    }
    if (setPlayerMarkerTwo == null){
      setPlayerMarkerTwo = "O"
    }
    if(setPlayerMarkerOne == setPlayerMarkerTwo){
      alert("Players cannot have the same play marker.")
      setPlayerMarkerTwo = prompt("Please enter a different symbol to play as Player Two", "Enter Letter Here")
    }
    console.log(setPlayerMarkerOne)
    console.log(setPlayerMarkerTwo)
  }
  
  //method to swap between players after placing marker
  changePlayer(){
    if(currentGame.whosTurn == "playerOne"){
      currentGame.whosTurn = "playerTwo"
    }
    else{
      currentGame.whosTurn = "playerOne"
    }
  }
  //adds event listeners to all boxes/cells via a loop
  makeBoxes(){
    for (const box of boxes) {
      box.addEventListener('click', this.playerMove) 
    }
  }
    playerMove(){
    console.log(currentGame.whosTurn)
    if (currentGame.whosTurn === 'playerOne') {
    document.getElementById(this.id).innerText = `${playerOne.marker}`
      currentGame.changePlayer()
    } else {
      document.getElementById(this.id).innerText = `${playerTwo.marker}`
      currentGame.changePlayer()
    } 
    }
  }


//winning scenarios
// rows
// 123
// 456
// 789

// columns
// 147
// 258
// 369

// diagonals
// 159
// 357





//player constructor
class Players{
  constructor(marker){
    this._marker = marker
  }
  get marker() {
    return this._marker
  }
}





class PlayerOne extends Players{
    constructor(marker){
     super(marker)
  }
}

class PlayerTwo extends Players{
    constructor(marker){
    super(marker)
  }
}



//Create Game
let currentGame = new Game()

//Create Players
const playerTwo = new Players('X')
const playerOne = new Players('O')

currentGame.setPlayersMarkers()



// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs! My tech is ${this._tech}`)
//     }
// }


// class Front extends Contractor{
//     constructor(name,role,tech, techstack){
//         super(name,role)
//         this._techstack = techstack
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use the ${this._tech} tech`)
//     }
// }


// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }


// let bob = new Contractor('Bob','Front-end', 'React')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
