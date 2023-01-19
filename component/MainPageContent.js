
import MainBlock from "./MainBlock";
import About from "./About";
import Numbers from "./Numbers";
import Perev from "./Perev";
import Contacts1 from "./Contacts1";

const MainPageContent = () => {
    return (
        <div>
            <MainBlock/>
            <About/>
            <Numbers/>
            <Perev/>
            <Contacts1/>
        </div>
    );
};

export default MainPageContent;