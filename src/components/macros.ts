
interface Condition{
    name: string;
    flag:boolean;
}

export const Conditions:Condition[] = 
[
    {
        name:"Include Uppercase Letters",
        flag:false,
    },

    {
        name:"Include Lowercase Letters",
        flag:false,
    },
    {
        name:"Include Numbers",
        flag:false,
    },
    {
        name:"Include Symbols",
        flag:false,
    },
];

export const numbersCase = '0123456789'
export const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
export const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"









