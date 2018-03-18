

var quoteBoxQuote = document.getElementById("js-quote-box__quote");
var tweetButton = document.getElementById("js-quote-box__tweet-me");

var britishRomanticsQuotes = [
    '"A cheerful life is what the Muses love, A soaring spirit is their prime delight." –William Wordsworth',
    '"Come forth into the light of things, let nature be your teacher." -William Wordsworth',
    '"Faith is a passionate intuition." -William Wordsworth',
    '“Fill your paper with the breathings of your heart." -William Wordsworth', 
    '"Life is divided into three terms – that which was, which is, and which will be. Let us learn from the past to profit by the present, and from the present to live better in the future." -William Wordsworth',
    '“Nature never did betray the heart that loved her." -William Wordsworth',
    '"Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquility." -William Wordsworth',
    '"That though the radiance which was once so bright be now forever taken from my sight. Though nothing can bring back the hour of splendor in the grass, glory in the flower. We will grieve not, rather find strength in what remains behind."',
    '"To begin, begin." -William Wordsworth',
    '"Beauty is truth, truth beauty,’ – that is all ye know on earth, and all ye need to know." -John Keats',
    '"He ne’er is crowned with immortality Who fears to follow where airy voices lead." -John Keats',
    '"I am certain of nothing but the holiness of the heart’s affections, and the truth of imagination." -John Keats',
    '"It appears to me that almost any man may like the spider spin from his own inwards his own airy citadel." -John Keats',
    '"Poetry should surprise by a fine excess and not by singularity, it should strike the reader as a wording of his own highest thoughts, and appear almost a remembrance."',
    '"Praise or blame has but a momentary effect on the man whose love of beauty in the abstract makes him a severe critic on his own works.”',
    '"You speak of Lord Byron and me; there is this great difference between us. He describes what he sees I describe what I imagine. Mine is the hardest task." -John Keats',
    '"A truth that’s told with bad intent beats all the lies you can invent." -William Blake',
    '"Active Evil is better than Passive Good." -William Blake',
    '"As a man is, so he sees. As the eye is formed, such are its powers." -William Blake',
    '"Do what you will, this world’s a fiction and is made up of contradiction." -William Blake',
    '"Energy is an eternal delight, and he who desires, but acts not, breeds pestilence." -William Blake',
    '"For everything that lives is holy, life delights in life." -William Blake',
    '"Great things are done when men and mountains meet." -William Blake',
    '"I must create a system or be enslaved by another mans; I will not reason and compare: my business is to create." -William Blake',
    '"If the doors of perception were cleansed everything would appear to man as it is, infinite." -William Blake',
    '"If a thing loves, it is infinite." -William Blake',
    '"Imagination is the real and eternal world of which this vegetable universe is but a faint shadow." -William Blake',
    '"In seed time learn, in harvest teach, in winter enjoy." -William Blake',
    '"The difference between a bad artist and a good one is: the bad artist seems to copy a great deal; the good one really does." -William Blake',
    '"The soul of sweet delight, can never be defiled." -William Blake',
    '"The tree which moves some to tears of joy is in the eyes of others only a green thing that stands in the way. Some see nature all ridicule and deformity… and some scarce see nature at all. But to the eyes of the man of imagination, nature is imagination itself." -William Blake',
    '"Those who restrain their desires, do so because theirs is weak enough to be restrained." -William Blake',
    '"To see a world in a grain of sand and heaven in a wild flower Hold infinity in the palms of your hand and eternity in an hour." -William Blake',
    '"What is now proved was once only imagined." -William Blake',
    '"If I could always read, I should never feel the want of company." -Lord Byron',
    '"If I don’t write to empty my mind, I go mad." -Lord Byron',
    '"In solitude, where we are least alone." -Lord Byron',
    '"The ‘good old times’ – all times when old are good." -Lord Byron',
    '"The great art of life is sensation, to feel that we exist, even in pain." -Lord Byron',
    '"Truth is always strange, stranger than fiction." -Lord Byron',
    '"To withdraw myself from myself has ever been my sole, my entire, my sincere motive in scribbling at all." -Lord Byron',
    '"A poet is a nightingale, who sits in darkness and sings to cheer its own solitude with sweet sounds." -Percy Shelley',
    '"Death is the veil which those who live call life; They sleep, and it is lifted." -Percy Shelley',
    '"Poetry is a mirror which makes beautiful that which is distorted." -Percy Shelley',
    '"Poetry lifts the veil from the hidden beauty of the world, and makes familiar objects be as if they were not familiar." -Percy Shelley',
    '"The pleasure that is in sorrow is sweeter than the pleasure of pleasure itself." -Percy Shelley',
    '"The soul’s joy lies in doing." -Percy Shelley'];
var randomIndex = Math.floor(Math.random() * (britishRomanticsQuotes.length));
var currentQuote = '"Come forth into the light of things, let nature be your teacher." -William Wordsworth';

function generateQuote() {
    randomIndex = Math.floor(Math.random() * (britishRomanticsQuotes.length));
    currentQuote = britishRomanticsQuotes[randomIndex];
    quoteBoxQuote.innerHTML = currentQuote;
}

function tweetQuote() {
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + encodeURI(currentQuote);
}

