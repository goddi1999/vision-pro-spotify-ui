import { Play, Ellipsis } from "lucide-react";
import { useState, useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

function App() {
  const [tourDates, setTourDates] = useState([
    {
      date: "Jun",
      venue: "Roskilde Festival",
      day: "17 Sat",
      time: "8:00 PM",
    },
    {
      date: "Jun",
      venue: "Praia Da Rocha",
      day: "28 Wed",
      time: "4:00 PM",
    },
    {
      date: "Jul",
      venue: "Citi Field, QA",
      day: "8 Sat",
      time: "7:00 PM",
    },
    {
      date: "Jul",
      venue: "Colors 2023",
      day: "15 Wed",
      time: "8:00 PM",
    },
  ]);

  const [songTracks, setSongTracks] = useState([
    {
      sonTitle: "Last Last",
      totalPlays: "270 146 246",
      duration: "3:03",
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27312ebde47882280b814275600",
    },

    {
      sonTitle: "Last Last",
      totalPlays: "270 146 246",
      duration: "2:63",
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27312ebde47882280b814275600",
    },

    {
      sonTitle: "Kilometre",
      totalPlays: "370 946 456",
      duration: "2:53",
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27312ebde47882280b814275600",
    },
    {
      sonTitle: "Solid (feat. Bbcst & Kehlani)",
      totalPlays: "270 349 246",
      duration: "2:53",
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27312ebde47882280b814275600",
    },

    {
      sonTitle: "Ye",
      totalPlays: "270 349 246",
      duration: "2:53",
      imgUrl: "https://i1.sndcdn.com/artworks-tQ54uRcMTPvv-0-t500x500.jpg",
    },

    {
      sonTitle: "Giddem",
      totalPlays: "270 349 246",
      duration: "2:53",
      imgUrl: "https://i1.sndcdn.com/artworks-tQ54uRcMTPvv-0-t500x500.jpg",
    },

    {
      sonTitle: "More Life",
      totalPlays: "270 349 246",
      duration: "2:53",
      imgUrl: "https://i1.sndcdn.com/artworks-tQ54uRcMTPvv-0-t500x500.jpg",
    },
    {
      sonTitle: "Ph City Vibration",
      totalPlays: "270 349 246",
      duration: "2:53",
      imgUrl: "https://i1.sndcdn.com/artworks-tQ54uRcMTPvv-0-t500x500.jpg",
    },
  ]);

  const burnaTextRef = useRef();
  const verifiedTextRef = useRef();
  const verifiedRef = useRef();
  const listenersRef = useRef();
  const playBtnRef = useRef();
  const playBtnIconRef = useRef();
  const ellipsisRef = useRef();
  const ellipsisIconRef = useRef();
  const followBtnRef = useRef();
  const followBtnTextRef = useRef();
  const popularRef = useRef();
  const onTourRef = useRef();
  const tourRef = useRef();
  const tableRef = useRef(null);
  const containerRef = useRef(null);
  const burnaImgRef = useRef(null);
  
  useGSAP(() => {
    gsap.from(containerRef.current, { scale: 0.2,  opacity: 0, duration: 0.9, ease: "power3.out"} );
    gsap.from(burnaImgRef.current, { scale: 0.2,  opacity: 0, duration: 0.9, ease: "power3.out"},"=-0.9" );
    gsap.from(verifiedRef.current, { scale: -0.2,  opacity: 0, duration: 1.2, ease: "elastic.out"},"=-0.2" );
    gsap.from(verifiedTextRef.current, { x: 20,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-0.7" );
    gsap.from(burnaTextRef.current, { y: 20,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-0.9" );
    gsap.from(listenersRef.current, { x: 20,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-0.5" );
    gsap.from(playBtnRef.current, { scale: 0.2,  opacity: 0, duration: 1.2, ease: "elastic.out"},"=-0.5" );
    gsap.from(followBtnRef.current, { scale: 0.2,  opacity: 0, duration: 1.2, ease: "elastic.out"},"=-0.5" );
    gsap.from(playBtnIconRef.current, { x: -10,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-1" );
    gsap.from(followBtnTextRef.current, { x: -10,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-1" );
    gsap.from(ellipsisIconRef.current, { x: -10,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-1" );
    gsap.from(popularRef.current, { x: -10,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-1" );
    gsap.from(onTourRef.current, { x: -10,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-1" );
    gsap.from(tableRef.current, { x: -10,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-1" );
    gsap.from(tourRef.current, { x: -10,  opacity: 0, duration: 1.2, ease: "power3.out"},"=-1" );
  }); 


  

  return (
    <div className="h-[100vh] text-foreground">
      <div className="bg-hero-img w-full h-full bg-cover p-6 bg-center relative">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div ref={containerRef} className="max-w-[1020px] mx-auto rounded-3xl h-full backdrop-blur-xl bg-black/40 z-10">
          <div className="relative pl-4 rounded-tl-3xl rounded-tr-3xl h-[50%] backdrop-blur-xl bg-black/4 flex items-end">
            <div className="absolute inset-0 -z-10 h-full flex justify-end overflow-hidden">
              <img
                ref={burnaImgRef}
                className="h-full object-contain transform scale-150 translate-y-12 animate-fade-in-to z-0"
                src="public/assets/img/burnaboy_thubnail-removebg-preview.png"
                alt="Burna Boy"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-2 py-5">
              <div className="flex gap-1 items-center">
                <img
                  ref={verifiedRef}
                  className="h-6 w-6"
                  src="public/assets/img/icons8-verified-48.png"
                  alt="Verified Icon"
                />
                <p ref={verifiedTextRef} className="text-xs">Verified artist</p>
              </div>
              <p ref={burnaTextRef} className="font-bold text-8xl">Burna Boy</p>
              <p ref={listenersRef} className="text-xs">18,890,500 monthly listeners</p>
            </div>
          </div>

          <div className="h-[50%] flex flex-col overflow-hidden">
            <div className="flex items-center gap-5 mx-4 my-5">
              <button ref={playBtnRef} className="bg-green p-3 rounded-full">
                <Play ref={playBtnIconRef} />
              </button>
              <button ref={followBtnRef} className="rounded-md px-3 py-2 border-white/40 border-2">
                <p ref={followBtnTextRef} className="text-xs">Follow</p>
              </button>
              <button ref={ellipsisRef}>
                <Ellipsis ref={ellipsisIconRef} className="text-white/70" />
              </button>
            </div>
            <div className="flex flex-1 overflow-hidden">
              <section className="grow flex flex-col gap-3">
                <p ref={popularRef} className="px-4 font-bold text-2xl">Popular</p>
                <div className="flex-1 overflow-y-auto ">
                  <table className="text-sm w-full" ref={tableRef}>
                    <tbody>
                      {songTracks.map((track, index) => (
                        <tr key={index}>
                          <th className="py-2 px-4">{index + 1}</th>
                          <td className="py-2">
                            <img
                              src={track.imgUrl}
                              alt={`${track.sonTitle} thumbnail`}
                              className="h-12 w-12 object-cover rounded-full"
                            />
                          </td>
                          <th
                            scope="row"
                            className="text-left font-medium py-2"
                          >
                            {track.sonTitle}
                          </th>
                          <td className="text-start py-2 px-2">
                            {track.totalPlays}
                          </td>
                          <td className="text-center py-2 px-2">
                            {track.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="border-s-2 border-white/10 px-4 flex flex-col  gap-3 h-full">
                <p ref={onTourRef} className="font-bold text-xl">On Tour</p>
                <div className="overflow-y-auto flex-1 p-4 flex flex-col gap-3" ref={tourRef}>
                  {tourDates.map((tour, index) => (
                    <div
                      key={index}
                      className="flex gap-3 items-center border-gray-700"
                    >
                      <div className="flex flex-col gap-1 items-center rounded-2xl bg-black/70 px-4 py-2">
                        <p className="text-xs">{tour.date}</p>
                        <p className="text-xs font-bold">
                          {tour.day.split(" ")[0]}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs">{tour.venue}</p>
                        <p className="text-xs">{tour.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
