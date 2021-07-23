async function getProductItems() {
  try {
    let data = await fetch('/productItems', {
      method: 'GET',
    })
    const status = data.status
    data = await data.json()
    if (status === 500) {
      throw new Error(`Server Error: "${data}"`)
    }
    return data
  } catch (error) {
    console.error(error)
    alert(
      `${error.message}\nRefresh page or open browser console to see the error.`,
    )
  }
}

async function getProductQuantity(productItemNum) {
  if (!productItemNum) {
    alert('Please enter valid product item number.')
    return
  }

  try {
    let data = await fetch(`/productItems/${productItemNum}`, {
      method: 'GET',
    })
    const status = data.status
    data = await data.json()
    if (status === 500) {
      throw new Error(`Server Error: "${data}"`)
    }
    return data.quantity
  } catch (error) {
    console.error(error)
    alert(
      `${error.message}\nRefresh page or open browser console to see the error.`,
    )
  }
}

export const util = {
  getProductItems,
  getProductQuantity,
}
