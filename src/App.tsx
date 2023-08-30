import { ToastContainer } from "react-toastify";
import { RouterComponent } from "./Routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { GlobalStyles } from "./style/global.ts";
import { useContext } from "react";
import {
  AdvertContext,
  AdvertProvider,
} from "./providers/advertContext/advertContext.tsx";
import { UserProvider } from "./providers/userContext/userContext.tsx";
import { CommentProvider } from "./providers/commentContext/commentContext.tsx";

function App() {
  const { filter } = useContext(AdvertContext);
  return (
    <>
      <UserProvider>
        <AdvertProvider>
          <CommentProvider>
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
          </CommentProvider>
          <GlobalStyles filter={filter} />
        </AdvertProvider>
      </UserProvider>
    </>
  );
}

export default App;
