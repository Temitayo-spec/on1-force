import Image from 'next/image';
import Link from 'next/link';
import logo from '@/svgs/logo.svg';

const Footer = () => {
  return (
    <footer className="w-[90%] max-w-screen-xl mx-auto flex justify-between py-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-8">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium leading-[150%]"
          >
            Twitter
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium leading-[150%]"
          >
            Instagram
          </Link>
        </div>

        <p className="text-xs leading-[120%]">
          Copyright © 0N1 Force, Inc. 2023
        </p>
      </div>
      <div className="flex flex-col gap-6 items-end">
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-medium leading-[150%]"
        >
          Terms & Use
        </Link>

        <Image src={logo} className="mix-blend-lighten w-10" alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
