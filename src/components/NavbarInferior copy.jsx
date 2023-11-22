
import { HomeIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";


export default function NavbarInferior() {

  return (
    <nav className="fixed bottom-2 left-0 right-0 flex justify-center z-50">
      <div className="bg-color-5 h-10 w-64 rounded-md flex justify-center items-center">
        <ul className="grid grid-cols-3 grid-rows-1 gap-10">
          <li>
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>
          </li>
          <li>
            <a href="/anime/directorio"><HomeIcon></HomeIcon></a>
          </li>
          <li>
            <a href="/perfil"></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}