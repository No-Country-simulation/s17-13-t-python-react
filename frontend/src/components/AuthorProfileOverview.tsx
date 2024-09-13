import fetcher from '@/utils/fetcher';
import Avatar from './Avatar';
import Paragraph from './Typography/Paragraph';
import Title from './Typography/Title';
import builderApiUrl from '@/utils/builderApiUrl';

interface Props {
  bio: string;
  image: string;
  name: string;
}

export default async function AuthorProfileOverview({ bio, image, name }: Props) {

  const author = await fetcher(builderApiUrl('author/1'));
  return (
    <div className="mx-auto grid max-w-[85rem] grid-cols-1 pb-8 md:grid-cols-[auto_1fr] md:gap-16">
      <Avatar
        alt="Imagen del autor"
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
