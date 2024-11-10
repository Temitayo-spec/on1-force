import { ReactLenis } from 'lenis/react';
import Topbar from '../Common/Topbar';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <ReactLenis root={true}>
    <Topbar />
    {children}
  </ReactLenis>
);
