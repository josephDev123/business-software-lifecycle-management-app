export function saveState(state){
    try {
        return localStorage.setItem('data', JSON.stringify(state));
    } catch (error) {
        console.log(error);
    }

}


export function loadState(){
 try {
     return localStorage.getItem('data')? JSON.parse(localStorage.getItem('data')):[];
 } catch (error) {
     
 }
}