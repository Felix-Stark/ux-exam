import { genderDiagramData } from "../data/genderData"
import { Pie } from "react-chartjs-2"
import '../style/_charts.scss'

const WinnersByGender = () => {

	

  return (
	<div className="pie-chart">
		<Pie data={ genderDiagramData } />
	</div>
  )
}

export default WinnersByGender