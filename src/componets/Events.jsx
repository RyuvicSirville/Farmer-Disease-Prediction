import { useNavigate } from "react-router-dom";
import frame1 from '/img/CommunitySupport.jpeg'
import frame2 from '/img/DiseaseDiagnosis.jpeg'
import frame3 from '/img/RegisterComplaint.jpeg'
export function Events() {
    //const navigate = useNavigate()
    return (
        <div >
            <div class="     ">
                <div className="place-items-center">
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className=" text-4xl md:text-5xl lg:text-7xl text-gray-800   text-center">
                        Services
                    </p>
                </div>
                <br></br>
                <div className="place-items-center">
                    <h1 className="text-2xl text-gray-800  px-20  text-center">
                        Everything has been made simple for you to scroll around and get the most out of the options available.
                    </h1>
                </div>
                <br></br>
                <br></br>
                <br></br><br></br>
            </div>

            <div class="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 px-[20px]">
                <button class="justify-self-center" onClick={() => {  }}><img class="hover:scale-110 place-self-center" src={frame1}></img></button>
                <button class="justify-self-center" onClick={() => {  }}><img class="hover:scale-110 place-self-center" src={frame2}></img></button>
                <button class="justify-self-center md-col-span-2" onClick={() => {  }}><img class="hover:scale-110 place-self-center" src={frame3}></img></button>
                <div class="py-10"></div>
            </div>
            <div >

            </div>

        </div>
    )
}
export default Events