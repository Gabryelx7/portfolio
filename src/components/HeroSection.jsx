import { Linkedin, Github} from "lucide-react";
import Whatsapp from "@/assets/whatsapp.svg"
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
   return (
      <section
         id="hero"
         className="realtive min-h-screen flex flex-col items-center justify-center px-4"
      >
         <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="opacity-0 animate-fade-in">
                     Hello, I'm
                  </span>
                  <span className="text-primary opacity-0 animate-fade-in-delay-1">
                     {" "}
                     Paulo Dias
                  </span>
               </h1>

               <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                  I am a passionate aspiring Full-Stack Developer,<br/>
                  actively building my skills to create beautiful and functional websites.
               </p>

               <hr className="border-t-3 border-primary/40 w-full max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3" />

               <div className="flex space-x-4 justify-center">
                  <a href="https://github.com/Gabryelx7/" target="_blank">
                     <Github />
                  </a>

                  <a href="https://wa.me/5569992003766" target="_blank">
                     <img src={Whatsapp} alt="WhatsApp icon" width={24} height={24} className="mx-auto" />
                  </a>

                  <a href="https://www.linkedin.com/in/paulo-dias-09b4b0183/" target="_blank">
                     <Linkedin />
                  </a>
               </div>

            </div>
         </div>

         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
         </div>
      </section>
   );
};
