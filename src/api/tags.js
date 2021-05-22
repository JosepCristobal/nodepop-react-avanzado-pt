import client from './client';

const tagsBaseUrl = '/api/v1';

export const getTagsAdverts = () => {
  const url = `${tagsBaseUrl}/adverts/tags`;
  
  return client.get(url);
};
