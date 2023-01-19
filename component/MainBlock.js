
const MainBlock = () => {
    return (
        <div className = "main_block">
            <div className = "main_block_content">
                <h1>
                    Прийом вторсировини
                </h1>
                <p>
                    Ми надаємо комплексні послуги з управління вторинною сировиною для забезпечення екологічності нашої країни

                </p>
                <div className = "main_button">
                    <a href = "/prices"><button>Ціни</button></a>
                    <a href = "#vtor">
                        <button style={{background: "#01ac49"}}>
                            Ми приймаємо
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainBlock;