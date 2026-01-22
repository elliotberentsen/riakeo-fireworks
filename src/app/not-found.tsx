import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-12" />
      <main className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Sidan kunde inte hittas
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Länken du följde verkar inte längre finnas eller så är adressen
            felstavad. Gå tillbaka till sortimentet eller startsidan.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/sortiment"
            className="inline-flex items-center justify-center rounded-full border border-gray-900 px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            Till sortimentet
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
          >
            Till startsidan
          </Link>
        </div>
      </main>
    </div>
  );
}
