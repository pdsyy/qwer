import ruk from "../image/rukav.jpg"
import pvd from "../image/pvd.jpg"
import tech from "../image/techplivka.jpg"
import Head from "next/head";
import Image from "next/image";
import HeaderFooterBlock from "../component/HeaderFooterBlock";
import ExportedImage from "next-image-export-optimizer";
const PlivkaMain = () => {
    return (
        <HeaderFooterBlock>
        <div className = "plivka_page">


            <Head>
                <title>Здати відходи плівки вигідно у компанії Rosum Eco</title>
                <link rel="canonical" href="https://rosum-eco.com.ua/plivka" />
                <meta
                    name="description"
                    content="Прийом відходів плівки ПВД, агро плівки, тепличної плівки у компанії Rosum Eco, швидко, вигідно, зручно. Звертайтесь!"
                />
            </Head>


            <h1 style={{textAlign:"center"}}>Плівка</h1>
            <hr/>
            <h2>Теплична плівка</h2>
            <div className = "plivka_cont">
                <div>
                    <p>
                        Перероблена плівка: виробництво, застосування та
                        технічні характеристики. Полімери це унікальні матеріали,
                        які можна повторно використовувати знову і знову без
                        значних витрат. На додаток до скорочення кількості
                        відходів, перероблення зберігає природні ресурси. Багато
                        корисних речей можна отримати з переробленої сировини.
                        Одним з них є перероблена поліетиленова плівка. Вже
                        частково будинок, сільське господарство і будівництво
                        замінили первинні матеріали. З цієї статті ми
                        рекомендуємо вам дізнатися про технічні характеристики
                        стретч плівки, характеристиках технології
                        під час виробництва і різниці між вторинним і
                        первинним станом.
                    </p>
                </div>
                <div>
                    <ExportedImage src = {tech}  alt = "Теплична плівка" layout="intrinsic"/>
                </div>
            </div>

            <hr/>
            <h2>Плівка агро Рукав</h2>
            <div className = "plivka_cont_s">
                <div>
                    <ExportedImage src = {ruk}  alt = "Плівка агро рукав" layout="intrinsic"/>
                </div>
                <div>
                    <p>
                        Плівка для силосування тришарова чорно-біла плівка
                        використовується для укриття силосних ям і траншей.
                        Плівка забезпечує захист від ультрафіолетових променів
                        (білий шар відбиває сонячні промені, чорний – поглинає),
                        може застосовуватися як для укриття, так і для
                        вистилання дна і стінок траншей. Використання
                        плівки для силосування забезпечує підвищення якості
                        корму, і мінімізує його втрати. Виробляє  тришарову
                        чорно-білу плівку для силосування шириною 12 метрів,
                        що дозволяє укрити майже будь-яку траншею. Товщина
                        плівки складає 100 – 150 мкм; що забезпечує надійний
                        захист від механічних пошкоджень.
                    </p>
                </div>
            </div>

            <hr/>
            <h2>Плівка ПВД</h2>
            <div className = "plivka_cont">

                <div>
                    <p>
                        Наша компанія спеціалізується на приймання відходів ПВД та іншої вторинної сировини в Києві.
                        Ми маємо всі необхідні для здійснення даної діяльності ліцензії і документи. Боротьба
                        за екологію і хороший заробіток це реальність! Як ви могли помітити, останнім часом
                        наша держава приділяє велику увагу екологічної складової. Будуються нові полігони для твердих
                        і рідких відходів, запускаються промислові підприємства, здатні переробляти великі обсяги
                        вторинної сировини. Пропозицією купити відходи ПВД вже складно когось здивувати, але
                        висока ціна приймання цього вторсировини в нашій компанії приваблює багатьох клієнтів.
                        З ПВД (поліетилен високого тиску) виробляють: Пакети; мішки; пляшки та інші предмети,
                        які можна зустріти повсюдно. Мало того, що в процесі виробництва з являються залишки
                        цього штучного матеріалу, так ще й після використання скупчуються непотрібні вироби
                        плівка і т.д. Тому рішення продати ПВД відходи хороший спосіб отримання додаткових доходів.
                    </p>
                </div>
                <div>
                    <ExportedImage src = {pvd}  alt = "Плівка ПВД" layout="intrinsic"/>
                </div>
            </div>


        </div>
        </HeaderFooterBlock>
    );
};

export default PlivkaMain;