
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Church</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            A community of believers passionate about knowing God and making Him known
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-secondary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To invade our community with the love of Christ, transforming lives through authentic worship, 
                  biblical teaching, and compassionate service. We exist to help people discover their purpose 
                  and live out their faith in everyday life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To see a generation of believers who are deeply rooted in God's Word, empowered by the Holy Spirit, 
                  and actively engaged in advancing God's kingdom. We envision a church that impacts our city and 
                  reaches the nations with the Gospel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What We Believe</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "The Bible",
                description: "We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and life."
              },
              {
                title: "The Trinity",
                description: "We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit."
              },
              {
                title: "Salvation",
                description: "We believe salvation is a gift of God's grace through faith in Jesus Christ alone."
              },
              {
                title: "The Church",
                description: "We believe the church is the body of Christ, called to worship, fellowship, and serve together."
              },
              {
                title: "The Holy Spirit",
                description: "We believe in the present ministry of the Holy Spirit who empowers believers for godly living and service."
              },
              {
                title: "Eternal Life",
                description: "We believe in the resurrection of both the saved and the lost—the saved to eternal life and the lost to eternal separation from God."
              }
            ].map((belief, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{belief.title}</h3>
                  <p className="text-muted-foreground">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Our Leadership</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet the dedicated team leading Invasion Church with passion and purpose
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Pastor John Smith",
                role: "Lead Pastor",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
              },
              {
                name: "Sarah Johnson",
                role: "Worship Director",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
              },
              {
                name: "Michael Davis",
                role: "Youth Pastor",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              },
              {
                name: "Emily Rodriguez",
                role: "Children's Director",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
              },
              {
                name: "David Thompson",
                role: "Outreach Coordinator",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
              },
              {
                name: "Lisa Martinez",
                role: "Administrative Pastor",
                image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop"
              }
            ].map((leader, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${leader.image})` }}
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1 text-foreground">{leader.name}</h3>
                  <p className="text-secondary font-semibold">{leader.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>