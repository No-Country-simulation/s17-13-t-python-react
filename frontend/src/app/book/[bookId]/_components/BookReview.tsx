import Title from '@/components/Typography/Title';
import ReviewCard from './ReviewCard';
import fetcher from '@/utils/fetcher';
import { ReviewResponse, ReviewValues } from '@/app/manager/_validators/reviewSchema';
import { UserEdit } from '@/libs/editUser.action';

interface Props {
  idBook: number;
}

const BookReview = async ({ idBook }: Props) => {
  const review = await fetcher<ReviewResponse>(`review/${idBook}`);

  if (typeof review === 'string') return;

  const user = await fetcher<UserEdit>(`profile/${review.user_id}`);

  if (typeof user === 'string') return;

  return (
    <section className="p-3">
      <div className="my-12">
        <Title level={2} title="Reseña" />
      </div>
      <div className="my-12 flex flex-col gap-6">
        <ReviewCard review={review} user={user.user.name!} />
        <button className="ml-auto">Ver todas</button>
      </div>
    </section>
  );
};

export default BookReview;
