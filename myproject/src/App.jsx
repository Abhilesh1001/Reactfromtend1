import Header from './component/header/Header'
import {BrowserRouter,Route,Routes
} from 'react-router-dom'
import Home from './component/home/Home'
import Aboutus from './component/about/Aboutus'
import Tracker from './component/tracker/Tracker'
import Blog from './component/blog/Blog'
import Contact from './component/contact/Contact'
import QuickView from './component/quickview/QuickView'
import Checkout from './component/checkout/Checkout'
import ResetPassword from './excel/rest/ResetPassword'
import ResetNewPassword from './excel/rest/ResetNewPassword'
import ResetPasswordWithUidToken from './excel/rest/ResetPasswordWithUidToken'
import ProductPage from './excel/downloadExcel/ProductPage'
import PDFprod from './excel/downloadPDF/PDFprod'
import Loginsession from './component/sessiondango/Loginsession'
import Search from './component/search/Search'
import { useSelector, useDispatch } from 'react-redux'
import RazorPay from './component/razorPay/RazorPay'


function App() {
  const navCollaspe = useSelector((state)=>state.len.navcollpaspe)

  return (

    <BrowserRouter>
      
      <Header />

      {/* style={{marginTop:'48px'}} /400px */}
      <div style={{marginTop:`${navCollaspe?'400px':'48px'}`}}  >
      <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route exact path='/shop/about' element={<Aboutus/>} />
        <Route exact path='/shop/tracker' element={<Tracker />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path="/shop/contact" element={<Contact />} />
        <Route exact path="/shop/QuivkView" element={<QuickView />} />
        <Route exact path="/shop/checkout" element={<Checkout />} />
        <Route exact path="/auth/resetpassword" element={<ResetPassword />} />
        <Route exact path="/auth/resetnewpassword" element={<ResetNewPassword />} />
        <Route exact path="/auth/resetpassworduidtoken/:id/:token" element={<ResetPasswordWithUidToken />} />
        <Route exact path="/shop/productpage" element={<ProductPage />} />
        <Route exact path="/shop/productpdf" element={<PDFprod />} /> 
        <Route exact path="/login/session" element={<Loginsession />} />
        <Route exact path='shop/search' element ={<Search />} />
        <Route exact path='/RazorPay' element ={<RazorPay />} />
      </Routes>
      </div>
      </BrowserRouter>
      
  )
}

export default App
