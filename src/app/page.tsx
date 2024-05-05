import { Button, Link } from "@nextui-org/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link
          color="secondary"
          showAnchorIcon
          isExternal
          href="/about"
          as={NextLink}
          size="lg"
        >
          About
        </Link>
      </div>
      <Button size="lg" color="secondary" variant="shadow">
        Click Me
      </Button>
      <Button className="bg-red-200" endContent={<p>✅</p>}>
        Click Me
      </Button>
    </main>
  );
}
