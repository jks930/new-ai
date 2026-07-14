import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import FeaturesPage from './pages/FeaturesPage';
import Team from './pages/Team';
import PricingPage from './pages/PricingPage';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import BlogGrid from './pages/BlogGrid';
import BlogRightSidebar from './pages/BlogRightSidebar';
import BlogDetails from './pages/BlogDetails';
import Error404 from './pages/Error404';
import ComingSoon from './pages/ComingSoon';
import FAQ from './pages/FAQ';
import ServicesStyle1 from './pages/ServicesStyle1';
import ServicesStyle2 from './pages/ServicesStyle2';
import ServicesDetails from './pages/ServicesDetails';
import Contact from './pages/Contact';

import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/pricing" element={<PricingPage />} />
      
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-details" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      
      <Route path="/blog" element={<BlogGrid />} />
      <Route path="/blog-sidebar" element={<BlogRightSidebar />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      
      <Route path="/404" element={<Error404 />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/faq" element={<FAQ />} />
      
      <Route path="/services-1" element={<ServicesStyle1 />} />
      <Route path="/services-2" element={<ServicesStyle2 />} />
      <Route path="/services-details" element={<ServicesDetails />} />
      
      <Route path="/contact" element={<Contact />} />
      
      {/* Catch-all route mapping to 404 */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
