$(document).ready(function () {
  // Add your code here
  const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
  const addDataToDOM = (item) => {
    $('#results').append(
      $('<div id = "maindiv">')
        .append($('<div>')
        .append($('<img src ='+ item.strDrinkThumb + ' height = 200px width = 200px alt = '+ item.idDrink+'> </img>')))
        .append($('<div id = "namediv">')
        .append(item.strDrink))
    ).css({
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    })
  };

  const fetchData = (url) => {
    $.ajax({
      type: 'GET',
      url: url,
      success: (data) => {
        console.log(data);

        data.drinks.forEach((item) => {
          addDataToDOM(item);
        });
      },
      error: (error) => {
        console.log(error);
        $('#results').append('<div').text(`An error occured. Please try again.`);
      },
      complete: () => {
        $('#loading').remove();
      },
    });
  };

  fetchData(url);
  
});
