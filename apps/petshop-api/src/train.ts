/** TASK-ZU:

Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
MASALAN: sumOfUnique([1,2,3,2]) return 4 */

function sumOfUnique(nums: number[]): number {
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		const current = nums[i];

		const isUnique = nums.indexOf(current) === nums.lastIndexOf(current);

		if (isUnique) {
			sum += current;
		}
	}

	return sum;
}

console.log(sumOfUnique([1, 2, 3, 2])); // 4 (1 + 3)

/** TASK-ZT:

Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
MASALAN: firstUniqueCharIndex(“stamp”) return 0 **/

// function firstUniqueCharIndex(s: string): number {
// 	for (let i = 0; i < s.length; i++) {
// 		const currentChar = s[i];

// 		if (s.indexOf(currentChar) === s.lastIndexOf(currentChar)) {
// 			return i;
// 		}
// 	}

// 	return -1;
// }

// console.log(firstUniqueCharIndex('stamp')); // 0

/** TASK-ZS:

Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4 **/

// function singleNumber(nums: number[]): number {
// 	return nums.find((num) => nums.indexOf(num) === nums.lastIndexOf(num))!;
// }

// console.log(singleNumber([4, 2, 1, 2, 1])); // 4
/** TASK-ZR:

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6} **/

// function countNumberAndLetters(input: string): { number: number; letter: number } {
// 	let numberCount = 0;
// 	let letterCount = 0;

// 	for (const char of input) {
// 		if (/[0-9]/.test(char)) {
// 			numberCount++;
// 		} else if (/[a-zA-Z]/.test(char)) {
// 			letterCount++;
// 		}
// 	}

// 	return { number: numberCount, letter: letterCount };
// }

// console.log(countNumberAndLetters('string152%\u00a5')); // { number: 3, letter: 6 }

/**TASK-ZQ:

Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4] */

// function findDuplicates(arr: number[]): number[] {
// 	const countMap: { [key: number]: number } = {};
// 	const duplicates: number[] = [];

// 	for (const num of arr) {
// 		countMap[num] = (countMap[num] || 0) + 1;
// 	}

// 	for (const key in countMap) {
// 		if (countMap[key] > 1) {
// 			duplicates.push(Number(key));
// 		}
// 	}

// 	return duplicates;
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); // Output: [3, 4]

/** TASK-ZP:

Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6} */

// function countNumberAndLetters(input: string): { number: number; letter: number } {
// 	let numberCount = 0;
// 	let letterCount = 0;

// 	for (let i = 0; i < input.length; i++) {
// 		const char = input[i];

// 		if (char >= '0' && char <= '9') {
// 			numberCount++;
// 		} else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
// 			letterCount++;
// 		}
// 	}

// 	return { number: numberCount, letter: letterCount };
// }

// const result = countNumberAndLetters('string152%¥');
// console.log(result); // { number: 3, letter: 6 }

/** TASK-ZO:

Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true */

// function areParenthesesBalanced(input: string): boolean {
// 	let balance = 0;

// 	for (let i = 0; i < input.length; i++) {
// 		const char = input[i];
// 		if (char === '(') {
// 			balance++;
// 		} else if (char === ')') {
// 			balance--;
// 		}

// 		if (balance < 0) {
// 			return false;
// 		}
// 	}

// 	return balance === 0;
// }

// console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda')); // true

/** TASK-ZN:

Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [ 4, 5, 6, 1, 2, 3 ] **/
// function rotateArray<T>(arr: T[], index: number): T[] {
// 	return index > 0 && index < arr.length ? [...arr.slice(-index), ...arr.slice(0, -index)] : arr;
// }

// const result = rotateArray([1, 2, 3, 4, 5, 6], 3);
// console.log(result); // [ 4, 5, 6, 1, 2, 3 ]

/** TASK ZM:

Shunday function yozing, va bu function parametr
sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
raqamlarni orqasiga o'girib qaytarsin

MASALAN: reverseInteger(123456789); return 987654321;

Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
o'girib (reverse) qilib qaytarmoqda. */

// function reverseInteger(num: number): number {
// 	const reversed = parseInt(num.toString().split('').reverse().join(''), 10);

// 	return reversed;
// }

// console.log(reverseInteger(123456789)); // 987654321

/** TASK-ZL:

Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab” **/

// function stringToKebab(str: string): string {
// 	let lowerCaseStr = str.toLowerCase();
// 	let kebabStr = lowerCaseStr.replace(/\s+/g, '-');
// 	return kebabStr;
// }

// console.log(stringToKebab('I love Kebab')); // "i-love-kebab"

/** TASK-ZK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers() **/

// function printNumbers(): void {
// 	let num = 1;
// 	const interval = setInterval(() => {
// 		console.log(num);
// 		if (num === 5) {
// 			clearInterval(interval);
// 		}
// 		num++;
// 	}, 1000);
// }

// printNumbers();
