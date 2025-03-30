import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="m-auto flex flex-col gap-5">
      <h2 className="mb-10 font-bold text-4xl text-center">
        Страница не найдена
      </h2>
      <ErrorMessage />
      <Link href="/" className="hover:text-red-700 block m-auto text-xl">
        Вернуться на главную страницу
      </Link>
    </div>
  );
}
