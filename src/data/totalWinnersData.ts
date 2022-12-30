import data from './awards.json'


	let categories: string[] = [];
	let chemistry: number = 0;
	let lit: number = 0;
	let peace: number = 0;
	let physics: number = 0;
	let physMed: number = 0;
	let ecoSci: number = 0;
	

  const winnersData = data.map((object) => object);

  const sortData = () => {
    for (let i = 0; i < winnersData.length; i++) {
      const obj = winnersData[i];

      const cat = obj.category.en;

      if (!categories.includes(obj.category.en)) {
        categories.push(obj.category.en);
      } else {
        if (cat == "Chemistry" && obj.laureates !== undefined) {
          obj.laureates.forEach(() => chemistry++);
        }
        if (cat == "Literature" && obj.laureates !== undefined) {
          obj.laureates.forEach(() => lit++);
        }
        if (cat == "Peace" && obj.laureates !== undefined) {
          obj.laureates.forEach(() => peace++);
        }
        if (cat == "Physics" && obj.laureates !== undefined) {
          obj.laureates.forEach(() => physics++);
        }
        if (cat == "Physiology or Medicine" && obj.laureates !== undefined) {
          obj.laureates.forEach(() => physMed++);
        }
        if (cat == "Economic Sciences" && obj.laureates !== undefined) {
          obj.laureates.forEach(() => ecoSci++);
        }
      }
      console.log(chemistry, obj.awardYear);
    }
  };
  sortData();
  console.log("categories", categories);

  export const winnersDiagramData = {
    
    datasets: [
      {
        label: "Number of winners in each category",
        data: [chemistry, lit, peace, physics, physMed, ecoSci],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(238, 66, 59)",
          "rgb(102, 166, 150)",
          "rgb(102, 66, 150)",
        ],
        hoverOffset: 4,
      },
    ],
	labels: categories,
  };



