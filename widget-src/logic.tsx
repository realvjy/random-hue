// import { getColorName, initColors, ORIGINAL_COLORS } from "ntc-ts";
// import { harmonies, utils } from "prismaek";
import { getColorName, initColors, ORIGINAL_COLORS } from "ntc-ts";
import ColorScheme from "color-scheme";
import rgbHex from "rgb-hex";
import hexRgb from "hex-rgb";

interface ntcResult {
  hexCode: string;
  colorName: string;
  rgb: number[];
  hsl: number[];
  isExactMatch: boolean;
}

initColors(ORIGINAL_COLORS);

export function getColorData() {
  var seed = rand(360); // Max hue 0-360
  var color = new ColorScheme();
  var uihues = []; // final hues

  var newRGB = getNewColor(); //Create new Color using rand fx

  // color.from_hue(seed); // Hue 0-359 | 0 is red, 120 is green, 240 is blue.
  color.from_hex(rgbHex(newRGB.r, newRGB.g, newRGB.b)); //Using from_hex to get more varitye of base color: ;
  // console.log(newRGB);

  // Scheme tetrade | analogic | contrast | mono | triade
  // Choose between tetrade and analogic
  var variations = ["default", "hard", "soft", "pastel", "light", "pale"];
  var schemes = ["mono", "contrast", "triade", "tetrade", "analogic"];

  var sch = schemes[rand(5)]; // return 0 - 5 rand(5)
  var vari = variations[rand(6)]; // return 0 - 6

  var colors = color.scheme(sch).variation(vari);

  var hues = getColorset(sch, colors);
  if (hues) {
    uihues.push({ color: hues[0], name: getColorName(hues[0]).name });
    uihues.push({ color: hues[1], name: getColorName(hues[1]).name });
    uihues.push({ color: hues[2], name: getColorName(hues[2]).name });
    uihues.push({ color: hues[3], name: getColorName(hues[3]).name });
  } else {
    uihues.push({ color: "#CECECE", name: getColorName("#CECECE").name });
    uihues.push({ color: "#DADADA", name: getColorName("#DADADA").name });
    uihues.push({ color: "#E3E3E3", name: getColorName("#E3E3E3").name });
    uihues.push({ color: "#EDEDED", name: getColorName("#EDEDED").name });
    console.log("no color loaded");
  }
  return { uihues: uihues };
}

export function addHash(color: string) {
  return "#" + color.toUpperCase();
}

export function getNewColor() {
  var nR = rand(255);
  var nG = rand(252);
  var nB = rand(254);
  //Used lesser number because 255 was generating same values for all rgb
  return { r: nR, g: nG, b: nB };
}

export function rand(max: number) {
  var counter = 1;
  var prevrand = 0;
  var time = new Date().getTime();
  var randValue = (time / counter / (prevrand + 1)) % max;
  counter++;
  prevrand = randValue;
  return Math.floor(randValue);
}

export function invCol(hex: string) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
}

// Return color set of 4
function getColorset(scheme: string, colors: any) {
  var hues = colors.colors();
  var dataLength = hues.length;
  var huesData = [];
  // Copy with options

  switch (scheme) {
    case "analogic":
      huesData.push(addHash(hues[rand(2)]));
      huesData.push(addHash(hues[rand(6) + 2]));
      huesData.push(addHash(hues[rand(2) + 8]));
      huesData.push(addHash(hues[rand(2) + 10]));
      return huesData;
      break;

    case "tetrade":
      huesData.push(addHash(hues[0]));
      huesData.push(addHash(hues[rand(7) + 1]));
      huesData.push(addHash(hues[rand(4) + 8]));
      huesData.push(addHash(hues[rand(4) + 12]));
      return huesData;
      break;

    case "triade":
      huesData.push(addHash(hues[rand(3)]));
      huesData.push(addHash(hues[rand(3) + 3]));
      huesData.push(addHash(hues[rand(3) + 6]));
      huesData.push(addHash(hues[rand(3) + 9]));
      return huesData;
      break;

    case "contrast":
      huesData.push(addHash(hues[1]));
      huesData.push(addHash(hues[rand(2) + 2]));
      huesData.push(addHash(hues[4]));
      huesData.push(addHash(hues[rand(3) + 5]));
      return huesData;
      break;
    case "mono":
      huesData.push(addHash(hues[1]));
      huesData.push(addHash(hues[0]));
      huesData.push(addHash(hues[3]));
      huesData.push(addHash(hues[2]));
      return huesData;
      break;
    default:
      //returning grey palatte
      huesData.push("#CECECE");
      huesData.push("#DADADA");
      huesData.push("#E3E3E3");
      huesData.push("#EDEDED");
      return huesData;
      break;
  }
}

export function getHextoRGB(hexcode: string) {
  var col = hexRgb(hexcode, { format: "array" });

  return { r: col[0] / 255, g: col[1] / 255, b: col[2] / 255, a: 1 };
}
