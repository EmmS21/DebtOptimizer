import Image from "next/image";
import GetStockedHeader from "@/components/Header";
import ExplainerText from "@/components/ExplainerText";
import Video from "@/components/Video";
import LeftCard from "@/components/LeftCard";
import RightCard from "@/components/RightCard";
import SignupButton from "@/components/Signup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl mx-auto flex justify-center items-center font-mono text-sm lg:flex">
        <GetStockedHeader/>
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center text-white lg:static lg:size-auto lg:bg-none">
        <ExplainerText/>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Video/>
      </div>
      <div className="flex justify-between w-1/2">
      <div className="flex-1 p-4 box-border">
        <LeftCard/>
        </div>
        <div className="flex-1 p-4 box-border">
        <RightCard/>
        </div>
      </div>
      <SignupButton/>
    </main>
  );
}
