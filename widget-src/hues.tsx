//Version 1 - Hues only
// 14 July, 2022
const { widget } = figma;
const { AutoLayout, Text, usePropertyMenu, useSyncedState } = widget;
import { getColorData, invCol } from "./logic";

const Hues = () => {
  const [hues, setHues] = useSyncedState("hues", getColorData);

  var hue_1 = hues.uihues[0].color;
  var hue_2 = hues.uihues[1].color;
  var hue_3 = hues.uihues[2].color;
  var hue_4 = hues.uihues[3].color;
  console.log("inside hyues");
  usePropertyMenu(
    [
      {
        tooltip: "Random",
        propertyName: "random",
        itemType: "action",
      },
    ],
    (e) => {
      setHues(getColorData); //change color hues
    }
  );
  return (
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
            // // figma.showUI(__html__, {
            // //   visible: true,
            // //   width: 0,
            // //   height: 0,
            // //   position: { x: 1000, y: 1000 },
            // // });
            // figma.showUI(`
            //   <script>
            //     window.onload=function(){
            //       doc = document.getElementsByTagName('body')
            //       console.log('inside log')
            //     }
            //     async function copyImage(url) {
            //       if(null==document.body){
            //         // document.body = $('body')[0];
            //         doc = document.getElementsByTagName('body')
            //         console.log(doc[0])
            //       }
            //       // text area method
            //           let textArea = document.createElement("textarea");
            //           textArea.value = url;
            //           // make the textarea out of viewport
            //           textArea.style.position = "fixed";
            //           textArea.style.left = "-999999px";
            //           textArea.style.top = "-999999px";
            //           document.body.appendChild(textArea);
            //           textArea.focus();
            //           textArea.select();
            //     }
            //   console.log(copyImage('https://www.overlayz.studio/_next/static/media/3dicons.bd108537.png'))
            //     console.log('somthing')
            //   </script>`);
            // figma.ui.postMessage(hue_1);
            // setTimeout(() => {
            //   resolve(null);
            // }, 100);
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
  );
};

export default Hues;
