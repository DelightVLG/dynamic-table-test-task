export const getRandomHex = () => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let n = 0; n < 6; n++) {
        result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
}

export const getShuffledArray = (arrLength: number): number[] => {
    let initialArray: number[] = [];

    for (let i = 1; i <= arrLength; i++) initialArray.push(i);

    return initialArray.sort(() => 0.5 - Math.random());
};
