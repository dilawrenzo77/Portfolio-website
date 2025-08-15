import { Link } from "react-scroll";




export default function Mobile() {

    return(
        <div className=" flex flex-col items-start justify-center gap-5 py-10 px-4 h-full">
            <div className="flex flex-col items-start justify-start h-full gap-10">
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={800}>
                <span className="text-lg font-bold hover:text-muted">Projects</span>
            </Link>
             <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={800}>
                <span className="text-lg font-bold  hover:text-muted">Experience</span>
            </Link>
             <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={800}>
                <span className="text-lg font-bold hover:text-muted">Bio</span>
            </Link>
             <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={800}>
                <span className="text-lg font-bold x hover:text-muted">Contacts</span>
            </Link>
            </div>
        </div>
    )
};
