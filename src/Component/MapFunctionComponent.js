export default function MapFunctionComponent() {
   
    const product =["laptop","mobile","tablet","computer"]
    const productlist = product.map((product)=> <h3>{product}</h3>)//map is use for loop through all the element of array

    return(
      <div>
      {/* {product.map((product)=>(

        <h3>{product}</h3>
      ))} */
      productlist
      }

      </div>

    )

}