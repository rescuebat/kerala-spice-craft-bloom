import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Mankavil Spices</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Bringing you the finest organic spices from the spice gardens of Kerala, India. 
              Experience authentic flavors that have been treasured for centuries.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Thenhipalam, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9591548462</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>vishnupkmankavil@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-background/80">
              <li>Black Pepper</li>
              <li>Nutmeg</li>
              <li>Cardamom</li>
              <li>Cloves</li>
              <li>Cinnamon</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop Online</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Amazon India</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Flipkart</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">BigBasket</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Grofers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Mankavil Spices. Bringing authentic flavors from God's Own Country.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;