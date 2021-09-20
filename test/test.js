function transform(arr) {
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--discard-next') {
        result.push(null);
        i++;
        continue;
      }
      if (arr[i] == '--double-next') {
        if(arr[i + 1]) {
          result.push(arr[i + 1]);
          result.push(arr[i + 1]);
          i++;          
        }
        continue;
      }
      if (arr[i] == '--discard-prev') {
        if (result.length > 0) {
          result.pop();          
        }
        continue;
      }
      if (arr[i] == '--double-prev') {
        if ((result.length > 0) && (result[result.length - 1] != null)) {
          result.push(result[result.length - 1]);       
        }
        continue;
      }
      result.push(arr[i]);    
    }

    let result2 = [];
    for (let el of result) {
        if (el != null) result2.push(el);
    }
    return result2;
  }

  console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));