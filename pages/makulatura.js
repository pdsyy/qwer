import React from 'react';
import makul from "../image/makul.png"
import HeaderFooterBlock from "../component/HeaderFooterBlock";
import Head from "next/head";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
const MakulaturaMain = () => {


    const makul1 = [
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

    return (
        <HeaderFooterBlock>
        <div className = "makulatura_main">
            <Head>
                <title>Здати макулатуру вигідно, прийом макулатури у компанії Rosum Eco</title>
                <link rel="canonical" href="https://rosum-eco.com.ua/makulatura" />
                <meta
                    name="description"
                    content="Прийом макулатури у компанії Rosum Eco, швидко, вигідно, зручно"
                />
            </Head>


            <h1 style={{margin:"30px", textAlign:"center"}}>Макулатура</h1>

            <div className = "makul_cont">
                <div>
                    <p>
                        Купівля та експорт макулатури в Києві та Київській області: економія на дорогих
                        відходах або перероблення. Хто здає макулатуру в Києві і області? Питання покласти
                        непотрібний папір на перероблення сьогодні не виникає, але останнім часом почало
                        привертати все більше уваги. У Київській області офіційно проживає близько двох мільйонів
                        осіб. Кожен день з області вивозять десятки тонн твердих відходів в двох перевантажених
                        полігонах. Відсоток макулатури становить близько 30%. І незалежно від того, що в Києві та
                        Київській області є десяток структур, що спеціалізуються на закупівлю макулатури, тільки
                        10% від загального обсягу для досягнення перероблення. Тільки всі фахівці торгово-виробничих
                        компаній, офісні працівники і тільки жителі Київської області знають, де і як можна доставить
                        макулатуру та інші перероблені матеріали.
                    </p>
                </div>
                <div>
                    <ExportedImage src = {makul}  alt = "Макулатура" layout="intrinsic"/>
                </div>
            </div>
            <hr style={{marginTop:"20px", marginBottom:"20px"}}/>
            {makul1.map(e =>
                <div className = "price_block_desc_f">
                    <div className = "first_vt">{e.firstB}</div>
                    <div className = "second_vt">{e.secondB}</div>
                    <div className = "third_vt">{e.thirdB}</div>
                </div>
            )}
        </div>
        </HeaderFooterBlock>
    );
};

export default MakulaturaMain;