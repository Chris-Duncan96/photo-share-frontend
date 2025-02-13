import * as React from 'react';
import TextField from '@mui/material/TextField';
import Photos from './components/Photos';
// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-4">
          <TextField id="outlined-search-album" label="Search by Album ID" type="search" />
          <span>- or -</span>
          <TextField id="outlined-search-photo" label="Search by Photo ID" type="search" />
        </div>
        <div>
          <Photos />
        </div>
      </main>
    </div>
  );
}
