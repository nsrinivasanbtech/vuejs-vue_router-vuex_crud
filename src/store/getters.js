export default {
  techCount: (state) => {
    return state.web.length + state.java.length + state.db.length
  },
  getallWeb: (state) => {
    console.log(state)
    return state.techs.filter((data) => {
      return data.tech === 'web'
    })
  }
}
