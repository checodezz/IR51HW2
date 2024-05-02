import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { foodItemsData } from "./Foods";

const FoodDetails = () => {
  const { foodId } = useParams();

  const selectedFood = foodItemsData.find((food) => food.id == foodId);

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="m-3">{selectedFood.name}</h1>
        <ul className="list-group mb-3">
          <li className="list-group-item">
            <strong>Name: </strong>
            {selectedFood.name}
          </li>
          <li className="list-group-item">
            <strong>Calories: </strong>
            {selectedFood.calories}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default FoodDetails;
