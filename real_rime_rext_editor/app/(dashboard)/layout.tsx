import DashboardPage from "./page";
import { Sidebar } from "./_componets/sidebar/Sidebar";
import { OrgSidebar } from "./_componets/org-sidebar";
import Navbar from "./_componets/navbar";
interface DashboardPageProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardPageProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full ">
          <OrgSidebar />
          <div className="flex-1 h-full">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};
export default DashboardLayout;
