"use client";
import {useState } from 'react';

import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";

import Navbar from "@/components/Navbar";
const Page = () => {
  const [error,setError]= useState('')
  return (
    <div className="wrapper-md ">
      <h2>Upload a video</h2>
      {error && <div>{error} </div>}
      <form className="rounded-20 shadow-10  gap-6 w-full flex flex-col px-6 py-7">
        <FormField />
        <FileInput />
      </form>
    </div>
  );
}
export default Page