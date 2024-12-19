import { FilterComponent } from "./Filter";
import Jobs from "./Jobs";


const Landing = () => {
  return (
    <div className="mt-10 flex gap-10">
      <FilterComponent />
      <Jobs/>
    </div>
  );
};

export default Landing;
