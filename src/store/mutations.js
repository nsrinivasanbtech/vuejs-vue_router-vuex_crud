export default {
  appendTechnology: (state, { technology, details }) => {
    state[technology].push(details)
  }
}
