import Image from "next/image"
import DevWithithDad from "@/public/images/devWithDad.png";

export default function VideoGrid() {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center gap-16">
      <h4 className="mb-5 h4 text-pink-600">Scom Media Centre 🎞️</h4>
      </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UKQCf2dx_L0?si=re4-LMwfrIl0wJwY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wk_iy4rCCJI?si=X6nBrCYQCp-5GhpY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/p3VfiVlZOHg?si=C5wUacdaq1uiIHJV"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5wGzC3wHMY4?si=KI73Pps1YINCTQZ3"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fsTBJrwsWjA?si=f7jV2jVpMJF-a8i-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hpGM9ETGOlU?si=P_oGOGyZqTdS2qHj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/gmPTARUp6zM?si=Z1o5Ksj1ibrtIvl6"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
            <a href="https://www.instagram.com/p/C0qBzmkRhDe" target="_blank" rel="noopener noreferrer">
              <Image src={DevWithithDad} alt="map" width={600} height={800} />
            </a>
          </div>

        </div>
      </div>
  );
}
