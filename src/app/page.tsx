'use client';
import { usePathname } from 'next/navigation';
import LandingPage from "@/pages/LandingPage";
import DesignDepartment from "@/pages/DesignDepartment";
import WebDepartment from "@/pages/WebDepartment";
import MobileDepartment from '@/pages/MobileDepartment';
import FilmingEditingDepartment from '@/pages/FilmingEditingDepartment';

export default function Home() {
  const pathname = usePathname();
  
  const renderComponent = () => {
    switch(pathname) {
      case '/':
        return <LandingPage />;
      case '/design':
        return <DesignDepartment />;
      case '/web':
        return <WebDepartment />;
      case '/mobile':
        return <MobileDepartment />
      case '/filming_editing':
        return <FilmingEditingDepartment />
      default:
        return <LandingPage />;
    }
  };

  return (
    <>
      {renderComponent()}
    </>
  );
}