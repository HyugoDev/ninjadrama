import { StarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

import { type InfoAnime } from '@type/InfoAnime'
import { type Episodios } from '@type/Episodios'

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

interface Character {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface RelatedItem {
  title: string;
  poster: string;
  type: string;
}

interface Episode {
  episode: number;
  id: string;
}

interface InfoPros {
  dataAnime: {
    title: string;
    poster: string;
    status: string;
    rating: string;
    synopsis: string;
    genres: string[];
    moreInfo: { totalEpisodes: number }[];
    characters: Character[];
    related: RelatedItem[];
  };
  episodes: { episodes: Episode[] };
}
interface Data {
  characters: Character[];
  related: RelatedItem[];
  episodes: Episode[];
}

const Info: React.FC<InfoPros> = ({ dataAnime, episodes }: InfoPros) => {
  const [data] = useState<Data>({
    characters: dataAnime.characters,
    related: dataAnime.related,
    episodes: episodes.episodes,
  });

  return (
    <section className="">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg sx:flex sx:justify-center">
            <img
              src={dataAnime.poster}
              alt={dataAnime.title}
              width={260}
              height={370}
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-orange-700 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{dataAnime.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Anime information</h2>
            <p className="text-1xl tracking-tight ">{dataAnime.status}</p>
            <p className="text-1xl tracking-tight ">Episodios: {dataAnime.moreInfo[0].totalEpisodes}</p>
            <p className="text-1xl tracking-tight ">Generos:
              {
                dataAnime.genres.map((generos) => (
                  <span key={generos} className="text-1xl tracking-tight "> {generos} </span>
                ))
              }
            </p>

            {/* Rating */}
            <div className="mt-6">
              <h3 className="sr-only">Rating</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        (parseInt(dataAnime.rating)) > rating ? 'text-orange-600' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className=" text-white"> {(dataAnime.rating)} de 5 estrellas</p>
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-orange-500 lg:pb-16 lg:pr-8 lg:pt-6 justify-center items-center flex flex-col">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-white">{dataAnime.synopsis}</p>
              </div>
            </div>


            {/* tabs */}
            <div className="w-full max-w-xl px-2 py-16 sm:px-0 ">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                  {Object.keys(data).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                          'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2',
                          selected
                            ? 'bg-white shadow'
                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2 overflow-y-scroll h-96 w-full transparentScrollbar rounded-xl">
                  {Object.keys(data).map((category) => (
                    <Tab.Panel
                      key={category}
                      className={classNames(
                        'rounded-xl bg-slate-900 p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                      )}
                    >
                      {category === 'characters' && (
                        <ul className=''>
                          {data.characters.map((character) => (
                            <li
                              key={character.id}
                              className="rounded-md p-3 hover:bg-gray-100 flex justify-center "
                            >
                              <h3 className="text-sm font-medium leading-5 flex items-center ">
                                {character.name}<p className='ml-5' >{character.role}</p>  <img src={character.image} alt={character.name} width={70} height={70} className='object-cover ml-5' />
                              </h3>
                            </li>
                          ))}
                        </ul>
                      )}
                      {category === 'related' && (
                        <ul>
                          {data.related.map((item) => (
                            <li
                              className="relative rounded-md p-3 hover:bg-gray-100"
                            >
                              <h3 className="text-sm font-medium leading-5">
                                {item.title}
                              </h3>

                              <img src={item.poster} alt={item.title} width={80} height={80} />

                              <p>{item.type}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                      {category === 'episodes' && (
                        <ul>
                          {data.episodes.map((episode, index) => (
                            <li
                              key={index}
                              className="relative rounded-md p-3 hover:bg-gray-100"
                            >
                              <h3 className="text-sm font-medium leading-5">
                                Episode {episode.episode}
                              </h3>

                              <a href={episode.id}>Watch Episode</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
export default Info;