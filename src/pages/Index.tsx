
import { Github, Linkedin, Mail, Code, Database, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const technologies = [
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "PostgreSQL", color: "bg-blue-600" },
    { name: "MongoDB", color: "bg-green-500" },
    { name: "Docker", color: "bg-blue-400" },
    { name: "AWS", color: "bg-orange-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "Python", color: "bg-blue-600" },
    { name: "CSS3", color: "bg-blue-500" },
    { name: "HTML5", color: "bg-orange-600" }
  ];

  const projects = [
    {
      title: "Sistema de Microserviços",
      description: "Arquitetura completa com Docker, CI/CD e monitoramento",
      tech: ["Node.js", "Docker", "PostgreSQL"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Aplicações Web Modernas",
      description: "Desenvolvimento full-stack com React e tecnologias cloud-native",
      tech: ["React", "TypeScript", "AWS"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Mobile Development",
      description: "Aplicações mobile multiplataforma e responsivas",
      tech: ["React Native", "JavaScript"],
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Olá, eu sou{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Jonas Silva
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
                Desenvolvedor Full Stack especializado em criar soluções inovadoras 
                com foco em performance e experiência do usuário
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Ver Projetos
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Entrar em Contato
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <img
                  src="/lovable-uploads/651ea45a-792c-457c-b438-dfa0fc8cc76d.png"
                  alt="Jonas Silva"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Sobre Mim
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Bacharel em Sistemas de Informação pela Faculdade UNINASSAU/Recife, 
              sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência 
              em desenvolvimento full-stack, especializo-me em criar aplicações robustas 
              e escaláveis utilizando as tecnologias mais modernas do mercado.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Minha expertise abrange desde o desenvolvimento frontend com React e TypeScript 
              até a criação de APIs e microserviços com Node.js, sempre com foco em 
              clean code, performance e melhores práticas de desenvolvimento.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Principais Tecnologias
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge
                key={tech.name}
                className={`${tech.color} text-white px-4 py-2 text-sm font-medium hover:scale-110 transition-transform duration-300 cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-slate-900/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                      {project.icon}
                    </div>
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-700 text-gray-300 hover:bg-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades. 
            Entre em contato para discutirmos seu próximo projeto!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/jonasferreira-silva1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jonas-silva-699538230/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:jonas.silva@hotmail.com"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center">
        <p className="text-gray-400">
          © 2024 Jonas Silva. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
