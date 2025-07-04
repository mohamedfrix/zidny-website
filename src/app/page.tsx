'use client';
import { usePathname } from 'next/navigation';
import LandingPage from "@/pages/LandingPage";
import DesignDepartment from "@/app/design/page";
import WebDepartment from "@/app/web/page";
import MobileDepartment from '@/app/mobile/page';
import FilmingEditingDepartment from '@/app/filming-editing/page';

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
      case '/filming-editing':
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