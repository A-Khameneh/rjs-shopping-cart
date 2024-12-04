import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import Checkout from "./pages/Checkout"
import PageNotFound from "./pages/PageNotFound"
import ProductsProvider from "./context/ProductContext"
import CartProvider from "./context/CartContex"
import Layout from "./layout/Layout"


function App() {

  return (
 
    <CartProvider>
    
        <ProductsProvider>

          <Layout>

            <Routes>

              <Route index path="/" element={ <Navigate to="/products" replace /> } />
              <Route path="/products" element={ <ProductsPage /> } />
              <Route path="/products/:id" element={ <DetailsPage /> } />
              <Route path="/checkout" element={ <Checkout /> } />
              <Route path="/*" element={ <PageNotFound /> } />

            </Routes>

          </Layout>

        </ProductsProvider>

    </CartProvider>

  )
}

export default App
