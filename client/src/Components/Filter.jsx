import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Domain from "./Domain";
import Experience from "./Experience";

export function FilterComponent() {
  
  return (
    <Card className="w-[20rem] bg-black text-white">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">Filters</span>
            <span className="text-xl font-semibold text-blue-500 cursor-pointer">
              Clear All
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col gap-2 items-start justify-center">
              <h1 className="text-2xl mb-2 font-bold">Job Type</h1>
              <div className="flex gap-2">
                <button className="flex items-center text-sm justify-center border border-gray-400 dark:border-gray-400 px-4 py-1.5 dark:bg-black-50 rounded-full">
                  Full Time
                </button>
                <button className="flex items-center text-sm justify-center border px-4 py-1.5 rounded-full bg-green-110 dark:bg-green-110 text-white dark:text-white border-green-110 dark:border-green-110">
                  Internship
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 text-white">
              <Experience />
            </div>
            {/* select your domain */}
            <Domain />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
