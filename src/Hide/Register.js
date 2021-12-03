import './Register.css'
import Brand from '../Img/Captsure.png'
import ImgShoppeX from '../Logomain.png'
import {useState} from "react";
import axios from 'axios';

export default function Register() {
const url = "http://localhost:8001/auth/signup";
const [data, setData]  = useState({
    username: "",
    email: "",
    password: "",
    roles: ""
})
function submitRegister(e){
    e.preventDefault();
    axios.post(url, {
        username: data.username,
        email: data.email,
        password: data.password,
        roles: data.roles
    })
 alert("Done")
}
function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)

}
    return (
        <div className="background_1">
            <div className="background_image">
                <img src={Brand} />
            </div>
            <div class="form_register">
                <div class="form_register_content_1">
                    <ul>
                        <li>Đăng ký</li>
                        <li>trợ giúp</li>
                    </ul>
                </div>
                <div class="form_register_content_2">
                    <img src={ImgShoppeX} />
                </div>
                <div class="form_register_content_3">
                    <form>
                        <input id="username" onChange={(e)=> handle(e)} value={data.username} placeholder="User name" required />
                        <input id="email" onChange={(e)=> handle(e)} value={data.email} placeholder="Email" required />
                        <input id= "password"onChange={(e)=> handle(e)} value={data.password}  placeholder="Password" required />
                        {/* <input id= "roles"onChange={(e)=> handle(e)} value={data.roles}  placeholder="Role" required /> */}
                        <select id ="roles" onChange={(e)=> handle(e)} value={data.roles} >
                            <option>admin</option>
                            <option>user</option>
                            <option>moderater</option>
                        </select>
                        <button onClick={(e)=> submitRegister(e)}>Tiếp</button>
                    </form>
                </div>
                <div class="form_register_content_4">
                    <p>Tôi đã đồng ý với</p>
                    <span>Điều khoản dịch vụ</span>
                    &nbsp;&&nbsp;
                    <span>Chính sách bảo mật</span>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}