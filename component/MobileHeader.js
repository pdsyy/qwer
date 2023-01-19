const MobileHeader = () => {
    return (
        <div className = "menu_btn" onClick={() => {
            document.getElementById("mobileMainMenu").style.cssText = "margin-left:0%;  opacity:1;";
        }}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default MobileHeader;