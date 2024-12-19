'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "./components/ui/card"
import { Heart } from 'lucide-react'

export default function ChristmasGift() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number }[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2
      }))
      setStars(newStars)
    }

    generateStars()
  }, [])

  const images = [
    { 
      src: "https://i.postimg.cc/FzR1g7NQ/Box1.png", 
      alt: "Colorfully painted box with abstract coral and purple design", 
    },
    { 
      src: "https://i.postimg.cc/RZ0G6TjP/Box2.jpg", 
      alt: "Box with intricate black and white dotted pattern", 
    },
    { 
      src: "https://i.postimg.cc/4dXYyW0y/Box3.png", 
      alt: "Natural wooden box showing original design", 
    },
    {
      src: "https://i.postimg.cc/fLSr3v04/Box4.webp",
      alt: "Box being used to store and organize trading cards",
    },
    {
      src: "https://i.postimg.cc/m2rLg8YX/Ikea-toolbox-hack.jpg",
      alt: "Box being used to store and organize trading cards",
    },
    {
      src: "https://i.postimg.cc/8cQKs1nd/Wooden-art.jpg",
      alt: "Box being used to store and organize trading cards",
    }
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#415a77] relative">
      {/* Stars background */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <main className="min-h-screen w-full relative z-10 p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in pt-8">
            <div className="inline-flex items-center space-x-2">
              <span className="text-4xl animate-pulse">🎄</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Frohe Weihnachten Schnecke<br /> und Familie Lochner <br />(◕‿◕)
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Ich will diesen Kasten mit dir anmalen, hier einige Ideen:
            </p>
          </div>

          <Card className="bg-[#1b263b]/90 backdrop-blur">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl bg-[#0d1b2a]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      } flex items-end justify-center p-4`}
                    >
                      <p className="text-white text-center text-lg font-semibold">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-white italic pb-8">
            <div className="inline-flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-500 animate-bounce" />
            </div>
            <p className="text-xl font-bold mt-2">Ohan</p>
            <p className="text-sm mt-2">PS: Ich hoffe es stört dich nicht, dass es nicht zusammengestellt ist, ich dachte es macht mehr Spaß zusammen</p>
            <p className="text-sm mt-2">PPS: Skyline Blue?</p>
          </div>
        </div>
      </main>
    </div>
  )
}