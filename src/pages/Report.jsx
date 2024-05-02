import Footer from "../components/Footer";
import Header from "../components/Header";
const Report = () => {
  return (
    <>
      <Header />
      <main className="container my-3">
        <h1>Health Report</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
        <h2>Weight Loss Progress</h2>
            <p>Current Weight: 180 lbs</p>
            <p>Starting Weight: 200 lbs</p>
            <p>Weight Loss: 20 lbs</p>

        </div>
          <div className="col-md-4">
          <h2>Exercise Goals</h2>
              <p>Weekly Exercise Hour Goal: 5 Hours</p>
              <p>Exercise Hours This Week : 7 Hours</p>
              <p>Remaining Hours to Goal : 0 Hours</p>

          </div>
          <div className="col-md-4">
          <h2>Healthy Eating Habbits</h2>
              <p>Vegetables Consumed : 5 servings/day</p>
              <p>Fruits Consumed : 3 servings/day</p>
              <p>Water Intake : 8 glasses/day</p>

          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Report;
