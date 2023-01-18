import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// prettier-ignore
export const Image = styled.div.attrs(({$movedX, $movedY}) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`
  }
}))`
  background-image: url('./images/image1.jpeg');
  background-size: 400px 600px;
  height: 100px;
  width: 100px;
  position: relative;
  background-position: ${({ $initialX, $initialY }) => `-${$initialX * 100}px -${$initialY * 100}px`};
`

const ImgBox = ({ x, y, percent }) => {
  const [position, setPosition] = useState([0, 0])

  useEffect(() => {
    // 400 este latimea imaginii si 50 este jumatate din cub mic
    setPosition([Math.random() * 400 - 50, Math.random() * 600 - y * 100 - 50])
    // Porneste doar daca x,y se schimba (astea de jos)
  }, [x, y])

  // console.log(position)

  return (
    <Image
      $initialX={x}
      $initialY={y}
      $movedX={position[0] * percent}
      $movedY={position[1] * percent}
    />
  )
}

export default ImgBox
