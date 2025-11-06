
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-foreground">About</h1>
        <p className="text-muted-foreground">About page coming soon...</p>
      </main>
      <Footer />
    </div>
  );
}