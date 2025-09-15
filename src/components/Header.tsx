const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/6e64c8a6-41e9-42fd-9a1e-db79f33c19f6.png" 
            alt="Analitika Agency Logo" 
            className="w-auto"
            style={{ height: '85px' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;