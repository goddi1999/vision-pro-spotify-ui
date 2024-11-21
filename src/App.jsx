import { Play, Ellipsis } from "lucide-react";
import { useState } from "react";

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
      duration: "2:53",
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27312ebde47882280b814275600",
    },

    {
      sonTitle: "Last Last",
      totalPlays: "270 146 246",
      duration: "2:53",
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
  ]);
  return (
    <div className="h-[100vh] text-foreground">
      <div className="bg-hero-img w-full h-full bg-cover p-6 bg-center ">
        <div className="max-w-[1020px]   mx-auto rounded-3xl h-full backdrop-blur-xl bg-black/40">
          <div className="relative pl-4 rounded-tl-3xl rounded-tr-3xl h-[50%] backdrop-blur-xl bg-black/4 flex items-end">
            <div className="absolute inset-0 -z-10  h-full flex justify-end overflow-hidden">
              <img
                className="h-full object-contain transform scale-150 translate-y-12"
                src="public/assets/img/burnaboy_thubnail-removebg-preview.png"
                alt="Burna Boy Thumbnail"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-2 py-5">
              <div className="flex gap-1 items-center">
                <img
                  className="h-6 w-6"
                  src="public/assets/img/icons8-verified-48.png"
                  alt="Verified Icon"
                />
                <p className="text-xs">Verified artist</p>
              </div>
              <p className="font-bold text-8xl">Burna Boy</p>
              <p>18,890,500 monthly listeners</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mx-4 my-5">
            <button className="bg-green p-3 rounded-full">
              <Play />
            </button>
            <button className="rounded-md px-3 py-2 border-white/40 border-2">
              Follow
            </button>
            <button className="">
              <Ellipsis className="text-white/70" />
            </button>
          </div>
          <div>
            <div className="flex">
              <section className="grow">
                <p className="px-4 font-bold text-2xl py-2">Popular</p>
                <div className="overflow-y-scroll max-h-[80%] ">
                  <table className="text-sm w-full">
                    <tbody>
                      {songTracks.map((track, index) => (
                        <tr key={index}>
                          <th className="py-2 px-4">{index + 1}</th>
                          <td className="py-2">
                            <img
                              src={track.imgUrl}
                              alt={`${track.sonTitle} thumbnail`}
                              className=" h-12 w-12 object-cover rounded-full"
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
              <section className="border-s-2 border-white/10 px-4">
                <p className="font-bold text-xl">On Tour</p>
                <div className="overflow-scroll p-4 flex flex-col gap-3">
                  {tourDates.map((tour, index) => (
                    <div
                      key={index}
                      className="flex gap-3 items-center  border-gray-700"
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
