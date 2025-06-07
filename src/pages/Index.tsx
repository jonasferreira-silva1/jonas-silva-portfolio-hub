import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Smartphone,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GitHubProjects from "@/components/GitHubProjects";

const Index = () => {
  const technologies = [
    { name: "TypeScript", color: "bg-emerald-800" },
    { name: "React", color: "bg-green-700" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "Node.js", color: "bg-emerald-900" },
    { name: "PostgreSQL", color: "bg-teal-800" },
    { name: "MongoDB", color: "bg-green-800" },
    { name: "Docker", color: "bg-emerald-700" },
    { name: "AWS", color: "bg-orange-600" },
    { name: "JavaScript", color: "bg-lime-700" },
    { name: "Python", color: "bg-teal-900" },
    { name: "CSS3", color: "bg-emerald-800" },
    { name: "HTML5", color: "bg-orange-700" },
  ];

  const projects = [
    {
      title: "Sistema de Microserviços",
      description: "Arquitetura completa com Docker, CI/CD e monitoramento",
      tech: ["Node.js", "Docker", "PostgreSQL"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Aplicações Web Modernas",
      description:
        "Desenvolvimento full-stack com React e tecnologias cloud-native",
      tech: ["React", "TypeScript", "AWS"],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Mobile Development",
      description: "Aplicações mobile multiplataforma e responsivas",
      tech: ["React Native", "JavaScript"],
      icon: <Smartphone className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/20 to-green-800/20" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Foto em destaque - agora vem primeiro no mobile */}
            <div className="flex-1 flex justify-center lg:justify-start order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-700 to-green-700 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                <img
                  src="/lovable-uploads/651ea45a-792c-457c-b438-dfa0fc8cc76d.png"
                  alt="Jonas Silva"
                  className="relative w-96 h-96 lg:w-[450px] lg:h-[450px] rounded-full object-cover border-4 border-emerald-400/30 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-emerald-400/50"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-900/20 to-transparent" />
              </div>
            </div>

            {/* Conteúdo textual */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Olá, eu sou{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Jonas Silva
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in leading-relaxed">
                Desenvolvedor Full Stack especializado em criar soluções
                inovadoras com foco em performance e experiência do usuário
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Ver Projetos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Entrar em Contato
                </Button>
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
              Bacharel em Sistemas de Informação pela UNINASSAU/Recife, sou um
              engenheiro de software apaixonado por transformar ideias em
              soluções digitais inovadoras. Minha jornada é impulsionada pelo
              desafio de criar experiências tecnológicas que façam a diferença
              no mundo real.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Com expertise tanto em front-end quanto em back-end, desenvolvo
              aplicações completas utilizando React, TypeScript, Node.js e
              tecnologias cloud. Meu compromisso com código limpo, arquitetura
              escalável e práticas ágeis reflete-se em cada projeto que
              construo, sempre buscando a melhor experiência para o usuário
              final.
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
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - substituído pelo GitHubProjects */}
      <GitHubProjects />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades. Entre em
            contato para discutirmos seu próximo projeto!
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
              className="flex items-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:jonas.fsilva1@hotmail.com"
              className="flex items-center gap-3 bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
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
