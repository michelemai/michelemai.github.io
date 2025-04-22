function Header() {
    return (
      <header className="bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-semibold text-gray-800">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-gray-600 hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;