import { Wrapper } from "../types";

export const Layout: Wrapper = ({ children }) => {
  console.log("hello");
  return <div className="m-auto max-w-[1200px]">{children}</div>;
};
