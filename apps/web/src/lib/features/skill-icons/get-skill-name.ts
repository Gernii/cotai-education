import * as m from "$i18n/messages";

import { SkillTypes } from "./constant";
export const getSkillName = (skill: SkillTypes) => {
    switch (skill) {
        case SkillTypes.python:
            return "Python";
        case "ai":
            return m.artificialintelligence();
        case "deepLearning":
            return "Deep Learning";
        case "machineLearning":
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
        case "raspberryPi":
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
        case "scikitLearn":
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
        case SkillTypes.albumentations:
            return "Albumentations";
        case SkillTypes.surprise:
            return "Surprise";
        case SkillTypes.github:
            return "Github";
        case SkillTypes.markdown:
            return "Markdown";
        case SkillTypes.latex:
            return "Latex";
        case SkillTypes.interpret:
            return "Interpret";
        case SkillTypes.xgboost:
            return "XGBoost";
        case SkillTypes.paddlepaddle:
            return "PaddlePaddle";
        case SkillTypes.mmcv:
            return "MMCV";
        case SkillTypes.onnx:
            return "ONNX";
        case SkillTypes.openvino:
            return "OpenVINO";
    }
};
