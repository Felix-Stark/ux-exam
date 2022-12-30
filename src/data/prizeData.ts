import data from './awards.json'


let prize: number[] = [], adjustedPrize: number[] = [], years: string[] = []


const awardsData = data.map(object => object)

for (let i = 0; i < awardsData.length; i++) {
	let obj = awardsData[i];
	if( !prize.includes(obj.prizeAmount) ) {
		prize.push(awardsData[i].prizeAmount)
	}
	if( !adjustedPrize.includes(obj.prizeAmountAdjusted) ) {
		adjustedPrize.push(obj.prizeAmountAdjusted)
	}
	if( !years.includes(obj.awardYear) ) {
		years.push(obj.awardYear)
	}
}



export const prizeDiagramData = {
	datasets: [
		{
			data: prize,
			label: 'Original prize value in SEK',
			backgroundColor: ['#3F2DDE']
		},
		{
			data: adjustedPrize,
			label: 'Todays value in SEK',
			backgroundColor: ['#DC184F']
		}
		
	],
	labels: years
}