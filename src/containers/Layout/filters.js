
 export const filteredFromHelper = (data, aimFilter) => {
    switch (aimFilter) {
      case "2016": {

        const filtered = data.filter( el => {
          return new Date(+ el.date).getFullYear() === 2016
        } )
        return filtered

      }
      case "Roxy":{
        const filtered = data.filter(({
          ProductName
        }) => ProductName.includes("Roxy"))
        return filtered
      }
      default: {
        return data
      }
    }
  }

  export const sortedFromHelper = (arr, aimSort) => {
   
    switch (aimSort){
      case "isBestSelling":{
                  const sorted = arr.sort( function(a, b) {
                    return a.bestSelling? -1:1
                  } )
                    return sorted
               }
      case "AlphAZ":{
        return arr.sort( function(a, b) {
          return a.ProductName.toLowerCase() > b.ProductName.toLowerCase() ? -1:1
        } )

      }
      case "AlphZA":{
        return arr.sort( function(a, b) {
          return a.ProductName.toLowerCase() > b.ProductName.toLowerCase() ? 1:-1
        } )
      }
      case "lowHigh":{
        const sorted = arr.sort( function(a, b) {
          return a.ProductPrice > b.ProductPrice? 1:-1
        } )
          return sorted
      }
      case "highLow":{
        const sorted = arr.sort( function(a, b) {
          return a.ProductPrice > b.ProductPrice? -1:1
        } )
          return sorted
      }
      case "newOld":{
        const sorted = arr.sort( function(a, b) {
          return a.date > b.date? -1:1
        } )
          return sorted
      }
      case "oldNew":{
        const sorted = arr.sort( function(a, b) {
          return a.date > b.date? 1:-1
        } )
          return sorted
      }
      default: {
        return arr.sort()
      }
     
    }}

      
  
  
  
  
  