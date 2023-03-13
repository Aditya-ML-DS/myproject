export default function Product() {
    const products =[
        {id:1,name:"laptop",price:500},
        {id:2,name:"mobile",price:600},
        {id:3,name:"tablet",price:900},
        {id:4,name:"computer",price:900}
    ]
    const fruits =["bnana","mango","apple"];
    const fruitslist= fruits.map((fruit,index)=>(
      <h3 key={index}>{fruit} </h3>
    ));
    // const productlist= products.map((product)=>(
    //  <h3 key={product.id}>{product.name}:${product.price}</h3>
    // ))
    return <div>{fruitslist}</div>
}