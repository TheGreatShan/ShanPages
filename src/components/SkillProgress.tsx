import { Progress } from "../types/Custom/ProgressType";

type Props = {
  progress: Progress;
}

function SkillProgress({ progress }: Props) {
  return (
    <div className="w-full cursor-pointer bg-primary flex card card-body card-compact md:transform md:transition md:duration-500 md:hover:scale-105" onClick={() => window.open(progress.link, "_blank")}>
      <img className="hidden md:block" src={progress.picture} />
      <div className="mt-auto">
        <h2 className="card-title text-black">{progress.skill}</h2>
        <progress className="progress w-full" value={progress.value} max="100"></progress>
      </div>
    </div >
  );
}

export default SkillProgress;
