import { Pie } from "react-chartjs-2";
import { winnersDiagramData } from '../data/totalWinnersData'
import '../style/_charts.scss'

const TotalWinners = () => {
	

  return <div className="pie-chart">
	<Pie data={ winnersDiagramData } />
  </div>;
	
};

export default TotalWinners
