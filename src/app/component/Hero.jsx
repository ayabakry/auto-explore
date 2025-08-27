import heroBackground from "../Imgs/hero-background.jpg";

const Hero = () => {
  return (
   <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground.src})` }}>
<div className="absolute inset-0 bg-gradient-to-r from-[hsl(220deg_75%_25%_/_90%)] via-[hsl(220deg_75%_25%_/_70%)] to-transparent" />
  
  <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      Find Your Perfect
      <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
        Rental Car
      </span>
    </h1>
    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
      Choose from our premium fleet of vehicles. Book instantly or request availability for your perfect ride.
    </p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400">500+</div>
        <div className="text-white/80">Premium Cars</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400">50+</div>
        <div className="text-white/80">Locations</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-yellow-400">24/7</div>
        <div className="text-white/80">Support</div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
