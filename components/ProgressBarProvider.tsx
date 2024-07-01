"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#0179FE"
        options={{ showSpinner: false }}
      />
    </>
  );
};

export default ProgressBarProvider;
