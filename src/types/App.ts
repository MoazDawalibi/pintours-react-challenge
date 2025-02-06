import React from "react";
import { AppProps } from "next/app";

export interface CustomAppProps extends AppProps {}

export type ChildrenType = {
  children: React.ReactNode;
};

export type LayoutType = {
  children: React.ReactNode;
  className?: string 
};


// export type TRoute = {
//   path: string;
//   header: string;
//   element: ReactElement | LazyExoticComponent<any>;
// };