//LIBRARIES
import React from "react";

//COMPONENTS
import ActionItem from "../components/ActionItem";
import TimelineLocation from "../components/TimelineLocation";

//IMAGES
import promoImg from "../assets/promo-image-6504a4d56baab.webp";
import promoImg2 from "../assets/waterloo-2-6504a5337dc04.webp";
import alexandriaImg from "../assets/alexandria-2-6504a3f2b4258.webp";
import paramattaImg from "../assets/paramatta-6504a4c2e3cf2.webp";
import lanecoveImg from "../assets/lane-cove-6504a4732ccbf.webp";
import enoggeraImg from "../assets/enoggera-2-6504a4529c74f.webp";
import waterlooImg from "../assets/waterloo-6504a52b79fcf.webp";
import morningsideImg from "../assets/morning-side-6504a4ab83b22.webp";

function Home() {
  return (
    <>
      <main>
        {/* LANDING  */}
        <section id="landing">
          <div id="landing-video" className="video-background">
            <div className="video-foreground">
              <iframe
                src="https://www.youtube.com/embed/cDvdXiMk5bo?si=6LaRYU0kvoHVCV7w&amp?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=cDvdXiMk5bo"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <h1 className="landing__title compacta" id="title">
                9 DEGREES
              </h1>
              <h2 className="landing__sub-header" id="subtitle">
                BOULDERING MAKES YOU HAPPY
              </h2>
              <h1 className="down__arrow">
                <a href="#primary-action " id="down__arrow">
                  ▼
                </a>
              </h1>
            </div>
          </div>
        </section>

        {/* PRIMARY ACTION */}
        <section id="primary-action">
          <ActionItem
            title={"Starting from the bottom."}
            paragraph={`Since 2015 our gyms have proudly been providing a welcoming space
              for our visitors to move their bodies, connect with others and
              escape the stress of work and life`}
            promoImg={promoImg}
            isReverse={true}
          />
          <ActionItem
            title={"What is Bouldering?"}
            paragraph={`Bouldering is rock climbing without the ropes, heights, and hassle. It’s physical problem solving. Distinctly simple, bouldering is one of the fastest growing sports in the world. It’s a highly social form of climbing that is easy to learn and enjoy.`}
            promoImg={promoImg2}
            isReverse={false}
          />
        </section>

        <section id="timeline">
          <div className="text__wrapper">
            <h1 className="events__section--header compacta">OUR TIMELINE</h1>
          </div>

          <div className="timeline__container">
            <TimelineLocation
              locationName={"Alexandria"}
              date={"2015"}
              locationImg={alexandriaImg}
            />

            <TimelineLocation
              locationName={"Paramatta"}
              date={"2017"}
              locationImg={paramattaImg}
            />
            <TimelineLocation
              locationName={"Lane Cove"}
              date={"2018"}
              locationImg={lanecoveImg}
            />
            <TimelineLocation
              locationName={"Enoggera"}
              date={"2019"}
              locationImg={enoggeraImg}
            />
            <TimelineLocation
              locationName={"Waterloo"}
              date={"2020"}
              locationImg={waterlooImg}
            />
            <TimelineLocation
              locationName={"Morningside"}
              date={"2023"}
              locationImg={morningsideImg}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
