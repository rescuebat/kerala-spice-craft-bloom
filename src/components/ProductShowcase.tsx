import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star, Truck } from "lucide-react";
import pepperImage from "@/assets/pepper-product.jpg";
import nutmegImage from "@/assets/nutmeg-product.jpg";

const ProductShowcase = () => {
  const products = [
    {
      name: "Premium Black Pepper",
      description: "Finest Malabar black pepper with intense aroma and bold flavor. Hand-picked from century-old vines.",
      price: "₹2,499",
      originalPrice: "₹3,200",
      image: pepperImage,
      weight: "500g",
      rating: 4.9,
      reviews: 234,
      amazon: "https://amazon.in/search?k=malabar+black+pepper",
      flipkart: "https://flipkart.com/search?q=kerala+black+pepper",
      bigbasket: "https://bigbasket.com/search?q=organic+black+pepper"
    },
    {
      name: "Organic Nutmeg",
      description: "Aromatic nutmeg with rich, warm flavor profile. Perfectly dried and carefully selected for premium quality.",
      price: "₹1,899",
      originalPrice: "₹2,400", 
      image: nutmegImage,
      weight: "250g",
      rating: 4.8,
      reviews: 156,
      amazon: "https://amazon.in/search?k=kerala+nutmeg",
      flipkart: "https://flipkart.com/search?q=organic+nutmeg",
      bigbasket: "https://bigbasket.com/search?q=fresh+nutmeg"
    }
  ];

  const handleBuyNow = (platform: string, url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Spice Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Kerala spices, 
            available on India's leading e-commerce platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="bg-gradient-card shadow-elegant hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2 border-0">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    <div className="ml-auto">
                      <Truck className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{product.weight}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground mb-3">Available on:</div>
                    <div className="grid grid-cols-1 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleBuyNow('Amazon', product.amazon)}
                        className="justify-between group hover:bg-primary hover:text-primary-foreground"
                      >
                        <span>Amazon India</span>
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleBuyNow('Flipkart', product.flipkart)}
                        className="justify-between group hover:bg-primary hover:text-primary-foreground"
                      >
                        <span>Flipkart</span>
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleBuyNow('BigBasket', product.bigbasket)}
                        className="justify-between group hover:bg-primary hover:text-primary-foreground"
                      >
                        <span>BigBasket</span>
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;