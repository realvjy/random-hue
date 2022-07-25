const { widget } = figma;
const {
  AutoLayout,
  Text,
  usePropertyMenu,
  useSyncedState,
  useEffect,
  Ellipse,
  SVG,
} = widget;
import { getColorData, invCol, getHextoRGB, rand } from "./logic";
import hexRgb from "hex-rgb";

const UIhues = () => {
  const [hues, setHues] = useSyncedState("hues", getColorData);

  var hue_1 = hues.uihues[0].color;
  var hue_2 = hues.uihues[1].color;
  var hue_3 = hues.uihues[2].color;
  var hue_4 = hues.uihues[3].color;

  var grad_hue_1 = hues.uihues[0].color;
  var grad_hue_2 = hues.uihues[rand(3) + 1].color;
  var grad_1 = getHextoRGB(grad_hue_1);
  var grad_2 = getHextoRGB(grad_hue_2);

  const [color, setColor] = useSyncedState("theme", "#e06666");
  const [rhue, setRhue] = useSyncedState("grad", "hue");
  const hueOptions = [
    { option: "hue", label: "Hues" },
    { option: "grad", label: "Gradients" },
  ];

  // Testing for Clipboard
  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === "show") {
        figma.notify("Hello widget");
      }
      if (msg.type === "close") {
        figma.closePlugin();
      }
    };
  });

  usePropertyMenu(
    [
      {
        itemType: "action",
        tooltip: "Random",
        propertyName: "random",
      },
      {
        itemType: "separator",
      },
      {
        itemType: "dropdown",
        propertyName: "rhues",
        tooltip: "Type selector",
        selectedOption: rhue,
        options: hueOptions,
      },
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === "random") {
        setHues(getColorData); //change color hues
      } else if (propertyName === "rhues") {
        //@ts-ignore
        setRhue(propertyValue);
      } else if (propertyName === "action") {
        // console.log(propertyName);
      }
    }
  );
  // Test for dropdown hue or gradient
  return rhue === "hue" ? (
    <AutoLayout
      name="uihues"
      direction="vertical"
      fill="#FFFFFF"
      cornerRadius={40}
      strokeWidth={6}
      padding={6}
      stroke={{
        type: "solid",
        color: "#000000",
      }}
      rotation={0}
      effect={{
        type: "drop-shadow",
        color: { r: 0, g: 0, b: 0, a: 1 },
        offset: { x: 5, y: 8 },
        blur: 0,
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
        // Trying solve for copy on click
        onClick={(e) => {
          return new Promise((resolve) => {
            figma.showUI(__html__, { visible: true, width: 0, height: 0 });
            figma.ui.postMessage(hue_1);
            setTimeout(() => {
              resolve(null);
            }, 100);
          });
        }}
      >
        <Text fill={invCol(hue_1)} opacity={0.7}>
          {hue_1}
        </Text>
        <Text
          fill={invCol(hue_1)}
          opacity={0.8}
          fontSize={11}
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
          fontSize={11}
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
          {hue_3}
        </Text>
        <Text
          fill={invCol(hue_3)}
          opacity={0.8}
          fontSize={11}
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
          fontSize={11}
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
  ) : (
    <AutoLayout
      name="uihues"
      direction="vertical"
      fill="#FFFFFF"
      cornerRadius={40}
      strokeWidth={6}
      padding={6}
      stroke={{
        type: "solid",
        color: "#000000",
      }}
      rotation={0}
      effect={{
        type: "drop-shadow",
        color: { r: 0, g: 0, b: 0, a: 1 },
        offset: { x: 5, y: 8 },
        blur: 0,
        spread: 2,
      }}
    >
      <AutoLayout
        name="gradients"
        direction="horizontal"
        horizontalAlignItems="start"
        verticalAlignItems="center"
        spacing={"auto"}
        height={288}
        width={280}
        fill={{
          type: "gradient-linear",
          gradientHandlePositions: [
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: 2, y: 1 },
          ],
          gradientStops: [
            { position: 0, color: grad_1 },
            { position: 1, color: grad_2 },
          ],
        }}
      >
        <AutoLayout
          name="info"
          direction="horizontal"
          horizontalAlignItems="start"
          verticalAlignItems="end"
          spacing={"auto"}
          padding={20}
          height={288}
          width={280}
        >
          <AutoLayout
            name="code"
            direction="horizontal"
            horizontalAlignItems="start"
            verticalAlignItems="center"
            spacing={24}
          >
            <AutoLayout
              name="code1"
              direction="horizontal"
              horizontalAlignItems="start"
              verticalAlignItems="center"
              spacing={6}
            >
              <Ellipse
                width={16}
                height={16}
                fill={grad_hue_1}
                stroke={{
                  type: "solid",
                  color: { r: 0, g: 0, b: 0, a: 0.2 },
                }}
              />
              <Text fill={invCol(grad_hue_2)} opacity={0.8}>
                {grad_hue_1}
              </Text>
            </AutoLayout>
            <AutoLayout
              name="code2"
              direction="horizontal"
              horizontalAlignItems="start"
              verticalAlignItems="center"
              spacing={6}
            >
              <Ellipse
                width={16}
                height={16}
                fill={grad_hue_2}
                stroke={{
                  type: "solid",
                  color: { r: 0, g: 0, b: 0, a: 0.2 },
                }}
              />
              <Text fill={invCol(grad_hue_2)} opacity={0.8}>
                {grad_hue_2}
              </Text>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
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
};

export default UIhues;
