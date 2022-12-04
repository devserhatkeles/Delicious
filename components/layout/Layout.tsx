import React, { ReactNode } from "react";
import ButtonUp from "../ui/ButtonUp/ButtonUp";
import Header from "./Header";
import styles from "./Layout.module.scss";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <ButtonUp />
    </>
  );
};

export default Layout;
