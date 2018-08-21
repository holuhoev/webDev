const posts = (state = [], action) => {
    console.log("THE POST WILL CHANGE")
    console.log(state, action)
    return state;
}

export default posts