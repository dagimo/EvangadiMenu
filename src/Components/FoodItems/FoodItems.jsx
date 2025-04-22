import { Component } from 'react'

 class FoodItems extends Component {

  render() {
    const {title,category,price,img,desc,link}=this.props;
    const maxLength = 250; // this value can be adjusted
    const truncatedDesc =
      desc.length > maxLength ? desc.substring(0, maxLength) + "..." : desc;//a conditonal operator to check the max. length of the description and use substing() method to use the max discription and append ...
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
          <div>{category}</div>

          <div className="food-desc">{truncatedDesc}</div>
          {link && ( // Conditional rendering: only show the link if it exists
            <div>
              <a href="#">{link}</a>{" "}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default FoodItems;