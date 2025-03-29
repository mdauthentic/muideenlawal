export const About = () => (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="sticky top-8">
            <div className="flex flex-col justify-start gap-4 h-auto">
                <h2 className="font-mono font-medium leading-none text-xs/6 uppercase">
                    About
                </h2>
            </div>
        </div>
        <div className="relative h-min">
            <div className="flex flex-col content-start items-start flex-nowrap gap-4 h-min justify-start overflow-visible w-full p-0 text-neutral-600">
                <p>
                    I am a Software Engineer currently at Opensee where I spend most of my time writing backend API services, optimizing queries on multidimensional workloads, conducting database research targeted towards the Fintech sector, and optimizing developer experience in general.
                </p>
                <p>
                    In 2021, I received a PhD in Computer Science from the Université Grenoble Alpes, France and my thesis is &quot;On Cost Estimation for the Recursive Relational Algebra&quot;, supervised by Pierre Genevès & Nabil Layaïda. Previously, I attended the National Research University - Higher School of Economics, Russia where I obtained a Masters degeree in System and Software Engineering.
                </p>
                <p>
                    I am interested in data-related subject such as query optimization and cost estimation in DB engines. I&apos;ve worked on a plethora of projects over the years, from fullstack to backend to big data and hobby projects. I am constantly evolving and learning new tools and technologies.
                </p>
            </div>
        </div>
    </section>
);