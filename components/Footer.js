const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-sm">
            &copy; {currentYear} Shashank Shekhar | All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;