"use client";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        setData(result?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-muted overflow-hidden">
        <div className="container relative z-10">
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-primary">
                ( {String(
                  (data?.education?.length || 0) +
                  (data?.skills?.length || 0) +
                  (data?.achievements?.length || 0)
                ).padStart(2, "0")} )
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <div className="flex flex-col gap-10">
                  {data?.skills?.map((skillGroup: any, idx: any) => (
                    <div key={idx}>
                      <h3 className="text-lg font-bold mb-4">{skillGroup.category}</h3>
                      <div className="grid grid-cols-2 gap-4 xl:gap-5">
                        {skillGroup.items?.map((item: any, i: any) => (
                          <div
                            key={i}
                            className="p-4 xl:p-5 border border-muted rounded-lg flex items-center justify-center"
                          >
                            <p className="text-black font-normal text-sm xl:text-base text-center">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4">Achievements</h3>
                  <div className="flex flex-col gap-4">
                    {data?.achievements?.map((item: any, i: any) => (
                      <div key={i} className="flex items-center gap-3 p-4 border border-muted rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-black shrink-0"></div>
                        <p className="text-black font-normal">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-muted pt-10">
                <h3 className="text-lg font-bold mb-6">Education</h3>
                <div className="flex flex-col gap-6">
                  {data?.education?.map((value: any, index: any) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5>{value?.title}</h5>
                        <p className="font-normal">{value?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;