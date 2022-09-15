async function getData() {
  const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
  const data = await response.json();
  createBreedList(data.message);
}
getData();

const firstB = document.getElementById("firstBox");
const secondB = document.getElementById("secondBox");
const thirdB = document.getElementById("thirdBox");

let selected1;
let selected2;
let selected3;

const createBreedList = (breedList) => {
  firstB.innerHTML = `
    <option   >Section 1</option>
    ${Object.keys(breedList)
      .map(function (breed) {
        return `<option }>${breed}</option> `;
      })
      .slice(0, 10)
      .join("")}
    `;
  secondB.innerHTML = `
    <option  selected >Section 2</option>
    ${Object.keys(breedList)
      .map(function (breed) {
        return `<option >${breed}</option> `;
      })
      .slice(11, 21)
      .join("")}
     `;

  thirdB.innerHTML = `
     <option  selected >Section 3</option>
     ${Object.keys(breedList)
       .map(function (breed) {
         return `<option >${breed}</option> `;
       })
       .slice(22, 33)
       .join("")}
     `;
};

const checkIt1 = () => {
  selected1 = firstB.value;
};
const checkIt2 = () => (selected2 = secondB.value);

const checkIt3 = () => (selected3 = thirdB.value);
const downloadIt = () => {
  const obj = {
    choice1: selected1,
    choice2: selected2,
    choice3: selected3,
  };

  let result = JSON.stringify(obj);
  console.log(result);
  onDownload("file.json", result);
};

const onDownload = (file, text) => {
  let element = document.createElement("a");
  element.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", file);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  document.getElementById("download").disabled = true;
  //open downloaded file in folder
};
