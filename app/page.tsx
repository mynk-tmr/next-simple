import { NextImage } from "@/components/ui/next-image";

export default function Home() {
  return (
    <main className="h-screen grid place-content-center">
      <b className="text-3xl text-blue-500 ">Simple Next App</b>
      <NextImage src="/next.svg" width={100} height={100} alt="Next.js Logo" />
    </main>
  );
}
