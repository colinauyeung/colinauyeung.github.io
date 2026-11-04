import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import GradCourses from "./data/GradCourses.json"
import ProjectGroup from './components/ProjectGroup.jsx'

import PageCore from './components/PageCore.jsx'


let contents = <ProjectGroup 
      Projects={GradCourses}
      Title={"Grad Courses"}
    />


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <PageCore
      Contents={contents}
    
    /> */}
    {/* <ProjectGroup 
      Projects={GradCourses}
      Title={"Grad Courses"}
    /> */}
  </StrictMode>,
)
