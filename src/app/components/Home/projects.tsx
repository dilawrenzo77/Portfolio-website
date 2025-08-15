import ProjectCard from "../projectCard";
import ProjectCard2 from "../projectCard2";
import Web2Projects from "@/lib/web2Projects";
import Web3Projects from "@/lib/web3Projects";

//shadcn imports
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Projects() {
    return(
        <div id="projects" className="flex flex-col items-center justify-center gap-8 w-full py-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-2xl font-semibold tracking-widest lg:text-4xl">Top Projects</p>
            <div className="px-4 flex flex-wrap justify-center items-start gap-5 w-full mx-auto">
                {Web2Projects.map((item) => {
                    return(
                        <Tooltip key={item.projectId}>
                            <TooltipTrigger>
                                <ProjectCard key={item.projectId} data={item}/>
                            </TooltipTrigger>
                            <TooltipContent className="bg-background"><p className="text-xs text-black dark:text-white">Click to view Project</p></TooltipContent>
                        </Tooltip>
                    )
                })}
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-2xl tracking-widest font-semibold lg:text-4xl">Top Web3 Projects</p>
            <div className="px-4 flex flex-wrap justify-center items-start gap-5 mx-auto">
                {Web3Projects.map((item) => {
                    return(
                    <Tooltip key={item.projectId}>
                            <TooltipTrigger>
                                <ProjectCard2 key={item.projectId} data={item}/>
                            </TooltipTrigger>
                            <TooltipContent className="bg-background"><p className="text-xs text-black dark:text-white">Click to view Project</p></TooltipContent>
                        </Tooltip>)
                })}
            </div>
        </div>

    </div>
)
};
