import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./components/PageNotFound";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import SearchBox from "./components/SearchBox";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout>
                  <SearchBox />
                  <Home />
                </Layout>
              </>
            }
          />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
