import SideNav from "@/components/admin/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-[#FCFCFC]">
          <div className="w-full flex-none md:w-64">
              <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-6 bg-grey-50">{children}</div>
      </div>
  );
}