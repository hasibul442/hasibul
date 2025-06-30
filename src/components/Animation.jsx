import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

function Animation({src}) {
  return (
    <>
    <DotLottieReact
        src={src}
        autoplay
        loop
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
        renderConfig={{ autoResize: false }}
      />
    </>
  )
}

export default Animation