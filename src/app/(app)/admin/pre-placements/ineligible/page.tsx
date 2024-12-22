import { redirect } from "next/navigation";

export default async function Page() {
  return redirect("/admin/pre-placements/ineligible/students");
}
