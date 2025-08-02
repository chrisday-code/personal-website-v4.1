import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Laptop } from "@/components/Laptop/Laptop";
import { Intro } from "@/components/Intro/Intro";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center gap-x-2">
        <Intro />
        <Laptop />
      </main>
      <Footer />
    </div>
  );
}
