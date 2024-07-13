import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>מחשבון פוקר</div>
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationElement}>
          <Link to="/">דשבורד</Link>
        </div>
        <div className={styles.navigationElement}>
          <Link to="/actions">פעולות</Link>
        </div>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};
