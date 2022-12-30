import data from './awards.json'

export const getLaureatesData = (chosenYear: string) => {
  
	let categories: string[] = []
	let numberOfLaureates: number[] = [];

	const getDataByYear = (chosenYear: string) => {
		const awardYearData: any[] = data.filter(object => 
			object.awardYear === chosenYear
			)
			return awardYearData;
	}
	const awardYearData = getDataByYear(chosenYear)

	const sortData = () => {
		for (let i = 0; i < awardYearData.length; i++) {
		const obj = awardYearData[i];
		if (!categories.includes(obj.category.en)) {
			categories.push(obj.category.en);
			if (obj.laureates !== undefined) {
			numberOfLaureates.push(obj.laureates.length);
			} else {
			numberOfLaureates.push(1);
			}
		}
		}
	}
	sortData()



	const laureatesDiagramData = {
	datasets: [
			{
			data: numberOfLaureates,
			label: `Number of laureates ${ chosenYear }`,
			backgroundColor: ["#34b7eb"],
			},
		],
		labels: categories
	};
	return laureatesDiagramData
}
