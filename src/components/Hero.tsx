import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-pepper.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium Kerala Pepper"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold">Premium Organic Spices</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Authentic 
            <span className="text-primary"> Kerala</span>
            <br />
            Spices
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Experience the world's finest pepper and nutmeg, carefully harvested from the pristine spice gardens of Kerala, India. Each spice tells a story of tradition, quality, and authentic flavor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="premium" size="xl" className="gap-2">
              Shop Premium Spices
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="organic" size="xl" className="gap-2">
              <Leaf className="h-5 w-5" />
              Learn About Our Story
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Organic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Years Heritage</div>
            </div>
            <div className="text-center md:block hidden">
              <div className="text-3xl font-bold text-primary">Premium</div>
              <div className="text-sm text-muted-foreground">Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;