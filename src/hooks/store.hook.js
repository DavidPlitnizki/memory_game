
const storage_results = "winnerResults";

export const useStore = () => {
    
    const setResult =(winner)=> {
        const users = storeTen();
        users.push(winner);
        localStorage.setItem(storage_results, JSON.stringify(users));
    }

    const getResult =()=> {
        return JSON.parse(localStorage.getItem(storage_results)) || [];
    }

    const resetList =()=> {
        localStorage.removeItem(storage_results);
    }

    const storeTen =()=> {
       const arr_item = getResult();
       if(arr_item.length > 9) {
           arr_item.shift();
       }
       return arr_item;
    }

    return {setResult, getResult, resetList}
}