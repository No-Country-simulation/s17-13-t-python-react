'use server';

export async function verifyKey(key: string): Promise<boolean> {
  return key === process.env.MANAGER;
}
