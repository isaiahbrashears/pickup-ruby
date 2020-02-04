import { extendObservable } from 'mobx';

class BahCalculatorStore {
  constructor(railsProps) {
    extendObservable(this, {
      mhaBAHWo: JSON.parse(railsProps.mhaBahWoJson),
      mhaBAHW: JSON.parse(railsProps.mhaBahWJson),
      zipcodeMHA: JSON.parse(railsProps.zipcodeMha),
      zipcode: '',
      rank: 0,
      formSubmitted: false,
      get findMHA(){
        if(this.zipcode != ''){
          return this.zipcodeMHA[this.zipcode]
        } else {
          return ''
        }
      },
      get findBAHWo(){
        if(this.formSubmitted){
          if(this.mhaBAHWo[this.findMHA] != null){
            return this.mhaBAHWo[this.findMHA][this.rank]
          }else {
            return 'Zip Not Found'
          }
        } else {
          return ''
        }
      },
      get findBAHW(){
        if(this.formSubmitted){
          if(this.mhaBAHW[this.findMHA] != null){
            return this.mhaBAHW[this.findMHA][this.rank]
          }else {
            return 'Zip Not Found'
          }
        } else {
          return ''
        }
      }
    });
  }

  handleZipcodeChange = event => {
    if(event.target.value.length == 5 && !isNaN(event.target.value))
    this.zipcode = event.target.value;
  }

  handleRankChange = event => {
    this.rank = parseInt(event.target.value);
  }

  submitForm = () =>{
    if(this.zipcode != ''){
      this.formSubmitted = true;
    }
  }


}

export default BahCalculatorStore;
