
import makul from "../image/makul.png";
import Image from "next/image";
import Makul from "./Makul";
import Streich from "./Streich";
import AgroVid from "./AgroVid";
import Plastik from "./Plastik";

const Cases = () => {
    return (
        <div>
            <div className = "cases">


                <Makul/>
                <Streich/>
                <AgroVid/>
                <Plastik/>


            </div>
            <h2>Вивіз транспортом від 200кг</h2>
        </div>
    );
};

export default Cases;