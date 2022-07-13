import { addHash, getColorData, invCol } from "./logic";
const { widget } = figma;
const {
  AutoLayout,
  Ellipse,
  Frame,
  Image,
  Rectangle,
  SVG,
  Text,
  usePropertyMenu,
  useSyncedState,
  useEffect,
  waitForTask,
} = widget;

// interface colorDataI {
//   hues: string[];
// }
function Widget() {
  const [hues, setHues] = useSyncedState("hues", getColorData);
  // setColorData(getColorData());
  console.log(hues.uihues[0]);

  var hue_1 = hues.uihues[0].color;
  var hue_2 = hues.uihues[1].color;
  var hue_3 = hues.uihues[2].color;
  var hue_4 = hues.uihues[3].color;

  usePropertyMenu(
    [
      {
        tooltip: "Random",
        propertyName: "random",
        itemType: "action",
      },
    ],
    (e) => {
      setHues(getColorData);

      console.log(e.propertyName);
    }
  );
  return (
    <AutoLayout
      name="uihues"
      direction="vertical"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      height="hug-contents"
      fill="#FFFFFF"
      cornerRadius={40}
      strokeWidth={6}
      padding={6}
      stroke={{
        type: "solid",
        color: "#FFFFFF",
      }}
      rotation={0}
      effect={{
        type: "drop-shadow",
        color: { r: 0, g: 0, b: 0, a: 0.2 },
        offset: { x: 0, y: 12 },
        blur: 20,
        spread: 2,
      }}
    >
      <AutoLayout
        name="hue-1"
        direction="horizontal"
        horizontalAlignItems="start"
        verticalAlignItems="center"
        spacing={"auto"}
        padding={20}
        height={72}
        width={280}
        fill={hue_1}
      >
        <Text fill={invCol(hue_1)} opacity={0.7}>
          {hue_1}
        </Text>
        <Text
          fill={invCol(hue_1)}
          opacity={0.8}
          fontSize={10}
          blendMode="overlay"
        >
          {hues.uihues[0].name}
        </Text>
      </AutoLayout>
      <AutoLayout
        name="hue-2"
        direction="horizontal"
        horizontalAlignItems="start"
        verticalAlignItems="center"
        spacing={"auto"}
        padding={20}
        height={72}
        width={280}
        fill={hue_2}
      >
        <Text fill={invCol(hue_2)} opacity={0.7}>
          {hue_2}
        </Text>
        <Text
          fill={invCol(hue_2)}
          opacity={0.8}
          fontSize={10}
          blendMode="overlay"
        >
          {hues.uihues[1].name}
        </Text>
      </AutoLayout>
      <AutoLayout
        name="hue-3"
        direction="horizontal"
        horizontalAlignItems="start"
        verticalAlignItems="center"
        spacing={"auto"}
        padding={20}
        height={72}
        width={280}
        fill={hue_3}
      >
        <Text fill={invCol(hue_3)} opacity={0.7}>
          #FF00FF
        </Text>
        <Text
          fill={invCol(hue_3)}
          opacity={0.8}
          fontSize={10}
          blendMode="overlay"
        >
          {hues.uihues[2].name}
        </Text>
      </AutoLayout>
      <AutoLayout
        name="hue-4"
        direction="horizontal"
        horizontalAlignItems="start"
        verticalAlignItems="center"
        spacing={"auto"}
        padding={20}
        height={72}
        width={280}
        fill={hue_4}
      >
        <Text fill={invCol(hue_4)} opacity={0.7}>
          {hue_4}
        </Text>
        <Text
          fill={invCol(hue_4)}
          opacity={0.8}
          fontSize={10}
          blendMode="overlay"
        >
          {hues.uihues[3].name}
        </Text>
      </AutoLayout>
      <AutoLayout
        name="footer"
        direction="vertical"
        horizontalAlignItems="center"
        verticalAlignItems="center"
        padding={20}
        height={54}
        width={280}
        fill="#FFFFFF"
      >
        <Text
          fill="#DEDEDE"
          fontWeight={800}
          fontSize={16}
          horizontalAlignText="center"
          letterSpacing={2}
          effect={{
            type: "inner-shadow",
            color: "#CACACA",
            offset: { x: 0.4, y: 0.4 },
            blur: 0,
            spread: 0,
          }}
        >
          @UIHUES
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}
widget.register(Widget);
