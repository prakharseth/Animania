import React, { useState } from "react";
import Logo from "./logo.svg";
import cards from "./data.json";
import Option from "./Options.svg";
function Mob() {
  return (
    <div className=''>
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
    <div className='bg-[#0B0A0D] flex items-center pl-10'>
      <img className='pl-10' src={Logo} alt='logo' />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //   const [show, setShow] = useState(true);
  return (
    <div
      className='bg-[#168DDD] text-white flex justify-between px-4 py-2 items-center font-fira
      '
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={Option} className='' alt='' />
      </button>
      {isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-xl flex absolute right-4 z-10 animate-bounce font-rock '
        >
          X
        </button>
      ) : (
        <></>
      )}
      <div
        className={`bg-black opacity-95 flex flex-col text-white font-fira top-[75px] font-bold  w-full left-0 absolute ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300 pl-4 gap-2 pb-2`}
      >
        <span>
          <a href='# '>Home</a>
        </span>
        <span>
          <a href='https://chia-anime.su/anime/list-mode/'>Anime List</a>
        </span>
        <span>
          <a href='https://chia-anime.su/genres'>Generes</a>
        </span>
        <span>
          <a href='https://chia-anime.su/season'>Seasons</a>
        </span>
        <span>
          <a href='https://chia-anime.su/schedule'>Schedule</a>
        </span>
        <span>
          <a href='https://chia-anime.su/bookmark'>Bookmarks</a>
        </span>
      </div>
      <div className='bg-[#17151B] h-8 w-60 rounded'>
        <div className='text-base font-fira px-4 pt-1'>Search...</div>
      </div>
    </div>
  );
}

function ReleaseInfo() {
  return (
    <div className='bg-[#168DDD] h-11 mt-4   text-white px-7 flex items-center font-fira justify-between'>
      <div className='text-xl font-bold'>Latest Release</div>
      <div className='bg-[#222222] px-2 py-1 rounded-sm text-sm'>View All</div>
    </div>
  );
}

function CardGroup() {
  return (
    <div className='bg-[#222222] px-1 py-14 grid grid-cols-2'>
      {cards.map(cards => {
        return (
          <div className='pb-4 px-5 text-white font-fira text-lg'>
            <div className='text-white font-fira text-lg flex gap-2 justify-between px-1 pb-2'>
              <span className='bg-[#168DDD] px-2  rounded-sm '>
                Ep {cards.Ep}
              </span>
              <span className='bg-[#168DDD]  bg-[#168DDD] px-1 rounded-sm bottom-6 left-64'>
                SUB
              </span>
            </div>
            <div className='hover:scale-105 transform transition duration-200'>
              <a href={cards.url}>
                <img className='' src={cards.cardImg} alt='Cartoon' />
              </a>
            </div>

            <div className=' text-white text-center font-fira'>
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
    <div className='pt-4'>
      <div className='bg-[#222222] flex flex-col'>
        <img className='py-2 h-24' src={Logo} alt='logo' />
        <div className='text-white font-rock text-center'>
          <div className='text-xs'>
            Copyright © 2022 Animaina. All Rights Reserved
          </div>
          <div className='text-xs px-6 py-2 '>
            Disclaimer: This site Animania does not store any files on its
            server. All contents are provided by non-affiliated third parties.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mob;
