'use client';

import { RootState } from "@/store/store";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  console.log(isAuthenticated, 'isAuthenticated')
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Render nothing until redirected
  } 
  return redirect("/student/dashboard");
}
