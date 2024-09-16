export interface FakeUser {
  name: string;
  email: string;
  password: string;
}

export function randomUser(): FakeUser {
  const crypto = window.crypto.randomUUID().slice(0, 5);

  return {
    name: `UserTest-${crypto}`,
    email: `user${crypto}@test.com`,
    password: '12345678',
  };
}
