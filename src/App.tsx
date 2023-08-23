import { ToastContainer } from "react-toastify";
import { RouterComponent } from "./Routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/footer/footer";
import { UserProvider } from "./providers/userContext/userContext";
import { Header } from "./components/header/header";
import { GlobalStyles } from "./style/global";
import { AdvertProvider } from "./providers/advertContext/advertContext";

function App() {
  return (
    <>
      <AdvertProvider>
        <UserProvider>
          <div className="App">
            <Header />
            <div className="routes">
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
            <Footer />
          </div>

          <GlobalStyles />
        </UserProvider>
      </AdvertProvider>
    </>
  );
}

export default App;
