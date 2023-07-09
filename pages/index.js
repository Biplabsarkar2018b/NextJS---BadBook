import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import LoginCompo from "@/components/login-btn";
import AuthsConfirm from "./auths";

export default function Home() {
  return (
    <>
      <Head>
        <title>BadBook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      <LoginCompo/>
      <AuthsConfirm/>
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </>
  );
}
