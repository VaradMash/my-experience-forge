import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
      current: true
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Built and maintained multiple web applications from concept to deployment. Collaborated with design team to create intuitive user interfaces and implemented robust backend systems.',
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis', 'Heroku'],
      current: false
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: 'Developed responsive websites and web applications for various clients. Focused on creating pixel-perfect implementations of design mockups with optimal performance.',
      technologies: ['React', 'JavaScript', 'Sass', 'Webpack', 'GraphQL'],
      current: false
    },
    {
      title: 'Junior Developer',
      company: 'WebTech Inc.',
      location: 'Austin, TX',
      period: '2018 - 2019',
      description: 'Started my professional journey developing small web applications and contributing to larger projects. Gained experience in version control, testing, and agile development practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      current: false
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2014 - 2018',
      description: 'Graduated Magna Cum Laude with focus on software engineering and web development.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My professional journey and the experiences that have shaped my expertise 
              in building modern web applications.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-gradient border-border transition-smooth hover:shadow-card hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h4>
                        <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          {exp.current && (
                            <Badge variant="secondary" className="text-xs">Current</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-gradient border-border transition-smooth hover:shadow-card hover:-translate-y-1">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-lg text-primary font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;