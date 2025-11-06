
export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Invasion Church</h3>
            <p className="text-sm opacity-90">Command Center - Your hub for church life</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/events" className="hover:text-accent transition-colors">Events</a></li>
              <li><a href="/sermons" className="hover:text-accent transition-colors">Sermons</a></li>
              <li><a href="/give" className="hover:text-accent transition-colors">Give</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <p className="text-sm opacity-90">Stay connected with our community</p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Invasion Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}