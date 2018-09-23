class Section3{

    //Question 1
    removeDuplicates(head){
        var current = head
        while (current && current.next) {
            if (current.data == current.next.data) {
                current.next = current.next.next
            }
            if (current.data != current.next.data) {
                current = current.next                
            }
        }
    }

    //Question 2
    mergeSortedList(head1,head2){
        var current = head1
        if (current.data > head2.data) {
            var p = head2
            while (p.next) {
                p = p.next
            }
            p.next = head1
            return head2
        }
        while (current && head2) {
            if (current.next == null && current.data < head2.data) {
                current.next = head2
                break
            }
            if (current.data <= head2.data && current.next.data >= head2.data) {
                var node = head2
                head2 = head2.next
                node.next = current.next
                current.next = node
                head2 = head2.next
                continue
            }
            if (current.next.data < head2.data) {
                current = current.next
            }
        }
        return head1
    }

    rotateByOne(head){
        var current = head
        while (current.next.next) {
            current = current.next
        }
        current.next = head
        head = current.next
        current.next = null
    }

    //Question 3
    rotateList(head,times){// Can Be Optimized 
        if (head.next == null) {
            return
        }
        for (let index = 0; index < times; index++) {
            this.rotateByOne(head)
        }
    }

    //Question 4
    partition(head,x){
        var current = head
        var prev = null
        var pivot = null
        while (current) {
            if (current.data >= x) {
                pivot = current
                break
            }
            prev = current
            current = current.next
        }
        if (pivot == null) {
            return // item not found
        }
        if (prev == null) {
            while(current){
                if (current.data < x) {
                    prev.next = current.next
                    current.next = head
                    head.current
                }
                prev = current
                current = current.next
            }
        }else{
            var prev2 = null
            while(current){
                if (current.data < x) {
                    prev2.next = current.next
                    prev.next = current
                    current.next = pivot
                }
                prev2 = current
                current = current.next
            }
        }
    }

    //Question 5
    groupOddsAndEvens(head){
        var current = head
        var prev = current
        while(current){
            if (current.next && current.next.next) {
                current = current.next.next
            }else{
                break
            }
            var d = prev.next
            prev.next = current.next
            current.next = d
            prev = current
            current = current.next
        }
    }

    //Question 6
    findIntersection(head1,head2){
        var current1 = head1
        var current2 = head2
        var count1 = 0
        var count2 = 0
        while(current1){
            count1++
            current1 = current1.next
        }
        while(current2){
            count2++
            current2 = current2.next
        }
        current1 = head1
        current2 = head2
        if (count1 >= count2) {
            var i = count1-count2
            while(i){
                count2 = count2.next
            }
        }else{
            var i = count2-count1
            while(i){
                count1 = count1.next
            } 
        }

        while (current1 && current2) {
            if (current1.data == current2.data) {
                return current1
            }
            current1 = current1.next
            current2 = current2.next
        }
        return null
    }

    //Question 7
    moveZero(head){
        var current = head
        var prev = null
        if (current.data == 0 && current.next) {
            var d = current.next
            current.next = d.next
            d.next = current
            head = d
            prev = current
            current = current.next
        }else{
            prev = current
            current = current.next
        }
        while(current && current.next){
            if (current.data == 0) {
                prev.next = current.next
                current.next = current.next.next
                prev.next.next = current
            }
            prev = current
            current = current.next
        }
    }

    //Question 8
    findTheElementsOfSum(array,k){
        for (let i = 0; i < array.length-1; i++) {
            const x = array[i];
            if (x > k) {
                break
            }
            for (let z = i+1; z < array.length; z++) {
                const y = array[z];
                if (y > k) {
                    break
                }
                if (x+y == k) {
                    return [i,z]
                }
                if (x+y > k) {
                    break
                }
            }
        }
        return null
    }

    //Question 9
    replaceZero(array){
        var zeroIndex = []
        for (let i = 0; i < array.length; i++) {
            const horzArray = array[i];
            for (let y = 0; y < horzArray.length; y++) {
                const element = horzArray[y];
                if (element == 0) {
                   zeroIndex.push([i,y]) 
                }
            }
        }

        for (let index = 0; index < zeroIndex.length; index++) {
            const m = array[index][0];
            const n = array[index][1];
            for (let r = 0; r < array[n].length; r++) {
                array[m][r] = 0
            }
            for (let r = 0; r < array[m].length; r++) {
                array[r][n] = 0
            }
        }
    }

}

class Section2Chapter1{

    //Question 1
    isUnique(str){
        var arr = str.toArray()
        arr.sort()
        for (let index = 0; index < arr.length-1; index++) {
            if (arr[i] == arr[i+1]) {
                return false
            }
        }
        return true
    }

    //Question 2
    reverseCString(arr){
        var newArr = new Array(arr)
        var i = 0
        for (let index = arr.length-1; index > 0 ; index--) {
            newArr[i] = arr[index];
            i++
        }
        return newArr
    }

    //Question 3
    removeDuplicates(str){

    }

    //Question 4
    isAnagram(str1,str2){
        if (str1.length != str2.length) {
            return false
        }
        var i = str2.length
        for (let index = 0; index < str1.length; index++) {
            if (str1[index] != str2[i]) {
                return false
            }
            i--
        }
        return true
    }

    //Question 5
    replaceSpaces(str){
        for (let index = 0; index < str.length; index++) {
            const element = str[index];
            if (element == ' ') {
                str[index] = '%20'
            }
        }
    }
    
    //Question 6
    rotateImage(arr){
        var rotated = new Array(arr)
        var index = arr.length
        for (let x = 0; x < array.length; x++) {
            const element = array[x];
            for (let y = 0; y < element.length; y++) {
                rotated[y][index] = element[y];
            }
            index--
        }
        return rotated
    }

    //Question 7
    //Same As Question 7 from the previous Section
    
    //Question 8
    isRotation(str1,str2){
        str1 = str1.sort()
        str2 = str2.sort()
        return isSubString(str1,str2)
    }
}

class Section2Chapter2{

    //Question 1
}