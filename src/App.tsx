import { ToastContainer } from "react-toastify";
import { RouterComponent } from "./Routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/footer/footer";
import { UserContextProvider } from "./providers/userContext/userContext";
import { Header } from "./components/header/header";

function App() {
  return (
    <>
      <div className="App">
        <div className="routes">
          <UserContextProvider>
            <Header />
            <RouterComponent />

            <ToastContainer
              position="bottom-right"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </UserContextProvider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
