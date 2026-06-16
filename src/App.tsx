import { ArrowRightIcon } from '@phosphor-icons/react';

interface SupportLink {
  url: string;
  icon: string;
  alt: string;
}

interface SocialLink {
  url: string;
  icon: string;
  alt: string;
}

const socialLinks: SocialLink[] = [
  {
    url: 'https://www.youtube.com/@megabloodbath',
    icon: '/youtube.webp',
    alt: 'Watch our debates on YouTube!'
  },
  {
    url: 'https://www.twitch.tv/MEGABLOODBATH',
    icon: './glitch.png',
    alt: 'Watch our debates live on Twitch!'
  },
  {
    url: 'https://discord.gg/megabloodbath',
    icon: '/discord.png',
    alt: 'Join our Discord server!'
  }
]

const supportLinks: SupportLink[] = [
  {
    url: 'https://streamlabs.com/breakfasttacos/tip',
    icon: '/streamlabs_sm.png',
    alt: 'Send a tip with Streamlabs!'
  },
  {
    url: 'https://ko-fi.com/megabloodbath',
    icon: '/kofi_logo.webp',
    alt: 'Send a tip with Kofi!'
  },
  {
    url: 'https://www.paypal.com/ncp/payment/PHLGLBX8PZ4SG',
    icon: '/paypal.png',
    alt: 'Send a tip with PayPal!'
  }
];

function App() {
  return (
    <>
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 my-6 md:my-12 flex justify-end">
        <nav className="flex flex-row gap-x-8 items-center">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline block hover:opacity-80 transition-opacity"
            >
              <img src={link.icon} alt={link.alt} className="max-w-12 max-h-12 h-auto object-contain" />
            </a>
          ))}
        </nav>
      </header>

      <img src="/mbb_title.png" alt="Mega Bloodbath" className="block mx-auto max-h-56 max-w-full h-auto my-16" />


      <div className="flex flex-col justify-center items-center gap-12">

        <div className='flex flex-col lg:flex-row justify-start gap-12 lg:gap-24 mx-24'>
          <div className="flex flex-row flex-wrap lg:flex-col gap-8 justify-center lg:justify-start">
            {supportLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline text-lg block hover:opacity-80 transition-opacity"
              >
                <img src={link.icon} alt={link.alt} className="max-w-28 lg:max-w-32 h-auto" />
              </a>
            ))}
          </div>
          <ul className='text-h2 glow-black flex flex-col gap-y-12 max-w-2xl'>
            <li className="flex items-start gap-x-3 group cursor-pointer">
              <ArrowRightIcon size="1em" className="text-brand-yellow mt-[0.15em] shrink-0 group-hover:translate-x-1.5 transition-transform" weight="bold" />
              <span>Theist/Atheist Debates</span>
            </li>
            <li className="flex items-start gap-x-3 group cursor-pointer">
              <ArrowRightIcon size="1em" className="text-brand-yellow mt-[0.15em] shrink-0 group-hover:translate-x-1.5 transition-transform" weight="bold" />
              <span>Crash-outs</span>
            </li>
            <li className="flex items-start gap-x-3 group cursor-pointer">
              <ArrowRightIcon size="1em" className="text-brand-yellow mt-[0.15em] shrink-0 group-hover:translate-x-1.5 transition-transform" weight="bold" />
              <span>From deeply credentialed scientists and philosophers to rando internet hobos, all on the same panel</span>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default App;
