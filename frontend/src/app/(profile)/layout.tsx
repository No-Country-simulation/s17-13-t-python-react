import backgroundImage from '/public/bibliozAuth/bg-auth.png';

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grid h-full grid-cols-1 grid-rows-[10.3rem_1fr]">
      <div className="relative h-full w-full shadow-[0px_7px_6px_1px_#00000040] after:absolute after:inset-0 after:bg-transparent after:backdrop-blur-xl">
        <img
          className="h-full w-full object-cover"
          src={backgroundImage.src}
          alt="profile background"
          aria-hidden="true"
        />
      </div>
      <div>{children}</div>
    </section>
  );
}
