import logo from './logo.png';


const NAV_ELEMENTS = [
  {
    type: "logo",
    text: "Raven Rock Software",
    icon: logo
  },
  {
    type: "link",
    text: "Home",
    href: "#"
  },
  {
    type: "dropdown",
    text: "Products",
    links: [
      {
        text: "ConsumerSoft Trader",
        href: "#"
      },
      {
        text: "Options Analyzer",
        href: "#",
      },
      {
        text: "Briskbooks Budgeting",
        href: "#",
      },
      {
        text: "Slicken Money Manager",
        href: "#"
      }
    ]
  },
  {
    type: "link",
    text: "Our Story",
    href: "#"
  },
  {
    type: "link",
    text: "Contact Us",
    href: "#"
  }
]

export default NAV_ELEMENTS;