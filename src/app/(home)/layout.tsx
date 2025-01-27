import { SideNavigation } from "@/components/navigation/sidebar";
import { Navbar, Footer } from "@/components/navigation";
import { Suspense } from "react";
import { SkeletonNavbar } from "@/components/skelton";
import CustomSidebar from "../dash/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <>
    //   <CustomSidebar />

    //   <section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px] ">
    // <div className="flex w-full flex-col h-full relative ">
    //   {children}
    // </div>
    //     <Footer />
    //   </section>
    // </>
    <div className="flex h-screen overflow-hidden">
      <CustomSidebar />
      <main className="flex-1 overflow-y-auto max-container">
        {/* <Suspense fallback={<SkeletonNavbar />}>
          <Navbar />
        </Suspense> */}
        {children}
        <Footer />
      </main>
    </div>
  );
}
