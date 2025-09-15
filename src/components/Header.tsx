const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/6e64c8a6-41e9-42fd-9a1e-db79f33c19f6.png" 
            alt="Analitika Agency Logo" 
            className="h-25 w-auto mix-blend-multiply"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;