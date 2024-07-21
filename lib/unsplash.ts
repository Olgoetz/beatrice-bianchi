"use server";
import { createApi } from "unsplash-js";

// on your node server
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY as string,
});

export const getPhoto = async () => {
  const photo = await unsplash.photos.get({ photoId: "K1oDPIcihV8" });
  console.log(photo);
  return photo.response;
};
