import data from '../data/laureates.json'

let male: number = 0;
let female: number = 0;

for (let i = 0; i < data.length; i++) {
  const obj = data[i];
  if (obj.gender == "male") {
    male++;
  }
  if (obj.gender == "female") {
    female++;
  }
}

export const genderDiagramData = {
  datasets: [
    {
      data: [male, female],
      label: "Winners by gender",
      backgroundColor: [
		"rgb(255, 205, 86)",
		"rgb(238, 66, 59)"
	],
    },
  ],
  labels: ['Male', 'Female']
};