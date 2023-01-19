
import str from "../image/bigbag.jpg";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

const AgroVid = () => {
    return (
        <div className = "case_ob">
            <div className = "case">
                <div className = "case_image s_case_image">
                    <ExportedImage src = {str}  alt = "Агро відходи" layout="intrinsic"/>
                </div>
                <h2> Агро відходи </h2>
                <p>
                    Види відходів:
                </p>
                <ul>

                    <li>
                        Біг бег стропа
                    </li>
                    <li>
                        Агро рукав
                    </li>
                    <li>
                        Системи крапельного поливу
                    </li>
                    <li>
                        Різні види агро плівки
                    </li>
                    <li>
                        Каністри
                    </li>
                    <li>
                        Системи крапельного поливу
                    </li>
                    <li>
                        Біг бег майка
                    </li>
                    <li>
                        Піддони
                    </li>
                </ul>
            </div>
            <a href = "/agro"><button>Дізнатися більше</button></a>
        </div>

    );
};

export default AgroVid;