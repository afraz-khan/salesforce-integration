import tap from '../../images/tap.png'
import { util } from '../../util'
import { useState, useRef } from 'react'

function Demo() {
  const [quantity, setQuantity] = useState(-1)
  const [productItems, setProductItems] = useState([])
  const productItemsLoadingRef = useRef(null)
  const quantityLoadingRef = useRef(null)
  const productItemsTableRef = useRef(null)
  const productItemNumRef = useRef(null)
  const productQuantityRef = useRef(null)

  async function getProductItems() {
    productItemsTableRef.current.style.display = 'none'
    productItemsLoadingRef.current.style.display = 'inline'
    const data = await util.getProductItems()
    productItemsLoadingRef.current.style.display = 'none'
    productItemsTableRef.current.style.display = 'inline'
    productItemsTableRef.current.scrollIntoView()
    setProductItems(data)
  }

  async function getProductQuantity() {
    const productItemNum = productItemNumRef.current.value
    productQuantityRef.current.style.display = 'none'
    quantityLoadingRef.current.style.display = 'inline'
    const updatedQuantity = await util.getProductQuantity(productItemNum)
    if (updatedQuantity) {
      productQuantityRef.current.style.display = 'inline'
    }
    quantityLoadingRef.current.style.display = 'none'
    setQuantity(updatedQuantity)
  }

  return (
    <div className="row">
      <div className="col-sm-6">
        <button
          id="productItems"
          onClick={async () => await getProductItems()}
          className="btn btn-primary"
          type="button"
        >
          QUERY
          <br /> ( Import all ProductItems )<img src={tap} alt="tap here"></img>
        </button>
        <br />
        <span ref={productItemsLoadingRef} className="loading">
          loading...
        </span>{' '}
        <br />
        <table ref={productItemsTableRef} className="table productItems">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ProductName</th>
              <th scope="col">ProductItemNumber</th>
            </tr>
          </thead>
          <tbody>
            {productItems.map((product, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{product['ProductName']}</td>
                  <td>{product['ProductItemNumber']}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="col-sm-6">
        <h6 id="quantityLabel">
          QUERY
          <br />( Product Inventory Stock/ Quantity of Products )
        </h6>
        <div className="input-group mb-3">
          <input
            id="productItemNum"
            type="text"
            className="form-control"
            placeholder="Enter any ProductItemNumber from left table"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            ref={productItemNumRef}
          ></input>
          <div className="input-group-append">
            <button
              onClick={async () => await getProductQuantity()}
              className="btn btn-outline-secondary quantityBtn"
              type="button"
            >
              Find
            </button>
          </div>
        </div>
        <span ref={quantityLoadingRef} className="loading">
          loading...
        </span>
        <h4 ref={productQuantityRef} id="productQuantity">
          <b>Quantity in Stock:</b> <span>{quantity}</span>
        </h4>
      </div>
    </div>
  )
}

export default Demo
