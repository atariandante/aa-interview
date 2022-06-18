import styles from "../styles/Home.module.css";
import React from "react";
import { Header } from "../components/Header";
import { List } from "../components/List";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
}
