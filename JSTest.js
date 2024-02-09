// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _favColor, _course, _gender) {
    const NFT = {
        "name": _name,
        "favcolor": _favColor,
        "course": _course,
        "gender": _gender
    }
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i < NFTs.length; i++){
        console.log("\nID: \t\t" + (i+1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("\nFavColor: \t" + NFTs[i].favcolor);
        console.log("\nGender: \t" + NFTs[i].gender);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Shaan", "Blue", "C.S.E.", "Male");
mintNFT("Upendra", "Black", "M.E.", "Male");
mintNFT("Harsh", "Pink", "Civil", "Female");
mintNFT("Vikrant", "Red", "Bio", "Female");
listNFTs();
getTotalSupply();
