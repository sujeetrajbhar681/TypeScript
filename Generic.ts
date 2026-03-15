function meth1<T>(a:T): T {   //<T> = > Placeholder
    return a;
}

console.log(meth1<string>("Tom"));
console.log(meth1<number>(1));