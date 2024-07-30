<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import * as echarts from "echarts/core";
    import type { ECharts } from "echarts/core";
    import {
        GridComponent,
        MarkLineComponent,
        MarkPointComponent,
    } from "echarts/components";
    import { LineChart } from "echarts/charts";
    import { UniversalTransition } from "echarts/features";
    import { CanvasRenderer } from "echarts/renderers";
    import type { ECBasicOption } from "echarts/types/dist/shared";

    let windowResizeTimeout: number | undefined = undefined;

    echarts.use([
        GridComponent,
        MarkPointComponent,
        MarkLineComponent,
        LineChart,
        CanvasRenderer,
        UniversalTransition,
    ]);

    let chartRef: HTMLDivElement | undefined = undefined;
    let echartRef: ECharts | undefined = undefined;

    let options: ECBasicOption = {
        color: "#03acfc",
        grid: {
            top: 40,
            bottom: 30,
            left: 45,
        },
        xAxis: {
            type: "category",
            data: [0, 20, 40, 60, 80, 100],
            boundaryGap: false,
            name: "% time",
            nameLocation: "middle",

            nameGap: 20,
        },
        yAxis: {
            type: "value",
            name: "% expertise",
        },
        series: [
            {
                data: [0, 80, null, null, null, 97],
                type: "line",
                smooth: true,
                symbolSize: 15,
                connectNulls: true,
                markLine: {
                    data: [
                        [
                            {
                                coord: [1, 1],
                            },
                            {
                                symbol: "none",
                                coord: [1, 100],
                            },
                        ],
                    ],
                },
                markPoint: {
                    data: [
                        {
                            name: "80/20",
                            value: "80/20",
                            xAxis: 1,
                            yAxis: 80,
                            symbol: "roundRect",
                            symbolOffset: ["70%", "50%"],
                        },
                    ],
                },
            },
        ],
    };

    const initChart = async () => {
        if (!chartRef) {
            return;
        }

        echartRef = echarts.init(chartRef);

        echartRef.setOption(options);
    };

    const onWindowResize = () => {
        if (windowResizeTimeout) {
            window.clearTimeout(windowResizeTimeout);
        }
        windowResizeTimeout = window.setTimeout(() => {
            echartRef?.resize();
        }, 500);
    };

    onMount(() => {
        initChart();
    });

    onDestroy(() => {
        if (!echartRef) {
            return;
        }
        echarts.dispose(echartRef);
    });
</script>

<svelte:window on:resize={onWindowResize} />

<div class="h-full w-full" bind:this={chartRef}></div>
