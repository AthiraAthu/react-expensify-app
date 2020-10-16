console.log('utils.js is running')

// const square = (x) => x*x
// const add = (a,b) => a+b
//default export
// const subtract = (a,b) => a-b

//2nd method
export const square = (x) => x*x
export const add = (a,b) => a+b

export default (a,b) => a-b

//we can export square by using
//named exports--> we can have any num of named exports
//default exports...> 0 or 1
//it can be exported using as defauld
// export { square, add, subtract as default }