import "./HowItWorks.css";

import Container from "../../common/Container";
import SectionHeader from "../../common/SectionHeader";

import steps from "./data";

function HowItWorks() {
    return (
        <section className="how-it-works">

            <Container>

                <SectionHeader
                    badge="How it Works"
                    title="Buy • Sell • Swap in 4 Simple Steps"
                    subtitle="Getting started on Swapp takes only a few minutes."
                />

                <div className="timeline">

                    {steps.map((step, index) => {

                        const Icon = step.icon;

                        return (

                            <div
                                className="timeline-item"
                                key={step.id}
                            >

                                <div className="timeline-icon">

                                    <Icon size={28} />

                                </div>

                                {index !== steps.length - 1 && (

                                    <div className="timeline-line"></div>

                                )}

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>

                            </div>

                        );

                    })}

                </div>

            </Container>

        </section>
    );
}

export default HowItWorks;