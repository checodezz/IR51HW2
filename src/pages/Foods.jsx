import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

export const foodItemsData = [
  { id: 1, name: "Apple", calories: 52, category: "Fruit" },
  { id: 2, name: "Banana", calories: 89, category: "Fruit" },
  { id: 3, name: "Chicken Breast", calories: 165, category: "Protein" },
  { id: 4, name: "Salad", calories: 100, category: "Vegetable" },
  { id: 5, name: "Yogurt", calories: 120, category: "Dairy" },
];

const Foods = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  /* 
  const handleCheckbox = (event) => {
    const value = event.target.value;
    if (selectedCategories.includes("All")) {
      setSelectedCategories([]);
    } else {
      if (selectedCategories.includes(value)) {
        setSelectedCategories((prevValue) => {
          return prevValue.filter((val) => val !== value);
        });
      } else {
        setSelectedCategories((prevVal) => {
          return [...prevVal, value];
        });
      }
    }
  };

  const filteredItems = selectedCategories.includes("All")
    ? foodItemsData
    : foodItemsData.filter((food) =>
        selectedCategories.includes(food.category),
      ); */

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prevValue) => [...prevValue, value]);
    } else {
      setSelectedCategories((prevValue) => {
        return prevValue.filter((category) => category !== value);
      });
    }
    console.log(selectedCategories);
  };

  const filteredItems = selectedCategories.includes("All")
    ? foodItemsData
    : foodItemsData.filter((food) =>
        selectedCategories.includes(food.category),
      );

  return (
    <>
      <Header />
      <main className="container">
        <h1>List of Food Items</h1>
        <label className="">Category:</label>
        <div className="form-check form-check-inline m-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="All"
            onChange={handleCheckbox}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox1">
            All
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="Fruit"
            onChange={handleCheckbox}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox2">
            Fruit
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="Protein"
            onChange={handleCheckbox}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox3">
            Protein
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox4"
            value="Vegetable"
            onChange={handleCheckbox}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox4">
            Vegetable
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox5"
            value="Dairy"
            onChange={handleCheckbox}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox5">
            Dairy
          </label>
        </div>

        <ul className="list-group">
          {filteredItems.map((food) => (
            <li key={food.id} className="list-group-item">
              <h5>{food.name}</h5>
              <p>Calories : {food.calories}</p>
              <p>Categories : {food.category}</p>
              <Link className="btn btn-primary" to={`/foods/:foodId`}>
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Foods;
