
import yash from "../image/yash.jpg";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

const Plastik = () => {
    return (
        <div className = "case_ob">
            <div className = "case">
                <div className = "case_image s_case_image">
                    <ExportedImage src = {yash}  alt = "Пластик" layout="intrinsic"/>
                </div>
                <h2> Відходи пластику </h2>
                <p>
                    Види відходів:
                </p>
                <ul>

                    <li>
                        Пляшка кольорова
                    </li>
                    <li>
                        Пляшка прозора
                    </li>
                    <li>
                        Ящики
                    </li>
                    <li>
                        Флакони
                    </li>
                    <li>
                        Відра
                    </li>
                    <li>
                        Каністри
                    </li>
                    <li>
                        Профіль віконний
                    </li>
                    <li>
                        Полістрирольні листи
                    </li>
                </ul>
            </div>
            <a href = "/plastik"><button>Дізнатися більше</button></a>
        </div>

    );
};

export default Plastik;