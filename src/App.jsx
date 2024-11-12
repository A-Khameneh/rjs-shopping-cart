import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import Checkout from "./pages/Checkout"
import PageNotFound from "./pages/PageNotFound"


function App() {

  return (

      <Routes>

        <Route index path="/" element={ <Navigate to="/products" replace /> } />
        <Route path="/products" element={ <ProductsPage /> } />
        <Route path="/products/:id" element={ <DetailsPage /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/*" element={ <PageNotFound /> } />

      </Routes>

  )
}

export default App
