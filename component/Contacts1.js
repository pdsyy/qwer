
import telegram from "../image/telegram.png"
import viber from "../image/viber.png"
import whats from "../image/whatsapp.png"
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
const Contacts1 = () => {
    return (
        <div className = "contact_block">

            <div className = "cont">
                <div>
                    <div style = {{marginTop:"10px"}}><b><p>Контакти</p></b>
                        <p>Компанія "ROSUM ECO"</p>
                        <p>Україна, Бровари </p>
                        <p>07400</p>
                        <p>Вул. Олега Оникієнка 131</p>
                        <p>Телефон: <a href = "tel:+380685281717">+380685281717</a></p>
                        <p>Email: <a href = "mailto:bastion.rvl@gmail.com">bastion.rvl@gmail.com</a></p>
                        <div className = "society_contacts">
                            <div>
                                <a target = "_blank" href = "https://telegram.me/VladimirRosumEco">
                                    <ExportedImage src = {telegram}  alt = "Telegram" layout="intrinsic"/>
                                </a>
                            </div>
                            <div>
                                <a target = "_blank" href = "viber://chat?number=%2B380503526007/">
                                    <ExportedImage src = {viber}  alt = "Viber" layout="intrinsic"/>
                                </a>
                            </div>
                            <div>
                                <a target = "_blank" href = "whatsapp://send?phone=+380503526007/">
                                    <ExportedImage src = {whats}  alt = "WhatsApp" layout="intrinsic"/>
                                </a>
                            </div>
                        </div>

                        <p><a target = "_blank" href = "https://maps.google.com/maps?ll=50.510379,30.814428&z=13&t=m&hl=ru&gl=UA&mapclient=embed&q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%9E%D0%BB%D0%B5%D0%B3%D0%B0%20%D0%9E%D0%BD%D1%96%D0%BA%D1%96%D1%94%D0%BD%D0%BA%D0%B0%2C%2011%20%D0%91%D1%80%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%20%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB.%2007400">Показати на Google Maps</a></p>

                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.591752043633!2d30.837251515128262!3d50.52316249000489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d9251cb09e8b%3A0x7a6398ff97faa064!2z0LLRg9C70LjRhtGPINCe0LvQtdCz0LAg0J7QvdGW0LrRltGU0L3QutCwLCAxMzEsINCR0YDQvtCy0LDRgNC4LCDQmtC40ZfQstGB0YzQutCwINC-0LHQuy4sIDA3NDAw!5e0!3m2!1sru!2sua!4v1673456713383!5m2!1sru!2sua" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contacts1;