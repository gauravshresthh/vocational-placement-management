import { CommonLayout } from "@/components/shared/common-layout";
import Sidebar from "./_components/Sidebar";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CommonLayout sideBar={<Sidebar />}>
      <div className="flex-grow container overflow-y-auto">{children}</div>
    </CommonLayout>
  );
}
