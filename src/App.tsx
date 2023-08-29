import { ToastContainer } from "react-toastify";
import { RouterComponent } from "./Routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/footer/footer";
import { UserProvider } from "./providers/userContext/userContext";
import { Header } from "./components/header/header";
import { GlobalStyles } from "./style/global";
import { AdvertProvider } from "./providers/advertContext/advertContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <AdvertProvider>
          <div className="App">
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

            <Footer />
          </div>

          <GlobalStyles />
        </AdvertProvider>
      </UserProvider>
    </>
  );
};

export default App;
