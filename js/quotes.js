//----------- FANTASTICAL QUOTE MACHINE JS -------------


// ------ Create arrays for sentence fragments -------
var beginning = ["You shouldn't judge", "Absence makes", "Don’t count", "Give someone", "Don’t look", "Beauty is in", "Necessity is", "A penny saved is", "Don’t make", "Birds of", "Failure is", "You can’t have", "If life gives", "Don’t throw", "You can’t squeeze", "Don’t eat", "Don’t put", "If you can’t take", "There is"];
var middle = ["a book", "the heart", "your chicks", "an inch", "a gift horse", "the eye", "the mother", "a penny", "a mountain", "a feather", "the stepping stone", "your cake", "you lemons", "the baby", "any blood", "the goose", "the cart", "the heat", "no time"];
var end = ["by it's cover", "grow fonder", "before they hatch", "and they'll take a yard", "in the mouth", "of the beholder", "of invention", "earned", "out of a molehill", "will flock together", "for success", "and eat it too", "make lemonade", "out with the bathwater", "from a stone", "that lays golden eggs", "before the horse", "get out of the kitchen", "like the present"];


// ------ Set Element Variables -------
var elLine1 = document.getElementById("box1");
var elLine2 = document.getElementById("box2");
var elLine3 = document.getElementById("box3");


// ------ When click button, generate and place fragments -------
document.getElementById("button").addEventListener("click", function(){
	elLine1.textContent = beginning[Math.floor(Math.random() * beginning.length)];
	elLine2.textContent = middle[Math.floor(Math.random() * beginning.length)];
	elLine3.textContent = end[Math.floor(Math.random() * beginning.length)];
});
