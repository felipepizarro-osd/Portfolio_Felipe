'use client'
import React from 'react'

function Education_files() {
    return (
        <div className="bg-white py-5 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Título y párrafos */}
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Documentos y Archivos</h2>
                    <p className="mt-3 text-lg text-gray-500">
                        Aquí encontrarás los archivos disponibles para descargar. Selecciona el que necesites y haz clic en el botón correspondiente.
                    </p>
                </div>

                {/* Botones de descarga con imágenes y leyendas */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Botón 1 */}
                    <div className="text-center">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <img
                                className="mx-auto h-48 w-full object-cover rounded-md"
                                src="https://via.placeholder.com/300x200" // Imagen de ejemplo (screenshot)
                                alt="Screenshot del archivo 1"
                            />
                            <p className="mt-4 text-sm text-gray-700"></p>
                            <button
                                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                onClick={() => alert("Descargando archivo_ejemplo_1.pdf")}
                            >
                                Descargar
                            </button>
                        </div>
                    </div>

                    {/* Botón 2 */}
                    <div className="text-center">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <img
                                className="mx-auto h-48 w-full object-cover rounded-md"
                                src="https://via.placeholder.com/300x200" // Imagen de ejemplo (screenshot)
                                alt="Screenshot del archivo 2"
                            />
                            <p className="mt-4 text-sm text-gray-700">archivo_ejemplo_2.pdf</p>
                            <button
                                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                onClick={() => alert("Descargando archivo_ejemplo_2.pdf")}
                            >
                                Descargar
                            </button>
                        </div>
                    </div>

                    {/* Botón 3 */}
                    <div className="text-center">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <img
                                className="mx-auto h-48 w-full object-cover rounded-md"
                                src="https://via.placeholder.com/300x200" // Imagen de ejemplo (screenshot)
                                alt="Screenshot del archivo 3"
                            />
                            <p className="mt-4 text-sm text-gray-700">archivo_ejemplo_3.pdf</p>
                            <button
                                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                onClick={() => alert("Descargando archivo_ejemplo_3.pdf")}
                            >
                                Descargar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education_files;

