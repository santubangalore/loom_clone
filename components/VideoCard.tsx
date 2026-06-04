"use client";

import Link from "next/link"
import Image from 'next/image';

const VideoCard = ({
    id,
    title,
    thumbnail,
    createdAt,
    userImg,
    username,
    views,
    visibility,
    duration
        
    }:VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
      <Image
        src={thumbnail}
        alt="thumbnail"
        height={290}
        width={160}
        className="thumbnail"
      ></Image>
      <article>
        <div>
          <figure>
            <Image
              src={userImg || '/assets/images/dummy.jpg'}
              alt="user image"
              width={34}
              height={34}
              className="rounded-full aspect-square"
            />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
          </figure>
          <aside>
            <Image src="/assets/icons/eye.svg" alt="Views" height={24} width={24} />
            <span className="text-lg">{views}</span>
          </aside>
        </div>
        <h2 className="font-bold text-md">{title}-{" "} {createdAt.toLocaleDateString('en-IN',{year:'numeric', month:'short', day:'numeric'})}</h2>
      </article>
      <button onClick={()=>{}} className="copy-btn">
        <Image src="/assets/icons/link.svg" alt="copy" height={18} width={18}  ></Image> 
      </button>
      { duration && (
        <div className="duration" >
            { Math.ceil(duration/60)} min
        </div>
      )}
    </Link>
  );
}
export default VideoCard