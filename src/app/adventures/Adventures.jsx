import { getAdventures } from "../../../API/api";
import localFont from "next/font/local";

const outfit = localFont({
  src: "../fonts/Outfit-Regular.ttf",
  variable: "--font-outfit-regular",
});

export default async function Adventures() {
  const adventures = await getAdventures();
  return (
    <div className="mx-20 mt-10">
      <h1
        className={`text-xl font-extrabold font-[var(--font-outfit-semibold)]`}
      >
        My Adventures
      </h1>
      <div className="flex flex-row gap-4 flex-wrap">
        {adventures?.map((adventure) => {
          if (adventure.name && adventure.image) {
            return (
              <div className="border rounded-tl-xl rounded-tr-xl border-gray-700 text-center mt-4 font-extrabold font-[var(--font-outfit-semibold)]">
                <img
                  src={adventure.image}
                  alt={adventure.name}
                  className="rounded-tl-xl rounded-tr-xl object-cover w-44 h-32"
                />

                <h2 className="mt-2 text-xs p-2 ">{adventure.name}</h2>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
