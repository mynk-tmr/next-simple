import { NextImage } from "@/components/ui/next-image";

export default function Home() {
  return (
    <main className="h-screen grid gap-5 place-content-center">
      <h1 className="text-6xl text-zinc-950 font-medium flex gap-3">
        Simple{" "}
        <NextImage
          src="/next.svg"
          width={200}
          height={200}
          alt="Next.js Logo"
        />
      </h1>
    </main>
  );
}
