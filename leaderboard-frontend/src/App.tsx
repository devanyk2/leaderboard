import './App.css'
import LeaderTable from './components/leadertable'

import type {entry} from 'components/leadertable'

function App() {

  let entries: entry[] = [
    {name: "Hansel", score: 22},
    {name: "Gretel", score: 12},
    {name: "Dave", score: 12},
    {name: "Marcus", score: 10},
    {name: "Roger", score: 35},
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
