import './App.css'
import LeaderTable from './components/leadertable'

import type {entry} from 'components/leadertable'

function App() {

  let entries: entry[] = [
    {name: "Dave", score: 12},
    {name: "Marcus", score: 10},
  ];
  
  return (
    <div id='main'>
      <h1>Leaderboard</h1>
      <div id='content'>
        <LeaderTable entries={entries}/>
      </div>
      
    </div>
  )
}

export default App
