// import { Header } from "./header/header";
// import { SideBar } from "./sidebar/sidebar";

import Header from "../header/header";
import { SideBar } from "../sidebar/sidebar";

interface CommonLayoutProps {
  children: React.ReactNode;
  sideBar: React.ReactElement;
}

export const CommonLayout = ({ children, sideBar }: CommonLayoutProps) => {
  return (
    <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-[15rem_minmax(0,1fr)] relative bg-white  overflow-hidden">
      <SideBar sideBar={sideBar} />
      <div className="flex flex-col min-h-screen bg-background dark:bg-custom-gray overflow-hidden">
        <Header />
        <main className="h-[calc(100vh_-_80px)] overflow-y-auto bg-slate-200">
          {children}
        </main>
      </div>
    </div>
  );
};
