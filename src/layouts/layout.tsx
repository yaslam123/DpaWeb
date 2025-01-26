import { ReactNode } from "react";

import Header from "./header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      {/* content */}
      <div id="content">
        {children}

        <Footer />
      </div>
      {/* content */}
    </>
  );
};
export default Layout;
