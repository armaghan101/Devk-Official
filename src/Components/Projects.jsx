    import React from "react";
    import ProjectCard from "./ProjectCard";
    import p1 from "../assets/devk assets/p1.png";

    function Projects() {
    return (
        <>
        <div className="projects space-y-10">
            <div className="project1">
            <ProjectCard
                img={p1}
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                reprehenderit libero! Neque quisquam, asperiores similique omnis,
                nisi soluta dignissimos debitis nobis odit doloribus sit odio
                voluptatum velit non necessitatibus aliquid veniam minus sapiente
                sequi temporibus maxime. Modi officia praesentium accusamus cumque.
                Eligendi dignissimos corporis, modi minima laborum ab vero beatae."
                fw1="React"
                fw2="Tailwind"
                fw3="Figma"
            />
            </div>
            <div className="project2">
            <ProjectCard
                reverse
                img={p1}
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                reprehenderit libero! Neque quisquam, asperiores similique omnis,
                nisi soluta dignissimos debitis nobis odit doloribus sit odio
                voluptatum velit non necessitatibus aliquid veniam minus sapiente
                sequi temporibus maxime. Modi officia praesentium accusamus cumque.
                Eligendi dignissimos corporis, modi minima laborum ab vero beatae."
                fw1="React"
                fw2="Tailwind"
                fw3="Figma"
            />
            </div>
            <div className="project3">
            <ProjectCard
                img={p1}
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                reprehenderit libero! Neque quisquam, asperiores similique omnis,
                nisi soluta dignissimos debitis nobis odit doloribus sit odio
                voluptatum velit non necessitatibus aliquid veniam minus sapiente
                sequi temporibus maxime. Modi officia praesentium accusamus cumque.
                Eligendi dignissimos corporis, modi minima laborum ab vero beatae."
                fw1="React"
                fw2="Tailwind"
                fw3="Figma"
            />
            </div>
        </div>
        </>
    );
    }

    export default Projects;
