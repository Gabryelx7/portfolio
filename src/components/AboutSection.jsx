export const AboutSection = () => {
   return (
      <section id="about" className="py-24 px-4 relative">
         <div className="container mx-auto max-w5-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

               <div></div>

               <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left">
                     About <span className="text-primary"> Me </span>
                  </h2>

                  <p className="text-muted-foreground text-left">
                     I am a Computed Engineer student at {" "}
                     <a href="https://www.utfpr.edu.br/" className="text-primary">UTFPR, Curitiba</a>.
                     I'm dedicated to learning new technologies and am eager to apply my knowledge in a professional setting.
                  </p>

                  <p className="text-muted-foreground text-left">
                     Currently I am seeking my first junior or intern role to gain real-world experience.
                     I'm excited by the prospect of contributing to challenging projects and further
                     developing my technical and interpersonal skills within a dynamic team.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 pt-4 justify-center">
                     <a href="#contact" className="cosmic-button">
                        Get in Touch
                     </a>

                     <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
