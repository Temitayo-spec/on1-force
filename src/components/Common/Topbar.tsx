import React from 'react';
import logo from '@/svgs/logo.svg';
import chevron_down from '@/svgs/ic_chevron_down.svg';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import ScrambleText from './ScramblingText';

const Topbar = () => {
  return (
    <nav className="py-3">
      <div className="flex items-center justify-between w-[90%] max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            className="mix-blend-screen w-5 object-contain"
          />

          <span>
            <ScrambleText
              targetText="0N1 FORCE"
              className="font-bold font-orbitron text-base"
            />
          </span>
        </div>

        <ul className="flex items-center gap-6">
          <li>
            <span className="flex items-center gap-1">
              <span>Buy</span>
              <Image src={chevron_down} alt="chevron down" />
            </span>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/frames">Frames</Link>
          </li>
          <li>
            <Link href="/nanohub">NanoHub</Link>
          </li>
          <li>
            <Link href="/nanohub">NanoHub</Link>
          </li>
          <li>
            <span className="flex items-center gap-1">
              <span>Programs</span>
              <Image src={chevron_down} alt="chevron down" />
            </span>
          </li>
          <li>
            <span className="flex items-center gap-1">
              <span>More</span>
              <Image src={chevron_down} alt="chevron down" />
            </span>
          </li>
          <li>
            <span className="flex items-center gap-1">
              <span>Social</span>
              <Image src={chevron_down} alt="chevron down" />
            </span>
          </li>
          <li>
            <Button className="bg-foreground" text="Connect" type="button" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
