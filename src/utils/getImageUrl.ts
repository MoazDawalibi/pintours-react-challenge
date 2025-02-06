export const getImageUrl = (details: any, size: string = "z"): string => {
    if (!details?.photo) return "";
    const { farm, server, id, secret } = details.photo;
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
  };
  