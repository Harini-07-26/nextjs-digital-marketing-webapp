import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

import productJacket from '../../../public/hero-rocket.png';
import productSunglassesWmn from '../../../public/rocket.gif';
import productSuit from '../../../public/hero-rocket.png';
import productSunglassesWhite from '../../../public/hero-rocket.png';
import { ScrollReveal } from '../scroll-reveal';
import Image, { StaticImageData } from 'next/image';

interface Product {
  id: number;
  category: string;
  name: string;
  price: string;
  description: string;
  image: StaticImageData;
}

const products: Product[] = [
  {
    id: 1,
    category: 'ORANGE',
    name: 'WINTER JACKET',
    price: '$320.00',
    description:
      'Embrace the cold in style with our premium Winter Jacket, crafted from ultra-soft merino wool. Featuring a ribbed turtleneck design, this piece delivers warmth without compromising on fashion.',
    image: productJacket
  },
  {
    id: 2,
    category: 'GOLD FINISH',
    name: 'SUN GLASS WMN',
    price: '$280.00',
    description:
      'Make a bold statement with our Gold Finish sunglasses. Featuring round gold-framed lenses with a warm amber tint, these glasses combine retro elegance with modern flair.',
    image: productSunglassesWmn
  },
  {
    id: 3,
    category: 'RED MODEL',
    name: 'SUIT FOR MEN',
    price: '$590.00',
    description:
      'Command attention with our Red Model suit. Tailored from premium Italian fabric with a modern slim-fit silhouette, this blazer pairs beautifully with the included turtleneck underlayer.',
    image: productSuit
  },
  {
    id: 4,
    category: 'WHITE',
    name: 'SUN GLASS 45VR',
    price: '$450.00',
    description:
      'Step out in confidence with Sun Glass 45VR, crafted for those who love sleek design and superior comfort. Featuring UV400 protection, scratch-resistant lenses, and a lightweight frame, these sunglasses perfectly blend fashion and function.',
    image: productSunglassesWhite
  }
];

const ProductShowcase = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mb-10">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto">
            Curated pieces designed for those who demand excellence.
          </p>
        </ScrollReveal>
      </div>

      {/* Horizontal scrolling cards */}
      <ScrollReveal delay={0.2}>
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex gap-5 px-8 md:px-16 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="relative shrink-0 w-[300px] md:w-[380px] h-[460px] md:h-[520px] rounded-2xl overflow-hidden cursor-pointer snap-center group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(product)}
              >
                {/* Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />

                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <div className="container mt-10 text-center">
        <ScrollReveal delay={0.3}>
          <button className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Explore {products.length * 336} Products <ArrowRight className="h-4 w-4" />
          </button>
        </ScrollReveal>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-[95vw] max-w-5xl h-[85vh] max-h-[600px] bg-card rounded-2xl overflow-hidden flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Image half */}
              <div className="w-full md:w-1/2 h-[40%] md:h-full relative">
                <Image src={selected.image} alt={selected.name} unoptimized className="w-full h-full object-cover" />
              </div>

              {/* Info half */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-2">
                  {selected.category}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{selected.name}</h3>
                <p className="font-display text-xl font-bold text-foreground mb-6">{selected.price}</p>

                <hr className="border-border mb-6" />

                <p className="text-muted-foreground leading-relaxed mb-8">{selected.description}</p>

                <div className="flex gap-3">
                  <button className="btn-outline-dark flex-1 text-center">ADD TO CART</button>
                  <button
                    className="flex-1 text-center font-semibold rounded-xl px-7 py-3.5 transition-all duration-300"
                    style={{
                      backgroundColor: 'hsl(45, 60%, 80%)',
                      color: 'hsl(228, 25%, 8%)'
                    }}
                  >
                    BUY
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductShowcase;
