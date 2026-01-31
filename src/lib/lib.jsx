import {
  emailIcon,
  fbIcon,
  locationIcon,
  twitterIcon,
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
export const menus = [
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

// menue icons
export const menuesIcont = [
  {
    id: 1,
    fillColor: "#ffffff",
    iconWidth: 20,
    iconHeight: 20,
    icons: function () {
      return;
    },
  },
];
