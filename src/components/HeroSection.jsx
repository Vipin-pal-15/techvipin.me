import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 z-10">

        {/* LEFT SIDE - TEXT */}
        <div className="flex-1 text-center md:text-left space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Vipin
            </span>{" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Pal
            </span>
          </h1>

          {/* ✨ TYPED TEXT ADDED */}
          <h2 className="text-xl md:text-2xl font-semibold text-primary mt-2">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "React Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I'm a MERN Stack Developer passionate about <br />
            building modern, <br />
            responsive and scalable web applications
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-72 h-96 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-5 border-primary">
            <img
              src="/projects/ChatGPT Image Jun 17, 2026, 06_07_11 PM.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};