import bgAuth from '/public/bibliozAuth/bgAuth.webp';

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <section className="relative h-full">
      <img
        src={bgAuth.src}
        alt="background"
        className="absolute left-0 top-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="m-auto flex max-w-7xl justify-end md:py-12 md:pr-20">
        <div className="flex h-full w-full items-start justify-center bg-[#e7e0cf10] backdrop-blur-[50px] md:h-[650px] md:w-[600px] md:rounded-[35px]">
          {children}
        </div>
      </div>
    </section>
  );
}
