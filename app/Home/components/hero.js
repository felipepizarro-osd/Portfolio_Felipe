'use client'
import React from 'react'
import {  Code, Cpu, Computer } from 'lucide-react'

export default function Hero() {
  return (
    <div className="bg-white mt-16 relative overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute top-0 right-0 opacity-50 animate-float">
        <Cpu 
          className="text-blue-500 w-16 h-16 mr-20 mt-10 rotate-12" 
        />
      </div>
      <div className="absolute bottom-0 left-0 opacity-50 animate-float-slow">
        <Code 
          className="text-green-500 w-20 h-20 ml-10 mb-20 -rotate-12" 
        />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-40 animate-float-reverse">
        <Computer 
          className="text-purple-500 w-14 h-14 rotate-6" 
        />
      </div>

      {/* Existing Hero Content */}
      <div className="relative isolate px-6 pt-1 lg:px-8">
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath: 
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-2xl py-10 sm:py-16 lg:py-30">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl animate-fade-in">
              Technology is best when it brings people together
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 animate-slide-in-right">
              Hi, I&apos;m Felipe, a Civil Engineer in Computer Science, Developer and more bases in Ovalle, Chile
            </p>
            
            {/* Animated Icons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="flex items-center space-x-4">
                <Computer 
                  className="text-red-500 w-8 h-8 animate-bounce" 
                />
                <Cpu 
                  className="text-blue-500 w-8 h-8 animate-pulse" 
                />
                <Code 
                  className="text-green-500 w-8 h-8 animate-spin" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath: 
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}