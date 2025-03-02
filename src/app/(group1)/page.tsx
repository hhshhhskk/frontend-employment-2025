'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const { darkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    const mode = localStorage.getItem('darkMode') === 'true' ? true : false;

    if (mode === true) {
      document.documentElement.classList.add('dark');
      setCount(5);
    }
  }, []);

  useEffect(() => {
    if (count >= 5 && darkMode === false) {
      toggleDarkMode();
    } else if (count < 5 && darkMode === true) {
      toggleDarkMode();
    }
  }, [count, darkMode, toggleDarkMode]);

  const CountClicked = (num: number): void => {
    if (count === 0 && num === -1) {
      alert('0 밑으로는 내려가지 않습니다.');
    } else if (count === 10 && num === 1) {
      alert('10 위로는 올라가지 않습니다.');
    } else {
      setCount((count) => count + num);
    }
  };

  return (
    <main>
      <section className="flex flex-col gap-4 mt-5 w-36">
        <div className="flex justify-around">
          <button onClick={() => CountClicked(1)}>증가(1)</button>
          <button onClick={() => CountClicked(-1)}>감소(-1)</button>
        </div>
        <div className="flex justify-center">{count}</div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
