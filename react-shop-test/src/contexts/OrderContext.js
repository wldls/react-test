import { createContext, useEffect, useMemo, useState } from 'react';

const OrderContext = createContext();

const pricePerItem = {
  products: 1000,
  options: 500,
}

// 합계 계산
function calculateSubTotal(orderType, orderCounts) {
  let optionCount = 0;
  for(const count of orderCounts[orderType].values()){
    optionCount += count;
  }

  return optionCount * pricePerItem[orderType];
}

export function OrderContextProvider(props) {
    const [orderCounts, setOrderCounts] = useState({
      products: new Map(),
      options: new Map()
    });
    const [totals, setTotals] = useState({
      products: 0,
      options: 0,
      total: 0
    });
 
    useEffect(() => {
      // orderCounts가 변경되면 합계를 구함
      const productsTotal = calculateSubTotal('products', orderCounts);
      const optionsTotal = calculateSubTotal('options', orderCounts);
      const total = productsTotal + optionsTotal;

      setTotals({
        products: productsTotal,
        options: optionsTotal,
        total,
      })
    }, [orderCounts]);

    const value = useMemo(() => {
      function updateItemCount(itemName, newItemCount, orderType){
        const newOrderCounts = {...orderCounts};
        console.log('newOrderCount before', newOrderCounts);
        
        const orderCountsMap = orderCounts[orderType];
        orderCountsMap.set(itemName, parseInt(newItemCount));

        console.log('newOrderCount after', newOrderCounts);
        setOrderCounts(newOrderCounts);
      }

      return [{...orderCounts, totals}, updateItemCount]
    }, [orderCounts, totals])

    return <OrderContext.Provider value={value} {...props} />
}