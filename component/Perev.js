
import gal from "../image/gal.png"
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

const Perev = () => {
    return (
        <div className = "dignity_block">
            <div className = "dignity_name">
                Наші переваги
            </div>
            <div className = "dignity_desc">
                <div className = "dignity_block_ins">
                    <ExportedImage src = {gal}  alt = "Перевага" layout="intrinsic"/>
                    <p className = "desc_block">Регулярний та своєчасний вивіз</p>
                </div>
                <div className = "dignity_block_ins">
                    <ExportedImage src = {gal}  alt = "Перевага" layout="intrinsic"/>
                    <p className = "desc_block">Зручна форма оплати</p>
                </div>
                <div className = "dignity_block_ins">
                    <ExportedImage src = {gal}  alt = "Перевага" layout="intrinsic"/>
                    <p className = "desc_block">Якісний сервіс</p>
                </div>
                <div className = "dignity_block_ins">
                    <ExportedImage src = {gal}  alt = "Перевага" layout="intrinsic"/>
                    <p className = "desc_block">Надаємо документацію</p>
                </div>
                <div className = "dignity_block_ins">
                    <ExportedImage src = {gal}  alt = "Перевага" layout="intrinsic"/>
                    <p className = "desc_block">Найкращі ціни на вторсировину</p>
                </div>
                <div className = "dignity_block_ins">
                    <ExportedImage src = {gal}  alt = "Перевага" layout="intrinsic"/>
                    <p className = "desc_block">Комплексний підхід</p>
                </div>
            </div>
        </div>
    );
};

export default Perev;