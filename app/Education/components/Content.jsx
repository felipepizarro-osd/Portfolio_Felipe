import { Link } from 'lucide-react';
import React from 'react'
import { LuHospital } from "react-icons/lu";
import { Button } from "@/components/ui/button"

function Content() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 ">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto text-center">
                <div className="max-w-3xl mx-auto text-left">
                    <p className="text-base/7 font-semibold text-indigo-600">Paso por la Universidad</p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">ICCI UCN</h1>
                    <p className="mt-6 text-xl/8 text-gray-700 text-justify">Durante mi paso por la universidad, participé en diversos proyectos, actividades y desafíos que me permitieron desarrollar mis habilidades técnicas y personales. Aquí algunos de los momentos más importantes:</p>

                    <p className="mt-6 text-xl/8 text-gray-700 text-justify" >
                        El proyecto desarrollado en el <strong>Hospital San Juan de Dios de Vicuña</strong> consistió en la creación de un sistema de <strong>monitorización y optimización de indicadores</strong> del sistema de salud. El objetivo principal fue ofrecer a los gestores del hospital una herramienta eficiente para <strong>visualizar y analizar datos relevantes</strong> del servicio de salud, con el fin de tomar decisiones más informadas y mejorar la <strong>calidad del servicio</strong>.
                    </p>
                    <p className="mt-6 text-xl/8 text-gray-700 text-justify">
                        El <strong>backend</strong> del sistema fue desarrollado en <strong>Flask (Python)</strong>, utilizando una arquitectura basada en el patrón de diseño <strong>Blueprint</strong>, lo que permitió una estructura <strong>modular y escalable</strong>. Se implementó una base de datos gestionada con <strong>Firebase</strong>, lo que facilitó la <strong>autenticación de usuarios</strong> mediante cuentas de Google y proporcionó <strong>seguridad adicional</strong> con doble factor de autenticación.
                    </p>
                    <p className="mt-6 text-xl/8 text-gray-700 text-justify">
                        Para el almacenamiento de archivos relacionados con la solución, se integró <strong>Google Drive</strong> a través de la <strong>Google API</strong>, lo que permitió un acceso fácil y seguro a los documentos y reportes del sistema. Además, el sistema fue desplegado en <strong>Google Cloud Platform (GCP)</strong> utilizando <strong>Docker</strong>, asegurando su <strong>escalabilidad y disponibilidad</strong>.
                    </p>
                    <p className="mt-6 text-xl/8 text-gray-700 text-justify">
                        Este proyecto no solo permitió una mejora en la <strong>gestión y visualización de los indicadores</strong>, sino que también optimizó los <strong>procesos internos</strong> del hospital, ayudando a los profesionales de salud a tomar decisiones más <strong>rápidas y eficaces</strong> para el beneficio de los pacientes.
                    </p>

                </div>
                <img src="/image/projects/thesis.png" alt="Hospital San Juan de Dios de Vicuña" className="mt-12 w-full h-full object-cover" />
                <Button className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-10 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto" >Descargar Thesis</Button>
                <div className="max-w-3xl mx-auto text-left mt-12">
                    <h1 className='text-base/7 font-semibold text-indigo-600'>Proyecto destacado: KPI Monitoring Software San Juan de Dios Vicuña Hospital</h1>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <LuHospital className="mt-1 size-5 flex-none text-indigo-600" />
                            <span><strong className="font-semibold text-gray-900">Stack we use</strong> Google API, Flask Python, Google Drive Service, Firebase</span>
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" />
                            </svg>
                            
                            <span><strong className="font-semibold text-gray-900">Certificados y optativos: </strong>  Cyberseguridad, Cyberseguridad 2 entornos TI, Machine Learning, Desarrollos de plataformas, Integrante del club de Robotica, Parlamentario Andino en tecnologia.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Content