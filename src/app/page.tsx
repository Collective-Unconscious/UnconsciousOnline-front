import { DiscordLoginButton } from '@/components/DiscordLoginButton';

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-950 min-h-screen text-white">
      <div className="text-center space-y-8 p-12">
        <h1 className="text-5xl font-extrabold">Unconscious Online</h1>
        <DiscordLoginButton />
      </div>
    </main>
  );
}
