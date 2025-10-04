import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Hello, I'm</span>
            <br />
            <span className="text-foreground">Varad Mashalkar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Software Developer | AI & Computer Vision Enthusiast | Problem Solver
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Turning ideas into intelligent, scalable software — from digital payments to computer vision innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" onClick={scrollToContact} className="shadow-primary">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToAbout}>
              Learn More About Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-16">
            <a
              href="https://github.com/VaradMash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="sm"
                className="transition-smooth hover:text-primary hover:shadow-primary"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/varad-mashalkar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="sm"
                className="transition-smooth hover:text-primary hover:shadow-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a href="mailto:varadmash2201@gmail.com">
              <Button
                variant="ghost"
                size="sm"
                className="transition-smooth hover:text-primary hover:shadow-primary"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>


          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToAbout}
              className="transition-smooth hover:text-primary"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;