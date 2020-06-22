import diets from '../assets/images/projects/diets.svg'
import cars from '../assets/images/projects/cars.svg'

export default [
    {
        id: 1,
        title: "Preferences and consequences of diets",
        icon: diets,
        description: "Analysis of the indirect and hidden ways a diet can affect the way we eat. We have used for this more than half a million recipes, basing our analysis on the correlation between ingredients and the healthiness of them. We also present a search tool for finding information about specific ingredients and their relation to others. This project is specifically useful for allergies or intolerances. In the second year of master's at EPFL university.",
        githubPath: "https://github.com/carlosvillasanchez/Salmon-tortilla-al-pesto",
        demoPath: "https://tormey97.github.io/food-datastory/",
        year: "2019",
        techUsed: "Python, Jupyter Notebook, Pandas, Machine Learning, React"
    },
    {
      id: 2,
      title: "Simulation of a Decentralized Network of Autonomous Cars",
      description: "We have developed a simulation of autonomous cars that move around a map communicating with each other to avoid crashes and announce events. Each car is a real node of a decentralized system that uses a 3 layer protocol for their communication in order to avoid overflooding the whole network. The project is developed in Go with a user interface in ReactJS where the nodes can launch and managed.",
      icon: cars,
      githubPath: "https://github.com/carlosvillasanchez/decentralized-car-network",
      demoPath: null,
      year: "2019/2020",
      techUsed: "Go, React"
    },
]
