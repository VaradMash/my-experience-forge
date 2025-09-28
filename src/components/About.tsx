import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'GraphQL', 'Tailwind CSS', 'Next.js', 'Express'
  ];

  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Full-Stack Development',
      description: 'Building complete web applications from database to user interface with modern technologies.'
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences with attention to detail and usability.'
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: 'Performance Optimization',
      description: 'Ensuring applications are fast, scalable, and provide excellent user experience.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Team Collaboration',
      description: 'Working effectively in teams using Agile methodologies and modern development practices.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer with over 5 years of experience creating digital solutions 
              that combine functionality with beautiful design. I love turning complex problems into 
              simple, elegant solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started my journey in computer science with a fascination for how technology 
                  can solve real-world problems. Over the years, I've worked with startups 
                  and established companies, always focusing on delivering quality solutions.
                </p>
                <p>
                  I believe in continuous learning and staying up-to-date with the latest 
                  technologies and best practices. When I'm not coding, you can find me 
                  exploring new frameworks, contributing to open source, or mentoring 
                  other developers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient border-border transition-smooth hover:shadow-card hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;