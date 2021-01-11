// eslint-disable-next-line import/prefer-default-export
export const buildPostLinkUrl = (slug: string) => `/blog/${slug}`;

export const buildImageLinkUrl = (url: string) => process.env.NEXT_PUBLIC_BACKEND_URL + url;
