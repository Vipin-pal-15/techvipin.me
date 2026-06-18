import { Database , Code, Server  } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate <b>MERN STACK DEVELOPER</b>
            </h3>

            <p className="text-muted-foreground">
              As a MERN Stack Developer, I am passionate about building dynamic and
              user-friendly web applications that deliver smooth and engaging user experiences.
              I enjoy working with modern technologies to create responsive interfaces, interactive
              features and scalable backend systems while continuously improving my
              skills and exploring new innovations in web development.
            </p>

            <p className="text-muted-foreground">
              I have completed my B.Tech in Computer Science. I am passionate about web development and enjoy building modern, responsive, and user-friendly applications.
              I have also completed an 8-month apprenticeship training at Techpile Technology, where I gained hands-on experience in front-end development and real-world project building.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/projects/Vipin.pdf"
                download="Vipin.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Front-end Development</h4>
                  <p className="text-muted-foreground">
                    Frontend Developer skilled in HTML, CSS, JavaScript, and React. 
                    Passionate about building responsive and modern web interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server  className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Back-end Development</h4>
                  <p className="text-muted-foreground">
                   Backend Developer skilled in Node.js, Express.js, and MongoDB.
                    Focused on building secure REST APIs and scalable server-side applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database  className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database</h4>
                  <p className="text-muted-foreground">
                   Experienced with MongoDB and basic SQL (MySQL). Skilled in database design,
                    CRUD operations, and data management for web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
