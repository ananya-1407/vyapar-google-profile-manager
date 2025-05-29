
import React from "react";
import GoogleBusinessScore from "./GoogleBusinessScore";
import QuickWins from "./QuickWins";

const DashboardScoreSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <GoogleBusinessScore />
      </div>
      <div>
        <QuickWins />
      </div>
    </div>
  );
};

export default DashboardScoreSection;
