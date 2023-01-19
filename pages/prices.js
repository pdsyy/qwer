import HeaderFooterBlock from "../component/HeaderFooterBlock";
import Head from "next/head";

const vidhodiPlivki = [
    {
        firstB:"ПВД прозора",
        secondB:"",
        thirdB:"12 грн"
    },
    {
        firstB:"ПВД кольорова",
        secondB:"",
        thirdB:"4 грн"
    },
    {
        firstB:"ПНД прозора",
        secondB:"від",
        thirdB:"13 грн"
    },
    {
        firstB:"ПНД кольорова",
        secondB:"200",
        thirdB:"4 грн"
    },
    {
        firstB:"Стрейч плівка прозора",
        secondB:"кг",
        thirdB:"10 грн"
    },
    {
        firstB:"Стрейч плівка кольорова",
        secondB:"",
        thirdB:"3 грн"
    },
]

const makul = [
    {
        firstB:"MC-5B",
        secondB:"від",
        thirdB:"1,50 грн"
    },
    {
        firstB:"MC-7B",
        secondB:"200",
        thirdB:"1,25 грн"
    },
    {
        firstB:"MC-2А",
        secondB:"кг",
        thirdB:"0,50 грн"
    },
]

const bigBag = [
    {
        firstB:"Стропа",
        secondB:"від 200",
        thirdB:"3 грн"
    },
    {
        firstB:"Майка",
        secondB:"кг",
        thirdB:"9 грн"
    },
]

const Prices = () => {
    return (
        <HeaderFooterBlock>
        <div className = "price_block">
            <Head>
                <title>
                    Ціни на вторсировину | Rosum Eco
                </title>
                <link rel="canonical" href="https://rosum-eco.com.ua/prices" />
                <meta
                    name="description"
                    content="Ціни на прийом вторсировини: макулатури, пластику та агро відходів"
                />
            </Head>
            <h1>Ціни</h1>
            <div className = "price_block_desc_f" style={{fontSize:"25px", marginBottom:"10px"}}>
                <div className = "first_vt">Вид </div>
                <div className = "second_vt">Вага</div>
                <div className = "third_vt">Вартість</div>
            </div>
            <hr style={{width:"100%"}}/>

            <div className = "price_block_desc_f" style={{fontSize:"20px"}}>
                <div className = "first_vt">Відходи плівки:</div>
            </div>

            {vidhodiPlivki.map(e =>
                <div className = "price_block_desc_f">
                    <div className = "first_vt">{e.firstB}</div>
                    <div className = "second_vt">{e.secondB}</div>
                    <div className = "third_vt">{e.thirdB}</div>
                </div>
            )}
            <hr style={{width:"100%"}}/>
            <div className = "price_block_desc_f" style={{fontSize:"20px"}}>
                <div className = "first_vt">Відходи макулатури:</div>
            </div>
            {makul.map(e =>
                <div className = "price_block_desc_f">
                    <div className = "first_vt">{e.firstB}</div>
                    <div className = "second_vt">{e.secondB}</div>
                    <div className = "third_vt">{e.thirdB}</div>
                </div>
            )}
            <hr style={{width:"100%"}}/>
            <div className = "price_block_desc_f" style={{fontSize:"20px"}}>
                <div className = "first_vt">Відходи біг бег:</div>
            </div>
            {bigBag.map(e =>
                <div className = "price_block_desc_f">
                    <div className = "first_vt">{e.firstB}</div>
                    <div className = "second_vt">{e.secondB}</div>
                    <div className = "third_vt">{e.thirdB}</div>
                </div>
            )}
            <h2 style={{width:"100%", textAlign:"center", margin:"20px 0 -20px 0"}}>Ціни уточнюйте по телефону!</h2>
        </div>
        </HeaderFooterBlock>
    );
};

export default Prices;