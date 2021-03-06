export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_96F625AA9EE84BF3';

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_SK || 'pk_test_WY1ckXTA679d2YL4ZzsubIhc00kPgyskVn';

export const fromImageToUrl = (image) => {
  if (!image) {
    return '/vercel.svg';
  }
  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image.url}`;
  }
  return image.url;
};
