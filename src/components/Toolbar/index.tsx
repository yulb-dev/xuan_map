import { useAMap, useMap } from "@/contexts/AMapContext";
import "./index.scss";
import { useEffect } from "react";

export default function Toolbar() {
  const AMap = useAMap();
  const map = useMap();
  useEffect(() => {
    console.log("AMap.current.MapType", AMap.current);

    var type = new AMap.current.MapType({
      defaultType: 1,
    });
    type.hide();
    map.current.addControl(type);
  }, []);
  return <div id="toolbar">nihao</div>;
}
