import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'




export default function Ver({ dataserver }) {
  const [selected, setSelected] = useState(dataserver.servers[0])


  return (
    <section className='flex flex-col'>
      <article className='flex flex-col m-4 items-center'>
        <div className="w-48 flex flex-col ">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1 bg-color-5 rounded-md">
              <Listbox.Button className="relative w-full cursor-pointer rounded-lg py-2 pl-3 pr-10 text-left">
                <span className="block truncate">{selected.id}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-color-1 py-1 text-base shadow-lg ring-1 ring-black/5 transparentScrollbar">
                  {dataserver.servers.map((server) => (
                    <Listbox.Option
                      key={server.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-color-5 text-amber-900' : 'text-color-3'
                        }`
                      }
                      value={server}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {server.id}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-color-2">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </article>
      <article className='flex flex-col m-4'>
        <iframe
          src={selected.url}
          allowFullScreen
          title={selected.id}
          controls
          className='aspect-video text-white'
        />
      </article>
    </section>
  )
}