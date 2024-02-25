"use client";
import { useState } from "preact/hooks";

type Options = {
  value: string;
  text: string;
};

const AboutMe = () => {
  const options: Options[] = [
    { value: "", text: "--Choose a your language--" },
    {
      value: "japan",
      text: "日本語",
    },
    {
      value: "english",
      text: "English",
    },
  ];
  const [language, setLanguage] = useState(options[0].value);
  const [greet, setGreet] = useState("");

  console.log(greet);

  const handleOnchange = (e) => {
    setLanguage(e.target.value);
    if (e.target.value === "english") {
      setGreet(
        "I am 24 years old and originally from Azumino City, Nagano Prefecture. Programming has been a hobby of mine. I started studying seriously in April last year, focusing on modern frontend technologies such as React, Next.js, and Typescript. I am studying to further my growth in this field.",
      );
    } else if (e.target.value === "japan") {
      setGreet(
        "長野県　安曇野市出身 24歳趣味でプログラミングをしているものです。昨年４月から本格的に勉強を開始し、React,Next.js,Typescriptなどのモダンなフロントエンド技術を中心に更なる成長を求めて勉強中です。このコンポーネントはAstroアイランドによってjavascriptの実行が可能です。",
      );
    } else {
      setGreet("");
    }
  };
  return (
    <div>
      <p>{greet}</p>
      <select value={language} onChange={(e) => handleOnchange(e)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AboutMe;
