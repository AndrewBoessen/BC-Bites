const getData = async () => {
  menuItems = []
  try{
    response = await fetch('https://web.bc.edu/dining/menu/todayMenu_PROD.json');
    items = await response.json();

    items.forEach(element => {
      newObj = {
        "name" : element["Recipe_Print_As_Name"],
        "hall" : element["Location_Name"],
        "hall_num" : element["Location_Number"],
        "cat_num" : element["Menu_Category_Number"],
        "price" : element["Selling_Price"],
        "serve_date" : element["Serve_Date"],
        "id" : element["Recipe_Number"],
      }
      menuItems.push(newObj);
    });
  } catch (error) {
    console.error(error);
  }

  return menuItems;
}

const getImage = async (query) => {
  try{
    
  } catch (error) {
    console.error(error);
  }

}

export default getData;

