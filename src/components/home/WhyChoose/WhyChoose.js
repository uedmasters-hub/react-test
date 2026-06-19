import "./WhyChoose.css";

import Container from "../../common/Container";
import SectionHeader from "../../common/SectionHeader";

import whyChooseData from "./data";

function WhyChoose() {

    return (

        <section className="why-choose">

            <Container>

                <SectionHeader
                    badge="Why Swapp"
                    title="Why Choose Swapp?"
                    subtitle="A trusted marketplace built for modern buyers and sellers."
                />

                <div className="why-grid">

                    {whyChooseData.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                className="why-card"
                                key={item.id}
                            >

                                <div className="why-icon">

                                    <Icon size={34} />

                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        );

                    })}

                </div>

            </Container>

        </section>

    );

}

export default WhyChoose;