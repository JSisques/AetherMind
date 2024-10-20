import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center min-h-screen gap-4">
        <Image src="/images/profile.jpg" alt="Javier Plaza Sisqués" width={0} height={0} sizes="100vw" className="h-full w-full object-cover" />
        <div className="p-8 w-full">
          <h1 className="mb-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight justify-self-center text-gray-900 dark:text-white">
            Javier Plaza Sisqués
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight justify-self-center text-gray-900 dark:text-white">
            <i>Full Stack Developer</i>
          </h2>
        </div>
      </main>
    </>
  );
}
