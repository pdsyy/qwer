
import makul from "../image/makul.png"
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
const Makul = () => {
    return (
        <div className = "case_ob">
            <div className = "case">
                <div className = "case_image">
                    <ExportedImage src = {makul}  alt = "Макулатура" layout="intrinsic"/>
                </div>
                <h2> Макулатура </h2>
                <p>
                    Види відходів:
                </p>
                <ul>

                    <li>
                        Гофрокартон
                    </li>
                    <li>
                        Коробки
                    </li>
                    <li>
                        Журнали
                    </li>
                    <li>
                        Білий папір
                    </li>
                    <li>
                        Папір А4
                    </li>
                    <li>
                        Гофрокартон
                    </li>
                    <li>
                        Коробки
                    </li>
                    <li>
                        Журнали
                    </li>
                </ul>

            </div>
            <a href = "/makulatura"><button>Дізнатися більше</button></a>
        </div>
    );
};

export default Makul;