import React from 'react'
import { componentStoreShape } from './propTypes'

export const loadComponent = (componentName, Loading) => { 
  
  const LoadedComponent = (_, { componentStore }) => {
      const Comp = componentStore.get(componentName)
      return Comp ? <Comp/> : <Loading/>
  }

  LoadedComponent.contextTypes = { componentStore: componentStoreShape }

  return LoadedComponent
}