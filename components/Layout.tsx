import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }:any) => {
  return (
    <Fragment>
      <Head>
        <title> Film</title>
        <link
          rel="icon"
          href="https://c8.alamy.com/compfr/2bwf15e/clapper-board-sur-fond-transparent-movie-clapper-2bwf15e.jpg"
        ></link>
      </Head>
      {children}
    </Fragment>
  );
};

export default Layout;
