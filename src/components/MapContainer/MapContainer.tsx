import { createContext, useEffect, useRef, useState } from "react";
import "./MapContainer.css";
import AMapLoader from "@amap/amap-jsapi-loader";
import { AMap, Map } from "../../contexts/AMapContext";

// const AMap = createContext(null);

export type CoveringMaterialType = "marker" | "polygon";

export default function MapContainer(props) {
  const map = useRef<any>(null);
  const currentAMap = useRef<any>(null);
  const [mapIsMounted, setMapIsMounted] = useState(false);

  useEffect(() => {
    AMapLoader.load({
      key: "88a65de18d4d3c202350941b1258d0f2",
      version: "2.0",
      plugins: ["AMap.MapType"],
    })
      .then((AMap) => {
        map.current = new AMap.Map("container", {
          // 设置地图容器id
          viewMode: "3D", // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [116.397428, 39.90923], // 初始化地图中心点位置
        });
        currentAMap.current = AMap;
        setMapIsMounted(true);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      map.current?.destroy();
      currentAMap.current = null;
      setMapIsMounted(false);
    };
  }, []);

  return (
    <>
      <div id="container"></div>
      <AMap.Provider value={currentAMap}>
        <Map.Provider value={map}>
          {mapIsMounted ? props.children : false}
        </Map.Provider>
      </AMap.Provider>
    </>
  );
}
