const useHashTags = (hashTagString) => {
    const hashTags = hashTagString.split(" ")
    hashTags.forEach((tag,index,array) => {
        array[index] = `#${tag} `
    })
    return hashTags;
};

export default useHashTags;