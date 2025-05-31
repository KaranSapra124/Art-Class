import React, { useContext } from 'react';
import './Intro.css';
import { Link } from "react-router-dom";
import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector2.png'
import boy from "../../assets/img/boy.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import thumbup from "../../assets/img/thumbup.png";
import crown from "../../assets/img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

    return (
        <div className="Intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <motion.div className="i-name" initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "ease-in",
                    }}>
                    <span>Shape Your Vision</span>
                    <span>Into Arts</span>
                    <span>At Our Classes</span>
                    <span>
                        Find your way of living by dipping into arts
                        Forget all difficulties in finding a creative life
                    </span>
                </motion.div>
                <div id="about-us" className="d-flex justify-content-left">
    <Link to='/about'>
        <button type="button" className="btn btn-outline-dark m-2">About Us</button>
    </Link>
</div>

                {/* social icons */}
                {/* <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div> */}
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                {/* animation */}
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji}
                    alt=""
                />

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={crown} text1="Artistic" />
                </motion.div>

                {/* animation */}
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={thumbup} text1="Best Art" text2="Classes" />
                </motion.div>

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>

        </div>

    );
};

export default Intro;
