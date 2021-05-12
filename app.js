const options = [
  {
    name: "Rock",
    img: "https://wwfoldschool.com/wp-content/uploads/2017/03/The-Rock.jpg",
  },
  {
    name: "Paper",
    img: "https://www.pngkit.com/png/detail/21-214230_toilet-paper-png-toilet-paper-transparent-background.png",
  },
  {
    name: "Scissors",
    img: "https://www.pngitem.com/pimgs/m/75-758977_transparent-background-scissors-png-png-download.png",
  }

]

function findOption(optionName) {
  let found = options.find(option => option.name == optionName)
  if (!found) {
    throw new Error(`${optionName} not found`)
  }
  drawOption(found)
  playGame(found)
}

function drawOption(option) {
  const optionElem = document.getElementById('option-details')
  optionElem.innerHTML = /*html*/ `
  <div>
    <img src="${option.img}" class="img-fluid d-flex align-items-center justify-content-center p-2"/>
      <h1 class="d-flex align-items-center justify-content-center p-2">
        ${option.name}
      </h1>
  </div>
  `
}

function playGame(option) {
  if (option.name == "Rock") {
    console.log('You both chose Rock')
    const optionElem = document.getElementById('win-details')
    optionElem.innerHTML = /*html*/ `
  <div>
  <h1 class="d-flex align-items-center justify-content-center"> It's a Tie!</h1>
  </div>
  `
  } else if (option.name == "Paper") {
    console.log('You Win!')
    const optionElem = document.getElementById('win-details')
    optionElem.innerHTML = /*html*/ `
  <div>
  <h1 class="d-flex align-items-center justify-content-center text-success"> You win!</h1>
  </div>
  `
  } else if (option.name == "Scissors") {
    console.log('You Lose!')
    const optionElem = document.getElementById('win-details')
    optionElem.innerHTML = /*html*/ `
  <div>
  <h1 class="d-flex align-items-center justify-content-center text-danger"> You lose!</h1>
  </div>
  `
  }
}


const i = Math.floor(Math.random() * options.length)
const option = options[i]

