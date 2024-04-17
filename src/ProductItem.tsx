import { Outlet, Link, useLoaderData, useParams } from 'react-router-dom';

export default function ProductItem() {
  const { productId } = useParams();
  const { products } = useLoaderData();
  // console.log(products);
  const item = products.filter((p) => (p.id = productId))[0];
  const {
    category,
    description,
    id,
    image,
    price,
    rating: { rate, count },
    title,
  } = item;
  // console.log(item);
  /*
  const saveItemToIndexedDB = () => {
    const request = window.indexedDB.open('cart');
    console.log(request);
    request.onerror = (event) => {
      // request.errorCode
      console.error(event);
    };
    request.onsuccess = (event) => {
      // request.result
      console.log(event);
    };
  };

  saveItemToIndexedDB();*/

  return (
    <div className="item-container">
      <div>
        <img src={image} width="250px" alt={title} aria-label={title} />
      </div>
      <div className="item-description">
        <div>
          <div className="item-meta">
            <h1 className="title">{title}</h1>
            <p className="rating-value">{rate}</p>
          </div>

          <hr />
          <div className="item-meta">
            Price: <span className="price">${price}</span>
          </div>
          <div className="item-meta">
            <h4>Description</h4>
            <p className="description">{description}</p>
          </div>
          <div className="item-meta">
            <h4>Category</h4>
            <p>{category}</p>
          </div>
        </div>
        <div className="add-item-to-cart">
          <button onClick={() => alert('Add to cart!!!')}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}