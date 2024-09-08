import Avatar from './Avatar';
import Paragraph from './Typography/Paragraph';
import Title from './Typography/Title';

interface Props {
  bio: string;
  image: string;
  name: string;
}

export default function AuthorProfileOverview({ bio, image, name }: Props) {
  return (
    <div className="mx-auto grid max-w-[85rem] grid-cols-1 pb-8 md:grid-cols-[auto_1fr] md:gap-16">
      <Avatar
        alt="Emily"
        img={image}
        customClass="-translate-y-16"
        containerClass="mx-auto size-64 md:size-52"
      />
      <div className="flex flex-col">
        <Title level={2} title={name} customClass="py-8" />
        <Paragraph text={bio} type="relaxed" />
      </div>
    </div>
  );
}
