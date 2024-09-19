'use server';

import axios from 'axios';
import builderApiUrl from '@/utils/builderApiUrl';

interface Preferences {
  gender_ids: number[];
  user_ids: number;
}

export async function createPreferences({ gender_ids, user_ids }: Preferences) {
  const url = builderApiUrl(`userPreferences/user/${user_ids}/preferences/create`);
  const data = {
    gender_ids: gender_ids,
  };
  try {
    const genderRequest = await axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(genderRequest);
  } catch (error) {
    console.log(error);
  }
}
