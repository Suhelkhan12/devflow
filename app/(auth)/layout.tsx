//  this is best use case for individual layout for a separate route group so that, that particalu group can have a different layout then the root layout.
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
