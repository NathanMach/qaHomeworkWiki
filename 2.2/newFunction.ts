export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true';
    } else if() {
        return '';
    }else if (){
        return '';
    }else {
        return '';
    };
};

/* 
EN: Add your own function starting on line 20 
!Write a function that returns a movie when the user inputs movieOne - movieFive
!The movies are up to you use the 'writeIfElseStatment' example from class for help 
!Add expects to the test checking to make sure you are getting back the correct movie.
*/

export function blockBuster(movie: string): string {
    if (movie == "movieOne") {
        return "Pacific Rim"; 
    } else if (movie == "movieTwo") {
        return "Shrek";
    } else if (movie == "movieThree") {
        return "Super Troopers"; 
    } else if (movie == "movieFour") {
        return "Deadpool"; 
    } else if (movie == "movieFive") {
        return "Mandolorian"; 
    } else {
        return `I'm sorry we do not carry ${movie}`; 
    }
};