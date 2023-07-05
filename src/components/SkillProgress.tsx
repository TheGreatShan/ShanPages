import { Progress } from "../types/Custom/ProgressType";

type Props = {
  progress: Progress;
}

function SkillProgress({ progress }: Props) {
  return (
    <div className="w-1/5 bg-primary card card-body card-compact">
      <h2 className="card-title text-black">{progress.skill}</h2>
      <progress className="progress w-full" value={progress.value} max="100"></progress>
    </div>
  );
}

export default SkillProgress;
