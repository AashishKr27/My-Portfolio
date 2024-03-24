import React from "react";
import Intro from "@/Components/Intro/Intro";
import Skills from "@/Components/Skills/Skills";
import Profiles from "@/Components/Profiles/Profiles";
import Navbar from "@/Components/Navbar/Navbar";
import Contact from "@/Components/Contacts/Contacts"
const page = () => {
  return (
    <>
      <div className="outer w-screen max-w-5xl m-auto">
        <Navbar className=""/>
        <Intro />
        <Profiles />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default page;
