import { getPhoto } from "@/lib/unsplash";
import React, { useEffect } from "react";
import Image from "next/image";
const Header = async () => {
  //const photo = await getPhoto();
  const images = [
    {
      url: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Unsplash Photo",
    },
    {
      url: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90",
      alt: "Unsplash Photo",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1669243651427-a9e346d152e1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Unsplash Photo",
    },
  ];

  return (
    <header>
      <div className="container mx-auto py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between  w-full">
          {images.map((image) => (
            <div
              key={image.url}
              className="h-[500px] max-w-lg md:h-[700px] relative"
            >
              <Image
                src={image.url}
                className="rounded-lg  object-cover"
                fill
                sizes="100vw"
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
