import { useState } from "react"

export default function Batsman() {
  const batsmanStyle = {
    border: '2px solid green',
    borderRadius: '10px',
    margin: '10px'
  }
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);

  const handleSingle = () => {
    let newScore = runs + 1;
    setRuns(newScore)
  }

  const handleSix = () => {
    let newScore = runs + 6;
    let updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(newScore)
  }

  const handleFour = () => {
    let newScore = runs + 4;
    const updatedFours = fours + 1;
    setFours(updatedFours)
    setRuns(newScore)
  }

  return (
    <div style={batsmanStyle}>
      <h3>Bangladeshi Batsman</h3>
      <h2>Tamim Iqbal</h2>
      {
        runs >= 50 && <p>You Score 50 Congratulations</p>
      }
      <h2>Score : {runs} </h2>
      <h3>Total Sixes : {sixes} </h3>
      <h3>Total Fours : {fours} </h3>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  )
}