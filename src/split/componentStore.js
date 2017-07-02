const ComponentStore = () => {

  let components = {}

  const add = (name, component) => {
    components[name] = component
  }

  const get = name => components[name] 

  return {
    add,
    get
  }
}

export default ComponentStore