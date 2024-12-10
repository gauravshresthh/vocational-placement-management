import { CommonLayout } from "@/components/shared/common-layout";
import AdminSideBar from "./_components/admin-sidebar";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CommonLayout sideBar={<AdminSideBar />}>
      <div className=" flex-grow container overflow-y-auto">{children}</div>
    </CommonLayout>
  );
}
