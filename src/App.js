import React from "react";
import Logo from "./logo.svg";
import cards from "./data.json";

export default App;
function App() {
  return (
    <div className='MainPage bg-[#16151D]'>
      <Header />
      <Navbar />
      <ReleaseInfo />
      <CardGroup />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className='bg-[#0B0A0D] h-92 flex items-center justify-between'>
      <img className='pl-6 py-2' src={Logo} alt='logo' />
      <div className='bg-[#17151B] mr-8 w-80  rounded-md '>
        <div className='text-white font-fira pl-8 py-2 text-base'>
          Search...
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div
      className='bg-[#168DDD] h-11 mt-4 text-white flex gap-10 pl-10 items-center font-fira
    '
    >
      <span className='hover:text-[#0B0A0D] hover:font-semibold'>
        <a href='# '>Home</a>
      </span>
      <span className='hover:text-[#0B0A0D] hover:font-semibold'>
        <a href='https://chia-anime.su/anime/list-mode/'>Anime List</a>
      </span>
      <span className='hover:text-[#0B0A0D] hover:font-semibold'>
        <a href='https://chia-anime.su/genres'>Generes</a>
      </span>
      <span className='hover:text-[#0B0A0D] hover:font-semibold'>
        <a href='https://chia-anime.su/season'>Seasons</a>
      </span>
      <span className='hover:text-[#0B0A0D] hover:font-semibold'>
        <a href='https://chia-anime.su/schedule'>Schedule</a>
      </span>
      <span className='hover:text-[#0B0A0D] hover:font-semibold'>
        <a href='https://chia-anime.su/bookmark'>Bookmarks</a>
      </span>
    </div>
  );
}

function ReleaseInfo() {
  return (
    <div className='bg-[#168DDD] h-11 mt-14 mx-9 rounded-t-md text-white px-7 flex items-center font-fira justify-between'>
      <div className='text-xl font-bold'>Latest Release</div>
      <div className='bg-[#222222] px-2 py-1 rounded-sm text-sm'>View All</div>
    </div>
  );
}

function CardGroup() {
  return (
    <div className='bg-[#222222] mx-9 px-7 py-14 grid grid-cols-5'>
      {cards.map(cards => {
        return (
          <div className='pb-4 px-5 text-white font-fira text-lg'>
            <div className='text-white font-fira text-lg flex justify-between px-1 pb-2'>
              <span className='bg-[#168DDD] px-2  rounded-sm '>
                Ep {cards.Ep}
              </span>
              <span className='bg-[#168DDD]  bg-[#168DDD] px-1 rounded-sm bottom-6 left-64'>
                SUB
              </span>
            </div>
            <div className='hover:scale-105 transform transition duration-500'>
              <a href={cards.url}>
                <img className='' src={cards.cardImg} alt='Cartoon' />
              </a>
            </div>

            <div className=' w-60 text-white text-center font-fira'>
              {cards.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Footer() {
  return (
    <div className='pt-20'>
      <div className='bg-[#222222] h-32 flex items-center'>
        <img className='pl-6 py-2' src={Logo} alt='logo' />
        <div className='text-white font-rock pl-20 w-[498px] '>
          <div>Copyright © 2022 Animaina. All Rights Reserved</div>
          <div className='text-xs'>
            Disclaimer: This site Animania does not store any files on its
            server. All contents are provided by non-affiliated third parties.
          </div>
        </div>
      </div>
    </div>
  );
}