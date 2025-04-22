
import Header from './Components/Header/Header.jsx'
import FoodItems from './Components/FoodItems/FoodItems.jsx'

import {menu} from './assets/data.js'



function App() {
 

  return (
    <>
      <Header />
      <div className="foods-container">
        {menu.map(function (element, index) {
          return (
            <FoodItems
              key={element.id}
              title={element.title}
              category={element.category}
              price={element.price}
              img={element.img}
              desc={element.desc}
              link={element.link}
            />
          );
        })}
      </div>
    </>
  );
}

export default App

//Key prop functions aditional to silencing a warning is Enabling React to perform efficient and accurate updates to dynamic lists.
// Preserving the internal state of list item components across re-renders and list modifications.

//index is declared but not currently used as there are specific IDs on data.js.
