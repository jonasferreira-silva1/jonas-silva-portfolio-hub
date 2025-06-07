import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Star, GitFork, ExternalLink } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

// Lista de projetos específicos a serem exibidos
const FEATURED_PROJECTS = ["big-data-project", "av1-project", "simplyinvite"];

const GitHubProjects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        // Buscar todos os repositórios
        const response = await fetch(
          "https://api.github.com/users/jonasferreira-silva1/repos?sort=updated&per_page=100"
        );

        if (!response.ok) {
          throw new Error("Falha ao buscar repositórios do GitHub");
        }

        const data = await response.json();

        // Filtrar apenas os projetos específicos que queremos mostrar
        // Se não encontrar todos os projetos específicos, mostrar os mais recentes
        const featuredRepos = data.filter((repo: Repository) =>
          FEATURED_PROJECTS.includes(repo.name)
        );

        if (featuredRepos.length === 0) {
          // Se não encontrar os projetos específicos, usar os 3 mais recentes
          setRepos(data.slice(0, 3));
        } else {
          setRepos(featuredRepos);
        }

        setError(null);
      } catch (err) {
        setError(
          "Erro ao carregar projetos do GitHub. Por favor, tente novamente mais tarde."
        );
        console.error("Erro ao buscar repositórios:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Dados de projetos específicos para caso a API não retorne os projetos desejados
  const fallbackProjects = [
    {
      id: 1,
      name: "big-data-project",
      description:
        "Análise de grandes volumes de dados com tecnologias modernas de Big Data, incluindo processamento distribuído e visualização avançada.",
      html_url: "https://github.com/jonasferreira-silva1/big-data-project",
      homepage: null,
      stargazers_count: 4,
      forks_count: 2,
      language: "Python",
      topics: ["big-data", "data-analysis", "python"],
    },
    {
      id: 2,
      name: "av1-project",
      description:
        "Implementação de algoritmos de compressão de vídeo utilizando o codec AV1, otimizando performance e qualidade visual.",
      html_url: "https://github.com/jonasferreira-silva1/av1-project",
      homepage: null,
      stargazers_count: 3,
      forks_count: 1,
      language: "C++",
      topics: ["video-compression", "av1", "codec"],
    },
    {
      id: 3,
      name: "simplyinvite",
      description:
        "Plataforma web para gerenciamento de eventos e convites, com sistema de RSVP e comunicação automatizada.",
      html_url: "https://github.com/jonasferreira-silva1/simplyinvite",
      homepage: "https://simplyinvite-demo.netlify.app",
      stargazers_count: 5,
      forks_count: 2,
      language: "TypeScript",
      topics: ["react", "nodejs", "mongodb"],
    },
  ];

  // Usar os projetos de fallback se a API não retornar os projetos específicos e não houver nenhum erro
  const displayRepos =
    repos.length > 0 ? repos : !error ? fallbackProjects : [];

  return (
    <section className="py-16 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Projetos em Destaque
        </h2>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && <div className="text-center text-red-400 mb-8">{error}</div>}

        {!loading && !error && (
          <>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {displayRepos.map((repo) => (
                <Card
                  key={repo.id}
                  className="bg-slate-900/80 border-slate-700 hover:border-emerald-600/50 transition-all duration-300 hover:scale-105 group h-full flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-emerald-800/20 rounded-lg text-emerald-500 group-hover:bg-emerald-800/30 transition-colors">
                        <Code className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-white text-xl">
                        {repo.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 text-base">
                      {repo.description || "Sem descrição disponível"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.language && (
                        <Badge
                          variant="secondary"
                          className="bg-slate-700 text-gray-300 hover:bg-slate-600"
                        >
                          {repo.language}
                        </Badge>
                      )}
                      {repo.topics &&
                        repo.topics.slice(0, 3).map((topic) => (
                          <Badge
                            key={topic}
                            variant="secondary"
                            className="bg-emerald-900/50 text-emerald-300 hover:bg-emerald-800/50"
                          >
                            {topic}
                          </Badge>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 text-gray-400 text-sm mt-auto">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-emerald-600/30 text-emerald-500 hover:bg-emerald-900/20"
                        asChild
                      >
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver no GitHub
                        </a>
                      </Button>

                      {repo.homepage && (
                        <Button
                          size="sm"
                          className="bg-emerald-700 hover:bg-emerald-800 text-white w-full"
                          asChild
                        >
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 text-lg"
                asChild
              >
                <a
                  href="https://github.com/jonasferreira-silva1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Todos os Projetos
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubProjects;
