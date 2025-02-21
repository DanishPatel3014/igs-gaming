"use client";
import React, { createContext, useEffect, useState } from 'react'

export const SmoothScrollContext = createContext({
  scroll: null,
})



export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null)

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default

          setScroll(
            new LocomotiveScroll({
              el: document.querySelector('#maindiv'),
              smooth: true,
              resetNativeScroll: true,
              reloadOnContextChange: true,
              getDirection: true,
              smartphone: {
                 smooth: false,
                 
                
             },
          
            })
            
          )
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`)
        }
      })()
    }

    return () => {
      scroll && scroll.destroy()
    }
  }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

  return <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'
