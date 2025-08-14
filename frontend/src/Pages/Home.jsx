import { useNavigate } from "react-router-dom";

import { SpotlightNewDemo } from "./SpotlightNewDemo";

export default function Home() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/about");
  }, 2500);
  return (
    <div className="w-full m-0 p-0 overflow-x-hidden">
      <SpotlightNewDemo />
      
    </div>
  );
}
