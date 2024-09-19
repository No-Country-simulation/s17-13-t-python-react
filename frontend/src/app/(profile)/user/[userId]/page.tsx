// 'use client';

import { HiLocationMarker } from 'react-icons/hi';
import { FaUserLarge } from 'react-icons/fa6';
import UserProfileOverview from '../../_components/UserProfileOverview';
import { UserEdit } from '@/libs/editUser.action';
import fetcher from '@/utils/fetcher';

interface UserResponse extends UserEdit {}

interface PageProps {
  params: {
    userId: string;
  };
}

export default async function User({ params }: PageProps) {
  const user = await fetcher<UserResponse>(`profile/${params.userId}`);

  return (
    <>
      {typeof user !== 'string' && (
        <UserProfileOverview
          dataUser={[
            {
              icon: <HiLocationMarker size={25} />,
              text: user.city || 'ciudad por definir',
            },
            {
              icon: <FaUserLarge size={22} />,
              text: user.user.name ? `@${user.user.name}` : '@Unknow user',
            },
          ]}
          image={user && user.img}
          userName={user.user.name || 'Unknown User'}
        />
      )}
    </>
  );
}
