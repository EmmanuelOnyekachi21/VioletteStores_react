// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="py-3 bg-dark" style={{ color: 'white' }}>
    <div className="container text-center">
      {/* Quick Links Section */}
      <div className="mb-2">
        <a href="/home" className="text-white text-decoration-none mx-2">Home</a>
        <a href="/about" className="text-white text-decoration-none mx-2">About</a>
        <a href="/shop" className="text-white text-decoration-none mx-2">Shop</a>
        <a href="/contact" className="text-white text-decoration-none mx-2">Contact</a>
      </div>

      {/* Social Media Icons Section */}
      <div className="mb-2">
        {/* <a href="#" className="text-white mx-2"><FaFacebook /></a> */}
        {/* <a href="#" className="text-white mx-2"><FaTwitter /></a> */}
        {/* <a href="#" className="text-white mx-2"><FaInstagram /></a> */}
      </div>

      {/* Copyright Section */}
      <p className="small mb-0">&copy; 2024 VioletteStores</p>
    </div>
  </footer>
  )
}

export default Footer
