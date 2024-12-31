let promptGenerator = document.getElementById('promptActivator');
let pageContainer = document.getElementById('container');


function handleClick(){
    let numberOfSquares = prompt('Enter the resolution number');

    if(numberOfSquares > 100){
        alert('Sorry, number should be smaller than 100')
    } else {
        let squaresContainer = document.createElement('div');
        squaresContainer.className = 'squaresContainer'
        pageContainer.appendChild(squaresContainer)

        let newArr = (window.getComputedStyle(squaresContainer).width).split('')
        newArr.splice((newArr.length)-2, 2);
        let size = newArr.join('');

        for(let i=1; i<=numberOfSquares; i++){
            let squareRow = document.createElement('div');
            squareRow.classList = 'squareRow';
            squaresContainer.appendChild(squareRow);
            for(let k=1; k<=numberOfSquares; k++){
                let square = document.createElement('div');
                square.classList = 'square'
                squareRow.appendChild(square)

                squareRow.style.height = size/numberOfSquares + 'px'
                square.style.width = size/numberOfSquares + 'px'
            }
        }
        let squares = document.querySelectorAll('.square');
        squares.forEach((individual) => {
            individual.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'black'
            })
        })
        promptGenerator.removeEventListener('click', handleClick)
    }
}

promptGenerator.addEventListener('click', handleClick);