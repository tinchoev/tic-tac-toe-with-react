import reactLogo from './assets/react.svg'
import './App.css'
import { useState } from 'react'
import { Square } from './components/Square'
import confetti from 'canvas-confetti'
import { WinnerModal } from './components/WinnerModal'

const TURNS = {
  x: '❌',
  o: '⭕'
}

const WINNER_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)

  function onSquareClick(index) {
    if (squares[index] || winner) return
    const newSquares = squares.slice()
    newSquares[index] = turn
    setSquares(newSquares)
    const newWinner = checkForWinner(newSquares)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    turn === TURNS.x ? setTurn(TURNS.o) : setTurn(TURNS.x)
  }

  function checkForWinner (squares) {
    for (let i = 0; i < WINNER_LINES.length; i++) {
      const [a, b, c] = WINNER_LINES[i]
      if (
        squares[a] && 
        squares[a] === squares[b] && 
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tic Tac Toe with React!</h1>
      <div className='status'>{`Next player: ${turn}`}</div>
      <div className='board'>
        {
          squares.map((value, index) => {
            return (
              <Square key={index} value={value} handleClick={() => onSquareClick(index)} />
            )
          })
        }
      </div>
      <WinnerModal winner={winner} />
    </>
  )
}

export default App
