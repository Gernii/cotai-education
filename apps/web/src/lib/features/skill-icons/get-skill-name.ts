import * as m from "$i18n/messages";

import type { SkillTypes } from "./constant";
export const getSkillName = (skill: SkillTypes) => {
    switch (skill) {
        case "python":
            return "Python";
        case "ai":
            return m.artificialintelligence();
        case "deep-learning":
            return "Deep Learning";
        case "machine-learning":
            return "Machine Learning";
        case "anaconda":
            return "Anaconda";
        case "docker":
            return "Docker";
        case "javascript":
            return "Javascript";
        case "math":
            return m.math();
        case "pytorch":
            return "Pytorch";
        case "raspberry-pi":
            return "Raspberry Pi";
        case "streamlit":
            return "Streamlit";
        case "tensorflow":
            return "Tensorflow";
        case "opencv":
            return "OpenCV";
        case "pillow":
            return "Pillow";
        case "numpy":
            return "Numpy";
        case "matplotlib":
            return "Matplotlib";
        case "plotly":
            return "Plotly";
        case "keras":
            return "Keras";
        case "pandas":
            return "Pandas";
        case "scikit-learn":
            return "Scikit-learn";
        case "mmdetection":
            return "MMDetection";
        case "torchmetrics":
            return "TorchMetrics";
        case "torchseg":
            return "Torch Segmentation Models";
        case "timm":
            return "Timm";
        case "transformers":
            return "Transformers";
    }
};
