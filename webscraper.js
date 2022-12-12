const getData = (hall, filter) => {
    locationMap = {
        Lower: 21,
        Carneys: 23,
        Stuart: 28,
    }
    mealMap = {
        breakfast: 1,
        lunch: 2,
        dinner: 3,
    }
    fetch('https://web.bc.edu/dining/menu/todayMenu_PROD.json')
        .then((response) => response.json())
        .then((json) => {
          json.forEach(element => {
            if(
                element['Location_Number'] == locationMap[hall] && 
                element['Meal_Number'] == mealMap[filter]
            ){
                console.log(element['Recipe_Print_As_Name'])
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
};


export default getData;

