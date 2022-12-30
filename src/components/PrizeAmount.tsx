import { Bar, Pie, Line } from 'react-chartjs-2'
import { prizeDiagramData } from '../data/prizeData'


const PrizeAmount = () => {


  return (
    <div className='prize-amount'>
      <h1>Average prize amount per year</h1>
      {/* <Bar data={ prizeDiagramData } /> */}
      <Line data={prizeDiagramData} />
    </div>
  )
}

export default PrizeAmount