// Skills section logo
import htmllogo from './assets/tech/html.png';
import csslogo from './assets/tech/css.png';
import jslogo from './assets/tech/javascript.png';
import reactlogo from './assets/tech/reactjs.png';
import muilogo from './assets/tech/materialui.png';
import gitlogo from './assets/tech/github.png';
import bootlogo from './assets/tech/bootstrap.png';
import tailwindlogo from './assets/tech/tailwindcss.png';

import vscodelogo from './assets/tech/vscode.png';
import Rlogo from './assets/tech/R.svg';
import pythonlogo from './assets/tech/python.png';
import sqllogo from './assets/tech/mysql.png';

import figmalogo from './assets/tech/figma.png';
import canvalogo from './assets/tech/canva.png';
import capcutlogo from './assets/tech/capcut.png';
import adobelogo from './assets/tech/adobe.png';

import project from './assets/example.jpg';

export const SkillsInfo = [
    {
        title: "Web Development",
        skills: [
            { name: "HTML", icon: htmllogo },
            { name: "CSS", icon: csslogo },
            { name: "JavaScript", icon: jslogo },
            { name: "ReactJS", icon: reactlogo },
            { name: "Material UI", icon: muilogo },
            { name: "Bootstrap", icon: bootlogo },
            { name: "Tailwind CSS", icon: tailwindlogo },
        ],
    },
    { 
        title: "Data Science",
        skills: [
            { name: "Python", icon: pythonlogo },
            { name: "R", icon: Rlogo },
            { name: "SQL", icon: sqllogo },
        ],
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "GitHub", icon: gitlogo },
            { name: "VS Code", icon: vscodelogo },
            { name: "Figma", icon: figmalogo },
            { name: "Canva", icon: canvalogo },
            { name: "CapCut", icon: capcutlogo },
            { name: "Adobe Suite", icon: adobelogo },
        ],
    }
];

export const ProjectsInfo = [

    {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my skills and projects.",
        image: project,
        link: "google.com"
    },
    {
        title: "Children's drawings Emotions Predictor",
        description: "A machine learning model to predict children's emotions based on their drawings.",
        image: project,
        link: "google.com"
    },
    {
        title: "NBA Injury Prediction Model",
        description: "A predictive model to analyze and forecast injuries in NBA players.",
        image: project,
        link: "google.com"
    }
];
