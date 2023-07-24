import "./home.css";
import Banner from "../../Banner/index";
import Gallerie from "../../Gallerie/index";
import Features from "../../Features/index";
function Home() {
    return(
        <main className ="homepage">
            <Banner />
            <Gallerie />
            <Features />
        </main>
    )
}
export default Home;