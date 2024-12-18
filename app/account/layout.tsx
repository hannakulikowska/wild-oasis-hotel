import SideNavigation from "@/app/_components/SideNavigation";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: AboutLayoutProps) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  )
}