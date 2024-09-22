const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Portfolyo</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-gray-300 hover:text-white">Hakkımda</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-white">Projeler</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white">İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
