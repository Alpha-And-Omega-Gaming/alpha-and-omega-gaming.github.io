const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-white">Alpha and Omega Gaming</h1>
            </div>
            <div className="flex items-center space-x-4">
                <a href="/" className="text-white hover:text-orange-500 transition-colors duration-300">
                Home
                </a>
                <a href="/apps" className="text-white hover:text-orange-500 transition-colors duration-300">
                Apps
                </a>
                <a href="/games" className="text-white hover:text-orange-500 transition-colors duration-300">
                Games
                </a>
            </div>
            </div>
        </div>
        </nav>
    </div>
  );
};

export default Navbar;