import CallAction from "../component/CallAction"
import Censusnav from "../component/Censusnav"
import FeatureCensus from "../component/FeatureCensus"
import Footer from "../component/Footer"
import HeroCensus from "../component/heroCensus"
import Workflow from "../component/Workflow"

export default function Home(){
    return(
        <div className="max-w-5xl min-h-screen mx-auto w-full z-999">
            <Censusnav/>
            <HeroCensus/>
            <FeatureCensus/>
            <Workflow/>
            <CallAction/>
            <Footer/>
        </div>
    )
};