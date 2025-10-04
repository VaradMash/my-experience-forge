import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Sarvatra Technologies',
      location: 'Pune, Maharashtra',
      period: '08/2023 - Present',
      description: 'Contributing to the development of India’s Central Bank Digital Currency (CBDC) platform under the RBI and NPCI initiative. Designing and developing scalable, low-latency microservices using Java, Spring Boot, and Oracle DB, ensuring high reliability and security in financial transactions. Collaborating across teams to integrate APIs and optimize system performance for large-scale transaction processing in a distributed cloud environment. Focused on code quality, automation, and simulating real-world scenarios to deliver robust, production-ready systems',
      technologies: [ "Java", "Spring Boot", "RESTful APIs", "Oracle DB", "Gradle", "Git", "Linux", "JMeter"],
      current: true
    },
    {
      title: 'Product Development and Computer Vision Intern',
      company: 'AlgoAnalytics Private Limited',
      location: 'Remote',
      period: '09/2021 - 04/2022',
      description: 'Developed an AI-based CCTV surveillance system using Python and OpenCV, integrated with a real-time, low-latency inferencing engine for live alert generation. Trained and optimized Tiny YOLO models on NVIDIA CUDA for object detection, and implemented data augmentation to prepare 7K+ samples. Delivered a lightweight, deployable desktop application compatible with low-end hardware and conducted on-site demonstrations.',
      technologies: ['Python', 'OpenCV', 'MongoDB', 'TKinter', 'YOLO'],
      current: false
    },
    {
      title: 'Android Development Intern',
      company: 'Zuv Foundation',
      location: 'Remote',
      period: '05/2021 - 07/2021',
      description: 'Worked on development of Android application for Woman and Child safety',
      technologies: ['Android', 'Firebase'],
      current: false
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering',
      school: 'Pune Institute of Computer Technology',
      period: '2019 - 2023',
      description: 'Graduated with a CGPA of 9.65 with an honors degree in Artificial Intelligence and Machine Learning'
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