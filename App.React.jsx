import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
const App = () => {
  useEffect(() => {
    runAnimations();
  }, []);

  return (
    <div className="parent-div ">
      <div className="pos-abs iphone-14--15-p-16238">
        {/* Loading1 */}
        <section className="pos-abs loading-159">
          <div className="pos-abs wp4780558billie-160">
            <div className="nodeBg-160 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
          <div className="pos-abs vector-161">
            <div className="nodeBg-161 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
