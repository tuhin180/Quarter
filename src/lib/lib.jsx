import {
  emailIcon,
  fbIcon,
  heartIcon,
  homeIcon,
  locationIcon,
  playIcon,
  SearchIcon,
  twitterIcon,
  UserIcon,
  ViteIcon,
} from "./iconProvider";

export const headerData = [
  {
    id: 1,
    fillColor: "#ffffff",
    iconWidth: 20,
    iconHeight: 20,
    icons: function () {
      return locationIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
    text: "254 Lillian Blvd, Holbrook",
  },
  {
    id: 2,
    fillColor: "#ffffff",
    iconHeight: 20,
    iconWidth: 20,
    icons: function () {
      return emailIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
    text: "info@santizex-site.com",
  },
];

// heder social icon

export const socialData = [
  {
    id: 1,
    fillColor: "#ffffff",
    iconWidth: 20,
    iconHeight: 20,
    icons: function () {
      return fbIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
  },
  {
    id: 2,
    fillColor: "#ffffff",
    iconWidth: 20,
    iconHeight: 20,
    icons: function () {
      return twitterIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
  },
  {
    id: 3,
    fillColor: "#ffffff",
    iconWidth: 20,
    iconHeight: 20,
    icons: function () {
      return ViteIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
  },
];

// menues item
export const menu = [
  {
    id: 1,
    items: "Home",
    link: "/",
  },
  {
    id: 2,
    items: "Properties",
    link: "/properties",
  },
  {
    id: 3,
    items: "Property",
    link: "/Property",
  },
  {
    id: 4,
    items: "Blog",
    link: "/Blog",
  },
  {
    id: 5,
    items: "Pages",
    link: "/Pages",
  },
  {
    id: 6,
    items: "Contact",
    link: "/Contact",
  },
];

// menu icons
export const menuIcon = [
  {
    id: 1,
    fillColor: "#000000",
    iconWidth: 20,
    iconHeight: 20,
    link: "/",
    icons: function () {
      return UserIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
  },
  {
    id: 2,
    fillColor: "#000000",
    iconWidth: 20,
    iconHeight: 20,
    link: "/",
    icons: function () {
      return heartIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
  },
  {
    id: 3,
    fillColor: "#000000",
    iconWidth: 20,
    iconHeight: 20,
    link: "/",
    icons: function () {
      return SearchIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
  },
];

// banner slider
export const slides = [
  {
    id: 1,
    img: "../../public/banner.png",
    subHeading: "Real Estate Agency",
    heading: "Find Your Dream House By Us",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    fillColor: "#ffffff",
    iconWidth: 30,
    iconHeight: 30,
    icons: function () {
      return homeIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
    playIcons: function () {
      return playIcon(this.fillColor, this.iconWidth, this.iconHeight);
    },
  },
  {
    id: 2,
    img: "../../public/banner.png",
    subHeading: "Real Estate Agency",
    heading: "Find Your Dream House By Us",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    fillColor: "#ffffff",
    iconWidth: 30,
    iconHeight: 30,
    icons: function () {
      return homeIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
    playIcons: function () {
      return playIcon(this.fillColor, this.iconWidth, this.iconHeight);
    },
  },
  {
    id: 3,
    img: "../../public/banner.png",
    subHeading: "Real Estate Agency",
    heading: "Find Your Dream House By Us",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    fillColor: "#ffffff",
    iconWidth: 30,
    iconHeight: 30,
    icons: function () {
      return homeIcon(this.fillColor, this.iconHeight, this.iconWidth);
    },
    playIcons: function () {
      return playIcon(this.fillColor, this.iconWidth, this.iconHeight);
    },
  },
];
