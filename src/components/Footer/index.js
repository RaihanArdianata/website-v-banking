import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIconLink, SocialIcons, SocialLogo} from './FooterElements';
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Term of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/signin">Contact</FooterLink>
                <FooterLink to="/signin">Support</FooterLink>
                <FooterLink to="/signin">Destinations</FooterLink>
                <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/signin">Submit Video</FooterLink>
                <FooterLink to="/signin">Ambassadors</FooterLink>
                <FooterLink to="/signin">Agency</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Youtube</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Dolla</SocialLogo>
            <WebsiteRights>raihan @ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial-label='facebook'><FaFacebook/></SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label='facebook'><FaInstagram/></SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label='facebook'><FaYoutube/></SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label='facebook'><FaTwitter/></SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label='facebook'><FaLinkedin/></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer