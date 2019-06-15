const Header = () => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>Players: {props.totalPlayers}</span>
    </header>
  )
}

const Player = props => {
  return (
    <div className='player'>
      <span className='player-name'>{props.name}</span>
      <Counter score={props.score} />
    </div>
  )
}

const Counter = () => {
  return (
    <div className='counter'>
      <button className='counter-action decrement'> - </button>
      <span className='counter-score'>{props.score}</span>
      <button className='counter-action increment'> + </button>
    </div>
  )
}

const App = () => {
  return (
    <div className='scoreboard'>
      <Header title='Scoreboard' totalPlayer={1} />

      <Player name='Guil' score={50} />
      <Player name='Ashley' score={90} />
      <Player name='Pedro' score={80} />
      <Player name='Maria' score={60} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
