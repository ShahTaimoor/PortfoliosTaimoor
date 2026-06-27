import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-muted py-10 md:py-32">


        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-full flex-1">
                <p>
                  Full-Stack Software Engineer with 3+ years of experience designing
                  and developing scalable web applications using MERN and PERN
                  stacks. Experienced in React.js, Next.js, Node.js, Express.js, PostgreSQL,
                  MongoDB, TypeScript, REST APIs, Redux Toolkit, and cloud
                  deployment. Passionate about building secure, high-performance
                  SaaS, e-commerce, POS, and business management solutions.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-gray-300">
                  {[
                    { count: "3+", label: "Years of experience" },
                    { count: "4+", label: "Happy Clients" },
                    { count: "3", label: "Project Completed" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">

                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Urdu", "Pashto"].map((lang, index) => (
                      <Badge
                        key={index}
                        className="h-full bg-white rounded-full"
                      >
                        <p className="bg-white py-2 md:py-3.5 px-4 md:px-5 text-base xl:text-xl text-muted-foreground">
                          {lang}
                        </p>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
