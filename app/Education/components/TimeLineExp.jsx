import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function TimeLineExp() {


  const items = [
    {
      img: "https://www.nostalgica.cl/wp-content/uploads/2025/01/Foto_UCN_Contenido_RRSS-1024x593.jpg",
      leyenda: "Leyenda 1: Algo de la universidad",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLl88hwuRDKbjA-zrgsonsM6cwpclQiRyusNdX35U2YIFfh29Xa3lmI6RjpxzkxUIZI8A&usqp=CAU",
      leyenda: "Leyenda 2: Otra cosa de la universidad",
    }
    // Puedes agregar más objetos según sea necesario
  ];

  return (
    <div className="bg-white mt-16 flex justify-center items-center min-h-[100px]">
      <Carousel className="w-full max-w-4xl mx-auto px-4  ">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-1">
                    <img
                      src={item.img}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-auto mb-4"
                    />
                    <span className="text-lg font-semibold">{item.leyenda}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious  />
        <CarouselNext  />
      </Carousel>
    </div>
  )
}

export default TimeLineExp