import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-center items-center px-14'>
        {/* Logo */}
        <svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.64 0L0 5.64L18.32 24L0 42.36L5.64 48L29.64 24L5.64 0Z" fill="white"/>
            <path d="M32 0L26.36 5.64L44.68 24L26.36 42.36L32 48L56 24L32 0Z" fill="white"/>
        </svg>

        {/* Pages Block */}
        <div className='bg-[#282828] flex justify-between text-white px-8 py-3 items-center rounded-3xl mx-8 my-5 w-full'>
            <input type="text" name="searchbar" placeholder='Once upon a time...' className=' rounded-full bg-[#464646] py-3 w-[400px] text-left pl-4' />
            <div className='flex justify-center items-center gap-5'>
                <Link href={"/"}>HOME</Link>
                <Link href={"/read"}>READ</Link>
                <Link href={"/audio"}>AUDIO</Link>
                <Link href={"/stories"}>STORIES</Link>
                <div className=' bg-white w-12 h-12 rounded-full'></div>
            </div>
        </div>

        {/* Moon Icon */}
        <svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 19.5C28 22.1975 27.4747 24.7325 26.424 27.105C25.3747 29.4775 23.95 31.5413 22.15 33.2963C20.35 35.0513 18.2333 36.4403 15.8 37.4634C13.3667 38.4878 10.7667 39 8 39C6.93333 39 5.81667 38.9025 4.65 38.7075C3.48333 38.5125 2.36667 38.2362 1.3 37.8787C0.9 37.7162 0.583334 37.4647 0.35 37.1241C0.116667 36.7822 0 36.4 0 35.9775C0 35.685 0.0586663 35.4087 0.176 35.1488C0.292 34.8888 0.466666 34.6775 0.7 34.515C3.06667 32.5975 4.87467 30.3303 6.124 27.7134C7.37467 25.0978 8 22.36 8 19.5C8 16.64 7.37467 13.9016 6.124 11.2847C4.87467 8.66905 3.06667 6.4025 0.7 4.485C0.466666 4.3225 0.292 4.11125 0.176 3.85125C0.0586663 3.59125 0 3.315 0 3.0225C0 2.6 0.116667 2.2178 0.35 1.8759C0.583334 1.5353 0.9 1.28375 1.3 1.12125C2.36667 0.76375 3.48333 0.4875 4.65 0.2925C5.81667 0.0975002 6.93333 0 8 0C10.7667 0 13.3667 0.51155 15.8 1.53465C18.2333 2.55905 20.35 3.94875 22.15 5.70375C23.95 7.45875 25.3747 9.5225 26.424 11.895C27.4747 14.2675 28 16.8025 28 19.5Z" fill="#E9E9E9"/>
        </svg>

    </div>
  )
}
export  default  Navbar