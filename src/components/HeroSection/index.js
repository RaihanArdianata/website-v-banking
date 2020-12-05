import React,{useState} from 'react';
import Video from '../../videos/video.mp4'
import {HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)


  const onHover = () =>{
    setHover(!hover)
  }

  return (
    <HeroContainer id="home" className="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign up for a new accoun today and recive $250 in credit toward your next payment.</HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
            Get started {hover? <ArrowForward/>: <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
