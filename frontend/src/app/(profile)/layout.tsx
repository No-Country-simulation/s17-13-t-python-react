export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grid h-full grid-cols-1 grid-rows-[10.3rem_1fr]">
      <div className="mx-auto w-full max-w-[85rem] px-4 md:px-8">{children}</div>
    </section>
  );
}
