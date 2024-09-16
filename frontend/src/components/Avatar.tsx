interface Props {
  img: string;
  alt: string;
  customClass?: string;
  containerClass?: string;
}

export default function Avatar({ img, alt, customClass, containerClass }: Props) {
  return (
    <figure className={`size-52 ${containerClass || ''}`}>
      <img
        className={`block aspect-square h-full w-full rounded-[50%] object-cover ${customClass || ''}`}
        src={img}
        alt={`cover ${alt}`}
        title={alt}
      />

      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
