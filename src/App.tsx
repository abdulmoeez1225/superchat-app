import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { auth } from "./firebase/config";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

function App() {
  const [user, initialising, error] = useAuthState(auth as any);

  const particlesInit = async (main: any) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <>
      {" "}
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#b6b2b2",
              },
            },
            opacity: {
              value: 0.5211089197812949,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8.017060304327615,
              random: true,
              anim: {
                enable: true,
                speed: 12.181158184520175,
                size_min: 0.1,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#c8c8c8",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                // speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="App">
        <header>
          <h1>⚛️🔥💬</h1>
          <SignOut />
        </header>

        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </div>
    </>
  );
}

export default App;
