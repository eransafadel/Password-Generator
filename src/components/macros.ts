
interface Condition{
    name: string;
    title:string;
    flag:boolean;
}

export const Conditions:Condition[] = 
[
    {
        name:"Include Uppercase Letters",
        title:"uppercase",
        flag:false,
    },

    {
        name:"Include Lowercase Letters",
        title:"lowercase",
        flag:false,
    },
    {
        name:"Include Numbers",
        title:"numbers",
        flag:false,
    },
    {
        name:"Include Symbols",
        title:"symbols",
        flag:false,
    },
];

export const numbersCase = '0123456789'
export const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
export const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"









