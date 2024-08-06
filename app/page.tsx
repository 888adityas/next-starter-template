import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div>
        <Button className="">Click me</Button>
        <ModeToggle />
        <p className="">Hello world!!!</p>
      </div>
    </main>
  );
}
