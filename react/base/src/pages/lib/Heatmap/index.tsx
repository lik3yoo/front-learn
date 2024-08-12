import React, { useRef, useEffect } from "react"
import heatmap from "heatmap.js"

export default function Heatmap() {
  const domRef = useRef(null)
  const heatIns = useRef<any>(null)

  useEffect(() => {
    const dom = document.getElementById("heat-wrap")
    if (dom) {
      heatIns.current = heatmap.create({
        container: dom,
        radius: 20, // 每个数据点的半径
        maxOpacity: 0.7, // 热图中最高值的最大不透明度。（如果设置了不透明度，将被覆盖）
        // minOpacity: 0.2, // 热图中最低值的最小不透明度（如果设置了不透明度，将被覆盖）
        blur: 0.9, // 将应用于所有数据点的模糊因子。模糊因子越高，渐变越平滑
      })
      heatIns.current.setData({
        max: 5,
        min: 0,
        data: [{ x: "10", y: "15", value: "5" }, { x: "20", y: "20", value: "100" }]
      })
    }
  }, [])

  return (
    <div id="heat-wrap" style={{height:500, width:1000}}>
    </div>
  )
}
