const Footer = () => {
  let currentYear = new Date().getFullYear();

  return(
   <h6>
     Upright Project: React Chat
     <br />
     ChatMeUp Copyright { currentYear } &copy;
   </h6>
  )
}

export default Footer;