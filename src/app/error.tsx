"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="m-auto flex flex-col gap-5">
      <h2 className="mb-10 font-bold text-4xl">Что-то пошло не так!</h2>
      <button
        className="cursor-pointer hover:text-red-700 block m-auto text-xl"
        onClick={() => reset()}
      >
        Попробуйте снова...
      </button>
    </div>
  );
}
