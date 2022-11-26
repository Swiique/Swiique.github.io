async function calc () {

    while(true){

        const bday = new Date('7 February 2007 013:23:01 GMT');
        const ageMilliseconds = Date.now() - bday.getTime();

        const MILLISECOND = 1;
        const SECOND = MILLISECOND * 1000;
        const MINUTE = SECOND * 60;
        const HOUR = MINUTE * 60;
        const DAY = HOUR * 24;
        const YEAR = DAY * 365;

        const age = ageMilliseconds / YEAR;  
        document.getElementById("age").textContent = "" + age
    
        await new Promise(r => setTimeout(r, 1000));

    }
}

calc()