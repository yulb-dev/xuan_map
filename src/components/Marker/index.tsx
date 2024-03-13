import { useAMap, useMap } from "@/contexts/AMapContext";
import markerIcon from "@/images/map_marker.png";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { CoveringMaterialType } from "../MapContainer/MapContainer";

export type ActionType = "position" | string;
export type MarkerPosition = [number, number];

export interface MarkerType {
  type: CoveringMaterialType;
  position: MarkerPosition;
  icon?: string;
  extData?: any;
}

export interface MarkerProps {
  data: MarkerType;
  onChange: (e: any) => void;
}

const Marker = forwardRef(function Marker(props: MarkerProps, ref: any) {
  const AMap = useAMap();
  const map = useMap();
  const selfMarker = useRef<any>();

  function handleClick(e: any) {
    e.target.setDraggable(true);
  }

  useImperativeHandle(
    ref,
    () => {
      return selfMarker;
    },
    []
  );
  useMemo(() => selfMarker.current?.setOptions(props.data), [props.data]);
  useEffect(() => {
    let marker: any;

    selfMarker.current = marker = new AMap.current.Marker({
      ...props.data,
      icon: markerIcon,
      anchor: "bottom-center",
      //   content: "<div>nihao</div>",
    });
    marker.on("click", handleClick);
    marker.on("dragend", props.onChange);

    map.current.add(marker);
    return () => selfMarker.current?.remove();
  }, []);
  return null;
});

export default Marker;

export function useMarkersComponent(
  markerList: MarkerType[],
  setMarkerList: (data: MarkerType[]) => void
) {
  const markersRef = useRef<any>();
  function handleChange(data: any, i: number) {
    const prevOptions = data.target.getOptions();
    const newMarkerList = [...markerList];
    newMarkerList[i] = { ...prevOptions, position: data.pos };
    setMarkerList(newMarkerList);
  }
  const result = useMemo(
    () =>
      markerList.map((item, i) => (
        <Marker
          ref={markersRef}
          key={item.extData.id}
          data={item}
          onChange={(e) => {
            handleChange(e, i);
          }}
        />
      )),
    markerList
  );
  return <>{result}</>;
}
