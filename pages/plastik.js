
import big from "../image/bigbag.jpg"
import Head from "next/head";
import Image from "next/image";
import logo from "../image/logo.png";
import HeaderFooterBlock from "../component/HeaderFooterBlock";
import ExportedImage from "next-image-export-optimizer";
const PlastikMain = () => {

    const makul = [
        {
            firstB:"Пляшка прозора",
            secondB:"від",
            thirdB:"17 грн"
        },
        {
            firstB:"Пляшка кольорова",
            secondB:"200",
            thirdB:"10 грн"
        },
        {
            firstB:"Петмікс",
            secondB:"кг",
            thirdB:"12 грн"
        },
    ]

    return (
        <HeaderFooterBlock>
        <div className = "plastik_page_main">

            <Head>
                <title>Здати відходи пластику вигідно, прийом пластикових відходів у компанії Rosum Eco</title>
                <link rel="canonical" href="https://rosum-eco.com.ua/plastik" />
                <meta
                    name="description"
                    content="Прийом відходів пластику у компанії Rosum Eco, швидко, вигідно, зручно. Звертайтесь!"
                />
            </Head>

            <h1> Відходи пластику </h1>
            <div className = "plastik_page">
                <div>
                    <p>
                        У сучасному світі проблемі рециклінгу відходів приділяється особливо пильна увага. У розвинених країнах побутові полімерні відходи займають значне місце у рециклінгу вторсировини та формуванні ринку вторинного ПЕТ.
                        Особливе місце у категорії відходів із поліетилентерефталату (поліестер) відводиться ПЕТ-тарі. А відповідно пластикова тара є економічно вигідною сировиною через можливість її вторинної переробки.
                        Тара з ПЕТ-матеріалів використовуються як упаковка для багатьох видів харчових продуктів та напоїв. До відходів ПЕТ-тари на побутовому рівні відносять поліетиленову упаковку, використані пакети, пластикові пляшки, плівку, одноразовий посуд, пластикові ящики, труби та інші.
                        Частково відходи поліетилентерефталату збираються та заготовляються на промислових підприємствах. У разі виробничі відходи утворюються у процесі переробки сировини вироби. Однак більш суттєвий обсяг збору все-таки припадає на пляшки, що були у вживанні.
                        У багатьох сферах життєдіяльності людини широко використовуються ПЕТ-пляшки — для зберігання харчових напоїв, побутової хімії та різноманітних технічних рідин.
                        Тому ПЕТ-пляшки по праву займають лідируючі позиції у сегменті рециклінгу полімерних відходів.
                    </p>
                </div>
                <div>
                    <ExportedImage src={big} alt = "Відходи пластику" layout="intrinsic"/>
                </div>
            </div>
            <div style={{fontSize:"20px", margin:"20px auto", textAlign:"center"}}>
                <div className = "first_vt">Ціни на відходи пластику:</div>
            </div>
            <hr style={{width:"100%"}}/>

            {makul.map(e =>
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

export default PlastikMain;