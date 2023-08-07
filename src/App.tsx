import { ToastContainer } from "react-toastify";
import { RouterComponent } from "./Routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

function App() {
  return (
    <>
      <div className="App">
        <div className="routes">
          <Header />
          <RouterComponent />

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
