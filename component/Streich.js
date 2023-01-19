
import str from "../image/str.jpg"
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
const Streich = () => {
    return (
        <div className = "case_ob">
            <div className = "case">
                <div className = "case_image">
                    <ExportedImage src = {str}  alt = "Стрейч плівка" layout="intrinsic"/>
                </div>
                <h2> Відходи плівки </h2>
                <p>
                    Види відходів:
                </p>
                <ul>

                    <li>
                        Кольорова плівка
                    </li>
                    <li>
                        Плівка для упаковки
                    </li>
                    <li>
                        Будівельна плівка
                    </li>
                    <li>
                        Теплична плівка
                    </li>
                    <li>
                        Прозора плівка
                    </li>
                    <li>
                        <b>ПВД плівка</b>
                    </li>
                    <li>
                        <b>ПНД плівка</b>
                    </li>
                    <li>
                        <b>Стрейч плівка</b>
                    </li>
                </ul>
            </div>
            <a href = "/plivka">
                <button>Дізнатися більше</button>
            </a>
        </div>

    );
};

export default Streich;