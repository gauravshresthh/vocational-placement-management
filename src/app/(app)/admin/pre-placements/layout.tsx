import { PageContainer } from "@/components/layout/page-container";
import InnerNav from "./_components/InnerNav";

export default async function PrePlacementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <InnerNav />
      {children}
    </PageContainer>
  );
}
