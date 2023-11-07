

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center mb-4">
          <a href="/" className="mr-4 hover:text-gray-400 transition duration-300">
            Home
          </a>
          <a href="/menu" className="mr-4 hover:text-gray-400 transition duration-300">
            Menu
          </a>
          <a href="/about" className="mr-4 hover:text-gray-400 transition duration-300">
            About Us
          </a>
          <a href="/contact" className="mr-4 hover:text-gray-400 transition duration-300">
            Contact
          </a>
        </div>
        <div className="text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Your Restaurant Name. All rights reserved.</p>
          <p>123 Main Street, City, State, ZIP</p>
          <p>Phone: 123-456-7890 | Email: info@yourrestaurant.com</p>
        </div>
        <div className="mt-4">
          <span className="text-2xl mx-2">
            <a href="https://www.facebook.com/yourrestaurant" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square hover:text-gray-400 transition duration-300"></i>
            </a>
          </span>
          <span className="text-2xl mx-2">
            <a href="https://www.twitter.com/yourrestaurant" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square hover:text-gray-400 transition duration-300"></i>
            </a>
          </span>
          <span className="text-2xl mx-2">
            <a href="https://www.instagram.com/yourrestaurant" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram-square hover:text-gray-400 transition duration-300"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

