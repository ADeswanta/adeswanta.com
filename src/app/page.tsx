// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl">This website is in under construction</h1>
        <p>I’m working on the new website. Please be patient.</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Therefore, you can follow me on:</p>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bsky.app/profile/adeswanta08.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bluesky
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://twitter.com/adeswanta08"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter (X)
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://mastodon.social/@adeswanta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mastodon
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/adeswanta.08/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/ADeswanta"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.figma.com/@adeswanta08"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://youtube.com/@ADeswanta"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </footer>
    </div>
  );
}
