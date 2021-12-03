import React, { Component } from 'react'
import { Row, Col } from 'antd';
import LogoMain from '../Img/hanoi.jpg'
import './CityIndex.css'
// export default class CityIndex extends Component {
//   render() {

//     return (
//       <div className="city">

//         <div className="content_city">
//           <h2>CONTENT</h2>
//         </div>

//         <div className="product_image_one">
//           <div className="product image_1">
//             <div className="product_image image_1.1">
//               <img src={logoMain} />
//             </div>
//             <div className="product_content content_1.1">
//               <p>Content</p>
//             </div>
//           </div>
//           <div className="product">
//             <div className="product_image">
//               <img src={logoMain} />
//             </div>
//             <div className="product_content">
//               <p>Content</p>
//             </div>
//           </div>

//           <div className="product">
//             <div className="product_image">
//               <img src={logoMain} />
//             </div>
//             <div className="product_content">
//               <p>Content</p>
//             </div>
//           </div>

//           <div className="product">
//             <div className="product_image">
//               <img src={logoMain} />
//             </div>
//             <div className="product_content">
//               <p>Content</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     )
//   }
// }

export default class CityIndex extends Component {
  render() {
    const property_1 = {
      product: "product",
      product_image: "product_image",
      product_content: "product_content",
    }
    const property_2 = [
      {
        image: LogoMain,
        text: "CONTENT_1"
      },
      {
        image: LogoMain,
        text: "CONTENT_2"
      },
      {
        image: LogoMain,
        text: "CONTENT_3"
      },
      {
        image: LogoMain,
        text: "CONTENT_4"
      }
    ]

    return (
      <div className="city">
        <div className="content_city">
          <h2>CONTENT</h2>
        </div>
        <div className="product_image_one">
          <Component_image {...property_1} {...property_2[0]} />
          <Component_image {...property_1} {...property_2[1]} />
          <Component_image {...property_1} {...property_2[2]} />
          <Component_image {...property_1} {...property_2[3]} />
        </div>
      </div>
    )
  }
}

function Component_image(props) {
  return (
    <div className={props.product}>
      <div className={props.product_image}>
        <img src={props.image} />
      </div>
      <div className={props.product_content}>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
