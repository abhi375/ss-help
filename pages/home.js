import { ChromeIcon, SFIcon } from "../components/Icons";
import ctl from "@netlify/classnames-template-literals";

const StoreCardClass = ctl(`
  p-8
  bg-white
  shadow-card
  rounded-md
  grid
  place-items-center
  cursor-pointer
`);

const StoreButtonClass = ctl(`
  bg-accent
  px-10
  py-1.5
  rounded-full
  text-white
  flex
  items-center
  justify-center
  mb-4
`);

export default function Home() {
  return (
    <section className="w-full my-10">
      <div className="max-w-screen-sm mx-auto">
        <h1 className="mb-3">Getting Started</h1>
        <p className="opacity-60">
          All you need to get started with Samespace in one place!
        </p>
        <div className="w-full h-px bg-black dark:bg-white bg-opacity-10 mt-5"></div>
      </div>

      <div className="max-w-screen-sm mx-auto my-10">
        <p className="mb-5">
          Once your account is created, first thing you should do is create team
          and invite users. After your first team is created, you can map that
          to a phone number in settings section.
        </p>
        <p>
          To start making and receiving calls, you will need to install
          Samespace Dock. If you are using Salesforce as your CRM, you can use
          our native salesforce dialer.
        </p>
      </div>

      <div className="max-w-screen-sm mx-auto my-10 grid grid-cols-2 gap-10">
        <div className={StoreCardClass}>
          <ChromeIcon />
          <p className="my-4">Chrome Store</p>
          <div className={StoreButtonClass}>Install</div>
        </div>
        <div className={StoreCardClass}>
          <SFIcon />
          <p className="my-4">App Exchange</p>
          <div className={StoreButtonClass}>Install</div>
        </div>
      </div>
    </section>
  );
}
