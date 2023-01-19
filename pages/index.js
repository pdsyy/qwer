
import MainBlock from "../component/MainBlock";
import About from "../component/About";
import Numbers from "../component/Numbers";
import Perev from "../component/Perev";
import Head from "next/head";
import HeaderFooterBlock from "../component/HeaderFooterBlock";
import Contacts1 from "../component/Contacts1";

const Index = () => {
    return (
        <HeaderFooterBlock>
                <Head>
                    <title>Прийом вторсировини, вигідні ціни | Rosum Eco</title>
                    <link rel="canonical" href="https://rosum-eco.com.ua" />
                    <meta
                        name="description"
                        content="Прийом вторсировини за найвигіднішими цінами у компанії Rosum Eco"
                    />
                </Head>
                <MainBlock/>
                <About/>
                <Numbers/>
                <Perev/>
            <Contacts1/>
        </HeaderFooterBlock>
    );
};

export default Index;