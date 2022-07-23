import Hues from "./hues";
import { getColorData, invCol } from "./logic";
import UIhues from "./uihues";
const { widget } = figma;
const { AutoLayout, Text, usePropertyMenu, useSyncedState } = widget;

function Widget() {
  return <UIhues />;
}
widget.register(Widget);
