
const storage_results = "winnerResults";

export const useStore = () => {
    
    const setResult =(winner)=> {
        const users = getResult();
        users.push(winner);
        localStorage.setItem(storage_results, JSON.stringify(users));
    }

    const getResult =()=> {
        return JSON.parse(localStorage.getItem(storage_results)) || [];
    }

    const resetList =()=> {
        localStorage.removeItem(storage_results);
    }

    return {setResult, getResult, resetList}
}