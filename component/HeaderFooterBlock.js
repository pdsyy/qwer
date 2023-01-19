import MobileHeader from "./MobileHeader";
import MobileMainMenu from "./MobileMainMenu";
import Head from "next/head";


const HeaderFooterBlock = ({children}) => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
                />
            </Head>
        <div className = "main_header">
            <MobileMainMenu/>
            <div className = "top_header">
                <div className = "company_name">
                    <a href = "/" style = {{fontSize:"20px"}} className = "comp_mob">
                        <b>ROSUM ECO</b>
                    </a>
                    <MobileHeader/>
                </div>
                <div className = "comp_desc">
                    <a href = "/" style = {{fontSize:"20px"}}>
                        <b>ROSUM ECO</b>
                    </a>
                </div>


                <div className = "contact_info">
                    <p style={{textAlign:"right"}}>
                        <a href = "tel:+380503526007">+380685281717</a>
                    </p>
                    <p>
                        <a href = "mailto:bastion.rvl@gmail.com">bastion.rvl@gmail.com</a>
                    </p>
                </div>
            </div>
            <hr/>
            <div className = "main_menu">

                <div>
                    <a href = "/">Головна</a>
                </div>

                <div>
                    <a href = "/prices">  Ціни</a>
                </div>

                <div>
                    <a href = "/#vtor">Вторсировина</a>
                </div>

                <div>
                    <a href = "/about">Про нас</a>
                </div>

                <div>
                    <a href = "/contacts">Контакти</a>
                </div>
            </div>
        </div>
            {children}
            <div className = "footer">
                <div className = "footer_menu">
                    <a href = "/#vtor"><div>Вторсировина</div></a>
                    <a href = "/prices"><div>Ціни</div></a>
                    <a href = "/contacts"><div>Контакти</div></a>
                    <a href = "/about"><div>Про нас</div></a>
                </div>
                <a href = "/"><h2>ROSUM ECO</h2></a>
                <p>© 2000-2021 Всі права захищені власником</p>
            </div>
        </>
    );
};

export default HeaderFooterBlock;