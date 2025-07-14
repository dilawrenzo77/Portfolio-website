export default function Experience() {
    return(<div id="experience" className="flex flex-col items-center md:items-start justify-center gap-4 w-[70%]">
        <p className="text-xl font-semibold lg:text-2xl tracking-widest mt-5">Experience</p>
            <div className="border-b-4 border-double w-full flex flex-col items-start justify-center gap-2 px-2 py-1">
                <p className="text-sm font-semibold">Web Developer</p>
                <p className="text-xs">Freelance(Self-employed)</p>
                <p className="text-[0.5rem]">2024-present</p>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <p className="text-[0.5rem]">Designed and built responsive, mobile friendly websites using HTML5, CSS3 and javascript for small businesses and personal projects</p>
                        <p className="text-[0.5rem]">voluntarily tutored of over 5 students and peers aiding them in building their first web pages from HTML and CSS fundamentals.</p>
                        <p className="text-[0.5rem]">Developed 15+ portfolio projects (e.g Full-stack banking app, e-commerce website, stunning landing pages etc) using modern web frameworks(Nextjs, React, TailwindCSS).</p>
                        <p className="text-[0.5rem]">Practiced version control(GIT) and deployed projects via Vercel and Netlify</p>
                    </div>
            </div>
            <div>
                <div className="border-b-4 border-double w-full flex flex-col items-start justify-center gap-2 px-2 py-1">
                <p className="text-sm font-semibold">Junior Data Analyst</p>
                <p className="text-xs">Freelance</p>
                <p className="text-[0.5rem]">2023-2024</p>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <p className="text-[0.5rem]">Designed Tableau Dashboards for 5+ clients transforming raw data into actionable insights.</p>
                        <p className="text-[0.5rem]">Built and maintained complex SQL queries to extract and analyze large datasets, improving query efficiency.</p>
                        <p className="text-[0.5rem]">Conducted end to end data analysis (cleaning, modelling, visualization) for e-commerce and healthcare clients, identifying trends that boost revenue.</p>
                        <p className="text-[0.5rem]">Created Predictive models (python and sci-kit learn) to forecast sales and customer behaviour, improving inventory planning accuracy. </p>
                    </div>
            </div>
            </div>
            <div>
                <div className="border-b-4 border-double w-full flex flex-col items-start justify-center gap-2 px-2 py-1">
                <p className="text-sm font-semibold">Programming Instructor</p>
                <p className="text-xs">Ecolyte Technical Academy</p>
                <p className="text-[0.5rem]">2021-2023</p>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <p className="text-[0.5rem]">Developed and delivered comprehensive hands-on programming lectures in Python and SQL, ensuring students gained practical knowledge.</p>
                        <p className="text-[0.5rem]">Provided personalized tutoring, code reviews, helping students learn and master complex programming concepts.</p>
                        <p className="text-[0.5rem]">Implemented high-level assessment to monitor students progress resulting in a high satisfaction rate.</p>
                    </div>
            </div>
        </div>
    </div>)
};
