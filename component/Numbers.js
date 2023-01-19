
const Numbers = () => {
    return (
        <div className = "numbers">
            <h2>Наша компанія в цифрах</h2>
            <p style={{fontSize:"25px",maxWidth:"560px", margin:"0px auto" }}>Статистика за весь час роботи компанії ROSUM ECO</p>
            <div className = "stat">
                <div className = "stat_info">
                    <p className = "yearCounter">21</p>
                    <hr/>
                    <p className = "yearCounterDesc">рік на ринку</p>
                </div>

                <div className = "stat_info">
                    <p className = "yearCounter">2200</p>
                    <hr/>
                    <p className = "yearCounterDesc">задоволених клієнтів</p>
                </div>

                <div className = "stat_info">
                    <p className = "yearCounter">16541573</p>
                    <hr/>
                    <p className = "yearCounterDesc">відходів закупили та переробили</p>
                </div>
            </div>

        </div>
    );
};

export default Numbers;