module.exports = function check(str, bracketsConfig) {
  // your solution
  let result;
    let bracketsList = {};
    bracketsConfig.forEach(e => {
        bracketsList[e[0]] = e[1];
    })

    function deletePoint(x, y, arr) {
        let arrCopyStart = arr.slice(0, x);
        let arrCopyEnd = arr.slice(y + 1, arr.length);
        arrCopyEnd.forEach(e => {
            arrCopyStart.push(e);
        })
        return arrCopyStart;
    }

    function searchPoint() {
        let control = false;
        let index = 0;
        if(arrayFromStr.length<2){
            point = null;
            control = true;
        }
        if (index === arrayFromStr.length) {
            control = true;
        }
        while (!control) {
            if(index === arrayFromStr.length - 1){
                point = null;
                break;
            }
            if (bracketsList[arrayFromStr[index]] === arrayFromStr[index + 1]) {
                point = [index, index + 1];
                control = true;
            }
            index++;
        }
    }

    let arrayFromStr = [...str];
    let point;

    function validate() {
        log('do...');
        searchPoint();
        if (point === null) {
            if(arrayFromStr.length === 0){
                result = true;
                return ;
            }else {
                result = false;
                return ;
            }
        }
        arrayFromStr = deletePoint(point[0], point[1], arrayFromStr);
        log(arrayFromStr);
        point = null;
        return validate();
    }

    validate();

    return result;
}
