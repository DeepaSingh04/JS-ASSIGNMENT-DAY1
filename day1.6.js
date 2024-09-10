function customSplice(arr, start, deleteCount, ...items) {
    let removed = [];
    let newArr = [];

    // Collect the items before the start index
    for (let i = 0; i < start; i++) {
        newArr.push(arr[i]);
    }

    // Collect the removed items
    for (let i = start; i < start + deleteCount; i++) {
        removed.push(arr[i]);
    }

    // Add the new items (if any)
    for (let i = 0; i < items.length; i++) {
        newArr.push(items[i]);
    }

    // Add the remaining items after the deleted section
    for (let i = start + deleteCount; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    // Copy the new array back to the original array
    arr.length = 0;
    for (let i = 0; i < newArr.length; i++) {
        arr.push(newArr[i]);
    }

    return removed; // Return the removed elements
}

function customSlice(arr, start, end = arr.length) {
    let result = [];
    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result; // Return the slice of the array
}

function customIncludes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true; // Found the element
        }
    }
    return false; // Element not found
}

function customToLowerCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32);
        } else {
            result += str[i];
        }
    }
    return result; // Return the lowercase string
}

function customToUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }
    return result; // Return the uppercase string
}

function customPush(arr, ...items) {
    for (let i = 0; i < items.length; i++) {
        arr[arr.length] = items[i]; // Add to the end
    }
    return arr.length; // Return the new length of the array
}

function customPop(arr) {
    if (arr.length === 0) return undefined;
    let lastItem = arr[arr.length - 1];
    arr.length = arr.length - 1; // Remove the last item
    return lastItem; // Return the removed item
}
