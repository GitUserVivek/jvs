import '../Css/Home.css';
import SlideBars from './Components/SlidBars';
export default function Home() {
    var software = "Software";
    var webdeveloper = "<Web Developer />";
    return <>
        <div className="HomePage">

            <pre id="HomeContent">
                Hey there,<br></br>
                I'm Jagtap Vivek..<br></br>
                <div className="desc">
                    : Looking For The Job Opportunity <br></br>as<br></br> {software} , {webdeveloper}
                </div>
                {/* <div className="exp"> */}
                <SlideBars />
                {/* </div> */}
            </pre>

        </div>
    </>
}