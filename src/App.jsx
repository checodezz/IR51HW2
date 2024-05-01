import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <img
          src="https://placehold.co/500x400?text=Healthy Lifestyle"
          alt="helath image"
          className="img-fluid mt-5"
        />

        <section className="mt-5">
          <div>
            <h2>Health Resources</h2>
            <p>
              Discover food and information to support your journey towards a
              healther lifestyle.
            </p>
            <Link className="btn btn-primary">Explore Food Items</Link>
          </div>
        </section>

        <section className="my-5">
          <div>
            <h2>Health Report</h2>
            <p>See health report.</p>
            <Link className="btn btn-primary">View Report</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
