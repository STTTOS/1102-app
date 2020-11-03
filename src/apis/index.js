
const deleteData = (id) => {
    const randomNum = Math.floor(Math.random() * 10);
    if(randomNum < 5) {
        return true;
    }else {
        return false;
    }
}


export default {
    deleteData,
}