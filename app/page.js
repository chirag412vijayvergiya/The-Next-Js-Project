import Link from "next/link";
import Navigation from "@/app/_components/Navigation";
export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>Hello Next!</h1>
      <Link href="/cabins"></Link>
    </div>
  );
}
