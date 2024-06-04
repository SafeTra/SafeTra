import SideBar from "../components/Dashboard";
import { TopBar } from "../components/Dashboard";
import { MiddleContent } from "../components/Dashboard";

export default function App() {
  return (
    <div className="h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <div className="row-span-2 border-r border-gray-200">
        <SideBar />
      </div>
      <div className="border-b border-gray-200">
        <TopBar />
      </div>
      <div className="overflow-y-auto">
        <MiddleContent />
      </div>
    </div>
  );
}
