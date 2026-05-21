"use client";
import { Image } from "@heroui/image";
import { useState } from "react";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //   <div className="inline-block max-w-xl text-center justify-center">
    //     <span className={title()}>Discount&nbsp;</span>
    //     <span className={title({ color: "violet" })}>Time Machine&nbsp;</span>
    //     <br />
    //     <span className={title()}>Wholesale</span>
    //     <div className={subtitle({ class: "mt-4" })}>
    //       A project template for YOU to make your own!
    //     </div>
    //   </div>

    //   <div className="flex gap-3">
    //     <ConfettiButton />

    //     <div className={spinning ? "animate-spin" : ""}>
    //       <Button radius="full" variant="ghost" onPress={spinButton}>
    //         Spin
    //       </Button>
    //     </div>
    //   </div>

    //   <div className="mt-8">
    //     <Snippet hideCopyButton hideSymbol variant="bordered">
    //       <span>
    //         Get started by editing <Code color="primary">app/page.tsx</Code>
    //       </span>
    //     </Snippet>
    //   </div>
    // </section>
    <div>
      <Image
        alt="sppoky joker"
        src="https://myhotposters.com/cdn/shop/products/mF0157_09105c0b-9f70-4778-af6c-a15b8b02b9cd_1024x1024.jpeg?v=1748544265"
        width={100}
      />
      <Image
        alt="live action joker"
        src="https://tse1.mm.bing.net/th/id/OIP.TOM7XWyinuwUKpziY1_kDgHaNK?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        width={100}
      />
      <Image
        alt="comic joker"
        src="https://tse3.mm.bing.net/th/id/OIP.Et-W72DV7_WTq0irVuPwTQHaL-?w=202&h=315&c=7&r=0&o=7&pid=1.7&rm=3"
        width={100}
      />
      <Image
        alt="batman who laughs"
        src="https://tse2.mm.bing.net/th/id/OIP.H2yBZDZMXeBgraWpZFvtdAHaLS?w=202&h=308&c=7&r=0&o=7&pid=1.7&rm=3"
        width={100}
      />
      <Image
        alt="the killing joke"
        src="https://tse4.mm.bing.net/th/id/OIP.I5ghLnNTNLmS9WOV72PIDwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
        width={100}
      />
    </div>
  );
}
