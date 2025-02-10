'use client'


import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, GlobeAltIcon, ArrowDownIcon} from '@heroicons/react/24/outline'
import { FaDownload } from "react-icons/fa"
import { usePathname } from 'next/navigation'
//todo hacer que la descarga funcione con el cv en español

function classs(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
  const pathname = usePathname()
  const navigation = [
    { name: 'Home', href: '/Home', current: pathname === '/Home'  },
    { name: 'Blog', href: '/Blog', current: pathname === '/Blog'  },
    { name: 'Ideas', href: '/Ideas', current: pathname === '/Ideas'  },
    { name: 'Projects', href: '/Projects', current: pathname === '/Projects'  },
    { name: 'Science', href: '/Science', current: pathname === '/Science' },
    { name: 'Education', href: '/Education', current: pathname === '/Education'  },
    
  ]
  // Cambiamos el estado inicial a false
  const [isOpen, setIsOpen] = useState(false)
  //this is a state for know if the user is downloading the cv in spanish or english
  const [isDownloading, setIsDownloading] = useState({
    spanish: false,
    english: false
  });

  const handleDownload = async (language) => {
    try {
      // Actualizamos el estado solo para el idioma específico
      setIsDownloading(prev => ({
        ...prev,
        [language]: true
      }));

      const response = await fetch(`/api/document?type=cv-${language}`);

      if (!response.ok) {
        throw new Error('Error al descargar el archivo');
      } 
      //hacemos que la peticion http pase de binario a blob o binario inmutable para archivos
      const blob = await response.blob();
      //creamos una url temporal para la descarga este url apunta al archivo que se descargara
      const url = window.URL.createObjectURL(blob);
      //creamos un link para descargar el archivo
      const link = document.createElement('a');
      link.href = url;

      if (language === 'es') {
        link.download = 'CV_Felipe_Pizarro_ES.pdf';
      }else {
        link.download = 'CV_Felipe_Pizarro_EN.pdf';
      }

      document.body.appendChild(link);
      link.click();

      // Limpiamos la URL temporal  
      window.URL.revokeObjectURL(url);
      //removemos el link del documento
      document.body.removeChild(link);

    }catch {
      console.error('Error al descargar el archivo');
      alert('Error al descargar el archivo');
    }finally {  
      setIsDownloading(prev => ({
        ...prev,
        [language]: false
      }));
    }
  };

  // Función separada para manejar la apertura del modal
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Disclosure as="nav" className="dark:bg-slate-800 fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center justify-center">
                <span className="sr-only">C19 Software</span>
                <img
                  alt="C19 Software"
                  src="/image_6 1.png"
                  className="h-20 w-full px-7"
                  title='C19 Software'
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classs(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-6 py-6 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                onClick={handleOpenModal}
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white px-4 items-center"
              >
                <div className='flex items-center'>
                  <span className='text-gray-50 text-sm py-1 px-1'>Download CV</span>
                  <FaDownload  />
                </div>
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="/remo.png"
                      className="size-14 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Resume
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Contact Form
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classs(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* Language Selection Modal */}
      <Dialog 
        open={isOpen} 
        onClose={() => setIsOpen(false)} 
        className="relative z-[60]"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                    <ArrowDownIcon className="size-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Select Language
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please select your preferred language for the CV download .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload('en')}
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto "
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload('es')}
                  className=" inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                >
                  Spanish
                </button>
                
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}