import bgAuth from '/public/bibliozAuth/bgAuth.webp';

export default function BackgroundBook() {
  return (
    <img
      src={bgAuth.src}
      alt="background"
      className="absolute left-0 top-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  );
}
