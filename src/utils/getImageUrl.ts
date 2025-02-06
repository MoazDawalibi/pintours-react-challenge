interface PhotoDetails {
  farm: number;
  server: string;
  id: string;
  secret: string;
}

interface Details {
  photo?: PhotoDetails;
}

export const getImageUrl = (details: Details, size: string = "z"): string => {
  if (!details?.photo) return "";
  const { farm, server, id, secret } = details.photo;
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
};
