// import { getColorName, initColors, ORIGINAL_COLORS } from "ntc-ts";
// import { harmonies, utils } from "prismaek";
import { getColorName, initColors, ORIGINAL_COLORS } from "ntc-ts";
import ColorScheme from "color-scheme";
import rgbHex from "rgb-hex";

interface ntcResult {
  hexCode: string;
  colorName: string;
  rgb: number[];
  hsl: number[];
  isExactMatch: boolean;
}

initColors(ORIGINAL_COLORS);

export function getColorData() {
  var seed = rand(359); // Max hue 0-350
  var color = new ColorScheme();
  color.from_hue(seed); // Hue 0-359 | 0 is red, 120 is green, 240 is blue.

  // Scheme tetrade | analogic | contrast | mono | triade
  // Choose between tetrade and analogic
  var choose = seed % 2 === 0 ? "analogic" : "tetrade";

  var colors = color.scheme(choose);
  var colorset = colors.colors();

  var dataLength = colorset.length;

  var hue_1 = addHash(colorset[0]);
  var hue_2 = addHash(colorset[rand(8) + 1]);
  var hue_3 = addHash(colorset[10]);
  var hue_4 = addHash(colorset[dataLength - 1]);

  var uihues = [];
  uihues.push({ color: hue_1, name: getColorName(hue_1).name });
  uihues.push({ color: hue_2, name: getColorName(hue_2).name });
  uihues.push({ color: hue_3, name: getColorName(hue_3).name });
  uihues.push({ color: hue_4, name: getColorName(hue_4).name });

  return { uihues: uihues };
  // console.log(color01.name);
  // console.log(rand(255));
  // return hex;
}

export function addHash(color: string) {
  return "#" + color.toUpperCase();
}

export function getNewColor() {
  var nR = rand(255);
  var nG = rand(255);
  var nB = rand(255);

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
