<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import * as echarts from "echarts/core";
    import type { ECharts } from "echarts/core";
    import { TooltipComponent, LegendComponent } from "echarts/components";
    import { PieChart } from "echarts/charts";
    import { LabelLayout } from "echarts/features";
    import { CanvasRenderer } from "echarts/renderers";
    import type { ECBasicOption } from "echarts/types/dist/shared";

    import { getSelectedIdContext } from "./context";
    import { handleColorRGBA } from "./helpers";

    import { dataCamDifference } from "$lib/datas/cam-difference/cam-difference";
    import type { CamDifferenceIds } from "$lib/datas/cam-difference/types";

    let windowResizeTimeout: number | undefined = undefined;

    echarts.use([
        TooltipComponent,
        LegendComponent,
        PieChart,
        CanvasRenderer,
        LabelLayout,
    ]);

    let selectedIdContext = getSelectedIdContext();

    let chartRef: HTMLDivElement | undefined = undefined;
    let echartRef: ECharts | undefined = undefined;

    let isFirstLoad = true;

    let options: ECBasicOption = {
        color: handleColorRGBA(dataCamDifference["1"].color, 80),
        series: [
            {
                colorBy: "series",
                type: "pie",
                radius: ["5%", "70%"],
                itemStyle: {
                    borderRadius: 10,
                    borderWidth: 2,

                    borderColor: handleColorRGBA(
                        dataCamDifference["1"].color,
                        100,
                    ),
                },
                label: {
                    show: false,
                },
                minAngle: 4,
                padAngle: 3,
                selectedMode: true,
                data: Object.keys(dataCamDifference).map((id) => {
                    return {
                        value: 1,
                        name: id,
                    };
                }),
            },
        ],
    };

    const initChart = async () => {
        if (!chartRef) {
            return;
        }

        echartRef = echarts.init(chartRef);

        echartRef.on("finished", () => {
            if (!isFirstLoad) {
                return;
            }
            isFirstLoad = false;

            setTimeout(() => {
                onChange("1");
            }, 200);
        });

        echartRef.on("click", ({ name }) => {
            onChange(name as CamDifferenceIds);
            selectedIdContext.set(name as CamDifferenceIds);
        });

        echartRef.setOption(options);
    };

    const onChange = (name: CamDifferenceIds) => {
        if (name === undefined) {
            echartRef?.dispatchAction({
                type: "toggleSelect",
            });

            return;
        }
        echartRef?.dispatchAction({
            type: "select",
            name,
        });

        echartRef?.setOption({
            color: [handleColorRGBA(dataCamDifference[name].color, 80)],
            series: [
                {
                    itemStyle: {
                        borderColor: handleColorRGBA(
                            dataCamDifference[name].color,
                            100,
                        ),
                    },
                },
            ],
        });
    };

    selectedIdContext.subscribe((value) => {
        onChange(value);
    });

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
