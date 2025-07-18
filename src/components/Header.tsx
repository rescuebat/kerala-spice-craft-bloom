import { Button } from "@/components/ui/button";
import { Leaf, ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">Kerala Spices</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-foreground hover:text-primary transition-colors">
            Products
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About Kerala
          </a>
          <a href="#quality" className="text-foreground hover:text-primary transition-colors">
            Quality
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="premium" size="sm" className="gap-2">
          <ShoppingBag className="h-4 w-4" />
          Shop Now
        </Button>
      </div>
    </header>
  );
};

export default Header;