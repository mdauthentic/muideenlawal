import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'About Muideen Lawal',
    description: 'More info about me: my background, motivation and all...',
}

export default function About() {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="aboutGrid">
                        <div className="aboutContent">
                            <div className="aboutContent">
                                <div className="aboutTitleHolder">
                                    <h1 className="aboutHeader">Muideen Lawal</h1>
                                    <div className="aboutSubHead">Software<span className="highlight"> Engineer</span> based in <span className="textGrey">Paris</span></div>
                                </div>
                            </div>
                            <div className="aboutContent">
                                <div className="aboutSubHead">Bio<span className="highlight">graphy</span></div>
                                <p className="aboutText">I am currently a Software Engineer at Opensee where I'm working on next-generation query engine powering the development of big data applications in the FinTech sector.</p>
                                <p className="aboutText">In 2021, I received a PhD in Computer Science from the Université Grenoble Alpes, France and my thesis is "On Cost Estimation for the Recursive Relational Algebra", supervised by Pierre Genevès & Nabil Layaïda.</p>
                                <p className="aboutText">Previously, I attended the National Research University - Higher School of Economics, Russia where I obtained a Masters degeree in System and Software Engineering.</p>

                                <div>
                                    <Link className="socialBtn hw-1 br-1" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </Link>
                                    <Link className="socialBtn hw-1 br-1" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                            </path>
                                        </svg>
                                    </Link>
                                    <Link className="socialBtn hw-1 br-1" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z">
                                            </path>
                                        </svg>
                                    </Link>
                                    <Link target="_blank" className="socialBtn hw-1 br-1" href="https://twitter.com/mdauthentic">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                            </path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="profile">
                                <Image
                                    src="img/profile.png"
                                    alt="Muideen photo"
                                    sizes="100vw"
                                    width={600}
                                    height={500}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover'
                                    }} className="profileImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutMore">
                <div className="container">
                    <div className="aboutMoreBox">
                        <p className="pb2">Being enrolled in a computer science undergraduate programme, I was already familiar with writing BASIC and Assembly languages. My interest grew and I picked up java for some projects afterwards before even taking the course in the university.</p>
                        <p className="pb2">This curiosity doesn't end there... That was when it was just PHP, HTML, CSS and javascript in my part of the world. Some tools used for crafting websites then include Adobe Dreamweaver, Fireworks (to design logos and other for website)</p>
                    </div>
                </div>
            </section>
        </>
    )
}