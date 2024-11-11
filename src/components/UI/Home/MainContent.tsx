import ScrambleText from '@/components/Common/ScramblingText';
import Image from 'next/image';
import React from 'react';
import first_box_image from '@/images/first_box.png';
import Button from '@/components/Common/Button';
import marketplace from '@/images/marketplace.png';
import comic from '@/images/comic.png';
import on1verse from '@/images/on1verse.png';
import on1frames from '@/images/on1frames.png';
import Link from 'next/link';

const MainContent = () => {
  return (
    <section className="w-[90%] max-w-screen-xl mx-auto mt-[3rem]">
      <article className="flex rounded-2xl justify-between bg-foreground">
        <div className="p-10 max-w-[33.1875rem] w-1/2">
          <ScrambleText
            targetText="0N1 FORCE"
            className="text-[3rem] font-medium"
          />

          <p className="text-xl leading-[150%] mt-3">
            The original collection, 0N1 Force are 7,777 citizens that had once
            lived for eternity in the Ethereal Enclave. That all suddenly
            changed when the Emperor died and the Enclave was flung into
            chaos...Now the collection grows with the addition of Nano Suits,
            comic, and future Metaverse utility.
          </p>

          <Button
            type="button"
            text="Enter The 0N1VERSE"
            className="py-4 px-8 text-xl mt-8"
          />
        </div>

        <Image src={first_box_image} alt="w-1/2" quality={100} />
      </article>

      <section className="flex gap-4 mt-4">
        <div className="flex flex-col gap-4 max-w-[35.25rem]">
          <article className="rounded-2xl">
            <Image
              src={marketplace}
              alt="marketplace banner"
              className="object-contain"
              quality={100}
            />
            <div className="p-8 bg-foreground rounded-br-2xl rounded-bl-2xl">
              <h2 className="text-[3rem] font-medium font-orbitron">
                Marketplace
              </h2>

              <p className="text-xl leading-[150%] mt-3">
                0N1 FORCE and Origin Protocol are rewarding active community
                members
              </p>

              <Button
                type="button"
                text="Go to Marketplace"
                className="py-4 px-8 text-xl mt-8"
              />
            </div>
          </article>
          <article className="rounded-2xl">
            <Image
              src={comic}
              alt="comic banner"
              className="object-contain"
              quality={100}
            />
            <div className="p-8 bg-foreground rounded-br-2xl rounded-bl-2xl">
              <h2 className="text-[3rem] font-medium font-orbitron">Comic</h2>

              <p className="text-xl leading-[150%] mt-3">
                <span>
                  <Link
                    href="https://x.com/cromagnus"
                    className="text-force_peach"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cromagnus
                  </Link>
                </span>
                , an in-house illustrator for the 0N1 Force project, is
                currently working with{' '}
                <span>
                  <Link
                    href="https://x.com/joshblaylock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-force_peach"
                  >
                    Josh Blaylock
                  </Link>
                </span>{' '}
                to bring this world to life through an exclusive digital comic.
              </p>
            </div>
          </article>
        </div>

        <div className="flex flex-col gap-4 max-w-[41.75rem]">
          <article className="rounded-2xl">
            <Image
              src={on1verse}
              alt="on1verse banner"
              className="object-contain"
              quality={100}
            />
            <div className="p-8 bg-foreground rounded-br-2xl rounded-bl-2xl">
              <h2 className="text-[3rem] font-medium font-orbitron">
                THE 0N1VERSE
              </h2>

              <p className="text-xl leading-[150%] mt-3">
                0N1 Force sees the future of NFT ownership as cross-platform. We
                envision a digital social network with no boundaries.The
                Ethereal Enclave, within the 0N1VERSE, is an endless city, and
                it is the place where the 0N1 call home.
              </p>

              <Button
                type="button"
                text="See Lore"
                className="py-4 px-8 text-xl mt-8"
              />
            </div>
          </article>
          <article className="rounded-2xl">
            <Image
              src={on1frames}
              alt="on1frames banner"
              className="object-contain"
              quality={100}
            />
            <div className="p-8 bg-foreground rounded-br-2xl rounded-bl-2xl">
              <h2 className="text-[3rem] font-medium font-orbitron">
                0N1 FRAMES
              </h2>

              <p className="text-xl leading-[150%] mt-3">
                THE ORIGINAL 0N1 FORCE NFTS ARE THE KEY:As long as you own an
                original 0N1, the 0N1 FRAMES are free to claim + gas.
              </p>

              <Button
                type="button"
                text="Know More"
                className="py-4 px-8 text-xl mt-8"
              />
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default MainContent;
