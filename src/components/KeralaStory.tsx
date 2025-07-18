import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Mountain, Users, Globe } from "lucide-react";
import keralaImage from "@/assets/kerala-landscape.jpg";

const KeralaStory = () => {
  const facts = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Spice Capital",
      description: "Kerala has been the world's spice capital for over 3000 years, attracting traders from across the globe."
    },
    {
      icon: <Mountain className="h-8 w-8 text-primary" />,
      title: "Western Ghats Heritage",
      description: "Our spices grow in the pristine Western Ghats, a UNESCO World Heritage site with unique biodiversity."
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Organic Farming",
      description: "Traditional organic farming methods passed down through generations ensure pure, chemical-free spices."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Farmer Community",
      description: "Supporting local farming families who have been cultivating spices for centuries with authentic techniques."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Kerala 
              <span className="text-primary"> Spice Story</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nestled in the lush Western Ghats of Kerala, India, our spices have been treasured 
              for millennia. Known as the "Spice Garden of India," Kerala's unique climate and 
              fertile soil create the perfect conditions for growing the world's finest spices.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{fact.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{fact.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3" />
            <img 
              src={keralaImage} 
              alt="Kerala Spice Plantations"
              className="relative rounded-2xl shadow-elegant w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Did You Know?</h3>
              <p className="text-muted-foreground">
                Kerala's black pepper was once so valuable it was used as currency and called "black gold." 
                Our pepper plantations still use the same traditional cultivation methods from centuries ago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeralaStory;