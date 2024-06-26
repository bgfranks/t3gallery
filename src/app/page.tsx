import { SignedIn, SignedOut } from "@clerk/nextjs";
import ImagesList from "./_components/ImagesList";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <ImagesList />
      </SignedIn>
    </main>
  );
}
