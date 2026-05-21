"use client";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";

import { title } from "@/components/primitives";
// import { Tag } from "lucide-react";

export default function A5page() {
  const reason1Toast = () => {
    addToast({
      title: "#1",
      description: "He was dropped into a vat of acid and became crazy",
      color: "primary",
    });
  };
  const reason2Toast = () => {
    addToast({
      title: "#2",
      description:
        "In iterations of the story like the 2019 film, the joker was forced into his mindset by societal abuse",
      color: "primary",
    });
  };
  const reason3Toast = () => {
    addToast({
      title: "#3",
      description:
        "The joker hurt alot of people but he did it to drive Batman insane, not primarily for the fun of harming people",
      color: "primary",
    });
  };

  return (
    <>
      <h1 className={title()}>A5: Defend the fictional villan</h1>
      <ul>
        <b>Three reasons why joker wasn&apos;t completely evil:</b>
      </ul>
      <Button onPress={() => reason1Toast()}>Reason #1</Button>
      <Button onPress={() => reason2Toast()}>Reason #2</Button>
      <Button onPress={() => reason3Toast()}>Reason #3</Button>
    </>
  );
}
