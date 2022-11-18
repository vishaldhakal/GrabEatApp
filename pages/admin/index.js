import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ScrollFade from "@benestudioco/react-scrollfade";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function AdminHome() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
    </>
  );
}
