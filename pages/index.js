import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [result, setResult] = useState(0);
  return (
    <>
      <div className="mx-auto my-16 bg-black w-[360px] h-[640px] px-4 pt-20 pb-8 justify-between">
        {/* resultを表示 */}
        <section>
          <p className="text-white font-extralight text-[80px] text-right">
            {result}
          </p>
        </section>
        {/* ボタンを表示 */}
        <section className="flex flex-col gap-11">
          {/* 1列目 */}
          <div className="flex flex-row h-[40px] justify-between">
            <button className="bg-gray-400 w-[72px] h-[72px] rounded-full">
              <span className="text-black text-center my-auto text-3xl">
                AC
              </span>
            </button>
            <button className="bg-gray-400 w-[72px] h-[72px] rounded-full">
              <span className="leading-8">
                <span className="text-black text-center my-auto text-xl inline-block align-top">
                  +
                </span>
                <span className="text-black text-center my-auto text-xl inline-block align-middle">
                  /
                </span>
                <span className="text-black text-center my-auto text-xl inline-block align-baseline">
                  _
                </span>
              </span>
            </button>
            <button className="bg-gray-400 w-[72px] h-[72px] rounded-full">
              <span className="text-black text-center my-auto text-3xl">%</span>
            </button>
            <button className="bg-[#f3b302] w-[72px] h-[72px] rounded-full">
              <p className="text-white text-center my-auto text-4xl">÷</p>
            </button>
          </div>
          {/* 2列目 */}
          <div className="flex flex-row h-[40px] justify-between">
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">7</span>
            </button>
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">8</span>
            </button>
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">9</span>
            </button>
            <button className="bg-[#f3b302] w-[72px] h-[72px] rounded-full">
              <p className="text-white text-center my-auto text-4xl">×</p>
            </button>
          </div>
          {/* 3列目 */}
          <div className="flex flex-row h-[40px] justify-between">
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">4</span>
            </button>
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">5</span>
            </button>
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">6</span>
            </button>
            <button className="bg-[#f3b302] w-[72px] h-[72px] rounded-full">
              <p className="text-white text-center my-auto text-4xl">-</p>
            </button>
          </div>
          {/* 4列目 */}
          <div className="flex flex-row h-[40px] justify-between">
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">1</span>
            </button>
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">2</span>
            </button>
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">3</span>
            </button>
            <button className="bg-[#f3b302] w-[72px] h-[72px] rounded-full">
              <p className="text-white text-center my-auto text-4xl">+</p>
            </button>
          </div>
          {/* 5列目 */}
          <div className="flex flex-row h-[40px] justify-between">
            <button className="bg-stone-700 w-[158px] h-[72px] rounded-full text-left pl-[28px]">
              <span className="text-white my-auto text-3xl">0</span>
            </button>
            <button className="bg-stone-700 w-[72px] h-[72px] rounded-full">
              <span className="text-white text-center my-auto text-3xl">.</span>
            </button>
            <button className="bg-[#f3b302] w-[72px] h-[72px] rounded-full">
              <p className="text-white text-center my-auto text-4xl">=</p>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
