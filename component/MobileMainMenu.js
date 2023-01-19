
import telegram from "../image/telegram.png";
import viber from "../image/viber.png";
import whatsapp from "../image/whatsapp.png";
import logo1 from "../image/logo1.jpg";
import makul from "../image/makul.png";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

const MobileMainMenu = () => {
    return (
        <div className = "main_mobile_menu" id = "mobileMainMenu">
            <div className = "close_btn"  onClick={() => {
                document.getElementById("mobileMainMenu").style.cssText = "margin-left:-100%; opacity:0;";
            }}>
                <div></div>
                <div></div>
            </div>
            <div>
                <ExportedImage src = {logo1}  alt = "Rosum Eco" layout="intrinsic"/>
            </div>
            <div>
                <ul className = "main_menu_list">

                    <li><a href="/">Головна</a></li>
                    <li><a href="/prices">Ціни</a></li>
                    <li><a href="/#vtor">Вторсировина</a></li>
                    <li><a href="/about">Про нас</a></li>
                    <li><a href="/contacts">Контакти</a></li>

                    <hr width = "80%" style={{margin:'20px auto'}}/>
                    <a href = "tel:380685281717">
                        <li style={{fontSize:"15px"}}>
                            +38 (068) 528 17 17
                        </li>
                    </a>
                    <li style={{background:'none ', marginTop:'auto'}}>
                        <div className = "society">
                            <div><a href = "https://telegram.me/VladimirRosumEco"><ExportedImage src = {telegram}  alt = "Telegram" layout="intrinsic"/></a></div>
                            <div><a href="viber://chat?number=%2B380503526007"><ExportedImage src = {viber}  alt = "Viber" layout="intrinsic"/></a></div>
                            <div><a href = "whatsapp://send?phone=+380503526007"><ExportedImage src = {whatsapp}  alt = "WhatsApp" layout="intrinsic"/></a></div>
                        </div>

                    </li>
                </ul>

            </div>
        </div>
    );
};

export default MobileMainMenu;