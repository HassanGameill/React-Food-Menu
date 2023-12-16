import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import ItemList from "./Components/ItemList";

import { allData } from "./Data";
import { useState } from "react";



function App() {

  const [itemsData, setItemsData] = useState(allData);



  // Get All Category Unique //
  const allCategory = ['all',...new Set(allData.map((i) => i.category))];
  
  console.log(allCategory);


  // Filter By Category //

  const filterByCategory = (cat) => {

      if (cat === 'all') {
        setItemsData(allData)

      } else {
        const newArr = allData.filter((allData) => allData.category === cat)
        setItemsData(newArr)

      }


  }



  // Filter by Search Form //
  const filterBySearch = (word) => {

    if (word !== "") {
      const newArr = allData.filter((data) => data.title === word)
      setItemsData(newArr)

    }


}





  return (
    <div className="color-body">


      <NavBar filterBySearch={filterBySearch} />

      <Container>

        <Header />
        <Category  filterByCategory={filterByCategory} allCategory={allCategory}/>
        <ItemList itemsData={itemsData}/>
       

      </Container>
      
      
    </div>
  );
}

export default App;
