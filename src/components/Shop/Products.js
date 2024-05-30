import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMYPRODUCTS=[
 { 
  id:"p1",
  price:"5",
  title:"my first book",
  description:"The first book i was wrote"
},
{
  id:"p2",
  price:"6",
  title:"my second book",
  description:"The second book i was wrote"
}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYPRODUCTS.map((product)=>(
           <ProductItem
           key={product.id}
           id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;

