import { useNavigate } from "react-router-dom";

function NotFound() {
  document.title = "404 - Muras"
  const navigate = useNavigate()
  return (
    <div className={"flex flex-col justify-center items-center"}>
      <h1 className={"mt-10 text-center text-3xl font-bold text-slate-100"}>404 - Not Found</h1>
      <p className={"mt-10"}>The page you searched has not been found. Please return to the home page.</p>
      <input className={"mt-10 bg-primary rounded p-3 text-slate-800"} type="button" value="Return to Home" onClick={() => navigate("/")} />
    </div>
  );
}

export default NotFound;
