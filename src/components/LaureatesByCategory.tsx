import React, { ChangeEvent } from 'react'
import { Bar, Pie, Line } from 'react-chartjs-2'
import { getLaureatesData } from "../data/laureatesData";
import { useState } from 'react'


const LaureatesByCategory = () => {
  const [chosenYear, setChosenYear] = useState("1901");
  
  const handleYear: (e: string) => void = (e) => {
    setChosenYear(e)
  }

  const laureatesDiagramData = getLaureatesData(chosenYear)
  
  return (
    <div className="laureates">
      <h1>Laureates by category</h1>
      <section>
        <label htmlFor="year">Put in year</label>
        <input
          type="number"
          placeholder="1901"
          name='year'
          min='1902'
          max='2001'
          autoFocus
          onChange={(e) => {
            handleYear(e.target.value);
          }}
        />
        
        {/* <button onClick={setDiagram}>Select year</button> */}
      </section>
      <Bar data={laureatesDiagramData} />
    </div>
  );
}

export default LaureatesByCategory