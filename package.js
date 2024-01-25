let sms1 = 'посылка находится в ячейке код для получения A001DFX0';
let sms2 = 'посылка находится в ячейке код для получения A002DFX0';
let smsCode = 0;

function getSmsCode (sms) {
    smsCode = sms.substring(45,55);
};
getSmsCode(sms1);
console.log(smsCode);

let actualBalance = 500; //состояние счёта юзера
let packagePrice = 100; //стоимость посылки

let packageID = "1432HGF"; // номер посылки, ищем в пачкомате 
let packageCode = "A001DFX0"; //код посылки в БД, служит ключём к ячейке

let storagePlace = [null, null, null, "1432HGF" , null] //это наш пачкомат

function takePackage (smsCode) { // у нас есть смс, мы хотим забрать посылку
    if ( smsCode === packageCode && actualBalance >= packagePrice  ) {
                
        let storageNumber = 0;
        function getStorageNumber (packageID,storagePlace) { //узнаём номер ячейки, юзер об этом не подозревает
            for ( i=0; storagePlace.length >= i; i++) {
                if (storagePlace[i]==packageID) storageNumber = ++i;
            }
        }

        actualBalance = actualBalance - packagePrice; //снимаем денюшку 
        getStorageNumber(packageID,storagePlace);        
        console.log( `Заберите посылку ${packageID} из ячейки №${storageNumber}. Ваш счет составляет: ${actualBalance} ед.`)
    } 
}

takePackage(smsCode);