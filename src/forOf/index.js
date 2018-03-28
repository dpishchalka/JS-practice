export function main() {
    const range = {
        from: 1,
        to: 5,
        [Symbol.iterator]: function () {
            let current = this.from;
            let last = this.to;

            return {
                next() {
                    if (current <= last) {
                        return {
                            done: false,
                            value: current++
                        };
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    };

    for (let num of range) {
        console.log(num);
    }
}