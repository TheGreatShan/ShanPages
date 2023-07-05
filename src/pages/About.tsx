import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SkillProgress from "../components/SkillProgress";
import { getProgress } from "../lib/api";
import { Progress } from "../types/Custom/ProgressType";

function About() {
  document.title = "About - Muras";

  const [progressList, setProgressList] = useState<Progress[]>([]);

  useEffect(() => {
    const progressLoader = async () => {
      const progress = await getProgress();
      setProgressList(progress);
    }

    progressLoader();
  }, []);

  return (
    <>
      <div className={"flex flex-col items-center w-full"}>
        <Header title="About" />
        <p className={"w-3/4 text-slate-100 text-xl"}>Hi, I'm a software developer with a passion for creating web
          applications using React and C#. I started
          my journey in 2021, when I decided to pursue my dream of becoming a programmer. Since then, I have
          learned a lot from online courses, books, and projects. I enjoy solving problems, learning new
          technologies, and collaborating with other developers. My goal is to build user-friendly,
          responsive,
          and scalable websites that can make a positive impact on the world. This portfolio showcases some of
          my
          work and skills. Feel free to contact me if you want to know more about me or my projects.</p>
        <Header title="Skills" />
        <div className="grid md:grid-cols-5 gap-4 md:w-3/4 mt-4">
          {
            progressList.map(progress => {
              return <SkillProgress progress={progress} key={progress.skill} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default About;
