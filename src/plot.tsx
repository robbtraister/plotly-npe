import PlotlyPlot from "react-plotly.js";

export function Plot() {
  return (
    <PlotlyPlot
      config={{
        responsive: true,
      }}
      data={[
        {
          type: "pie",
          values: [1, 2, 3],
          text: ["one", "two", "three"],
          textinfo: "none",
        },
      ]}
      layout={{
        autosize: true,
      }}
      style={{ width: "100vw", height: "100vh" }}
      useResizeHandler
    />
  );
}
