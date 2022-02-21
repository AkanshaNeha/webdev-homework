const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
const loading = document.querySelector('#loading');
let app = document.querySelector('#results');

const addDataToDOM = (item) => { 
  let element = document.createElement('div');
  let image = document.createElement('div');
  let name = document.createElement('div');

  element.className = "element";
  name.className = "name";
  
  image.innerHTML = '<img src ='+ item.strDrinkThumb + ' height = 200px width = 200px alt = '+ item.idDrink+'> </img>'
  name.innerHTML = item.strDrink;
  element.append(image);
  image.append(name);
  app.append(element);
  
  element.addEventListener("mouseover", function(event) {
    element.style.backgroundColor = "purple";
    name.style.color = 'white'
  })
  element.addEventListener("mouseout", function(event) {
    element.style.backgroundColor = "transparent";
    name.style.color = 'black';
  })

  app.style.display = 'flex';
  app.style.flexDirection = 'row'
  app.style.flexWrap = 'wrap'
  app.style.justifyContent = 'center';
  
}

async function fetchData (url) {
  // Add your code here
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    data.drinks.forEach(elem => {
      addDataToDOM(elem);
    });
   
  }
  catch(error) {
    console.log(error);
      let element = document.createElement('element');
      element.textContent = `An error occured. Please try again.`;
      app.append(element);
  }
  finally{ 
    app.removeChild(loading);
  }
};

fetchData(url);
