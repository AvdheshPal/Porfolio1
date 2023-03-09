import React from "react";
import { MiniProjectList } from '../../data/MiniProjectsData'
import ProjectCard from '../Projects/ProjectCard/ProjectCard'



function MiniProjects() {

    return (
        <>
            <div className="ProjectWrapper" id="miniProjects" >
                <div className="Container">
                    <div className="SectionTitle" style={{ paddingTop: "3.5rem", marginTop: "5.5rem" }} >Mini Projects</div>
                        <ProjectCard items={MiniProjectList} />
                </div>
            </div>
        </>
    );
}

export default MiniProjects;

















