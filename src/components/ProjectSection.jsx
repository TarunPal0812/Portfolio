import { ArrowRight, ExternalLink,Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Content & Media SaaS",
    description:
      "Built AI platform offering free/paid tools for content creation, image editing, and resume analysis",
    image: "/projects/project1.png",
    tags: [
      "MERN Stack",
      "Gemini",
      "ClipDrop",
      "Cloudinary",
      "Clerk",
      "Tailwindcs",
    ],
    demoUrl: "https://craftlyai-client.netlify.app/",
    githubUrl: "https://github.com/TarunPal0812/craftlyAI-client",
  },
  {
    id: 2,
    title: "Doctor Appointment Booking System",
    description:
      "Built a full-stack doctor appointment app with role-based dashboards for Admin, Doctor, and User.",
    image: "/projects/project2.png",
    tags: [
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "Razorpay",
      "Cloudinary",
    ],
    demoUrl: "https://docappoint-client.netlify.app/",
    githubUrl: "https://github.com/TarunPal0812/DocAppoint-Client",
  },
  {
    id: 3,
    title: "Blog Platform with Social Features",
    description:
      "Developed a blog system supporting user authentication, post creation, likes, comments, and user follow ststem",
    image: "/projects/project3.png",
    tags: ["ReactJS", "NodeJS","ExpressJS", "MySQL", "Tailwindcss","JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/TarunPal0812/Blog-MD",
  },
];



const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Project</span>
        </h2>
        <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((items, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={items.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {items.tags.map((items, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border"
                    >
                      {items}{" "}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{items.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {items.description}
                </p>
                <div className="flex justify-between  items-center">
                  <div className="flex space-x-3">
                    <a
                      href={items.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={items.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/TarunPal0812"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
