export class OptionsPassword {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  
  
  
    constructor(
      uppercase: boolean,
      lowercase: boolean,
      numbers: boolean,
      symbols: boolean
    ) {
      this.uppercase = uppercase;
      this.lowercase = lowercase;
      this.numbers = numbers;
      this.symbols = symbols;
    }
  }