import ability from './ability'

export const canNavigate = function canNavigate(to){
  return to.meta.resource ? to.matched.some(route => ability.can(route.meta.action || 'read', route.meta.resource)) : true
}
export const _ = undefined
