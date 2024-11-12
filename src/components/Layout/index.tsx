import { ReactLenis } from 'lenis/react';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <ReactLenis root={true}>
    <Topbar />
    {children}
    <Footer />
  </ReactLenis>
);
