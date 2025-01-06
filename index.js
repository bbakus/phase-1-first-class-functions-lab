// Code your solution in this file!


const returnFirstTwoDrivers = function(){
        const firstTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
            return firstTwoDrivers.slice(0,2)
        
}

const returnLastTwoDrivers = function(){
    const firstTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
        return firstTwoDrivers.slice(2,4)
    

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare){
        return integer * fare
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(arrayOfDrivers, whichDrivers){
        return whichDrivers(arrayOfDrivers)
}

    selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers)
    selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers)
