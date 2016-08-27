class Initializable {
  init(requestObject) {  
    this.putParams(Object.keys(this),requestObject);
  }

  putParams(list,query) {
    let missing;
    missing = list.filter(function (arg) {
      return query[arg] === undefined;
    });

    let fields = [];
    fields = list.filter(function (arg) {
      return missing.indexOf(arg) == -1 ;
    });

    fields.forEach(arg=>this[arg]=query[arg])
  }

  getMissing(list,query){
    let missing;
    missing = list.filter(function (arg) {
      return query[arg] === undefined;
    });

    return missing.length ? missing : undefined;
  }
}


class Query extends Initializable{
  constructor(){
    super()
    this.a="";
    this.b="";
    
    this.init({a:"hello"})
  }  
    
  ok(){}  
}

let obj = new Query()
console.log(obj)
