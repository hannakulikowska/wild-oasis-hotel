import TextExpander from '@/app/_components/TextExpander';
import { getCabin, getCabins } from '@/app/_lib/data-service.mjs';
import Image from 'next/image';
import { FaUsers, FaMapMarkerAlt, FaEyeSlash } from 'react-icons/fa';

interface PageParams {
  params: Promise<{
    cabinId: string;
  }>;
}

export async function generateMetadata({ params }: PageParams) { 
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  return { title: `Cabin ${cabin.name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map(cabin => ({ cabinId: String(cabin.id) }))
  return ids;
}

export default async function Page({ params }: PageParams) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  const { name, maxCapacity, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-1 grid-rows-[auto_auto] md:grid-cols-[3fr_4fr] md:grid-rows-1 lg:gap-20 border border-primary-800 py-3 px-4 lg:py-3 lg:px-10 mb-10 lg:mb-24">
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-auto lg:h-auto lg:scale-[1.15] lg:-translate-x-3">
          <Image src={image} fill className="object-cover" alt={`Cabin ${name}`} />
        </div>

        <div>
          <h3 className="text-accent-100 inline-block font-black text-3xl sm:text-5xl md:text-7xl mb-5 lg:translate-x-[-254px] bg-primary-950 lg:p-6 pt-6 pb-1 lg:w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>
              {description}
            </TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <FaUsers className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <FaMapMarkerAlt className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <FaEyeSlash className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
